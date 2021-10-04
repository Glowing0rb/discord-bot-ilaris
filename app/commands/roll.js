const antlr4 = require("antlr4/index.js");
const crypto = require('crypto');
const RollLexer = require("./roll/RollLexer.js").RollLexer;
const RollParser = require("./roll/RollParser.js").RollParser;
const RollVisitor = require("./roll/RollVisitor.js").RollVisitor;

const DEFAULT_NUM_DICE = 1;
const DEFAULT_NUM_ILARIS_DICE = 3;
const DEFAULT_NUM_SIDES = 20;
const DEFAULT_NUM_SHADOWRUN_SIDES = 6;

const MARKER_CRIT = " :trophy:";
const MARKER_FUMBLE = " :skull_crossbones:";
const MARKER_GLITCH = " :interrobang:";
const SUCCESS = ":white_check_mark:";
const FAIL = ":x:";

const TOO_LONG = "this is a bit too much for me!";

const LUCK_STATE = {
    DEFAULT: null,
    HIGH: "high",
    LOW: "low"
}

let playerLuck = LUCK_STATE.DEFAULT;
let gmLuck = LUCK_STATE.DEFAULT;
let luckThreshold = 0.5;

const GM = require("./gm")

class Visitor extends RollVisitor {

    visitStart(ctx) {
        return this.visit(ctx.children[0]);
    }

    visitConstant(ctx) {
        return this.visit(ctx.number());
    }

    visitNumber(ctx) {
        return {
            message: ctx.INT().getText(),
            value: parseInt(ctx.INT().getText()),
            command: ctx.INT().getText()
        };
    }

    visitBonusMalus(ctx) {
        let left = this.visit(ctx.left);
        let right = this.visit(ctx.right);

        if (ctx.op.type === RollParser.ADD) {
            return {
                message: left.message + "+" + right.message,
                value: left.value + right.value,
                command: left.command + "+" + right.command
            };
        } else {
            return {
                message: left.message + "-" + right.message,
                value: left.value - right.value,
                command: left.command + "-" + right.command
            };
        }
    }

    visitRollDice(ctx) {
        const numDice = ctx.numDice ? this.visit(ctx.numDice).value : undefined;
        const numSides = ctx.numSides ? this.visit(ctx.numSides).value : undefined;

        if (numDice > 1000 || numSides > 1000) {
            throw {
                message: TOO_LONG
            };
        }

        if (ctx.op.type === RollParser.ILARIS_DICE) {
            return rollIlaris(numDice ? numDice : DEFAULT_NUM_ILARIS_DICE, numSides ? numSides : DEFAULT_NUM_SIDES, ctx.parser.luck);
        } else if (ctx.op.type === RollParser.SHADOWRUN_DICE) {
            return rollShadowrun(numDice ? numDice : DEFAULT_NUM_DICE, numSides ? numSides : DEFAULT_NUM_SHADOWRUN_SIDES, ctx.parser.luck);
        } else if (ctx.op.type === RollParser.HITZONE_DICE) {
            return rollHitzone(numDice ? numDice : DEFAULT_NUM_DICE);
        } else {
            return rollDice(numDice ? numDice : DEFAULT_NUM_DICE, numSides ? numSides : DEFAULT_NUM_SIDES, ctx.parser.luck);
        }
    }

    visitCheck(ctx) {
        const left = this.visit(ctx.left);
        const right = this.visit(ctx.right);
        const op = ctx.op.text;

        let bSuccess;
        switch (ctx.op.type) {
            case RollParser.GT:
                bSuccess = left.value > right.value;
                break;
            case RollParser.LT:
                bSuccess = left.value < right.value;
                break;
            case RollParser.GE:
                bSuccess = left.value >= right.value;
                break;
            case RollParser.LE:
                bSuccess = left.value <= right.value;
                break;
            case RollParser.EQ:
                bSuccess = left.value === right.value;
                break;
        }

        return {
            message: left.message + op + right.message,
            value: bSuccess ? SUCCESS : FAIL,
            command: left.command + op + right.command
        };
    }

    visitSpecial(ctx) {
        const numDice = ctx.numDice ? this.visit(ctx.numDice).value : undefined;
        return rollHitzone(numDice);
    }

    visitMulticheck(ctx) {
        const numChecks = ctx.numChecks ? this.visit(ctx.numChecks).value : 1;

        if (numChecks > 10000) {
            throw {
                message: TOO_LONG
            };
        }

        const results = [];

        let check;

        for (let i = 0; i < numChecks; i++) {
            check = this.visit(ctx.op);
            results.push(check);
        }

        const numSuccesses = results.reduce((total, current) => {
            if (current.value === SUCCESS) {
                return total + 1;
            } else {
                return total;
            }
        }, 0);

        const numMisses = numChecks - numSuccesses;

        return {
            message: `[${SUCCESS}:${numSuccesses}, ${FAIL}:${numMisses}]`,
            value: `${Math.round(numSuccesses * 100.0 / numChecks)} %`,
            command: `${numChecks}(${check.command})`
        }
    };

}

function rollIlaris(numDice = 3, numSides = 20, withLuck = LUCK_STATE.DEFAULT) {
    let results = [];

    for (let i = 0; i < numDice; i++) {
        results.push(rollSingleDie(numSides, withLuck));
    }

    let result;
    if (numDice > 2) {
        result = results.sort(sortDescending)[1];
        results[1] = `**${results[1]}**`;
    } else { // if one or two ilaris dice are thrown, take the best one
        result = results[0];
        results[0] = `**${results[0]}**`;
    }

    let marker = "";
    if (numSides > 1) {
        if (result === 1) {
            marker = MARKER_FUMBLE;
        } else if (result === numSides) {
            marker = MARKER_CRIT;
        }
    }

    return {
        message: `[${results}]${marker}`,
        value: result,
        command: `${numDice}i${numSides}`
    };
}

function rollShadowrun(numDice = 1, numSides = 6, withLuck = LUCK_STATE.DEFAULT) {
    let results = [];
    let hits = 0;
    let ones = 0;

    for (let i = 0; i < numDice; i++) {
        const diceRoll = rollSingleDie(numSides, withLuck);
        if (diceRoll >= 5) {
            hits++;
            results.push(`**${diceRoll}**`);
        } else if (diceRoll === 1) {
            ones++;
            results.push(`__${diceRoll}__`);
        } else {
            results.push(`${diceRoll}`);
        }
    }

    let marker = "";
    if (ones > numDice / 2) {
        if (hits === 0) {
            marker = MARKER_FUMBLE;
        } else {
            marker = MARKER_GLITCH;
        }
    }

    return {
        message: `[${results.toString()}]${marker}`,
        value: hits,
        command: `${numDice}s${numSides}`
    };
}

function rollDice(numDice = 3, numSides = 20, withLuck = LUCK_STATE.DEFAULT) {
    let results = [];

    for (let i = 0; i < numDice; i++) {
        results.push(rollSingleDie(numSides, withLuck));
    }

    let result;
    let message;

    if (numDice > 1) {
        result = results.reduce((total, current) => {
            return total + current;
        }, 0);
        message = `[${results.join("+")}=**${result}**]`;
    } else {
        result = results[0];
        message = `[**${result}**]`;
    }

    return {
        message,
        value: result,
        command: `${numDice}d${numSides}`
    };
}

function rollHitzone(numDice = 1) {
    let results = [];

    const ZONE_HEAD = ":neutral_face: ";
    const ZONE_CHEST = ":shirt: ";
    const ZONE_ARMS = ":muscle: ";
    const ZONE_STOMACH = ":shorts: ";
    const ZONE_LEGS = ":leg: ";

    const hits = {};
    hits[ZONE_HEAD] = 0;
    hits[ZONE_CHEST] = 0;
    hits[ZONE_ARMS] = 0;
    hits[ZONE_STOMACH] = 0;
    hits[ZONE_LEGS] = 0;

    function hitZoneByValue(value) {
        if (value >= 19) {
            return ZONE_HEAD;
        } else if (value >= 15) {
            return ZONE_CHEST;
        } else if (value >= 9) {
            return ZONE_ARMS;
        } else if (value >= 7) {
            return ZONE_STOMACH;
        } else {
            return ZONE_LEGS;
        }
    }

    for (let i = 0; i < numDice; i++) {
        const value = rollSingleDie(20);
        const zone = hitZoneByValue(value);
        const result = {value, zone};
        hits[zone]++;
        results.push(result);
    }

    let message;

    const resultTexts = results.map((result) => {
        return `${result.value}`;
    });
    message = `[${resultTexts.join(",")}]`;
    let value;
    if (numDice > 1) {
        value = ZONE_HEAD + ": " + hits[ZONE_HEAD] + ", "
            + ZONE_CHEST + ": " + hits[ZONE_CHEST] + ", "
            + ZONE_ARMS + ": " + hits[ZONE_ARMS] + ", "
            + ZONE_STOMACH + ": " + hits[ZONE_STOMACH] + ", "
            + ZONE_LEGS + ": " + hits[ZONE_ARMS];
    } else {
        value = results[0].zone;
    }
    return {
        message,
        value: value,
        command: `${numDice}z`
    };
}

function rollSingleDie(numSides, withLuck = LUCK_STATE.DEFAULT) {
    let result = crypto.randomInt(1, numSides + 1);

    if (withLuck === LUCK_STATE.HIGH && result <= numSides * luckThreshold) {
        console.log("Re-roll due to high luck");
        return crypto.randomInt(1, numSides + 1);
    }
    if (withLuck === LUCK_STATE.LOW && result > numSides * luckThreshold) {
        console.log("Re-roll due to low luck");
        return crypto.randomInt(1, numSides + 1);
    }

    return result;
}

function sortDescending(a, b) {
    return b - a;
}

module.exports = {
    name: "roll",
    aliases: ["r", "/roll", "/r"],
    description: "rolls dice",
    isDefault: true,
    execute(msg, args, ignoreOnInvalidSyntax = false) {
        const oErrorListener = new antlr4.error.ErrorListener();
        let valid = true;
        //syntaxError = (recognizer, offendingSymbol, line, column, msg, e)
        oErrorListener.syntaxError = () => {
            valid = false;
        };

        const chars = new antlr4.InputStream(args);

        const lexer = new RollLexer(chars);
        lexer.removeErrorListeners();
        lexer.addErrorListener(oErrorListener);

        const tokens = new antlr4.CommonTokenStream(lexer);

        const parser = new RollParser(tokens);

        parser.removeErrorListeners();
        parser.addErrorListener(oErrorListener);
        parser.buildParseTrees = true;


        const tree = parser.start();

        if (valid) {
            try {
                const activeChannel = GM.getActiveChannel(msg.author.id);
                if (activeChannel && GM.isGM(activeChannel.id, msg.author.id)) {
                    if (!GM.isActiveGM(msg.channel.id, msg.author.id)) {
                        activeChannel.send("The Game Master is rolling dice in secret");
                    }
                    parser.luck = gmLuck;
                } else {
                    parser.luck = playerLuck;
                }
                const result = new Visitor().visit(tree);
                const reply = `${result.command} rolled to ${result.message} = **${result.value}**`;
                console.log(reply);

                msg.reply(reply,
                    {
                        split: {
                            maxLength: 2000,
                            char: ''
                        }
                    }
                );

            } catch (e) {
                if (e.message) {
                    msg.reply(e.message);
                }
                console.log(e);
            }

        } else {
            if (!ignoreOnInvalidSyntax) {
                msg.reply(`I'm not sure how I should roll "${args}"`);
            }
            console.log(`Invalid syntax "${args}"`);

        }
    },
    updateLuck(playerLuckState, gmLuckState, lckTreshold) {
        playerLuck = playerLuckState?.toLowerCase();
        gmLuck = gmLuckState?.toLowerCase();

        try {
            luckThreshold = lckTreshold ? parseFloat(lckTreshold) : 0.5;
        } catch (e) {
            console.warn("Invalid luck threshold. Defaulting to 0.5");
            luckThreshold = 0.5;
        }

        if (playerLuck?.trim() === "")
            playerLuck=LUCK_STATE.DEFAULT;
        if (gmLuck?.trim() === "")
            gmLuck=LUCK_STATE.DEFAULT;

        console.info(`Luck has turned! Player's luck is ${playerLuck ?? "default"}, GM's luck is ${gmLuck ?? "default"}. Threshold is at ${luckThreshold} `);
    }

};


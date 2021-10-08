import antlr4 from "antlr4";
import crypto from "crypto";

import RollLexer from "./roll/RollLexer.js";
import RollParser from "./roll/RollParser.js";
import RollVisitor from "./roll/RollVisitor.js";

import GM from "./gm.js";

const DEFAULT_NUM_DICE = 1;
const DEFAULT_NUM_ILARIS_DICE = 3;
const DEFAULT_NUM_SIDES = 20;
const DEFAULT_NUM_SHADOWRUN_SIDES = 6;
const DEFAULT_NUM_BLADES_SIDES = 6;
const DEFAULT_NUM_ILARIS_SIDES = 20;

const MARKER_CRIT = " :trophy:";
const MARKER_FUMBLE = " :skull_crossbones:";
const MARKER_GLITCH = " :interrobang:";
const SUCCESS = " :white_check_mark:";
const WARNING = " :warning:";
const FAIL = " :x:";

const TOO_LONG = "this is a bit too much for me!";

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
            return rollIlaris(numDice === undefined ? DEFAULT_NUM_ILARIS_DICE : numDice, DEFAULT_NUM_ILARIS_SIDES);
        } else if (ctx.op.type === RollParser.SHADOWRUN_DICE) {
            return rollShadowrun(numDice === undefined ? DEFAULT_NUM_DICE : numDice, DEFAULT_NUM_SHADOWRUN_SIDES);
        } else if (ctx.op.type === RollParser.BLADES_DICE) {
            return rollBlades(numDice === undefined ? DEFAULT_NUM_DICE : numDice, DEFAULT_NUM_BLADES_SIDES);
        } else if (ctx.op.type === RollParser.HITZONE_DICE) {
            return rollHitzone(numDice === undefined ? DEFAULT_NUM_DICE : numDice, DEFAULT_NUM_DICE);
        } else {
            return rollDice(numDice === undefined ? DEFAULT_NUM_DICE : numDice, numSides ? numSides : DEFAULT_NUM_SIDES);
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

function rollIlaris(numDice = 3) {
    const numSides = DEFAULT_NUM_ILARIS_SIDES;

    let results = [];

    for (let i = 0; i < numDice; i++) {
        results.push(rollSingleDie(numSides));
    }

    let result;
    if (numDice > 2) {
        result = results.sort(sortDescending)[1];
        results[1] = `**${results[1]}**`;
    } else if (numDice === 1) { // if one or two ilaris dice are thrown, take the best one
        result = results[0];
        results[0] = `**${results[0]}**`;
    } else {
        result = 0;
    }

    let marker = "";

    if (result === 1) {
        marker = MARKER_FUMBLE;
    } else if (result === numSides) {
        marker = MARKER_CRIT;
    }

    return {
        message: `[${results}]${marker}`,
        value: result,
        command: `${numDice}i`
    };
}

function rollShadowrun(numDice = 1) {
    const numSides = DEFAULT_NUM_SHADOWRUN_SIDES;
    let results = [];
    let hits = 0;
    let ones = 0;

    for (let i = 0; i < numDice; i++) {
        const diceRoll = rollSingleDie(numSides);
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
        command: `${numDice}s`
    };
}

function rollBlades(numDice = 1) {
    const numSides = DEFAULT_NUM_BLADES_SIDES;
    let results = [];

    let result;
    let resultIndex;
    let isCritical;
    if (numDice > 0) {
        result = 0;
        for (let i = 0; i < numDice; i++) {
            const diceRoll = rollSingleDie(numSides);
            results.push(`${diceRoll}`);
            if (diceRoll === numSides && result === numSides) { //more than one 6 was rolled
                isCritical = true;
            }
            if (diceRoll > result) {
                result = diceRoll;
                resultIndex = i;
            }
        }
    } else { // no dice, throw 2 and use the lower one
        result = 6;
        for (let i = 0; i < 2; i++) {
            const diceRoll = rollSingleDie(numSides);
            results.push(`${diceRoll}`);
            if (diceRoll <= result) {
                result = diceRoll;
                resultIndex = i;
            }
        }
    }

    results[resultIndex] = `**${result}**`

    let marker;
    switch (result) {
        case 6:
            if (isCritical) {
                marker = MARKER_CRIT;
            } else {
                marker = SUCCESS;
            }
            break;
        case 5:
        case 4:
            marker = WARNING;
            break;
        default:
            marker = FAIL;
    }

    return {
        message: `[${results.toString()}]${marker}`,
        value: result,
        command: `${numDice}b`
    };
}

function rollDice(numDice = 3, numSides = 20) {
    let results = [];

    for (let i = 0; i < numDice; i++) {
        results.push(rollSingleDie(numSides));
    }

    let result;
    let message;

    if (numDice > 1) {
        result = results.reduce((total, current) => {
            return total + current;
        }, 0);
        message = `[${results.join("+")}=**${result}**]`;
    } else if (numDice === 1) {
        result = results[0];
        message = `[**${result}**]`;
    } else {
        result = 0;
        message = `[** **]`
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
    const ZONE_NOTHING = ":no_entry_sign:";

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
            + ZONE_LEGS + ": " + hits[ZONE_LEGS];
    } else if (numDice === 1) {
        value = results[0].zone;
    } else {
        value = ZONE_NOTHING;
    }
    return {
        message,
        value: value,
        command: `${numDice}z`
    };
}

function rollSingleDie(numSides) {
    return crypto.randomInt(1, numSides + 1);
}

function sortDescending(a, b) {
    return b - a;
}

export default {
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

                const activeChannel = GM.getActiveChannel(msg.author.id);

                if (activeChannel && GM.isGM(activeChannel.id, msg.author.id,) && !GM.isActiveGM(msg.channel.id, msg.author.id)) {
                    activeChannel.send("The Game Master is rolling dice in secret");
                }


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
    }

};


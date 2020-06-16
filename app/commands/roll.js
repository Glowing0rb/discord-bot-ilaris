const antlr4 = require('antlr4/index.js');
const RollLexer = require("./roll/RollLexer.js").RollLexer;
const RollParser = require("./roll/RollParser.js").RollParser;
const RollVisitor = require("./roll/RollVisitor.js").RollVisitor;

const DEFAULT_NUM_DICE = 1;
const DEFAULT_NUM_ILARIS_DICE = 3;
const DEFAULT_NUM_SIDES = 20;

const MARKER_CRIT = " :trophy:";
const MARKER_FUMBLE  = " :skull_crossbones:";

class Visitor extends RollVisitor {

    visitStart(ctx) {
        return this.visit(ctx.roll());
    }

    visitConstant(ctx) {
        return this.visit(ctx.number());
    }

    visitNumber(ctx) {
        return {
            message: ctx.INT().getText(),
            value:  parseInt(ctx.INT().getText()),
            command: ctx.INT().getText()
        };
    }

    visitBonusMalus(ctx) {
        let left =  this.visit(ctx.left);
        let right = this.visit(ctx.right);

        if (ctx.op.type === RollParser.ADD) {
            return {
                message : left.message + "+" + right.message,
                value : left.value + right.value,
                command: left.command + "+" + right.command
            }
        } else {
            return {
                message : left.message + "-" + right.message,
                value : left.value - right.value,
                command: left.command + "-" + right.command
            }
        }
    }

    visitRollDice(ctx) {
        const numDice = ctx.numDice ? this.visit(ctx.numDice).value : undefined;
        const numSides = ctx.numSides ? this.visit(ctx.numSides).value : undefined;

        if (ctx.op.type === RollParser.ILLARIS_DICE) {
            return rollIlaris(numDice?numDice:DEFAULT_NUM_ILARIS_DICE , numSides?numSides:DEFAULT_NUM_SIDES);
        } else {
            return rollDice(numDice?numDice:DEFAULT_NUM_DICE , numSides?numSides:DEFAULT_NUM_SIDES);
        }
    }
}


function rollIlaris(numDice= 3, numSides= 20 ) {
   let results = [];

    for (let i = 0; i < numDice; i++) {
        results.push(Math.floor(Math.random() * numSides) + 1);
    }

    let result;
    if (numDice > 1) {
        result = results.sort(sortDescending)[1];
        results[1] = `**${results[1]}**`
    } else {
        result = results[0];
        results[0] = `**${results[0]}**`
    }

    let marker = "";
    if (numSides > 1) {
        if (result===1) {
            marker = MARKER_FUMBLE;
        } else if (result===numSides) {
            marker = MARKER_CRIT;
        }
    }

    return  {
        message: `[${results}]${marker}`,
        value: result,
        command: `${numDice}i${numSides}`
    }
}

function rollDice(numDice= 3, numSides= 20 ) {
    let results = [];

    for (let i = 0; i < numDice; i++) {
        results.push(Math.floor(Math.random() * numSides) + 1);
    }

    let result;
    let message;


    if (numDice > 1) {
        result = results.reduce((total, current)=> {
            return total + current;
        });
        message = `[${results.join("+")}=**${result}**]`
    } else {
        result = results[0];
        message = `[**${result}**]`
    }

    return  {
        message,
        value: result,
        command: `${numDice}d${numSides}`
    }
}

function sortDescending(a, b){
    return b - a;
}

module.exports = {
    name: "r",
    description: "rolls dice",
    execute(msg, args) {
        const chars = new antlr4.InputStream(args);
        const lexer = new RollLexer(chars);
        const tokens  = new antlr4.CommonTokenStream(lexer);
        const parser = new RollParser(tokens);
        const oErrorListener = new antlr4.error.ErrorListener();
        let valid = true;
        oErrorListener.syntaxError = (recognizer, offendingSymbol, line, column, msg, e) => {
            valid = false;
        };
        parser.addErrorListener(oErrorListener);
        parser.buildParseTrees = true;
        const tree = parser.start();

        if (valid)  {
            const result = new Visitor().visit(tree);
            msg.reply(`${result.command} rolled to ${result.message} = **${result.value}**`);
        } else {
            msg.reply(`I'm not sure how I should roll "${args}"` );
        }
    }

};


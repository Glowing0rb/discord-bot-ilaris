// Generated from C:/Users/Fabian/OneDrive/WebstormProjects/discord-bot-ilaris/grammar\Roll.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\b#\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0006\u0004",
    "\u0015\n\u0004\r\u0004\u000e\u0004\u0016\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0006\u0007\u001e\n\u0007\r\u0007\u000e",
    "\u0007\u001f\u0003\u0007\u0003\u0007\u0002\u0002\b\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u0003\u0002\u0006\u0004\u0002",
    "KKkk\u0006\u0002FFYYffyy\u0003\u00022;\u0005\u0002\u000b\f\u000f\u000f",
    "\"\"\u0002$\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0003\u000f\u0003\u0002\u0002\u0002\u0005\u0011\u0003\u0002",
    "\u0002\u0002\u0007\u0014\u0003\u0002\u0002\u0002\t\u0018\u0003\u0002",
    "\u0002\u0002\u000b\u001a\u0003\u0002\u0002\u0002\r\u001d\u0003\u0002",
    "\u0002\u0002\u000f\u0010\t\u0002\u0002\u0002\u0010\u0004\u0003\u0002",
    "\u0002\u0002\u0011\u0012\t\u0003\u0002\u0002\u0012\u0006\u0003\u0002",
    "\u0002\u0002\u0013\u0015\t\u0004\u0002\u0002\u0014\u0013\u0003\u0002",
    "\u0002\u0002\u0015\u0016\u0003\u0002\u0002\u0002\u0016\u0014\u0003\u0002",
    "\u0002\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017\b\u0003\u0002",
    "\u0002\u0002\u0018\u0019\u0007-\u0002\u0002\u0019\n\u0003\u0002\u0002",
    "\u0002\u001a\u001b\u0007/\u0002\u0002\u001b\f\u0003\u0002\u0002\u0002",
    "\u001c\u001e\t\u0005\u0002\u0002\u001d\u001c\u0003\u0002\u0002\u0002",
    "\u001e\u001f\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002",
    "\u001f \u0003\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!\"\b\u0007",
    "\u0002\u0002\"\u000e\u0003\u0002\u0002\u0002\u0005\u0002\u0016\u001f",
    "\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function RollLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

RollLexer.prototype = Object.create(antlr4.Lexer.prototype);
RollLexer.prototype.constructor = RollLexer;

Object.defineProperty(RollLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

RollLexer.EOF = antlr4.Token.EOF;
RollLexer.ILLARIS_DICE = 1;
RollLexer.DEFAULT_DICE = 2;
RollLexer.INT = 3;
RollLexer.ADD = 4;
RollLexer.SUB = 5;
RollLexer.WS = 6;

RollLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

RollLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

RollLexer.prototype.literalNames = [ null, null, null, null, "'+'", "'-'" ];

RollLexer.prototype.symbolicNames = [ null, "ILLARIS_DICE", "DEFAULT_DICE", 
                                      "INT", "ADD", "SUB", "WS" ];

RollLexer.prototype.ruleNames = [ "ILLARIS_DICE", "DEFAULT_DICE", "INT", 
                                  "ADD", "SUB", "WS" ];

RollLexer.prototype.grammarFileName = "Roll.g4";


exports.RollLexer = RollLexer;


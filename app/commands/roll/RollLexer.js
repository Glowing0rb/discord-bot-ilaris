// Generated from C:/Users/d047429/IdeaProjects/discord-bot-ilaris/grammar\Roll.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000fB\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0006\u0006\'\n\u0006\r\u0006\u000e\u0006(\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0006\t0\n\t\r\t\u000e\t1\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0002",
    "\u0002\u000f\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u0003\u0002\b\u0004\u0002UUuu\u0004\u0002KKkk\u0006\u0002FFYYffyy\u0006",
    "\u0002VV\\\\vv||\u0003\u00022;\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002",
    "C\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002",
    "\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0003\u001d\u0003\u0002\u0002",
    "\u0002\u0005\u001f\u0003\u0002\u0002\u0002\u0007!\u0003\u0002\u0002",
    "\u0002\t#\u0003\u0002\u0002\u0002\u000b&\u0003\u0002\u0002\u0002\r*",
    "\u0003\u0002\u0002\u0002\u000f,\u0003\u0002\u0002\u0002\u0011/\u0003",
    "\u0002\u0002\u0002\u00135\u0003\u0002\u0002\u0002\u00158\u0003\u0002",
    "\u0002\u0002\u0017;\u0003\u0002\u0002\u0002\u0019=\u0003\u0002\u0002",
    "\u0002\u001b?\u0003\u0002\u0002\u0002\u001d\u001e\t\u0002\u0002\u0002",
    "\u001e\u0004\u0003\u0002\u0002\u0002\u001f \t\u0003\u0002\u0002 \u0006",
    "\u0003\u0002\u0002\u0002!\"\t\u0004\u0002\u0002\"\b\u0003\u0002\u0002",
    "\u0002#$\t\u0005\u0002\u0002$\n\u0003\u0002\u0002\u0002%\'\t\u0006\u0002",
    "\u0002&%\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(&\u0003",
    "\u0002\u0002\u0002()\u0003\u0002\u0002\u0002)\f\u0003\u0002\u0002\u0002",
    "*+\u0007-\u0002\u0002+\u000e\u0003\u0002\u0002\u0002,-\u0007/\u0002",
    "\u0002-\u0010\u0003\u0002\u0002\u0002.0\t\u0007\u0002\u0002/.\u0003",
    "\u0002\u0002\u000201\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u0002",
    "12\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u000234\b\t\u0002\u0002",
    "4\u0012\u0003\u0002\u0002\u000256\u0007@\u0002\u000267\u0007?\u0002",
    "\u00027\u0014\u0003\u0002\u0002\u000289\u0007>\u0002\u00029:\u0007?",
    "\u0002\u0002:\u0016\u0003\u0002\u0002\u0002;<\u0007@\u0002\u0002<\u0018",
    "\u0003\u0002\u0002\u0002=>\u0007>\u0002\u0002>\u001a\u0003\u0002\u0002",
    "\u0002?@\u0007?\u0002\u0002@A\u0007?\u0002\u0002A\u001c\u0003\u0002",
    "\u0002\u0002\u0005\u0002(1\u0003\b\u0002\u0002"].join("");


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
RollLexer.SHADOWRUN_DICE = 1;
RollLexer.ILARIS_DICE = 2;
RollLexer.DEFAULT_DICE = 3;
RollLexer.HITZONE_DICE = 4;
RollLexer.INT = 5;
RollLexer.ADD = 6;
RollLexer.SUB = 7;
RollLexer.WS = 8;
RollLexer.GE = 9;
RollLexer.LE = 10;
RollLexer.GT = 11;
RollLexer.LT = 12;
RollLexer.EQ = 13;

RollLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

RollLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

RollLexer.prototype.literalNames = [ null, null, null, null, null, null, 
                                     "'+'", "'-'", null, "'>='", "'<='", 
                                     "'>'", "'<'", "'=='" ];

RollLexer.prototype.symbolicNames = [ null, "SHADOWRUN_DICE", "ILARIS_DICE", 
                                      "DEFAULT_DICE", "HITZONE_DICE", "INT", 
                                      "ADD", "SUB", "WS", "GE", "LE", "GT", 
                                      "LT", "EQ" ];

RollLexer.prototype.ruleNames = [ "SHADOWRUN_DICE", "ILARIS_DICE", "DEFAULT_DICE", 
                                  "HITZONE_DICE", "INT", "ADD", "SUB", "WS", 
                                  "GE", "LE", "GT", "LT", "EQ" ];

RollLexer.prototype.grammarFileName = "Roll.g4";


exports.RollLexer = RollLexer;


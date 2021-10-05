// Generated from C:/Users/Fabian/OneDrive/WebstormProjects/discord-bot-ilaris/grammar\Roll.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0012N\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0006\u0007/\n\u0007\r\u0007\u000e\u00070\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\n\u0006\n8\n\n\r\n\u000e\n9\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0002\u0002\u0012\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f",
    "\u0011!\u0012\u0003\u0002\t\u0004\u0002DDdd\u0004\u0002UUuu\u0004\u0002",
    "KKkk\u0006\u0002FFYYffyy\u0007\u0002JJ\\\\jjvv||\u0003\u00022;\u0005",
    "\u0002\u000b\f\u000f\u000f\"\"\u0002O\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002",
    "\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002",
    "\u0002\u0002!\u0003\u0002\u0002\u0002\u0003#\u0003\u0002\u0002\u0002",
    "\u0005%\u0003\u0002\u0002\u0002\u0007\'\u0003\u0002\u0002\u0002\t)\u0003",
    "\u0002\u0002\u0002\u000b+\u0003\u0002\u0002\u0002\r.\u0003\u0002\u0002",
    "\u0002\u000f2\u0003\u0002\u0002\u0002\u00114\u0003\u0002\u0002\u0002",
    "\u00137\u0003\u0002\u0002\u0002\u0015=\u0003\u0002\u0002\u0002\u0017",
    "@\u0003\u0002\u0002\u0002\u0019C\u0003\u0002\u0002\u0002\u001bE\u0003",
    "\u0002\u0002\u0002\u001dG\u0003\u0002\u0002\u0002\u001fJ\u0003\u0002",
    "\u0002\u0002!L\u0003\u0002\u0002\u0002#$\t\u0002\u0002\u0002$\u0004",
    "\u0003\u0002\u0002\u0002%&\t\u0003\u0002\u0002&\u0006\u0003\u0002\u0002",
    "\u0002\'(\t\u0004\u0002\u0002(\b\u0003\u0002\u0002\u0002)*\t\u0005\u0002",
    "\u0002*\n\u0003\u0002\u0002\u0002+,\t\u0006\u0002\u0002,\f\u0003\u0002",
    "\u0002\u0002-/\t\u0007\u0002\u0002.-\u0003\u0002\u0002\u0002/0\u0003",
    "\u0002\u0002\u00020.\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u0002",
    "1\u000e\u0003\u0002\u0002\u000223\u0007-\u0002\u00023\u0010\u0003\u0002",
    "\u0002\u000245\u0007/\u0002\u00025\u0012\u0003\u0002\u0002\u000268\t",
    "\b\u0002\u000276\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029",
    "7\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002",
    "\u0002;<\b\n\u0002\u0002<\u0014\u0003\u0002\u0002\u0002=>\u0007@\u0002",
    "\u0002>?\u0007?\u0002\u0002?\u0016\u0003\u0002\u0002\u0002@A\u0007>",
    "\u0002\u0002AB\u0007?\u0002\u0002B\u0018\u0003\u0002\u0002\u0002CD\u0007",
    "@\u0002\u0002D\u001a\u0003\u0002\u0002\u0002EF\u0007>\u0002\u0002F\u001c",
    "\u0003\u0002\u0002\u0002GH\u0007?\u0002\u0002HI\u0007?\u0002\u0002I",
    "\u001e\u0003\u0002\u0002\u0002JK\u0007*\u0002\u0002K \u0003\u0002\u0002",
    "\u0002LM\u0007+\u0002\u0002M\"\u0003\u0002\u0002\u0002\u0005\u00020",
    "9\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class RollLexer extends antlr4.Lexer {

    static grammarFileName = "Roll.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, null, null, null, null, "'+'", 
                         "'-'", null, "'>='", "'<='", "'>'", "'<'", "'=='", 
                         "'('", "')'" ];
	static symbolicNames = [ null, "BLADES_DICE", "SHADOWRUN_DICE", "ILARIS_DICE", 
                          "DEFAULT_DICE", "HITZONE_DICE", "INT", "ADD", 
                          "SUB", "WS", "GE", "LE", "GT", "LT", "EQ", "OPENING_BRACKETS", 
                          "CLOSING_BRACKETS" ];
	static ruleNames = [ "BLADES_DICE", "SHADOWRUN_DICE", "ILARIS_DICE", "DEFAULT_DICE", 
                      "HITZONE_DICE", "INT", "ADD", "SUB", "WS", "GE", "LE", 
                      "GT", "LT", "EQ", "OPENING_BRACKETS", "CLOSING_BRACKETS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

RollLexer.EOF = antlr4.Token.EOF;
RollLexer.BLADES_DICE = 1;
RollLexer.SHADOWRUN_DICE = 2;
RollLexer.ILARIS_DICE = 3;
RollLexer.DEFAULT_DICE = 4;
RollLexer.HITZONE_DICE = 5;
RollLexer.INT = 6;
RollLexer.ADD = 7;
RollLexer.SUB = 8;
RollLexer.WS = 9;
RollLexer.GE = 10;
RollLexer.LE = 11;
RollLexer.GT = 12;
RollLexer.LT = 13;
RollLexer.EQ = 14;
RollLexer.OPENING_BRACKETS = 15;
RollLexer.CLOSING_BRACKETS = 16;




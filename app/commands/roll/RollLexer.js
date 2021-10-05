// Generated from C:/Users/Fabian/OneDrive/WebstormProjects/discord-bot-ilaris/grammar\Roll.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0011J\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0006\u0006+\n\u0006",
    "\r\u0006\u000e\u0006,\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\t\u0006\t4\n\t\r\t\u000e\t5\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0002\u0002\u0011\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019",
    "\u000e\u001b\u000f\u001d\u0010\u001f\u0011\u0003\u0002\b\u0004\u0002",
    "UUuu\u0004\u0002KKkk\u0006\u0002FFYYffyy\u0007\u0002JJ\\\\jjvv||\u0003",
    "\u00022;\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002K\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0003!\u0003\u0002\u0002\u0002\u0005#\u0003\u0002",
    "\u0002\u0002\u0007%\u0003\u0002\u0002\u0002\t\'\u0003\u0002\u0002\u0002",
    "\u000b*\u0003\u0002\u0002\u0002\r.\u0003\u0002\u0002\u0002\u000f0\u0003",
    "\u0002\u0002\u0002\u00113\u0003\u0002\u0002\u0002\u00139\u0003\u0002",
    "\u0002\u0002\u0015<\u0003\u0002\u0002\u0002\u0017?\u0003\u0002\u0002",
    "\u0002\u0019A\u0003\u0002\u0002\u0002\u001bC\u0003\u0002\u0002\u0002",
    "\u001dF\u0003\u0002\u0002\u0002\u001fH\u0003\u0002\u0002\u0002!\"\t",
    "\u0002\u0002\u0002\"\u0004\u0003\u0002\u0002\u0002#$\t\u0003\u0002\u0002",
    "$\u0006\u0003\u0002\u0002\u0002%&\t\u0004\u0002\u0002&\b\u0003\u0002",
    "\u0002\u0002\'(\t\u0005\u0002\u0002(\n\u0003\u0002\u0002\u0002)+\t\u0006",
    "\u0002\u0002*)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,*\u0003",
    "\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-\f\u0003\u0002\u0002\u0002",
    "./\u0007-\u0002\u0002/\u000e\u0003\u0002\u0002\u000201\u0007/\u0002",
    "\u00021\u0010\u0003\u0002\u0002\u000224\t\u0007\u0002\u000232\u0003",
    "\u0002\u0002\u000245\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u0002",
    "56\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u000278\b\t\u0002\u0002",
    "8\u0012\u0003\u0002\u0002\u00029:\u0007@\u0002\u0002:;\u0007?\u0002",
    "\u0002;\u0014\u0003\u0002\u0002\u0002<=\u0007>\u0002\u0002=>\u0007?",
    "\u0002\u0002>\u0016\u0003\u0002\u0002\u0002?@\u0007@\u0002\u0002@\u0018",
    "\u0003\u0002\u0002\u0002AB\u0007>\u0002\u0002B\u001a\u0003\u0002\u0002",
    "\u0002CD\u0007?\u0002\u0002DE\u0007?\u0002\u0002E\u001c\u0003\u0002",
    "\u0002\u0002FG\u0007*\u0002\u0002G\u001e\u0003\u0002\u0002\u0002HI\u0007",
    "+\u0002\u0002I \u0003\u0002\u0002\u0002\u0005\u0002,5\u0003\b\u0002",
    "\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class RollLexer extends antlr4.Lexer {

    static grammarFileName = "Roll.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, null, null, null, "'+'", "'-'", 
                         null, "'>='", "'<='", "'>'", "'<'", "'=='", "'('", 
                         "')'" ];
	static symbolicNames = [ null, "SHADOWRUN_DICE", "ILARIS_DICE", "DEFAULT_DICE", 
                          "HITZONE_DICE", "INT", "ADD", "SUB", "WS", "GE", 
                          "LE", "GT", "LT", "EQ", "OPENING_BRACKETS", "CLOSING_BRACKETS" ];
	static ruleNames = [ "SHADOWRUN_DICE", "ILARIS_DICE", "DEFAULT_DICE", "HITZONE_DICE", 
                      "INT", "ADD", "SUB", "WS", "GE", "LE", "GT", "LT", 
                      "EQ", "OPENING_BRACKETS", "CLOSING_BRACKETS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

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
RollLexer.OPENING_BRACKETS = 14;
RollLexer.CLOSING_BRACKETS = 15;




// Generated from C:/Users/Fabian/OneDrive/WebstormProjects/discord-bot-ilaris/grammar\Roll.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';
import RollVisitor from './RollVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0012<\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u0013\n",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0005\u0003\u0019",
    "\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u001d\n\u0003\u0003\u0003",
    "\u0005\u0003 \n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "%\n\u0003\f\u0003\u000e\u0003(\u000b\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0005\u0005-\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0005",
    "\u00078\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0002\u0003\u0004",
    "\b\u0002\u0004\u0006\b\n\f\u0002\u0005\u0003\u0002\u0003\u0006\u0003",
    "\u0002\t\n\u0003\u0002\f\u0010\u0002>\u0002\u0012\u0003\u0002\u0002",
    "\u0002\u0004\u001f\u0003\u0002\u0002\u0002\u0006)\u0003\u0002\u0002",
    "\u0002\b,\u0003\u0002\u0002\u0002\n2\u0003\u0002\u0002\u0002\f7\u0003",
    "\u0002\u0002\u0002\u000e\u0013\u0005\n\u0006\u0002\u000f\u0013\u0005",
    "\b\u0005\u0002\u0010\u0013\u0005\u0004\u0003\u0002\u0011\u0013\u0005",
    "\f\u0007\u0002\u0012\u000e\u0003\u0002\u0002\u0002\u0012\u000f\u0003",
    "\u0002\u0002\u0002\u0012\u0010\u0003\u0002\u0002\u0002\u0012\u0011\u0003",
    "\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002\u0014\u0015\u0007",
    "\u0002\u0002\u0003\u0015\u0003\u0003\u0002\u0002\u0002\u0016\u0018\b",
    "\u0003\u0001\u0002\u0017\u0019\u0005\u0006\u0004\u0002\u0018\u0017\u0003",
    "\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u001a\u0003",
    "\u0002\u0002\u0002\u001a\u001c\t\u0002\u0002\u0002\u001b\u001d\u0005",
    "\u0006\u0004\u0002\u001c\u001b\u0003\u0002\u0002\u0002\u001c\u001d\u0003",
    "\u0002\u0002\u0002\u001d \u0003\u0002\u0002\u0002\u001e \u0005\u0006",
    "\u0004\u0002\u001f\u0016\u0003\u0002\u0002\u0002\u001f\u001e\u0003\u0002",
    "\u0002\u0002 &\u0003\u0002\u0002\u0002!\"\f\u0004\u0002\u0002\"#\t\u0003",
    "\u0002\u0002#%\u0005\u0004\u0003\u0005$!\u0003\u0002\u0002\u0002%(\u0003",
    "\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002",
    "\'\u0005\u0003\u0002\u0002\u0002(&\u0003\u0002\u0002\u0002)*\u0007\b",
    "\u0002\u0002*\u0007\u0003\u0002\u0002\u0002+-\u0005\u0006\u0004\u0002",
    ",+\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002",
    "\u0002./\u0007\u0011\u0002\u0002/0\u0005\n\u0006\u000201\u0007\u0012",
    "\u0002\u00021\t\u0003\u0002\u0002\u000223\u0005\u0004\u0003\u000234",
    "\t\u0004\u0002\u000245\u0005\u0004\u0003\u00025\u000b\u0003\u0002\u0002",
    "\u000268\u0005\u0006\u0004\u000276\u0003\u0002\u0002\u000278\u0003\u0002",
    "\u0002\u000289\u0003\u0002\u0002\u00029:\u0007\u0007\u0002\u0002:\r",
    "\u0003\u0002\u0002\u0002\t\u0012\u0018\u001c\u001f&,7"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class RollParser extends antlr4.Parser {

    static grammarFileName = "Roll.g4";
    static literalNames = [ null, null, null, null, null, null, null, "'+'", 
                            "'-'", null, "'>='", "'<='", "'>'", "'<'", "'=='", 
                            "'('", "')'" ];
    static symbolicNames = [ null, "BLADES_DICE", "SHADOWRUN_DICE", "ILARIS_DICE", 
                             "DEFAULT_DICE", "HITZONE_DICE", "INT", "ADD", 
                             "SUB", "WS", "GE", "LE", "GT", "LT", "EQ", 
                             "OPENING_BRACKETS", "CLOSING_BRACKETS" ];
    static ruleNames = [ "start", "roll", "number", "multicheck", "check", 
                         "special" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RollParser.ruleNames;
        this.literalNames = RollParser.literalNames;
        this.symbolicNames = RollParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.roll_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    roll_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RollParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 12;
	            this.check();
	            break;

	        case 2:
	            this.state = 13;
	            this.multicheck();
	            break;

	        case 3:
	            this.state = 14;
	            this.roll(0);
	            break;

	        case 4:
	            this.state = 15;
	            this.special();
	            break;

	        }
	        this.state = 18;
	        this.match(RollParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	roll(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new RollContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, RollParser.RULE_roll, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new RollDiceContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 22;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===RollParser.INT) {
	                this.state = 21;
	                localctx.numDice = this.number();
	            }

	            this.state = 24;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RollParser.BLADES_DICE) | (1 << RollParser.SHADOWRUN_DICE) | (1 << RollParser.ILARIS_DICE) | (1 << RollParser.DEFAULT_DICE))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 26;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            if(la_===1) {
	                this.state = 25;
	                localctx.numSides = this.number();

	            }
	            break;

	        case 2:
	            localctx = new ConstantContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 28;
	            this.number();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 36;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new BonusMalusContext(this, new RollContext(this, _parentctx, _parentState));
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, RollParser.RULE_roll);
	                this.state = 31;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 32;
	                localctx.op = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===RollParser.ADD || _la===RollParser.SUB)) {
	                    localctx.op = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 33;
	                localctx.right = this.roll(3); 
	            }
	            this.state = 38;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RollParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(RollParser.INT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multicheck() {
	    let localctx = new MulticheckContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RollParser.RULE_multicheck);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RollParser.INT) {
	            this.state = 41;
	            localctx.numChecks = this.number();
	        }

	        this.state = 44;
	        this.match(RollParser.OPENING_BRACKETS);
	        this.state = 45;
	        localctx.op = this.check();
	        this.state = 46;
	        this.match(RollParser.CLOSING_BRACKETS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	check() {
	    let localctx = new CheckContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RollParser.RULE_check);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        localctx.left = this.roll(0);
	        this.state = 49;
	        localctx.op = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RollParser.GE) | (1 << RollParser.LE) | (1 << RollParser.GT) | (1 << RollParser.LT) | (1 << RollParser.EQ))) !== 0))) {
	            localctx.op = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 50;
	        localctx.right = this.roll(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	special() {
	    let localctx = new SpecialContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RollParser.RULE_special);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RollParser.INT) {
	            this.state = 52;
	            localctx.numDice = this.number();
	        }

	        this.state = 55;
	        this.match(RollParser.HITZONE_DICE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

RollParser.EOF = antlr4.Token.EOF;
RollParser.BLADES_DICE = 1;
RollParser.SHADOWRUN_DICE = 2;
RollParser.ILARIS_DICE = 3;
RollParser.DEFAULT_DICE = 4;
RollParser.HITZONE_DICE = 5;
RollParser.INT = 6;
RollParser.ADD = 7;
RollParser.SUB = 8;
RollParser.WS = 9;
RollParser.GE = 10;
RollParser.LE = 11;
RollParser.GT = 12;
RollParser.LT = 13;
RollParser.EQ = 14;
RollParser.OPENING_BRACKETS = 15;
RollParser.CLOSING_BRACKETS = 16;

RollParser.RULE_start = 0;
RollParser.RULE_roll = 1;
RollParser.RULE_number = 2;
RollParser.RULE_multicheck = 3;
RollParser.RULE_check = 4;
RollParser.RULE_special = 5;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RollParser.RULE_start;
    }

	EOF() {
	    return this.getToken(RollParser.EOF, 0);
	};

	check() {
	    return this.getTypedRuleContext(CheckContext,0);
	};

	multicheck() {
	    return this.getTypedRuleContext(MulticheckContext,0);
	};

	roll() {
	    return this.getTypedRuleContext(RollContext,0);
	};

	special() {
	    return this.getTypedRuleContext(SpecialContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof RollVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RollContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RollParser.RULE_roll;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class RollDiceContext extends RollContext {

    constructor(parser, ctx) {
        super(parser);
        this.numDice = null; // NumberContext;
        this.op = null; // Token;
        this.numSides = null; // NumberContext;
        super.copyFrom(ctx);
    }

	ILARIS_DICE() {
	    return this.getToken(RollParser.ILARIS_DICE, 0);
	};

	DEFAULT_DICE() {
	    return this.getToken(RollParser.DEFAULT_DICE, 0);
	};

	SHADOWRUN_DICE() {
	    return this.getToken(RollParser.SHADOWRUN_DICE, 0);
	};

	BLADES_DICE() {
	    return this.getToken(RollParser.BLADES_DICE, 0);
	};

	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof RollVisitor ) {
	        return visitor.visitRollDice(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RollParser.RollDiceContext = RollDiceContext;

class ConstantContext extends RollContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof RollVisitor ) {
	        return visitor.visitConstant(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RollParser.ConstantContext = ConstantContext;

class BonusMalusContext extends RollContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // RollContext;
        this.op = null; // Token;
        this.right = null; // RollContext;
        super.copyFrom(ctx);
    }

	roll = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RollContext);
	    } else {
	        return this.getTypedRuleContext(RollContext,i);
	    }
	};

	ADD() {
	    return this.getToken(RollParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(RollParser.SUB, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof RollVisitor ) {
	        return visitor.visitBonusMalus(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RollParser.BonusMalusContext = BonusMalusContext;

class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RollParser.RULE_number;
    }

	INT() {
	    return this.getToken(RollParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof RollVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MulticheckContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RollParser.RULE_multicheck;
        this.numChecks = null; // NumberContext
        this.op = null; // CheckContext
    }

	OPENING_BRACKETS() {
	    return this.getToken(RollParser.OPENING_BRACKETS, 0);
	};

	CLOSING_BRACKETS() {
	    return this.getToken(RollParser.CLOSING_BRACKETS, 0);
	};

	check() {
	    return this.getTypedRuleContext(CheckContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof RollVisitor ) {
	        return visitor.visitMulticheck(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CheckContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RollParser.RULE_check;
        this.left = null; // RollContext
        this.op = null; // Token
        this.right = null; // RollContext
    }

	roll = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RollContext);
	    } else {
	        return this.getTypedRuleContext(RollContext,i);
	    }
	};

	GE() {
	    return this.getToken(RollParser.GE, 0);
	};

	LE() {
	    return this.getToken(RollParser.LE, 0);
	};

	GT() {
	    return this.getToken(RollParser.GT, 0);
	};

	LT() {
	    return this.getToken(RollParser.LT, 0);
	};

	EQ() {
	    return this.getToken(RollParser.EQ, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof RollVisitor ) {
	        return visitor.visitCheck(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SpecialContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RollParser.RULE_special;
        this.numDice = null; // NumberContext
    }

	HITZONE_DICE() {
	    return this.getToken(RollParser.HITZONE_DICE, 0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof RollVisitor ) {
	        return visitor.visitSpecial(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




RollParser.StartContext = StartContext; 
RollParser.RollContext = RollContext; 
RollParser.NumberContext = NumberContext; 
RollParser.MulticheckContext = MulticheckContext; 
RollParser.CheckContext = CheckContext; 
RollParser.SpecialContext = SpecialContext; 

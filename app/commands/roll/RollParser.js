// Generated from C:/Users/Fabian/OneDrive/WebstormProjects/discord-bot-ilaris/grammar\Roll.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RollVisitor = require('./RollVisitor').RollVisitor;

var grammarFileName = "Roll.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000e*\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0005\u0002\r\n\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0005\u0003\u0013\n",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0017\n\u0003\u0003\u0003",
    "\u0005\u0003\u001a\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007",
    "\u0003\u001f\n\u0003\f\u0003\u000e\u0003\"\u000b\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0002",
    "\u0003\u0004\u0006\u0002\u0004\u0006\b\u0002\u0005\u0003\u0002\u0003",
    "\u0005\u0003\u0002\u0007\b\u0003\u0002\n\u000e\u0002*\u0002\f\u0003",
    "\u0002\u0002\u0002\u0004\u0019\u0003\u0002\u0002\u0002\u0006#\u0003",
    "\u0002\u0002\u0002\b%\u0003\u0002\u0002\u0002\n\r\u0005\b\u0005\u0002",
    "\u000b\r\u0005\u0004\u0003\u0002\f\n\u0003\u0002\u0002\u0002\f\u000b",
    "\u0003\u0002\u0002\u0002\r\u000e\u0003\u0002\u0002\u0002\u000e\u000f",
    "\u0007\u0002\u0002\u0003\u000f\u0003\u0003\u0002\u0002\u0002\u0010\u0012",
    "\b\u0003\u0001\u0002\u0011\u0013\u0005\u0006\u0004\u0002\u0012\u0011",
    "\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002\u0013\u0014",
    "\u0003\u0002\u0002\u0002\u0014\u0016\t\u0002\u0002\u0002\u0015\u0017",
    "\u0005\u0006\u0004\u0002\u0016\u0015\u0003\u0002\u0002\u0002\u0016\u0017",
    "\u0003\u0002\u0002\u0002\u0017\u001a\u0003\u0002\u0002\u0002\u0018\u001a",
    "\u0005\u0006\u0004\u0002\u0019\u0010\u0003\u0002\u0002\u0002\u0019\u0018",
    "\u0003\u0002\u0002\u0002\u001a \u0003\u0002\u0002\u0002\u001b\u001c",
    "\f\u0004\u0002\u0002\u001c\u001d\t\u0003\u0002\u0002\u001d\u001f\u0005",
    "\u0004\u0003\u0005\u001e\u001b\u0003\u0002\u0002\u0002\u001f\"\u0003",
    "\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002",
    "\u0002!\u0005\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002#$\u0007",
    "\u0006\u0002\u0002$\u0007\u0003\u0002\u0002\u0002%&\u0005\u0004\u0003",
    "\u0002&\'\t\u0004\u0002\u0002\'(\u0005\u0004\u0003\u0002(\t\u0003\u0002",
    "\u0002\u0002\u0007\f\u0012\u0016\u0019 "].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'+'", "'-'", null, "'>='", 
                     "'<='", "'>'", "'<'", "'=='" ];

var symbolicNames = [ null, "SHADOWRUN_DICE", "ILLARIS_DICE", "DEFAULT_DICE", 
                      "INT", "ADD", "SUB", "WS", "GE", "LE", "GT", "LT", 
                      "EQ" ];

var ruleNames =  [ "start", "roll", "number", "check" ];

function RollParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RollParser.prototype = Object.create(antlr4.Parser.prototype);
RollParser.prototype.constructor = RollParser;

Object.defineProperty(RollParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RollParser.EOF = antlr4.Token.EOF;
RollParser.SHADOWRUN_DICE = 1;
RollParser.ILLARIS_DICE = 2;
RollParser.DEFAULT_DICE = 3;
RollParser.INT = 4;
RollParser.ADD = 5;
RollParser.SUB = 6;
RollParser.WS = 7;
RollParser.GE = 8;
RollParser.LE = 9;
RollParser.GT = 10;
RollParser.LT = 11;
RollParser.EQ = 12;

RollParser.RULE_start = 0;
RollParser.RULE_roll = 1;
RollParser.RULE_number = 2;
RollParser.RULE_check = 3;


function StartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RollParser.RULE_start;
    return this;
}

StartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartContext.prototype.constructor = StartContext;

StartContext.prototype.EOF = function() {
    return this.getToken(RollParser.EOF, 0);
};

StartContext.prototype.check = function() {
    return this.getTypedRuleContext(CheckContext,0);
};

StartContext.prototype.roll = function() {
    return this.getTypedRuleContext(RollContext,0);
};

StartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RollVisitor ) {
        return visitor.visitStart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RollParser.StartContext = StartContext;

RollParser.prototype.start = function() {

    var localctx = new StartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RollParser.RULE_start);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.state = 8;
            this.check();
            break;

        case 2:
            this.state = 9;
            this.roll(0);
            break;

        }
        this.state = 12;
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
};


function RollContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RollParser.RULE_roll;
    return this;
}

RollContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RollContext.prototype.constructor = RollContext;


 
RollContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function RollDiceContext(parser, ctx) {
	RollContext.call(this, parser);
    this.numDice = null; // NumberContext;
    this.op = null; // Token;
    this.numSides = null; // NumberContext;
    RollContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RollDiceContext.prototype = Object.create(RollContext.prototype);
RollDiceContext.prototype.constructor = RollDiceContext;

RollParser.RollDiceContext = RollDiceContext;

RollDiceContext.prototype.ILLARIS_DICE = function() {
    return this.getToken(RollParser.ILLARIS_DICE, 0);
};

RollDiceContext.prototype.DEFAULT_DICE = function() {
    return this.getToken(RollParser.DEFAULT_DICE, 0);
};

RollDiceContext.prototype.SHADOWRUN_DICE = function() {
    return this.getToken(RollParser.SHADOWRUN_DICE, 0);
};

RollDiceContext.prototype.number = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumberContext);
    } else {
        return this.getTypedRuleContext(NumberContext,i);
    }
};
RollDiceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RollVisitor ) {
        return visitor.visitRollDice(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ConstantContext(parser, ctx) {
	RollContext.call(this, parser);
    RollContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstantContext.prototype = Object.create(RollContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

RollParser.ConstantContext = ConstantContext;

ConstantContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};
ConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RollVisitor ) {
        return visitor.visitConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BonusMalusContext(parser, ctx) {
	RollContext.call(this, parser);
    this.left = null; // RollContext;
    this.op = null; // Token;
    this.right = null; // RollContext;
    RollContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BonusMalusContext.prototype = Object.create(RollContext.prototype);
BonusMalusContext.prototype.constructor = BonusMalusContext;

RollParser.BonusMalusContext = BonusMalusContext;

BonusMalusContext.prototype.roll = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RollContext);
    } else {
        return this.getTypedRuleContext(RollContext,i);
    }
};

BonusMalusContext.prototype.ADD = function() {
    return this.getToken(RollParser.ADD, 0);
};

BonusMalusContext.prototype.SUB = function() {
    return this.getToken(RollParser.SUB, 0);
};
BonusMalusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RollVisitor ) {
        return visitor.visitBonusMalus(this);
    } else {
        return visitor.visitChildren(this);
    }
};



RollParser.prototype.roll = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new RollContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, RollParser.RULE_roll, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            localctx = new RollDiceContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 16;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===RollParser.INT) {
                this.state = 15;
                localctx.numDice = this.number();
            }

            this.state = 18;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RollParser.SHADOWRUN_DICE) | (1 << RollParser.ILLARIS_DICE) | (1 << RollParser.DEFAULT_DICE))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 20;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
            if(la_===1) {
                this.state = 19;
                localctx.numSides = this.number();

            }
            break;

        case 2:
            localctx = new ConstantContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 22;
            this.number();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 30;
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
                this.state = 25;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 26;
                localctx.op = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(_la===RollParser.ADD || _la===RollParser.SUB)) {
                    localctx.op = this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 27;
                localctx.right = this.roll(3); 
            }
            this.state = 32;
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
};


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RollParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.INT = function() {
    return this.getToken(RollParser.INT, 0);
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RollVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RollParser.NumberContext = NumberContext;

RollParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RollParser.RULE_number);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
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
};


function CheckContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RollParser.RULE_check;
    this.left = null; // RollContext
    this.op = null; // Token
    this.right = null; // RollContext
    return this;
}

CheckContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CheckContext.prototype.constructor = CheckContext;

CheckContext.prototype.roll = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RollContext);
    } else {
        return this.getTypedRuleContext(RollContext,i);
    }
};

CheckContext.prototype.GE = function() {
    return this.getToken(RollParser.GE, 0);
};

CheckContext.prototype.LE = function() {
    return this.getToken(RollParser.LE, 0);
};

CheckContext.prototype.GT = function() {
    return this.getToken(RollParser.GT, 0);
};

CheckContext.prototype.LT = function() {
    return this.getToken(RollParser.LT, 0);
};

CheckContext.prototype.EQ = function() {
    return this.getToken(RollParser.EQ, 0);
};

CheckContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RollVisitor ) {
        return visitor.visitCheck(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RollParser.CheckContext = CheckContext;

RollParser.prototype.check = function() {

    var localctx = new CheckContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RollParser.RULE_check);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        localctx.left = this.roll(0);
        this.state = 36;
        localctx.op = this._input.LT(1);
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RollParser.GE) | (1 << RollParser.LE) | (1 << RollParser.GT) | (1 << RollParser.LT) | (1 << RollParser.EQ))) !== 0))) {
            localctx.op = this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 37;
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
};


RollParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.roll_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

RollParser.prototype.roll_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.RollParser = RollParser;

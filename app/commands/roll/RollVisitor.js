// Generated from C:/Users/d047429/IdeaProjects/discord-bot-ilaris/grammar\Roll.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by RollParser.

function RollVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

RollVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
RollVisitor.prototype.constructor = RollVisitor;

// Visit a parse tree produced by RollParser#start.
RollVisitor.prototype.visitStart = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RollParser#RollDice.
RollVisitor.prototype.visitRollDice = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RollParser#Constant.
RollVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RollParser#BonusMalus.
RollVisitor.prototype.visitBonusMalus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RollParser#number.
RollVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RollParser#check.
RollVisitor.prototype.visitCheck = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RollParser#special.
RollVisitor.prototype.visitSpecial = function(ctx) {
  return this.visitChildren(ctx);
};



exports.RollVisitor = RollVisitor;
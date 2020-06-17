grammar Roll;

start: (check|roll) EOF;

roll:    numDice=number? op=(ILLARIS_DICE|DEFAULT_DICE) numSides=number? #RollDice
        | left=roll op=(ADD|SUB) right=roll #BonusMalus
        | number #Constant
        ;

number: INT;

check: left=roll op=(GE | LE | GT | LT | EQ) right=roll;

ILLARIS_DICE: ('I'|'i');
DEFAULT_DICE: ('W'|'w'|'D'|'d');
INT: [0-9]+ ;
ADD: '+';
SUB: '-';
WS : [ \t\r\n]+ -> skip;

GE : '>=';
LE : '<=';
GT : '>';
LT : '<';
EQ : '==';

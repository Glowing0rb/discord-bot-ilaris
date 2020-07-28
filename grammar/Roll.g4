grammar Roll;

start: (check|multicheck|roll|special) EOF;

roll:    numDice=number? op=(ILARIS_DICE|DEFAULT_DICE|SHADOWRUN_DICE) numSides=number? #RollDice
        | left=roll op=(ADD|SUB) right=roll #BonusMalus
        | number #Constant
        ;

number: INT;

multicheck: numChecks=number? OPENING_BRACKETS op=check CLOSING_BRACKETS;

check: left=roll op=(GE | LE | GT | LT | EQ) right=roll;

special: numDice=number? HITZONE_DICE;

SHADOWRUN_DICE: ('S' | 's');
ILARIS_DICE: ('I'|'i');
DEFAULT_DICE: ('W'|'w'|'D'|'d');
HITZONE_DICE: ('Z'|'z'|'t'|'H'|'h');
INT: [0-9]+ ;
ADD: '+';
SUB: '-';
WS : [ \t\r\n]+ -> skip;

GE : '>=';
LE : '<=';
GT : '>';
LT : '<';
EQ : '==';

OPENING_BRACKETS : '(';
CLOSING_BRACKETS : ')';
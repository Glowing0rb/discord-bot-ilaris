grammar Roll;

start: roll EOF;

roll:    numDice=number? op=(ILLARIS_DICE|DEFAULT_DICE) numSides=number? #RollDice
        | left=roll op=(ADD|SUB) right=number #BonusMalus
        | number #Constant
        ;

number: INT;

ILLARIS_DICE: ('I'|'i');
DEFAULT_DICE: ('W'|'w'|'D'|'d');
INT: [0-9]+ ;
ADD: '+';
SUB: '-';
WS : [ \t\r\n]+ -> skip;

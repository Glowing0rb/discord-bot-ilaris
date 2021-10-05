# Ilaris Bot

This is a Discord dice bot for the fan-made Ilaris rule variant of the pen and paper rpg "The Dark Eye" (See https://ilarisblog.wordpress.com/).
It also supports some special rolls for other RPGs such as "Shadowrun 5" and "The Dark Eye 4.1"

![Example](images/example.png)

## Prerequisites:

1. A Discord account, and a server where you are allowed to invite bots
2. A registered discord application with a bot user (See https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)
3. The bot user must have been added to your server (See https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)
4. Node.js (at least version v14.10.0)


## Installing the bot 

1. Create a file ".env" on root of this project (next to this file)
2. In the ".env" file put the following:
    `TOKEN=YourBotTokenHere`
3. Replace YourBotTokenHere with the token of your discord bot (See https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token)
4. run `npm install` to install required dependencies
5. (optional) run `npm test` to verify the local installation

## Starting the bot

1. Run `npm start`
2. The bot should now be online on your server
3. (optional) In a text channel where the bot can read and write type the message `ping`. The bot should reply with `pong`.

## Using the bot

The bot reacts to chat messages that consist of the single letter `r` (or `roll`, `/r` or `/roll`) followed by a space and dice instructions.
E.g. `r d20` to roll a simple 20-sided die.

The bot also reacts to dice instructions without the preceding command (e.g.  just `d20`), but will not respond on invalid dice instructions in this case but stay silent instead.

### Rolls
Supported rolling instructions are:
* ndm (e.g. `r 3d20`), this will roll n m-sided dice. n can be omitted and will default to 1.
m can be omitted and will default to 20. i.e. `r d` is the same as `r 1d20`. This could be used for quickly rolling attacks. Alternative alias is nwm.
* ni (e.g. `r 3i`), this will roll n 20-sided dice, but in ilaris-style (only the second highest die counts)
n can be omitted and will default to 3.
This could be used for quickly rolling default ilaris checks.
* ns (e.g. `r 3s`), this will roll n 6-sided dice, but in shadowrun(5)-style (all dice greater than 4 count as hit).
n can be omitted and will default to 1.
* nb (e.g. `r 3b`), this will roll n 6-sided dice, but in Blades In The Dark-style (only highest die counts. 6 is success, 4-5 mixed success, anything smaller is a failure).
It is possible to specify to roll 0 dice (n=0). In this case, 2 dice will be rolled but only the lowest will be counted. n can be omitted and will default to 1.

* Additionally, fixed values can be added (e.g. `r 4i + 8`). This could be used to apply a bonus to a check.

#### Special rolls
Additional the following roll can be performed, but no bonus values can be added 
* nz (e.g. `r 3z`), this will roll n 20-sided dice and use each die for hit-zone determination according to "The Dark Eye 4.1" rules 
n can be omitted and will default to 1. Alternative aliases are nh and nt.

### Checks
You can use comparison operators (>, >=, <, <=, ==) to automatically do skills checks, against fixed values as well as other rolls.

e.g. `i + 8 >= 16` or `i + 12 >= i + 10`  

#### Multi-Checks
You can also execute checks multiple times (e.g. for large battles), by putting a check in brackets and prefixing the number of checks.

e.g. `50(i + 8 >= 16)`


## Game Master (GM) Commands

* `gm register` registers the user as GM for the current channel and sets the channel active for the gm.
* `gm activate` sets the current channel as active for the gm.
* `gm` displays the GM of the current channel

**Each channel can only have one GM, each GM can only have one active channel**

If a GM rolls dice on a channel that is not their active channel )e.g. via direct messaging or a second channel), the bot will post a notification on the active channel "The GM is rolling dice in secret". This helps to emulate the tension for the players when the GM would roll behind his screen on a real table. 

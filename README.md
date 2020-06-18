# Ilaris Bot

This is a Discord dice bot for the fan-made Ilaris rule variant of the pen and paper rpg "The Dark Eye" (See https://ilarisblog.wordpress.com/)

![Example](images/example.png)

## Prerequisites:

1. A Discord account, and a server where you are allowed to invite bots
2. A registered discord application with a bot user (See https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)
3. The bot user must have been added to your server (See https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)
4. Node.js


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
Supported rolling instructions are:
1. ndm (e.g. `r 3d20`), this will roll n m-sided dice. n can be omitted and will default to 1.
m can be omitted and will default to 20. i.e. `r d` is the same as `r 1d20`. This could be used for quickly rolling attacks.
2. nim (e.g. `r 3i20`), this will roll n m-sided dice, but in ilaris-style (only the second highest die counts)
n can be omitted and will default to 3.
m can be omitted and will default to 20. i.e. `r i` is the same as `r 3i20`. This could be used for quickly rolling default ilaris checks.

Additionally, fixed values can be added (e.g. `r 4i + 8`). This could be used to apply a bonus to a check. 


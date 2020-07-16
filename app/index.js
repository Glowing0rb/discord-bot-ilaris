require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require("./commands");

let defaultCommand;

Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
    if (botCommands[key].isDefault) {
        defaultCommand = botCommands[key].name;
    }
    if (Array.isArray(botCommands[key].aliases)) {
        for (const alias of botCommands[key].aliases) {
            bot.commands.set(alias, botCommands[key]);
        }
    }
});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", msg => {
    if (bot.user.id === msg.author.id) {
        return; //do not listen to own messages
    }

    let command = msg.content.split(/ +/).shift().toLowerCase();

    if (!bot.commands.has(command)) {
        callCommand(msg, defaultCommand, msg.content.trim(), true);
    } else {
        const args = msg.content.substring(command.length).trim();
        callCommand(msg, command, args, false);
    }

});

function callCommand(msg, command, args, callAsDefault) {
    console.info(`Calling${callAsDefault?" default ":" "}command: ${command} ${args}`);
    try {
        bot.commands.get(command).execute(msg, args, callAsDefault);
    } catch (error) {
        console.error(error);
        msg.reply('there was an error trying to execute that command!');
    }
}
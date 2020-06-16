require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require("./commands");

Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", msg => {
    const command = msg.content.split(/ +/).shift().toLowerCase();
    const args = msg.content.substring(command.length).trim();

    if (!bot.commands.has(command)) {
        return;
    }
    console.info(`Calling command: ${command}`);
    try {
        bot.commands.get(command).execute(msg, args);
    } catch (error) {
        console.error(error);
        msg.reply('there was an error trying to execute that command!');
    }
});

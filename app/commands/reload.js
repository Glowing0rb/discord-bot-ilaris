const Roll = require("./roll");
module.exports = {
    name: 'reload',
    description: 'Reads .env file and updates command settings accordingly',
    aliases: ["/reload", "rl", "/rl"],
    execute(msg) {
        let env = require("dotenv").config();
        Roll.updateLuck(env.parsed.LUCK_PLAYERS, env.parsed.LUCK_GM, env.parsed.LUCK_THRESHOLD);
        msg.reply('Reload done');
    },
};

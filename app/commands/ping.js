module.exports = {
    name: 'ping',
    description: 'pings the bot an let it respond with pong',
    execute(msg, args) {
        msg.reply('pong');
    },
};

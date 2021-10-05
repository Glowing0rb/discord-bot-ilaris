export default {
    name: 'ping',
    description: 'pings the bot an let it respond with pong',
    execute(msg, _args) {
        msg.reply('pong');
    },
};

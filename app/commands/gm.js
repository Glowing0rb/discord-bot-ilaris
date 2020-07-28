const channels = {};
const gms = {};
module.exports = {
    name: "gm",
    aliases: ["sl", "/gm", "/sl"],
    description: "game master settings for current channel",

    isActiveGM(channelId, userId) {
        return this.isGM(channelId, userId) && gms[userId] && gms[userId].activeChannelId === channelId;
    },

    isGM(channelId, userId) {
      return channels[channelId] && channels[channelId].gmid === userId;
    },

    getActiveChannel(userId) {
        const gm = gms[userId];
        if (!gm || !gm.activeChannelId) {
            return null;
        }

        const channel = channels[gm.activeChannelId];
        return channel? channel.channel : null;
    },

    execute(msg, args) {
        const channelId = msg.channel.id;
        if (!channels[channelId]) {
            channels[channelId] = {
                channel: msg.channel,
                gmid: null
            };
        }
        const channel = channels[channelId];
        const currentGMId = channel.gmid;

        switch (args.trim().toLowerCase()) {
            case "register":
                const newGMId = msg.author.id;
                const newGMUsername = msg.author.username;

                gms[newGMId] = {
                    username: newGMUsername,
                    activeChannelId: channelId
                };

                channel.gmid = newGMId;

                if (currentGMId) {
                    msg.reply(`${newGMUsername} replaces ${gms[currentGMId].username} as Game Master on this channel`);
                } else {
                    msg.reply(`${newGMUsername} is now Game Master on this channel`);
                }
                break;

            case "activate":
                if (currentGMId === msg.author.id) {
                    gms[currentGMId].activeChannelId = channelId;
                    msg.reply(`You are now active on this channel`);
                } else {
                    msg.reply(`You need to be Game Master on this channel to activate it`);
                }
                break;
            default:
                if (currentGMId) {
                    msg.reply(`${gms[currentGMId]} is Game Master on this channel`);
                } else {
                    msg.reply(`This channel has no Game Master`);
                }
                break;
        }
    }
};

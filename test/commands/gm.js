import assert from "assert";

import GM from "../../app/commands/gm.js";

const USER1 = {
    id: "u123",
    username: "User1"
}
const USER2 = {
    id: "u234",
    username: "User2"
}
const CHANNEL1 = {
    id: "c123"
};

const CHANNEL2 = {
    id: "c234"
};


describe("GM Command", () => {

    beforeEach(() => {
        GM.reset();
    });

    it("should register a GM", () => {
        assert.strictEqual(
            doGM("register", USER1, CHANNEL1),
            `${USER1.username} is now Game Master on this channel`
        );
        assert.strictEqual(
            doGM("register", USER2, CHANNEL1),
            `${USER2.username} replaces ${USER1.username} as Game Master on this channel`
        );
    });

    it("should activate a channel for a GM", () => {
        assert.strictEqual(
            doGM("activate", USER1, CHANNEL1),
            `You need to be Game Master on this channel to activate it`
        );

        assert.strictEqual(
            doGM("register", USER1, CHANNEL1),
            `${USER1.username} is now Game Master on this channel`
        );

        assert.strictEqual(
            doGM("register", USER1, CHANNEL2),
            `${USER1.username} is now Game Master on this channel`
        );

        assert.strictEqual(
            doGM("activate", USER1, CHANNEL1),
            `You are now active on this channel`
        );
    });

    it("should return the current GM", () => {
        assert.strictEqual(
            doGM("", USER1, CHANNEL1),
            `This channel has no Game Master`
        );

        assert.strictEqual(
            doGM("register", USER1, CHANNEL1),
            `${USER1.username} is now Game Master on this channel`
        );

        assert.strictEqual(
            doGM("", USER1, CHANNEL1),
            `${USER1.username} is Game Master on this channel`
        );

    });

    function doGM(args, asUser, inChannel) {
        const msg = {
            text: "",
            reply(text) {
                this.text = text;
            },
            channel: inChannel,
            author: asUser
        };

        GM.execute(msg, args);

        return msg.text;
    }
});

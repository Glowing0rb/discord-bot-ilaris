import assert from "assert";
import sinon from "sinon";
import crypto from "crypto";

import Roll from "../../app/commands/roll.js";
import GM from "../../app/commands/gm.js";

let sandbox;
const SUCCESS = " :white_check_mark:";
const FAIL = " :x:";
const WARNING = " :warning:";
const ZONE_HEAD = ":neutral_face: ";
const ZONE_CHEST = ":shirt: ";
const ZONE_ARMS = ":muscle: ";
const ZONE_STOMACH = ":shorts: ";
const ZONE_LEGS = ":leg: ";
const CRITICAL = " :trophy:";

const USER = {
    id: "u123",
    username: "User1"
}

const CHANNEL1  = {
    id: "c123"
};

const CHANNEL2  = {
    text: "",
    id: "c234",
    send(message) {
        this.text = message;
    }
};


describe("Roll Command", () => {

    before(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it("should roll a static number", () => {
        assert.strictEqual(
            doRoll("42"),
            constructExpectedAnswer("42", "42", 42)
        );
    });

    it("should add two static numbers", () => {
        assert.strictEqual(
            doRoll("42 + 13"),
            constructExpectedAnswer("42+13", "42+13", 55)
        );
    });

    it("should roll a single d20", () => {
        assert.strictEqual(
            fudgeRoll("d", [11]),
            constructExpectedAnswer("1d20", "[**11**]", 11)
        );
    });

    it("should roll add 2 1i20", () => {
        assert.strictEqual(
            fudgeRoll("1i + 1i", [7, 6]),
            constructExpectedAnswer("1i+1i", "[**7**]+[**6**]", 13)
        );
    });

    it("should roll 3d20", () => {
        assert.strictEqual(
            fudgeRoll("3d20", [3, 1, 4]),
            constructExpectedAnswer("3d20", "[3+1+4=**8**]", 8)
        );
    });

    it("should roll 3i + 9", () => {
        assert.strictEqual(
            fudgeRoll("i +9", [3, 1, 4]),
            constructExpectedAnswer("3i+9", "[4,**3**,1]+9", 12)
        );
    });

    it("should roll 1s", () => {
        assert.strictEqual(
            fudgeRoll("1s", [3]),
            constructExpectedAnswer("1s", "[3]", 0)
        );
    });

    it("should roll 5s", () => {
        assert.strictEqual(
            fudgeRoll("5s", [3, 1, 1, 5, 6]),
            constructExpectedAnswer("5s", "[3,__1__,__1__,**5**,**6**]", 2)
        );
    });

    it("should detect a glitch while rolling 5s", () => {
        assert.strictEqual(
            fudgeRoll("5s", [1, 1, 1, 5, 6]),
            constructExpectedAnswer("5s", "[__1__,__1__,__1__,**5**,**6**] :interrobang:", 2)
        );
    });

    it("should roll 1z", () => {
        assert.strictEqual(
            fudgeRoll("1z", [20]),
            constructExpectedAnswer("1z", "[20]", ZONE_HEAD)
        );
    });

    it("should roll 3z", () => {
        assert.strictEqual(
            fudgeRoll("3z", [20, 10, 17]),
            constructExpectedAnswer(
                "3z", "[20,10,17]",
                ZONE_HEAD + ": 1, " + ZONE_CHEST + ": 1, " + ZONE_ARMS + ": 1, " + ZONE_STOMACH + ": 0, " + ZONE_LEGS + ": 0"
            )
        );
    });

    it("should roll 5z", () => {
        assert.strictEqual(
            fudgeRoll("5z", [19, 15, 9, 7, 6]),
            constructExpectedAnswer(
                "5z", "[19,15,9,7,6]",
                ZONE_HEAD + ": 1, " + ZONE_CHEST + ": 1, " + ZONE_ARMS + ": 1, " + ZONE_STOMACH + ": 1, " + ZONE_LEGS + ": 1"
            )
        );
    });

    it("should roll 1b", () => {
        assert.strictEqual(
            fudgeRoll("1b", [4]),
            constructExpectedAnswer("1b", "[**4**]" + WARNING, 4)
        );
    });

    it("should roll 0b", () => {
        assert.strictEqual(
            fudgeRoll("0b", [6,1]),
            constructExpectedAnswer("0b", "[6,**1**]" + FAIL, 1)
        );
    });

    it("should roll 2b", () => {
        assert.strictEqual(
            fudgeRoll("2b", [4,6]),
            constructExpectedAnswer("2b", "[4,**6**]" + SUCCESS, 6)
        );
    });

    it("should detect critical hits when rolling with b", () => {
        assert.strictEqual(
            fudgeRoll("3b", [6,4,6]),
            constructExpectedAnswer("3b", "[**6**,4,6]" + CRITICAL, 6)
        );
    });

    it("should compare two static numbers", () => {
        assert.strictEqual(
            doRoll("42>13"),
            constructExpectedAnswer("42>13", "42>13", SUCCESS)
        );
        assert.strictEqual(
            doRoll("42<13"),
            constructExpectedAnswer("42<13", "42<13", FAIL)
        );
        assert.strictEqual(
            doRoll("42>=42"),
            constructExpectedAnswer("42>=42", "42>=42", SUCCESS)
        );
        assert.strictEqual(
            doRoll("42<=42"),
            constructExpectedAnswer("42<=42", "42<=42", SUCCESS)
        );
        assert.strictEqual(
            doRoll("42==13"),
            constructExpectedAnswer("42==13", "42==13", FAIL)
        );
    });

    it("should do a ilaris check", () => {
        assert.strictEqual(
            fudgeRoll("i+9 >= 16", [3, 1, 4]),
            constructExpectedAnswer("3i+9>=16", "[4,**3**,1]+9>=16", FAIL)
        );
        assert.strictEqual(
            fudgeRoll("i+9 >= 16", [8, 1, 9]),
            constructExpectedAnswer("3i+9>=16", "[9,**8**,1]+9>=16", SUCCESS)
        );
    });

    it("should notify active channel about GM rolls", () => {
        registerAsGMOnSecondChannel();
        doRoll("d20");
        assert.strictEqual(
           CHANNEL2.text,
           "The Game Master is rolling dice in secret"
        );
    });

    it("should do a m multi-check", () => {
        assert.strictEqual(
            fudgeRoll("3(1d20 <= 16)", [16, 17, 1]),
            constructExpectedAnswer("3(1d20<=16)", `[${SUCCESS}:2, ${FAIL}:1]`, "67 %")
        );
    });
});

function fudgeRoll(command, aFakeResults) {
    const stubRandom = sandbox.stub(crypto, "randomInt");
    for (let i = 0; i < aFakeResults.length; i++) {
        stubRandom.onCall(i).returns(aFakeResults[i]);
    }
    const result = doRoll(command);
    stubRandom.restore();
    return result;
}

function doRoll(command) {
    const msg = {
        text: "",
        reply(text) {
            this.text = text;
        },
        channel: CHANNEL1,
        author: USER
    };

    Roll.execute(msg, command);

    return msg.text;
}

function constructExpectedAnswer(command, message, value) {
    return `${command} rolled to ${message} = **${value}**`;
}

function registerAsGMOnSecondChannel() {
    const msg = {
        text: "",
        reply(text) {
            this.text = text;
        },
        channel: CHANNEL2,
        author: USER
    };

    GM.execute(msg, "register");

    return msg.text;
}
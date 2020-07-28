const assert = require("assert");
const sinon = require("sinon");
const roll = require("../../app/commands/roll");

let sandbox;
const SUCCESS = ":white_check_mark:";
const FAIL = ":x:";
const ZONE_HEAD = ":neutral_face: ";
const ZONE_CHEST = ":shirt: ";
const ZONE_ARMS = ":muscle: ";
const ZONE_STOMACH = ":shorts: ";
const ZONE_LEGS = ":leg: ";

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
            constructExpectedAnswer("1i20+1i20", "[**7**]+[**6**]", 13)
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
            constructExpectedAnswer("3i20+9", "[4,**3**,1]+9", 12)
        );
    });

    it("should roll 1s", () => {
        assert.strictEqual(
            fudgeRoll("1s", [3], 6),
            constructExpectedAnswer("1s6", "[3]", 0)
        );
    });

    it("should roll 5s", () => {
        assert.strictEqual(
            fudgeRoll("5s", [3, 1, 1, 5, 6], 6),
            constructExpectedAnswer("5s6", "[3,__1__,__1__,**5**,**6**]", 2)
        );
    });

    it("should roll 1z", () => {
        assert.strictEqual(
            fudgeRoll("1z", [20], 20),
            constructExpectedAnswer("1z", "[20]", ZONE_HEAD)
        );
    });

    it("should roll 5z", () => {
        assert.strictEqual(
            fudgeRoll("5z", [19, 15, 9, 7, 6], 20),
            constructExpectedAnswer(
                "5z", "[19,15,9,7,6]",
                ZONE_HEAD + ": 1, " + ZONE_CHEST + ": 1, " + ZONE_ARMS + ": 1, " + ZONE_STOMACH + ": 1, " + ZONE_LEGS + ": 1"
            )
        );
    });

    it("should detect a glitch while rolling 5s", () => {
        assert.strictEqual(
            fudgeRoll("5s", [1, 1, 1, 5, 6], 6),
            constructExpectedAnswer("5s6", "[__1__,__1__,__1__,**5**,**6**] :interrobang:", 2)
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
            constructExpectedAnswer("3i20+9>=16", "[4,**3**,1]+9>=16", FAIL)
        );
        assert.strictEqual(
            fudgeRoll("i+9 >= 16", [8, 1, 9]),
            constructExpectedAnswer("3i20+9>=16", "[9,**8**,1]+9>=16", SUCCESS)
        );
    });
});

function fudgeRoll(command, aFakeResults, iNumberOfSides = 20) {
    const stubRandom = sandbox.stub(Math, "random");
    for (let i = 0; i < aFakeResults.length; i++) {
        stubRandom.onCall(i).returns((
            aFakeResults[i] - 1
        ) / iNumberOfSides);
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
        }
    };

    roll.execute(msg, command);

    return msg.text;
}

function constructExpectedAnswer(command, message, value) {
    return `${command} rolled to ${message} = **${value}**`;
}

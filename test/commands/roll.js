const assert = require('assert');
const sinon = require('sinon');
const roll = require("../../app/commands/roll")

let sandbox;

describe('Roll Command', () => {

    before(() => {
        sandbox = sinon.createSandbox();
    });
    afterEach(() => {
        sandbox.restore();
    })
    it('should roll a static number', () => {
        assert.strictEqual(
            doRoll("42"),
            constructExpectedAnswer("42", "42", 42))
    });
    it('should add two static numbers', () => {
        assert.strictEqual(
            doRoll("42 + 13"),
            constructExpectedAnswer("42+13", "42+13", 55))
    });
    it('should roll a single d20', () => {
        assert.strictEqual(
            fudgeRoll("d", [11]),
            constructExpectedAnswer("1d20", "[**11**]", 11));
    });
    it('should roll 3d20', () => {
        assert.strictEqual(
            fudgeRoll("3d20", [3,1,4]),
            constructExpectedAnswer("3d20", "[3+1+4=**8**]", 8));
    });
    it('should roll 3i + 9', () => {
        assert.strictEqual(
            fudgeRoll("i +9", [3,1,4]),
            constructExpectedAnswer("3i20+9", "[4,**3**,1]+9", 12));
    });

});

function fudgeRoll(command, aFakeResults, iNumberOfSides=20) {
    const stubRandom = sandbox.stub(Math, "random");
    for (let i = 0; i < aFakeResults.length; i++) {
        stubRandom.onCall(i).returns((aFakeResults[i]-1)/ iNumberOfSides);
    }
    const result = doRoll(command);
    stubRandom.reset();
    return result;
}

function doRoll(command) {
    const msg = {
        text: "",
        reply(text) {
            this.text = text;
        }
    }

    roll.execute(msg, command);

    return msg.text;
}

function constructExpectedAnswer(command, message, value) {
    return `${command} rolled to ${message} = **${value}**`;
}
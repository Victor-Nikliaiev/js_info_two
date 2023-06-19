import { after, afterEach, before, beforeEach, describe, it } from "mocha";
import { calculator, ladder } from "./script.js";
import sinon from "sinon";
import { assert } from "chai";

describe("calculator", function () {
    describe("when 2 and 3 entered", function () {
        let stubRead;

        beforeEach(function () {
            stubRead = sinon.stub(calculator, "read").callsFake(() => {
                calculator.a = 2;
                calculator.b = 3;
            });

            calculator.read();
        });

        afterEach(function () {
            stubRead.restore();
        });

        it("the read get two values and saves them as object properties", function () {
            assert.equal(calculator.a, 2);
            assert.equal(calculator.b, 3);
        });

        it("the sum is 5", function () {
            assert.equal(calculator.sum(), 5);
        });

        it("the multiplication product is 6", function () {
            assert.equal(calculator.mul(), 6);
        });
    });
});

describe("ladder function:", () => {
    before(() => {
        console.log = sinon.stub(console, "log");
    });

    beforeEach(() => {
        ladder.step = 0;
    });

    after(() => {
        ladder.step = 0;
        console.log.restore();
    });

    it("up() should return this", () => {
        assert.equal(ladder.up(), ladder);
    });

    it("down() should return this", () => {
        assert.equal(ladder.down(), ladder);
    });

    it("showStep() should return this", () => {
        assert.equal(ladder.showStep(), ladder);
    });

    it("up() should increase step", () => {
        assert.equal(ladder.up().up().step, 2);
    });

    it("down() should decrease step", () => {
        assert.equal(ladder.down().down().step, -2);
    });

    it("up().up().down().showStep().down().showStep()", () => {
        assert.equal(
            ladder.up().up().down().showStep().down().showStep().step,
            0
        );
    });
});

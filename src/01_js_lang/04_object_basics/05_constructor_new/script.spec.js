import { afterEach, beforeEach, describe, it } from "mocha";
import { Accumulator, Calculator } from "./script.js";
import { assert } from "chai";
import sinon from "sinon";

describe("Calculator", () => {
    let stub;
    let calculator = new Calculator();

    beforeEach(() => {
        stub = sinon.stub(calculator, "read").callsFake(() => {
            calculator.a = 2;
            calculator.b = 3;
        });

        calculator.read();
    });

    afterEach(() => {
        stub.restore();
    });

    it("read get two values and saves them as object properties", () => {
        assert.equal(calculator.a, 2);
        assert.equal(calculator.b, 3);
    });

    it("sums the two values", () => {
        assert.equal(calculator.sum(), 5);
    });

    it("multiplies the two values", () => {
        assert.equal(calculator.mul(), 6);
    });
});

describe.only("Accumulator", () => {
    let stub;
    let accumulator = new Accumulator(1);

    beforeEach(() => {
        stub = sinon.stub(accumulator, "read").callsFake(() => {
            accumulator.value = 4;
        });

        accumulator.read();
    });

    afterEach(() => {
        stub.restore();
    });

    it("read a value and accumulate it", () => {
        assert.equal(accumulator.value, 4);
    });
});

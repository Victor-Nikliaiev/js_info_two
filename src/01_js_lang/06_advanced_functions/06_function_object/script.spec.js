import { describe, it } from "mocha";
import { makeCounter, sum } from "./script.js";
import { assert } from "chai";

describe("makeCounter: ", () => {
    it("counter() should return the next number", () => {
        let counter = makeCounter();
        assert.equal(counter(), 1);
        assert.equal(counter(), 2);
    });

    it("counter.set(value) should set the counter to value", () => {
        let counter = makeCounter();
        counter.set(10);
        assert.equal(counter(), 11);
    });

    it("counter.decrease() should decrease the counter by 1", () => {
        let counter = makeCounter();
        counter();
        counter();
        counter.decrease();
        assert.equal(counter(), 2);
    });
});

describe.only("sum: ", () => {
    it("sum(1)(2) should return 3", () => {
        assert.equal(sum(1)(2), 3);
    });

    it("sum(1)(2)(3) should return 6", () => {
        assert.equal(sum(1)(2)(3), 6);
    });

    it("sum(1)(2)(3)(4) should return 10", () => {
        assert.equal(sum(1)(2)(3)(4), 10);
    });
});

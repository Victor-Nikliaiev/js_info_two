import { assert } from "chai";
import { describe, it } from "mocha";
import { pow } from "./script.js";

let teaServed = true;

describe("Pow function():", () => {
    describe("Raises x to the power 3:", () => {
        const makeTest = x => {
            let expected = x * x * x;

            it(`${x} in the power 3  is ${expected}`, () => {
                assert.equal(pow(x, 3), expected);
            });
        };

        for (let i = 1; i <= 5; i++) {
            makeTest(i);
        }
    });

    describe("Checking for NaN returns values:", () => {
        it("for negative n the result is NaN", () => {
            assert.isNaN(pow(1, -3));
        });

        it("for non-integer numbers the result is NaN", () => {
            assert.isNaN(pow(2, 3.5));
        });

        it("Tea must be served :D", () => {
            assert.isTrue(teaServed, "the tea has been served");
        });
    });
});

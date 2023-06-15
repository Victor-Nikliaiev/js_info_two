import { describe, it } from "mocha";
import { isEmpty, multiplyNumeric, sum } from "./script.js";
import { assert } from "chai";

describe("isEmpty function", () => {
    it("should return true for empty object", () => {
        assert.isTrue(isEmpty({}));
    });

    it("should return false for non-empty object", () => {
        assert.isFalse(isEmpty({ name: "John" }));
    });
});

describe("sum function", () => {
    it("should return 0 for empty object", () => {
        assert.equal(sum({}), 0);
    });

    it("should return sum of all salaries", () => {
        let salaries = {
            John: 100,
            Pete: 300,
            Mary: 250,
        };

        assert.equal(sum(salaries), 650);
    });
});

describe.only("multiplyNumeric function", () => {
    it("should multiply all numeric values", () => {
        let menu = {
            test: 1,
            width: 200,
            height: 300,
            title: "My menu",
        };

        multiplyNumeric(menu);

        assert.deepEqual(menu, {
            test: 2,
            width: 400,
            height: 600,
            title: "My menu",
        });
    });
});

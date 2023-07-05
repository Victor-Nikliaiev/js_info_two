import { describe, it } from "mocha";
import { count, sumSalaries } from "./script.js";
import { assert } from "chai";

describe("sumSalaries function: ", () => {
    it("should return sum of salaries", () => {
        assert.equal(sumSalaries({ John: 100, Pete: 300, Mary: 250 }), 650);
    });

    it("should return 0 for empty object", () => {
        assert.equal(sumSalaries({}), 0);
    });
});

describe.only("count function: ", () => {
    it("should count number of properties", () => {
        assert.equal(count({ name: "Vic", age: 30 }), 2);
    });

    it("should return 0 for empty object", () => {
        assert.equal(count({}), 0);
    });

    it("ignores symbolic properties", () => {
        assert.equal(count({ [Symbol("id")]: 1 }), 0);
    });
});

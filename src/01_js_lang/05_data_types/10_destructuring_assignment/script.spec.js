import { describe, it } from "mocha";
import { topSalary } from "./script.js";
import { assert } from "chai";

describe("topSalary function: ", () => {
    it("should  return the name of the top-paid person", () => {
        assert.equal(topSalary({ John: 100, Pete: 300, Mary: 250 }), "Pete");
    });

    it("should return null for empty object", () => {
        assert.isNull(topSalary({}));
    });
});

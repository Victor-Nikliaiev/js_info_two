import { describe, it } from "mocha";
import { pseudoRandom } from "./script.js";
import { assert } from "chai";

describe("pseudoRandom:", () => {
    it("should return right sequence with given seed value  1", () => {
        let generator = pseudoRandom(1);

        assert.equal(generator.next().value, 16807);
        assert.equal(generator.next().value, 282475249);
        assert.equal(generator.next().value, 1622650073);
    });
});

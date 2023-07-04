import { describe, it } from "mocha";
import { aclean, unique } from "./script.js";
import { assert } from "chai";

describe("unique function: ", () => {
    it("should return unique array of strings", () => {
        assert.deepEqual(
            unique([
                "Hare",
                "Krishna",
                "Hare",
                "Krishna",
                "Krishna",
                "Krishna",
            ]),
            ["Hare", "Krishna"]
        );
    });
});

describe.only("aclean function: ", () => {
    it("should return an array cleaned from anagrams", () => {
        let arr = [
            "nap",
            "teachers",
            "cheaters",
            "PAN",
            "ear",
            "era",
            "hectares",
        ];

        assert.deepEqual(aclean(arr), ["nap", "teachers", "ear"]);
    });
});

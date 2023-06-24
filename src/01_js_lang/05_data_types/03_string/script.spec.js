import { describe, it } from "mocha";
import {
    checkSpam,
    extractCurrencyValue,
    truncate,
    ucFirst,
} from "./script.js";
import { assert } from "chai";

describe("ucFirst:", () => {
    it("Should return first letter of a given string uppercase.", () => {
        assert.equal(ucFirst("hello"), "Hello");
    });

    it("Doesn't die on an empty string", function () {
        assert.strictEqual(ucFirst(""), "");
    });
});

describe("checkSpam:", () => {
    it("Should return true if the given string includes 'viagra'", () => {
        assert.isTrue(checkSpam("buy ViAgRA now"));
    });

    it("Should return true if the given string includes 'xxx'", () => {
        assert.isTrue(checkSpam("free xxx"));
    });

    it("Should return false if the given string doesn't include neither 'viagra' nor 'xxx", () => {
        assert.isFalse(checkSpam("innocent rabbit"));
    });
});

describe("truncate:", () => {
    it("Should truncate a given string", () => {
        assert.equal(
            truncate("What I'd like to tell on this topic is:", 20),
            "What I'd like to te..."
        );
    });

    it("Should return a string as it is if the given string is shorter or equal than given length", () => {
        assert.equal(truncate("hi, there", 20), "hi, there");
    });
});

describe.only("extractCurrencyValue:", () => {
    it("it should return currency value as a number", () => {
        assert.equal(extractCurrencyValue("$100"), 100);
    });
});

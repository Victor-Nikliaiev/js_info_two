import { after, afterEach, before, beforeEach, describe, it } from "mocha";

describe("Test", () => {
    before(() => console.log("Testing started ... - before all tests"));
    after(() => console.log("Testing finished ... -  after all tests"));

    beforeEach(() => console.log("Before each test ... - before each test"));
    afterEach(() => console.log("After each test ... - after each test"));

    it("Test 1", () => console.log("Test 1"));
    it("Test 2", () => console.log("Test 2"));
});

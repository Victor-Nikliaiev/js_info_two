import { describe, it } from "mocha";
import { askPrintOrAdd, addToObject } from "./userInterface.js";
import { expect } from "chai";

describe("askPrintOrAdd function:", () => {
    it("should return 'add' if the user wants to add keys", () => {
        const userChoice = "add";
        expect(askPrintOrAdd(userChoice)).to.equal("add");
    });

    it("should return 'print' if the user wants to print keys", () => {
        const userChoice = "print";
        expect(askPrintOrAdd(userChoice)).to.equal("print");
    });
});

describe.only("addToObject function:", () => {
    it("should add a new key-value pair to the given object", () => {
        const object = {};
        const key = "name";
        const value = "John";
        addToObject(object);
        expect(object[key]).to.equal(value);
    });

    it("should not add anything if key or value is empty", () => {});
});

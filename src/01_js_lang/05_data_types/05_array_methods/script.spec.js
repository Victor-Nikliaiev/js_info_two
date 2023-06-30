import { describe, it } from "mocha";
import {
    Calculator,
    camelize,
    filterRange,
    filterRangeInPlace,
    groupById,
    unique,
} from "./script.js";
import { assert } from "chai";

describe("camelize function: ", () => {
    it("should return camelized string backgroundColor", () => {
        assert.equal(camelize("background-color"), "backgroundColor");
    });

    it("should return camelized string  listStyleImage", () => {
        assert.equal(camelize("list-style-image"), "listStyleImage");
    });

    it("should return camelized string  Webkit-Transition", () => {
        assert.equal(camelize("-webkit-transition"), "WebkitTransition");
    });

    it("it should return empty string if empty string given", () => {
        assert.equal(camelize(""), "");
    });
});

describe("filterRange function: ", () => {
    let array = [1, 2, 3, 4, 5, 6];

    it("should return filtered array", () => {
        assert.deepEqual(filterRange(array, 3, 5), [3, 4, 5]);
    });

    it("should not modify original array", () => {
        assert.deepEqual(array, [1, 2, 3, 4, 5, 6]);
    });
});

describe("filterRangeInPlace function: ", () => {
    let array = [1, 2, 3, 4, 5, 6];

    it("should filter  and modify original array", () => {
        filterRangeInPlace(array, 3, 5);
        assert.deepEqual(array, [3, 4, 5]);
    });

    it("should return undefined", () => {
        assert.isUndefined(filterRangeInPlace(array, 4, 5));
    });
});

describe("Calculator constructor: ", () => {
    let calculator = new Calculator();

    it("should be able to calculate sum", () => {
        assert.equal(calculator.calculate("2 + 3"), 5);
    });

    it("should be able to calculate difference", () => {
        assert.equal(calculator.calculate("4 - 1"), 3);
    });

    it("should be able to add new method", () => {
        calculator.addMethod("*", (a, b) => a * b);
        assert.equal(calculator.calculate("2 * 3"), 6);
    });

    it("should return NaN if operator or either of arguments is not defined in calculate method", () => {
        assert.isNaN(calculator.calculate("2 % 3"));
    });
});

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
                "Hare",
                "Hare",
                ":-O",
            ]),
            ["Hare", "Krishna", ":-O"]
        );
    });

    it("should return empty array if array is empty", () => {
        assert.deepEqual(unique([]), []);
    });

    it("doesn't change original array", () => {
        let arr = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna"];
        unique(arr);
        assert.deepEqual(arr, [
            "Hare",
            "Krishna",
            "Hare",
            "Krishna",
            "Krishna",
            "Krishna",
        ]);
    });
});

describe.only("groupById function: ", () => {
    it("creates an object grouped by id", function () {
        let users = [
            { id: "john", name: "John Smith", age: 20 },
            { id: "ann", name: "Ann Smith", age: 24 },
            { id: "pete", name: "Pete Peterson", age: 31 },
        ];

        assert.deepEqual(groupById(users), {
            john: { id: "john", name: "John Smith", age: 20 },
            ann: { id: "ann", name: "Ann Smith", age: 24 },
            pete: { id: "pete", name: "Pete Peterson", age: 31 },
        });
    });

    it("works with an empty array", function () {
        let users = [];
        assert.deepEqual(groupById(users), {});
    });
});

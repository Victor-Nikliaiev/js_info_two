import { describe, it } from "mocha";
import { byField, inArray, inBetween } from "./script.js";
import { assert } from "chai";

describe("inBetween", () => {
    it("should select only values between two numbers", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        assert.deepEqual(arr.filter(inBetween(3, 6)), [3, 4, 5, 6]);
    });
});

describe("inArray", () => {
    it("should select only elements matching with one of the members of given array", () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        assert.deepEqual(arr.filter(inArray([1, 2, 10])), [1, 2]);
    });
});

describe.only("byField", function () {
    let users = [
        { name: "John", age: 20, surname: "Johnson" },
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" },
    ];

    it("sorts users by name", function () {
        let nameSortedKey = [
            { name: "Ann", age: 19, surname: "Hathaway" },
            { name: "John", age: 20, surname: "Johnson" },
            { name: "Pete", age: 18, surname: "Peterson" },
        ];
        let nameSortedAnswer = users.sort(byField("name"));
        assert.deepEqual(nameSortedKey, nameSortedAnswer);
    });

    it("sorts users by age", function () {
        let ageSortedKey = [
            { name: "Pete", age: 18, surname: "Peterson" },
            { name: "Ann", age: 19, surname: "Hathaway" },
            { name: "John", age: 20, surname: "Johnson" },
        ];
        let ageSortedAnswer = users.sort(byField("age"));
        assert.deepEqual(ageSortedKey, ageSortedAnswer);
    });

    it("sorts users by surname", function () {
        let surnameSortedKey = [
            { name: "Ann", age: 19, surname: "Hathaway" },
            { name: "John", age: 20, surname: "Johnson" },
            { name: "Pete", age: 18, surname: "Peterson" },
        ];
        let surnameSortedAnswer = users.sort(byField("surname"));
        assert.deepEqual(surnameSortedAnswer, surnameSortedKey);
    });
});

/* eslint-disable no-unused-vars */

// let arr = ["I", "go", "home"];
// delete arr[0];

import { alert, prompt } from "../../../utils.js";

// console.table(arr);
// console.log(arr.length);

// let arr = ["I", "study", "Javascript"];
// arr.splice(1, 1);
// console.log(arr);
// console.log(arr.length);

// let arr = ["I", "study", "Javascript", "right", "now"];
// let removedItems = arr.splice(0, 3, "Let's", "dance");

// console.table(arr);
// console.log(arr.length);
// console.table(removedItems);

// arr.splice(2, 0, "complex", "language");
// let arr = ["I", "study", "Javascript"];
// let test = ["complex", "language"];

// arr.splice(2, 0, ...test);

// console.log(arr);

// let arr = [1, 2, 5];

// arr.splice(-1, 0, 3, 4);

// console.table(arr);
// console.log(arr.length);

// let arr = ["t", "e", "s", "t"];
// console.log(arr.slice(1, 3));
// console.log(arr.slice(-2));

// console.log(arr.slice());

// let arr = [1, 2];
// console.log(arr.concat(3, 4));
// console.log([].concat([3, 4], [5, 6]));
// console.log([].concat([1, 2], 3, 4, [5, 6]));

// let arrayLike = {
//     0: "something",
//     length: 1,
// };

// console.log(arr.concat(arrayLike));
// console.log(arr.concat(...arrayLike));

// let arr = [1, 2];
// let arrLike = {
//     0: "something",
//     1: "else",
//     [Symbol.isConcatSpreadable]: true,
//     length: 2,
// };

// console.log(arr.concat(arrLike));

// ["Bilbo", "Frodo", "Gandalf"].forEach(alert);

// ["Bilbo", "Frodo", "Nazgul"].forEach((item, index, arr) => {
//     console.log(`item: ${item}, index: ${index}, arr: ${arr}`);
// });

/**
 * Determines if the given searchItem is unique in the arr.
 *
 * @param {Array} array - The array to search for the item.
 * @param {any} itemToSearch - The item to search for.
 * @return {boolean} Returns true if the item is unique in the array, and false otherwise.
 */
function isUniqueItem(array, itemToSearch) {
    if (array.indexOf(itemToSearch) === arr.lastIndexOf(itemToSearch)) {
        return true;
    }

    return false;
}

// console.log(isUniqueItem(["Bilbo", "Frodo", "Gandalf", "Frodo"], "Frodo"));

// const arr = [NaN];

// console.log(arr.includes(NaN));
// console.log(arr.indexOf(isNaN(NaN)));

// let users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Vic" },
//     { id: 3, name: "Mary" },
// ];

// const user = users.find(user => user.id === 2);
// console.log(user?.name);

// console.log(users.findIndex(user => user.name === "Vic"));

// let i = 10;
// let arr = [];

// while (--i) {
//     arr.push(i);
// }
// console.log(arr[5]); // 4

// let user = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Vic" },
//     { id: 3, name: "Mary" },
// ];

// let someUsers = user.filter(user => user.id < 3);
// console.log(someUsers);
// console.log(someUsers.length);

// let lengths = ["Bilbo", "Frodo", "Gandalf"].map(item => item.length);
// console.log(lengths);

// arr.sort();
// console.log(arr);

function compare(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

// arr.sort(compare);
// console.log(arr);

// const compareNumeric = (a, b) => a - b;

// let arr = [1, 2, 15, 3, 4];

// arr.sort(compareNumeric);
// console.log(arr);

// let countries = ["Österreich", "Andorra", "Vietnam"];
// countries.sort((a, b) => a.localeCompare(b));
// console.log(countries);

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// let names = "Bilbo, Gandalf, Nazgul";
// let arr = names.split(", ");

// for (let name of arr) {
//     console.log(`message to ${name}`);
// }

// let arr = "Bilbo, Gandalf, Nazgul, Frodo, Saruman".split(", ", 2);
// console.table(arr);

// alert("Hello".split(""));

// let arr = ["Gendalf", "Bilbo", "Frodo"];
// let str = arr.join("; ");
// console.log(str);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reduce((sum, item) => sum + item));

// let arr = [];
// console.log(arr.reduce((sum, currentValue) => sum + currentValue, 0));

// let arr = [];
// let obj = {};

// console.log(typeof arr);
// console.log(typeof obj);
// console.log(Array.isArray({}));
// console.log(Array.isArray([]));

export function camelize(str) {
    let arr = str.split("-").map((item, index) => {
        if (!index) return item;

        return item[0].toUpperCase() + item.slice(1);
    });

    return arr.join("");
}

export function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}

export function filterRangeInPlace(arr, a, b) {
    let filteredArray = arr.filter(item => a <= item && item <= b);
    arr.length = 0;
    arr.splice(0, 0, ...filteredArray);
}

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr);

function copySorted(arr) {
    return arr.slice().sort((a, b) => a.localeCompare(b));
}

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);

// console.log(arr);
// console.log(sorted);

export function Calculator() {
    this.operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };

    this.calculate = string => {
        let splitArray = string.split(" ");

        let a = +splitArray[0];
        let operator = splitArray[1];
        let b = +splitArray[2];

        if (!this.operators[operator] || isNaN(a) || isNaN(b)) return NaN;

        return this.operators[operator](a, b);
    };

    this.addMethod = function (operator, func) {
        if (!operator || typeof func !== "function") return;

        this.operators[operator] = func;
    };
}

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map(user => user.name);

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map(user => ({
//     fullname: `${user.name} ${user.surname}`,
//     id: user.id,
// }));

// console.log(usersMapped);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

// sortByAge(arr);
// console.log(arr);

function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}

// let arr = [1, 2, 3];
// shuffle(arr);
// console.log(arr);

function shuffleV_2(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// let count = {
//     123: 0,
//     132: 0,
//     213: 0,
//     231: 0,
//     321: 0,
//     312: 0,
// };

// for (let i = 0; i < 1e7; i++) {
//     let arr = [1, 2, 3];
//     shuffleV_2(arr);
//     count[arr.join("")]++;
// }

// console.table(count);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

function getAverageAge(arr) {
    return (
        arr.map(user => user.age).reduce((average, age) => average + age, 0) /
        arr.length
    );
}

// console.log(getAverageAge(arr));

export function unique(arr) {
    let unique = [];

    arr.forEach(item => {
        if (!unique.includes(item)) unique.push(item);
    });

    return unique;
}

export function groupById(array) {
    return array.reduce((group, item) => {
        group[item.id] = item;
        return group;
    }, {});
}

function groupByIdArr(array) {
    return array.reduce((groupArray, item) => {
        groupArray.push({ [item.id]: item });
        return groupArray;
    }, []);
}

let users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
];

let arr = groupByIdArr(users);
console.log(arr);

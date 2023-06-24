// let arr = new Array();
// let arr = [];

import { alert, prompt } from "../../../utils.js";

// let fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// fruits[2] = "Grape";
// fruits[3] = "Plum";

// console.table(fruits);
// console.log(fruits.at(-1));

// let arr = [
//     "Apple",
//     { name: "John" },
//     true,
//     () => {
//         console.log("Hi!");
//     },
// ];

// console.log(arr[1].name);
// arr[3]();

// let fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits.pop());
// console.table(fruits);

// fruits.push("Grape");
// console.table(fruits);

// let fruits = ["Orange", "Apple", "Banana"];

// console.log(fruits.shift());
// console.table(fruits);

// let fruits = ["Apple", "Banana", "Orange"];
// fruits.unshift("Kiwi");
// console.table(fruits);

// let fruits = ["Orange"];

// fruits.unshift("Kiwi", "Apple");
// fruits.push("Grape");
// console.table(fruits);

// let fruits = ["Banana"];

// let arr = fruits;

// console.log(arr === fruits);

// arr.push("Kiwi");
// console.table(fruits);

// let fruits = [];

// fruits[9999] = "Apple";
// fruits.age = 30;
// console.table(fruits);

// let fruits = ["Apple", "Banana", "Orange"];

// fruits[fruits.length] = "Grape";
// fruits.length--;
// fruits.length--;
// console.table(fruits);

// while (fruits.length) {
//     console.log(fruits.at(-1));
//     fruits.length--;
// }

// let arr = ["Apple", "Banana", "Orange"];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = ["Apple", "Banana", "Orange"];

// for (let i of arr) {
//     console.log(i);
// }

// let fruits = [];
// fruits[123] = "Apple";
// console.log(fruits.length);

// let arr = [1, 2, 3, 4, 5, 6];

// arr.length = 2;
// console.table(arr);

// arr.length = 0;

// let arr = new Array("Apple", "Banana", "Orange");
// console.table(arr);

// let arr = new Array(2);
// console.log(arr[0]);
// console.log(arr.length);

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// console.table(matrix);
// console.log(matrix[1][1]);

// alert([] + 1);
// alert(String([1, 2, 3]) === "1,2,3");
// alert([] + 1);
// alert([1] + 1);

// alert([1, 2] + 1);
// alert([1, 2] - 1);

// let styles = ["Jazz", "Blues"];
// console.table(styles);

// styles.push("Rock-n-Roll");
// console.table(styles);

// if (styles.length % 2) {
//     styles[Math.floor(styles.length / 2)] = "Classics";
// }

// console.table(styles);

// styles.shift();
// console.table(styles);

// styles.unshift("Rap", "Reggae");
// console.table(styles);

// let arr = [0, 1];
// arr.push(function () {
//     console.log(this);
// });

// arr[2]();

function sumInput() {
    let resultArr = [];

    while (true) {
        let userInput = prompt("Enter a number: ");

        if (!isFinite(userInput) || userInput === "" || userInput === null) {
            break;
        }

        resultArr.push(+userInput);
    }

    let sum = 0;

    for (let item of resultArr) {
        sum += item;
    }

    return sum;
}

// alert(`Sum: ${sumInput()}`);

export function getMaxSubSum(arr) {
    if (!arr.length) return 0;

    // [2, -8, 5, -1, 2, -3, 2] equals 6
    // [-2, -1, 1, 2] equals 3

    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        maxSum = Math.max(maxSum, currentSum);
        if (currentSum < 0) currentSum = 0;
    }

    return maxSum;
}

// console.log(getMaxSubSum([2, -1, 2, 3, -9]));

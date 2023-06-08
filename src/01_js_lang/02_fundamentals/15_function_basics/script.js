// function showMessage() {
//     console.log("Hello everyone!");
// }

import { confirm, prompt } from "../../../utils.js";

// showMessage();
// showMessage();

// function showMessage() {
//     let message = "Hello, I'm  JavaScript!";
//     console.log(message);
// }

// showMessage();
// console.log(message);

// let userName = "John";

// function showMessage() {
//     let message = "Hello, " + userName + "!";
//     console.log(message);
// }

// showMessage();

// let userName = "John";

// function showMessage() {
//     userName = "Bob";

//     let message = "Hello, " + userName + "!";
//     console.log(message);
// }

// console.log(userName);

// showMessage();

// console.log(userName);

// let userName = "John";

// function showMessage() {
//     let userName = "Bob";

//     let message = "Hello, " + userName + "!";
//     console.log(message);
// }

// console.log(userName);
// showMessage();
// console.log(userName);

// function showMessage(from, text) {
//     console.log(from + ": " + text);
// }

// showMessage("Ann", "Hello!");
// showMessage("Ann", "What's up?");

// function showMessage(from, text = "*No text given*") {
//     from = "*" + from + "*";
//     console.log(from + ": " + text);
// }

// let from = "Ann";
// showMessage("Ann", "Hello!");
// console.log(from);
// showMessage("Ann");
// showMessage("Vic");

// function showMessage(from, text) {
//     text ||= "*No text given*";
//     from = "*" + from + "*";
//     console.log(from + ": " + text);
// }

// showMessage("Vic");
// showMessage("Vic", "Hello!");

// function sum(number) {
//     number ??= 0;
//     return number && number * 2;
// }

// // console.log(sum());
// // console.log(sum(2));
// console.log(sum(Infinity));

// function showCount(count) {
//     console.log(count ?? "unknown");
// }

// showCount(100);
// showCount(100);
// showCount(undefined);
// showCount(null);

function sum(a, b) {
    return a + b;
}

// let result = sum(2, 3);
// console.log(result);

// if (checkAge(age)) {
//     console.log("Access granted");
// } else {
//     console.log("Access denied");
// }
// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else return confirm("Do you have permission from your parents?");
// }

function showingMovie(age) {
    if (!checkAge(age)) {
        return;
    }

    console.log("Showing movie...");
}

// let age = prompt("How old are you?: ");
// showingMovie(age);

// function doNothing() {
//     return null;
// }
// console.log(doNothing() == undefined);

function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        console.log(i);
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

// showPrimes(100);

function checkAge(age) {
    return age > 18
        ? true
        : confirm("Do you have permission from your parents?");
}

function checkAge2(age) {
    return age > 18 || confirm("Do you have permission from your parents?");
}

// console.log(checkAge(15));
// console.log(checkAge2(16));
// console.log(checkAge2(19));

function min(a, b) {
    return a < b ? a : b;
}

// console.log(min(2, 3));
// console.log(min(10, 5));
// console.log(min(3, 6));
// console.log(min(8, 8));

function pow(x, n) {
    n = n < 1 ? 1 : n;
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt("Enter x: ");
let n = prompt("Enter n: ");
console.log(pow(x, n));

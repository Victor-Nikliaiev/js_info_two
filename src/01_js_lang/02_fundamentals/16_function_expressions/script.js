/* eslint-disable no-unused-vars */

// let sayHi = function () {
//     console.log("Hi!");
// };

import { confirm, prompt } from "../../../utils.js";

// console.log(sayHi);

// function sayHi() {
//     console.log("Hi!");
// }

// let func = sayHi;
// func();
// sayHi();

// let sayHi = function () {
//     console.log("Hi!");
// };

// let func = sayHi;
// func();
// sayHi();

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// function showOK() {
//     console.log("You agreed!");
// }

// function showCancel() {
//     console.log("You canceled the execution.");
// }

// ask("Do you agree?", showOK, showCancel);

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     "Are you ok?",
//     function () {
//         console.log("You're ok!");
//     },
//     function () {
//         console.log("You're for real not ok!");
//     }
// );

// function sum(a, b) {
//     return a + b;
// }

// let sum = function (a, b) {
//     return a + b;
// };

// sayHi("John");

// function sayHi(name) {
//     console.log(`Hi, ${name}!`);
// }

// sayHi("John");

// let sayHi = function (name) {
//     console.log(`Hi, ${name}!`);
// };

// let age = prompt("How old are you?");

// if (age > 18) {
//     function welcome() {
//         console.log("Welcome!");
//     }
// } else {
//     function welcome() {
//         console.log("Greetings");
//     }
// }

// welcome();

// let age = 16;

// if (age < 18) {
// welcome();

//     function welcome() {
//         console.log("Hello!");
//     }

//     welcome();
// } else {
//     function welcome() {
//         console.log("Greetings!");
//     }
// }

// welcome();

// let age = prompt("What is your age?");

// let welcome;

// if (age < 18) {
//     welcome = function () {
//         console.log("Hello!");
//     };
// } else {
//     welcome = function () {
//         console.log("Greetings!");
//     };
// }

// welcome();

let age = prompt("What is your age?");

let welcome =
    age < 18
        ? function welcome() {
              console.log("Hello!");
          }
        : function welcome() {
              console.log("Greetings!");
          };

welcome();

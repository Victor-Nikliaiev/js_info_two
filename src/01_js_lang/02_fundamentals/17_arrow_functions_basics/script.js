import { confirm, prompt } from "../../../utils.js";

// let sum = (a, b) => a + b;

// console.log(sum(1, 2));

// let double = n => n * 2;

// console.log(double(5));

// let sayHi = () => console.log("Hi!");

// sayHi();

// let age = prompt("What is your age?: ");

// let greet = age < 18 ? () => console.log("Hi") : () => console.log("Hello!");

// greet();

// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// };

// console.log(sum(1, 2));

let ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
    "Do you agree?",
    () => console.log("You agreed."),
    () => console.log("You canceled the execution.")
);

import { alert, prompt } from "../../../utils.js";

// let year = +prompt("In which year was ECMA-Script specification published?: ");

// if (year === 2015) {
//     console.log("You're right!");
// }

// if (0) {
//     console.log("Never will be executed");
// }

// if (1) {
//     console.log("Always will be executed");
// }
// let year = 2015;

// let cond = year === 2015;

// if (cond) {
//     console.log("You're right!");
// }

// let year = +prompt("In which year was ECMA-Script specification published?: ");

// if (year === 2015) {
//     console.log("You're right!");
// } else {
//     console.log("How can you be so wrong?!");
// }

// let year = +prompt("In which year was ECMA-Script specification published?: ");

// if (year < 2015) {
//     console.log("Too early!");
// } else if (year > 2015) {
//     console.log("Too late!");
// } else {
//     console.log("Exactly");
// }

// let accessAllowed;
// let age = +prompt("How old are you?: ");
// accessAllowed = age > 18;

// alert(accessAllowed);
// if (age > 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }

// alert(accessAllowed);

// let age = +prompt("How old are you?: ");
// let message =
//     age < 3
//         ? "Hi, baby!"
//         : age < 18
//         ? "Hello!"
//         : age < 100
//         ? "Greetings!"
//         : "What an unusual age!";

// console.log(message);

// let company = prompt("Which company do you work for?: ");

// company == "Umbrella"
//     ? (console.log("Don't forget some T-Virus for tea!"),
//       console.log("TTT:D MMMMmmmm"))
//     : console.log("Have a rest sometimes :D");

// {
//     console.log("Test");
//     console.log("Test2 ");
// }

// console.log(typeof con);

// if ("0") {
//     console.log("will be executed");
// }

// let name = prompt("What is official name of JavaScript?");
// if (name == "ECMAScript") {
//     console.log("You are right!");
// } else {
//     console.log("You don't know? It's ECMAScript");
// }

// let number = +prompt("Enter a number: ");

// if (number > 0) {
//     console.log(1);
// } else if (number < 0) {
//     console.log(-1);
// } else {
//     console.log(0);
// }

// let a = 1,
//     b = 2;
// let result = a + b < 4 ? "Below" : "Over";
// console.log(result);

let login = prompt("Login: ");

let message =
    login === "Employee"
        ? "Hello"
        : login === "Director"
        ? "Greetings!"
        : login === ""
        ? "No login"
        : "";

console.log(message);

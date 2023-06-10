import { confirm, prompt } from "../../../utils.js";

let x = 5;
x = "John";
console.log(x);

let userName = prompt("What is your name?: ");
let isTeaWanted = confirm("Do you want some tea?");

console.log(`Visitor: ${userName}`);
console.log(`Tea wanted: ${isTeaWanted}`);

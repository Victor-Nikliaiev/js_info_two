// let code = `console.log("Code is running...");`;
// eval(code);

import { prompt } from "../../../utils.js";

// let a = 1;

// function f() {
//     let a = 2;
//     eval(`console.log(a);`);
// }

// f();

// let x = 5;
// eval(`x  = 10`);
// console.log(x);

// eval(`let x = 5; function f() {}`);
// console.log(x);

// let x = 1;

// {
//     let x = 5;
//     globalThis.eval(`console.log(x);`);
// }

function Calculator() {
    this.prompt = prompt("Enter what to calculate: ");
    console.log(`Result: ${eval(this.prompt)}`);
}

new Calculator();

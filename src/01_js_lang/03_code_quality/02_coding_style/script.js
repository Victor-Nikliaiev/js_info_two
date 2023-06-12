import { prompt } from "../../../utils.js";

let str = `
  ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;

function func() {
    console.log(str);
}

// let cond = false;

// for (let i = 0; i < 10; i++) {
//     if (!cond) continue;

//     console.log(i);
// }

// function pow(x, n) {
//     if (n < 0) {
//         console.log("Negative number not supported");
//         return;
//     }

//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// console.log(pow(2, -1));

let x = prompt("x: ");
let n = prompt("n: ");

if (isNumberOK(n)) {
    console.log(pow(x, n));
}

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

function isNumberOK(n) {
    if (n <= 0) {
        console.log(`Power of ${x} must be greater than 0`);
        return false;
    }

    return true;
}

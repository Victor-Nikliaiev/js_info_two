import { prompt } from "../../../utils.js";
// let i = 0;

// while (i < 3) {
//     console.log(i);
//     i++;
// }

// let i = 4;

// while (i) {
//     console.log(i);
//     i--;
// }
// function double(number) {
//     console.log(number * 2);
// }

// let i = 5;
// while (i) double(i--);

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 3);
// let i = -10;

// for (; i < 10; ) {
//     console.log(i);
//     i += 2;
// }

// let sum = 0;

// for (;;) {
//     sum += 1;
//     console.log(sum);
//     if (sum == 10) break;
// }

// let sum = 0;

// while (true) {
//     let value = prompt("Enter a number: ");
//     if (!value) break;
//     sum += +value;
// }

// console.log("Sum: ", sum);

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i);
// }

// outer: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let input = prompt(`Enter value at coords (${i}, ${j}): `);
//         if (!input) break outer;
//         print: {
//             if (j === 2) break print;
//             console.log("Print: ", input);
//         }
//     }
// }
// console.log("Done!");

// for (let i = 2; i <= 10; i++) {
//     if (i % 2) continue;
//     console.log(i);
// }

// let i = 0;

// while (i < 3) {
//     console.log(`Number: ${i}`);
//     i++;
// }

// for (;;) {
//     let input = +prompt("Enter a number greater than 100: ");
//     if (input > 100 || !input) break;
// }

let number = prompt("Enter a number: ");

outer: for (let i = 2; i <= number; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue outer;
    }
    console.log(i);
}

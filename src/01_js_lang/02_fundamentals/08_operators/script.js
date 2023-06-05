import { alert, prompt } from "../../../utils.js";
// let x = 1;

// x = -x;

// alert(x);

// let x = 1,
//     y = 2;

// alert(y - x);

// alert(5 % 2);
// alert(8 % 2);

// alert(2 ** 2);
// alert(2 ** 4);

// alert(4 ** (1 / 2));
// alert(27 ** (1 / 3));

// let s = "my" + "string";
// alert(s);

// alert(1 + "2");
// alert("2" + 1);
// alert(2 + 2 + "1");
// alert(3 + 2 + "1" + 2 + 2);
// alert("6" - "2");
// alert("8" / "2");

// Numeric conversion, unary +

// alert(+"2");
// alert(+Boolean(true));
// alert(+"");

// let apples = "3";
// let oranges = "4";
// let fruits = +apples + +oranges;
// alert(fruits);

// let x = 2 * 3 + 1;
// alert(x);

// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);
// alert(c);

// let a, b, c;

// a = b = c = 2 + 3;
// alert(a + b + c);

// c = 2 + 3;
// a = c;
// b = c;
// alert(a + b + c);

// let n = 1;
// n = n + 2;
// n = n * 3;
// alert(n);

// let n = 1;
// n += 2;
// n *= 3;
// alert(n);

// let n = 2;
// n *= 5 + 3;
// alert(n);

// let counter = 2;
// counter++;
// alert(counter);

// let counter = 2;
// counter--;
// alert(counter);

// let counter = 1;
// let previousCounter = counter++;
// alert(previousCounter);
// alert(counter);

// let counter = 1;
// let currentCounter = ++counter;
// alert(counter);
// alert(currentCounter);

// let counter = 0;
// alert(++counter);

// let counter = 0;

// alert(2 + counter++);
// alert(counter);

// let counter = 0;
// alert(2 + counter);
// counter++;
// alert(counter);

// let a, b;

// a = ((b = 1 + 2), b++, b);
// alert("a = " + a);
// alert("b = " + b);

// let a, b, c;

// for (a = 1, b = 2, c = 3; a < 4; a++) {
//     b++;
//     c++;
// }

// console.log(a, b, c);

// let a = 1,
//     b = 1;

// let c = ++a;
// let d = b++;
// // console.log(a, b, c, d);
// let t = [];
// t = (a, b, c, d);
// console.log(t);

// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
// console.log(true + false);
// console.log(6 / "3");
// console.log("2" * "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("   -9   " + 5);
// console.log("   -9   " - 5);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log(" \t \n " - 2);

let a = +prompt("Enter a number: ");
let b = +prompt("Enter another number: ");
alert(a + b);

/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */

import { alert, prompt } from "../../../utils.js";

// let billion = 1000000000;
// let billion = 1_000_000_000;
// let billion = 1e9;
// console.log(billion);

let billion = 7.3e9;
// console.log(billion);
// console.log(1.23e-6);
// console.log(12e-2);

// console.log(1e-6);
// console.log(1234e-2 === 1234 / 100);

// console.log(0xff === 255);
// console.log(0xff === 0xff);

// console.log(0b11111111);
// console.log(0o23);
// console.log(0b11111111 === 0o377);

// let num = 127;
// console.log(num.toString(2));
// console.log(num.toString(8));
// console.log(num.toString(16));
// console.log(num.toString(32));
// console.log(num.toString(36));
// console.log(num.toString(10));

// console.log(Number.MAX_SAFE_INTEGER.toString(36));
// let bigInt = 93434774584588648688238828388382284n.toString(36);
// console.log(bigInt);
// console.log(bigInt.toString(10));

// console.log(Math.floor(3.99));
// console.log(Math.trunc(3.99));

/**
 * Truncates a positive number to a specified precision.
 *
 * @param {number} num - The number to truncate.
 * @param {number} precision - The number of digits after the decimal point to keep.
 * @return {number} The truncated number.
 */
function truncPositiveToPrecision(num, precision) {
    let divider = +`1e${precision}`;
    return Math.floor(num * divider) / divider;
}

// console.log(truncPositiveToPrecision(3.98934, 2));
// console.log((12.34).toFixed(1));
// console.log((12.36).toFixed(1));
// console.log(+(12.34).toFixed(1));

// console.log(1e500);
// console.log(0.1 + 0.2);
// console.log(1 / 10);
// console.log((0.1).toFixed(55));
// alert(0.1 + 0.2);

// console.log(0 === -0);
// console.log(NaN == NaN);

// console.log(isNaN(NaN));
// console.log(isNaN("123n"));
// console.log(isNaN(Infinity));

// console.log(isFinite("15"));
// console.log(isFinite("15s"));
// console.log(isFinite(Infinity));
// console.log(isFinite(NaN));

// let num = +prompt("Enter a number: ");
// console.log(`
// Number: ${num}
// IsFinite: ${isFinite(num)}`);

// console.log(isNaN(" 123 "));
// console.log(+" 123n ");
// console.log(Number.isFinite(""));
// console.log(Number.isNaN("2s"));

// console.log(Object.is(undefined, undefined));
// console.log(Sam)
// console.log(parseInt("123px"));
// console.log(parseFloat("12.34.33"));

/**
 * Parses a string to an integer and returns the integer value. If the string
 * contains non-numeric characters, it removes them and returns the numeric
 * value. If the string is not parseable to a number, it returns NaN.
 *
 * @param {string} string - The string to be parsed to an integer.
 * @return {number} The parsed integer value or NaN if not parseable.
 */
function parseIntV_2(string) {
    let result = parseInt(string);

    if (!isNaN(result)) return result;

    result = "";

    for (let i = 0; i < string.length; i++) {
        if (isNaN(string[i])) continue;

        result += string[i];
    }

    return +result || NaN;
}

// console.log(parseIntV_2("as  spx"));
// console.log(parseIntV_2("0"));
// console.log(parseIntV_2("0px"));

// console.log(parseInt("0xFF", 16));
// console.log(parseInt("1111100111", 2));
// console.log(parseInt("1111100111", 8));
// console.log(parseInt("1111100111", 10));
// console.log(parseInt("1111100111", 16));

// console.log(parseInt("2n9c", 36));

// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10) + 1);

// console.log(Math.max(1, 2, 3, -3, 5, -10, 0));
// console.log(Math.min(1, 2, 3, -3, 5, -10, 0));
// console.log(Math.pow(2, 10));
// console.log(Math.abs(-2));
// console.log(Math.sqrt(4));
// console.log(Math.abs(2));

// let num1 = +prompt("Enter first number: ");
// let num2 = +prompt("Enter second number: ");
// console.log(num1 + num2);

// console.log((6.35).toFixed(1));
// // console.log(Math.round(6.35));
// console.log(Math.round(6.35 * 10) / 10);

export function readNumber() {
    let number = null;

    while (true) {
        let userInput = prompt("Enter a valid number: ");

        if (!isFinite(userInput)) continue;

        if (userInput === "0") {
            number = 0;
            break;
        }

        if (!userInput) break;

        number = +userInput;
        break;
    }

    return number;
}

function random(min, max) {
    return Math.random() * (max - min);
}

// console.log("Number: " + readNumber());
console.log(random(1, 10));

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomInteger(1, 10));

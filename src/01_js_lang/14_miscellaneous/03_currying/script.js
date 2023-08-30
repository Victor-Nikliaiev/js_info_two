import _ from "lodash";

// function curry(f) {
//     return function (a) {
//         return function (b) {
//             return f(a, b);
//         };
//     };
// }

// function sum(a, b) {
//     return a + b;
// }

// let curriedSum = curry(sum);
// console.log(curriedSum(1)(2));

// function log(date, importance, message) {
//     console.log(
//         `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
//     );
// }

// log = _.curry(log);

// log(new Date(), "debug", "Hello World!");

// let logNow = log(new Date());

// logNow("INFO", "Message");

// let debugNow = logNow("DEBUG");
// debugNow("message");

function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        }

        return function (...args2) {
            return curried.apply(this, args.concat(args2));
        };
    };
}

function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1, 2)(3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1, 2, 3));

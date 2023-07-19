/* eslint-disable no-unused-vars */
// function slow(x) {
//     console.log(`Slow: ${x}`);
//     return x;
// }

import { assert } from "chai";

// function cachingDecorator(func) {
//     let cache = new Map();

//     return function (x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }

//         let result = func.call(this, x);
//         cache.set(x, result);

//         return result;
//     };
// }

// slow = cachingDecorator(slow);

// console.log(slow(1));
// console.log(`Again: ${slow(1)}`);

// console.log(slow(2));
// console.log(`Again: ${slow(2)}`);

// function sayHi() {
//     console.log(`Hi, ${this.name}!`);
// }

// let user = { name: "John" };
// let admin = { name: "Vic" };

// sayHi.call(user);
// sayHi.call(admin);

// function say(phrase) {
//     console.log(`${this.name}: ${phrase}`);
// }

// let user = { name: "John" };

// say.call(user, "Hi, how are you?");

// let worker = {
//     someMethod() {
//         return 1;
//     },

//     slow(x) {
//         console.log(`Called with ${x}`);
//         return x * this.someMethod();
//     },
// };

// function cachingDecorator(func) {
//     let cache = new Map();

//     return function (x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }

//         let result = func.call(this, x);

//         cache.set(x, result);

//         return result;
//     };
// }

// worker.slow = cachingDecorator(worker.slow);
// console.log(worker.slow(1));
// console.log(`Again: ${worker.slow(1)}`);
// console.log(worker.slow(2));
// console.log(`Again: ${worker.slow(2)}`);

// const worker = {
//     slow(min, max) {
//         console.log(`Called with ${min} and ${max}`);
//         return min + max;
//     },
// };

// function cachingDecorator(func, hash) {
//     let cache = new Map();

//     return function () {
//         let key = hash(arguments);

//         if (cache.has(key)) {
//             return cache.get(key);
//         }

//         let result = func.apply(this, arguments);

//         cache.set(key, result);

//         return result;
//     };
// }

// function hash() {
//     return [].join.call(arguments);
// }

// worker.slow = cachingDecorator(worker.slow, hash);
// console.log(worker.slow(1, 2));
// console.log(`Again: ${worker.slow(1, 2)}`);

export function spy(func) {
    wrapper.calls = [];

    function wrapper(...args) {
        wrapper.calls.push(args);

        return func.apply(this, args);
    }

    return wrapper;
}

export function delay(func, ms) {
    return function () {
        setTimeout(() => func.apply(this, arguments), ms);
    };
}

function print(text) {
    console.log(text);
}

// print = delay(print, 5000);

// print("Hello, it works :D");

function debounce(func, wait) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function throttle(func, ms) {
    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        isThrottled = true;

        func.apply(this, arguments);

        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}

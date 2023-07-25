// let obj = {};
// console.log(obj.__proto__ === Object.prototype);
// console.log(obj.__proto__.__proto__ === null);
// console.log(Object.prototype.__proto__);

import { alert } from "../../../utils.js";

// let arr = [1, 2, 3];
// console.log(arr.__proto__.constructor === Array.prototype.constructor);
// console.log(arr.__proto__.__proto__ === Object.prototype);
// console.log(arr.__proto__.__proto__.__proto__ === null);

// Array.prototype.toString = function () {
//     return this.join(":");
// };

// console.log("" + arr);
// console.dir(arr);

// function f() {}

// console.log(f.__proto__ === Function.prototype);
// console.log(f.__proto__.__proto__ === Object.prototype);
// console.log((1).__proto__ === Number.prototype);

// String.prototype.show = function () {
//     console.log(this);
// };

// "Testing :D".show();
Object.prototype._alert = function () {
    alert(this);
};

String.prototype.repeat = function (n) {
    return new Array(n + 1).join(this);
};

// console.log("La".repeat(3));
// let arr = new Array(3);
// console.log(arr);
// arr._alert();

// let obj = {
//     0: "Hello",
//     1: "World!",
//     length: 2,
//     __proto__: Array.prototype,
// };

// console.log(obj.forEach(item => item._alert()));

// Function.prototype.defer = function (ms) {
//     setTimeout(this, ms);
// };

// function test() {
//     console.log("Works :D");
// }

// test.defer(3000);

Function.prototype.defer = function (ms) {
    let ctx = this;
    return function () {
        setTimeout(() => ctx.apply(this, arguments), ms);
    };
};

function sum(a, b) {
    return a + b;
}

let user = {
    name: "John",
    sayHi() {
        console.log(this.name);
    },
};

user.sayHi = user.sayHi.defer(1000);

user.sayHi();

// function User(name) {
//     this.name = name;
//     this.isAdmin = true;
// }

import { prompt } from "../../../utils.js";

// let user = new User("Vic");
// console.table(user);

// let user = new (function () {
//     this.name = "John";
//     this.age = 30;
// })();

// function User() {
//     console.dir(new.target);
// }

// let user = new User();
// User();

// function User(name) {
//     if (!new.target) {
//         return new User(name);
//     }

//     this.name = name;
//     this.age = 100;
// }

// let user = User("Vic");
// console.table(user);

// function User(name = "Anonymous") {
//     this.name = name;
//     this.isAdmin = false;

//     if (name === "Vic") {
//         return {
//             ...this,
//             isAdmin: true,
//         };
//     }
// }

// let user = new User("Vic");
// console.table(user);
// let user2 = new User("John");
// console.table(user2);

// let user3 = new User();
// console.table(user3);

// function User(name) {
//     this.name = name;
//     this.sayHi = function () {
//         console.log(`Hi ${this.name}!`);
//     };
// }

// let john = new User("John");
// console.table(john);
// john.sayHi();

// let common = {};

// function A() {
//     return common;
// }
// function B() {
//     return common;
// }

// let a = new A();
// let b = new B();
// console.log(a === b);

export function Calculator() {
    this.read = function () {
        this.a = +prompt("Enter first number: ");
        this.b = +prompt("Enter second number: ");
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

export function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt("Enter a number: ");
    };
}

let acc = new Accumulator(1);
acc.read();
acc.read();
console.log(acc.value);

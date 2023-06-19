// let user = {
//     name: "John",
//     age: 30,
// };

import { prompt } from "../../../utils.js";

// user.sayHi = function () {
//     console.log("Hi!");
// };

// user.sayHi();

// let user = {
// name: "John",
// age: 30,
// };

// function sayHi() {
//     console.log("Hi!");
// }

// user.sayHi = sayHi;
// user.sayHi();

// let user = {
//     sayHi: function () {
//         console.log("Hi!");
//     },
// };
// user.sayHi();

// let user = {
//     sayHi() {
//         console.log("Hi!");
//     },
// };

// user.sayHi();

// let user = {
//     name: "Vic",
//     age: 34,

//     sayHi() {
//         console.log(`Hi, my name is ${this.name}`);
//     },
// };

// user.sayHi();

// let user = {
//     name: "Vic",
//     age: 34,

//     sayHi() {
//         console.log(`Hi, my name is ${this.name}`);
//     },
// };

// let admin = user;
// user = null;

// admin.sayHi();

// function sayHi() {
//     console.log(`Hi, ${this.name}`);
// }

// const user = {
//     name: "John",
// };

// const admin = {
//     name: "Vic",
// };

// function sayHi() {
//     console.log(`Hi, ${this.name}`);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();
// admin["f"]();

// function sayHi(a, b) {
//     console.log(this);

//     if (!a || !b) {
//         return;
//     }
//     console.log(a + b);
// }

// sayHi();

// let user = {
//     name: "Vic",
//     sayHi: function () {
//         let arrow = () => {
//             console.log(`Hi, my name is ${this.name}`);
//         };
//         arrow();
//     },
// };

// user.sayHi();

// function makeUser() {
//     return {
//         name: "Vic",
//         ref() {
//             return this;
//         },
//     };
// }

// let user = makeUser();
// console.log(user.ref().name);

export const calculator = {
    read() {
        this.a = +prompt("Enter first number: ");
        this.b = +prompt("Enter second number: ");
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },
};

export const ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    },
};

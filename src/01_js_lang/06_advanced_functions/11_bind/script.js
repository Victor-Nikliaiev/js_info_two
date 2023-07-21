// // let user = {
// //     name: "John",
// //     sayHi() {
// //         console.log(`Hello, ${this.name}!`);
// //     },
// // };

import { prompt } from "../../../utils.js";

// // setTimeout(() => user.sayHi(), 1000);

// // user = {
// //     sayHi() {
// //         console.log("Another user in setTimeout");
// //     },
// // };

// // let user = {
// //     firstName: "Vic",
// // };

// // function func() {
// //     console.log(this.firstName);
// // }

// // func.bind(user)();

// let user = {
//     firstName: "John",
// };

// function func(phrase) {
//     console.log(`Hello, ${this.firstName}!`);
// }

// func = func.bind(user);

// user = {
//     firstName: "Vic",
// };

// func("Hi!");

// let user = {
//     firstName: "Vic",
//     say(phrase) {
//         console.log(`${phrase}, ${this.firstName}!`);
//     },
// };

// let say = user.say.bind(user);

// say("Hi");
// say("Hello");
// say("Bye");
// say("Goodbye");

// function mul(a, b) {
//     return a * b;
// }

// const double = mul.bind(null, 2);
// console.log(double(3));
// const triple = mul.bind(null, 3);
// console.log(triple(3));

function partial(func, ...argsBound) {
    return function (...args) {
        return func.call(this, ...argsBound, ...args);
    };
}

// let user = {
//     firstName: "Vic",
//     say(time, phrase) {
//         console.log(`[${time}] ${this.firstName}: ${phrase}`);
//     },
// };

// user.sayNow = partial(
//     user.say,
//     `${new Date().getHours()}:${new Date().getMinutes()}`
// );
// user.sayNow("Hi, guys, how are you?");

// function sayHi() {
//     if (!sayHi.count) {
//         sayHi.count = 0;
//     }

//     console.log(this.name);
//     sayHi.count++;
// }

// let user = {
//     name: "Vic",
// };

// sayHi.call(user);
// sayHi.call(user);
// sayHi.call(user);
// sayHi.call(user);
// sayHi.call(user);

// console.log(sayHi.count);

function askPassword(ok, fail) {
    let password = prompt("What's the password?: ");

    if (password == "Vic") {
        ok();
        return;
    }

    fail();
}

let user = {
    name: "Vic",

    login(result) {
        console.log(
            `${this.name} ${result ? "logged in" : "failed to log in"}`
        );
    },
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));

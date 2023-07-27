// const User = function User(name) {
//     if (!User.counter) {
//         User.counter = 0;
//     }

import { prompt } from "../../../utils.js";

//     if (!new.target) {
//         return new User(name);
//     }

//     ++User.counter;

//     this.name = name;
// };

// let user = new User("John");
// let user2 = User("Vic");

// console.log(User.counter); // 2

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         console.log(`Hi, ${this.name}!`);
//     }
// }

// let user = new User("John");
// user.sayHi();
// User.prototype.sayBye = function () {
//     console.log(`Bye, ${this.name}!`);
// };

// user.sayBye();

// console.log(new User.prototype.constructor("Constructor"));
// console.log(user);
// console.log(user.constructor === User);
// console.log(Object.getOwnPropertyNames(User.prototype));

// class User {
// constructor() {}
// }

// new User();
// console.log("" + User);

// let User = class MyClass {
//     constructor(name) {
//         this.name = name;
//     }
// };

// function makeClass(phrase) {
//     return class {
//         say() {
//             console.log(phrase);
//         }
//     };
// }

// let User = makeClass("Hello!");
// let user = new User();
// user.say();

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if (value.length < 4) {
//             console.log("Name must be at least 4 characters!");
//             return;
//         }

//         this._name = value;
//     }
// }

// let user = new User("John");
// console.log(user.name);

// class User {
//     ["say" + "Hi"]() {
//         console.log("Hi!");
//     }
// }

// new User().sayHi();

// class User {
//     name = "Vic";

//     sayHi() {
//         console.log(`Hi, ${this.name}!`);
//     }
// }

// let user = new User();
// user.sayHi();

// class User {
//     constructor() {
//         if (!User.prototype.count) {
//             User.prototype.count = 0;
//         }
//         ++User.prototype.count;
//     }
// }
// let user = new User();
// let user2 = new User();
// console.log(user.count);

// class User {
//     name = prompt("Name please: ");
// }

// let user = new User();
// console.log(user.name);

// class Button {
//     constructor(value) {
//         this.value = value;
//     }

//     click = () => {
//         console.log(this.value);
//     };
// }

// let button = new Button("Click me!");
// setTimeout(button.click, 1000);

function Clock({ template }) {
    let timer;

    function render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;

        let output = template
            .replace("h", hours)
            .replace("m", mins)
            .replace("s", secs);

        console.log(output);
    }

    this.stop = function () {
        clearInterval(timer);
    };

    this.start = function () {
        render();
        timer = setInterval(render, 1000);
    };
}

class ClockClass {
    constructor({ template }) {
        this.template = template;
    }

    render = () => {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;

        let output = this.template
            .replace("h", hours)
            .replace("m", mins)
            .replace("s", secs);

        console.clear();
        console.log(output);
    };

    stop = () => {
        clearInterval(this.timer);
    };

    start = () => {
        this.render();
        this.timer = setInterval(this.render, 1000);
    };
}

let clock = new ClockClass({ template: "h:m:s" });
clock.start();
setTimeout(clock.stop, 10000);

// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.speed = 0;
//     }

import { ExtendedClock } from "./clocks/clock-extended.js";

//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} is running at ${this.speed} km/h`);
//     }

//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} stands still.`);
//     }
// }

// let animal = new Animal("My ani");

// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} hides!`);
//     }
// }

// let rabbit = new Rabbit("White Rabbit");
// // rabbit.run = () => {
// //     console.log("Redefined run method");
// // };

// rabbit.run(5);

// rabbit.hide();

// function f(funcName) {
//     return class {
//         [funcName]() {
//             return `${funcName}() is running!`;
//         }
//     };
// }

// class User extends f("testing") {}

// console.log(new User().testing());

// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} runs with speed ${this.speed}.`);
//     }

//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} stands still.`);
//     }
// }

// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} hides!`);
//     }

//     stop() {
//         super.stop();
//         this.hide();
//     }
// }

// let rabbit = new Rabbit("White Rabbit");
// rabbit.run(5);
// rabbit.stop();

// class Rabbit extends Animal {
//     stop() {
//         setTimeout(function () {
//             super.stop();
//         }, 1000);
//     }
// }

// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
// }

// class Rabbit extends Animal {
//     constructor(name, earLength) {
//         super(name);
//         this.earLength = earLength;
//     }
// }

// let rabbit = new Rabbit("White Rabbit", 2);
// console.log(rabbit.earLength, rabbit.name);

// let animal = {
//     name: "Animal",
//     eat() {
//         console.log(`${this.name} is eating.`);
//     },
// };

// let rabbit = {
//     __proto__: animal,
//     name: "Rabbit",
//     eat() {
//         super.eat();
//     },
// };

// let longEar = {
//     __proto__: rabbit,
//     name: "Long Ear",
//     eat() {
//         super.eat();
//     },
// };

// longEar.eat();

// let animal = {
//     sayHi() {
//         console.log("I'm an animal.");
//     },
// };

// let rabbit = {
//     __proto__: animal,
//     sayHi() {
//         super.sayHi();
//     },
// };

// let plant = {
//     sayHi() {
//         console.log("I'm a plant.");
//     },
// };

// let tree = {
//     __proto__: plant,
//     sayHi: rabbit.sayHi,
// };

// tree.sayHi();

// let animal = {
//     eat: function () {
//         console.log("Animal is eating.");
//     },
// };

// let rabbit = {
//     __proto__: animal,
//     eat: function () {
//         super.eat();
//     },
// };

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Rabbit extends Animal {
//     constructor(name) {
//         super(name);
//         this.createdAt = Date.now();
//     }
// }

// let rabbit = new Rabbit("White Rabbit");
// console.log(rabbit.name, rabbit.createdAt);

let clock = new ExtendedClock({
    template: "h:m:s",
    precision: 3000,
});

clock.start();
setTimeout(() => clock.stop(), 12000);

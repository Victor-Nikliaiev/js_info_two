// let animal = {
//     eats: true,
// };

// let rabbit = {
//     jumps: true,
// };

// rabbit.__proto__ = animal;

// console.log(rabbit.eat);
// console.log(rabbit.jumps);

// let animal = {
//     eats: true,
//     walk() {
//         console.log("Animal's walking...");
//     },
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal,
// };

// let longEar = {
//     earLength: 10,
//     __proto__: rabbit,
// };

// longEar.walk();

// let animal = {
//     eats: true,
//     walk() {
//         console.log("Animal's walking...");
//     },
// };

// let rabbit = {
//     __proto__: animal,
// };

// rabbit.walk = function () {
//     console.log("Rabbit's walking...");
// };

// rabbit.walk();

// let user = {
//     name: "John",
//     surname: "Smith",

//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
// };

// let admin = {
//     __proto__: user,
//     isAdmin: true,
// };

// admin.fullName = "Alex Onzil";
// console.log(admin.name);
// console.log(user.name);

// let animal = {
//     walk() {
//         if (!this.isSleeping) {
//             console.log("I'm walking...");
//         }
//     },

//     sleep() {
//         this.isSleeping = true;
//     },
// };

// let rabbit = {
//     __proto__: animal,
//     name: "White Rabbit",
// };

// rabbit.sleep();

// console.log(rabbit.isSleeping);
// console.log(animal.isSleeping);

// let animal = { eats: true };

// let rabbit = {
//     jumps: true,
//     __proto__: animal,
// };

// console.log(Object.keys(rabbit));

// for (let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);

//     if (isOwn) {
//         console.log(`Own: ${prop}`);
//         continue;
//     }

//     console.log(`Inherited: ${prop}`);
// }

// let head = {
//     glasses: 1,
// };

// let table = {
//     pen: 3,
//     __proto__: head,
// };

// let bed = {
//     sheet: 1,
//     pillow: 3,
//     __proto__: table,
// };

// let pockets = {
//     money: 2000,
//     __proto__: bed,
// };

// console.log(pockets.pen);
// console.log(bed.glasses);

// function benchmark(object) {
//     let obj = object.glasses;
//     let count = 0;
//     let startTime = Date.now();
//     for (let i = 0; i < 1e6; i++) {
//         count += object.glasses;
//     }
//     let endTime = Date.now();

//     return endTime - startTime;
// }

// let pocketsTime, headTime;
// pocketsTime = headTime = 0;

// benchmark(head);

// for (let i = 0; i < 1e3; i++) {
//     headTime += benchmark(head);
// }

// benchmark(pockets);

// for (let i = 0; i < 1e3; i++) {
//     pocketsTime += benchmark(pockets);
// }

// console.log(`Results: pockets: ${pocketsTime}ms, head: ${headTime}ms`);

// let animal = {
//     eat() {
//         this.full = true;
//     },
// };

// let rabbit = {
//     __proto__: animal,
// };

// rabbit.eat();
// console.table(rabbit);

let hamster = {
    stomach: [],
    eat(food) {
        this.stomach.push(food);
    },
};

let speedy = {
    stomach: [],
    __proto__: hamster,
};

let lazy = {
    stomach: [],
    __proto__: hamster,
};

speedy.eat("apple");
speedy.eat("banana");
console.table(speedy.stomach);
console.log(lazy.stomach);

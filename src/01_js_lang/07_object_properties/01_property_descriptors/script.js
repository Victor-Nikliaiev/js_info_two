// let user = {
//     name: "Vic",
// };

import { alert, prompt } from "../../../utils.js";

// console.table(Object.getOwnPropertyDescriptor(user, "name"));

// let user = {};

// Object.defineProperty(user, "name", {
//     value: "Vic",
// });

// let descriptor = Object.getOwnPropertyDescriptor(user, "name");
// console.table(descriptor);

// let user = {
//     name: "Vic",
// };

// Object.defineProperty(user, "name", {
//     writable: false,
// });

// Object.defineProperty(user, "name", {
//     writable: true,
// });

// user.name = "Pete";
// console.log(user.name);

// console.table(Object.getOwnPropertyDescriptor(user, "name"));

// let user = {};

// Object.defineProperty(user, "name", {
//     value: "Vic",
//     enumerable: true,
//     configurable: true,
// });

// console.log(user.name);
// user.name = "Pete";

// let user = {
//     name: "John",
//     toString() {
//         return this.name;
//     },
// };

// Object.defineProperty(user, "toString", {
//     enumerable: false,
// });

// for (let key in user) {
//     console.log(key);
// }

// console.log(Object.keys(user));

// let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.table(descriptor);

// Object.defineProperty(Math, "PI", {
//     writable: true,
// });

// let user = {
//     name: "John",
// };

// Object.defineProperty(user, "name", {
//     configurable: false,
// });

// // delete user.name;
// user.name = "Vic";
// console.log(user.name);

// let user = {
//     name: "Vic",
// };

// Object.defineProperty(user, "name", {
//     writable: false,
//     configurable: false,
// });

// user.name = "Pete";
// delete user.name;

// Object.defineProperty(user, "name", {
//     value: "Pete",
// });

let user = Object.defineProperties(
    {},
    {
        name: {
            value: "Vic",
            enumerable: true,
        },

        age: {
            value: 34,
            enumerable: true,
            writable: true,
        },

        toString: {
            value: function () {
                return this.name;
            },
            enumerable: false,
        },
    }
);

// console.log(user);
// console.log((user.age = 2));
// console.log(Object.getOwnPropertyDescriptors(user));

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

// console.table(Object.getOwnPropertyDescriptors(clone));
// console.log("" + clone);

console.log(Object.isFrozen(clone));
Object.freeze(clone);
console.log(Object.isFrozen(clone));
console.log(clone);

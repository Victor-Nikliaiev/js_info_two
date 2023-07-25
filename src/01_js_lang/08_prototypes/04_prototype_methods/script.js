// let user = {
//     0: "Vic",
//     length: 1,
// };

import { assert } from "chai";
import { alert, prompt } from "../../../utils.js";

// console.log(Object.getPrototypeOf(user) === Object.prototype);

// Object.setPrototypeOf(user, Array.prototype);
// Array.prototype.forEach.call(user, item => console.log(item));
// user.forEach(item => console.log(item));

// let animal = {
//     eats: true,
// };

// let rabbit = Object.create(animal);

// for (let key in rabbit) {
//     console.log(Object.hasOwnProperty.call(rabbit, key));
//     console.log(`${key}: ${rabbit[key]}`);
// }

// let animal = {
//     eats: true,
// };

// let rabbit = Object.create(animal);
// console.log(rabbit.eats);
// console.log(Object.getPrototypeOf(rabbit) === animal);
// Object.setPrototypeOf(rabbit, {});

// assert.deepEqual(Object.getPrototypeOf(rabbit), {});

let animal = {
    eats: true,
};

// let rabbit = Object.create(animal, {
//     jumps: {
//         value: true,
//         enumerable: true,
//     },
// });

// console.log(rabbit.jumps);

// let actions = {
//     jump: true,
// };

// let rabbit = Object.create(animal, Object.getOwnPropertyDescriptors(actions));

// // console.log(rabbit);

// let obj = {};
// let key = prompt("Enter a key: ");
// obj[key] = "some value";
// console.log(obj[key]);

// let map = new Map();

// let key = prompt("Enter a key: ");
// map.set(key, "some value");
// console.log(map.get(key));

// let obj = Object.create(null);
// let key = prompt("Enter a key: ");
// obj[key] = "some value";
// alert(obj[key]);

// let obj = Object.create(null, {
//     name: {
//         value: "Vic",
//         enumerable: true,
//     },

//     toString: {
//         value: function () {
//             return this.name;
//         },
//     },
// });

// console.log("" + obj);

// let chineseDictionary = Object.create(null);
// chineseDictionary.hi = "你好";
// chineseDictionary.bye = "再见";
// Object.keys(chineseDictionary).forEach(console.log);

let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        },
    },
});
dictionary.hi = "你好";
dictionary.bye = "再见";
dictionary.__proto__ = "some value";

console.log("" + dictionary);

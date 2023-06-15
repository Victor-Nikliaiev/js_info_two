// let user = new Object();
// user.name = "John";
// user.age = 30;
// user.gender = "male";
// console.log(user);

import { prompt } from "../../../utils.js";

// let user = {};
// user.name = "John";
// user.age = 30;
// user.gender = "male";
// console.log(user);

// let user = {
//     name: "John",
//     age: 30,
// };

// console.table(user.name);
// console.table(user.age);

// user.isAdmin = true;
// console.log(user.isAdmin);

// console.table(user);
// delete user.age;
// console.table(user);

// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true,
// };

// let user = {};

// user["likes birds"] = true;
// console.table(user);

// delete user["likes birds"];
// console.table(user);
// console.log(user);

// let user = {};

// while (true) {
//     let key = prompt("Enter key: ");
//     if (!key) break;

//     let value = prompt(`Enter value for "${key}": `);
//     if (!value) break;

//     value = +value || value;

//     user[key] = value;
// }

// console.table(user);
// let user = {};

// let key = "likes birds";
// user[key] = true;

// let user = {
//     name: "Vic",
//     age: 30,
// };

// let key = prompt("What do you want to know about the user?: ");
// console.log(user[key]);

// let fruits = prompt("Which fruits to buy?: ");

// const bag = {
//     [fruits]: 5,
// };

// console.table(bag);

// let fruit = "apple";

// let bag = {
//     [fruit + "Computers"]: 5,
// };

// console.table(bag);

// function makeUser(name, age) {
//     return {
//         name,
//         age,
//     };
// }

// let user = makeUser("John", 30);
// console.table(user);
// let name = "Vic";
// let name2 = "J";
// let user = {
//     name: name2,
//     age: 34,
// };

// console.table(user);

// let obj = {
//     for: 1,
//     let: 2,
//     return: 3,
// };

// console.log(obj.for + obj.let + obj.return);

// let obj = {
//     0: "test",
// };

// console.log(obj[0] + obj["0"]);

// let obj = {};

// obj.__proto__ = 5;
// console.log(obj.__proto__);

// let user = {};
// console.log(user.noSuchProperty === undefined);

// let user = {
//     name: "Victor",
//     age: 34,
// };

// console.log("name" in user);
// console.log("blabla" in user);

// let user = { age: 30 };
// let key = "age";
// console.log(key in user);

// let obj = {
//     test: undefined,
// };

// console.log(obj.test);
// console.log("test" in obj);

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true,
//     likesWork: false,
// };

// for (let key in user) {
//     console.log(`${key}: ${user[key]}`);
// }

// let codes = {
//     49: "Germany",
//     41: "Switzerland",
//     44: "Great Britain",
//     1: "United States",
// };

// for (let prop in codes) {
//     console.log(`${prop}: ${codes[prop]}`);
// }

// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     "+1": "United States",
// };

// for (let code in codes) {
//     console.log(+code);
// }

// let obj = {};
// obj.name = "John";
// obj.surname = "Smith";
// obj.name = "Pete";
// delete obj.name;

export function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

export function sum(obj) {
    let sum = 0;

    for (let key in obj) {
        sum += obj[key];
    }

    return sum;
}

export function multiplyNumeric(obj) {
    for (let key in obj) {
        if (!+obj[key]) continue;
        obj[key] *= 2;
    }
}

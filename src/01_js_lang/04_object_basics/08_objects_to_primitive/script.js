import { alert } from "../../../utils.js";

// let obj = {
//     name: "Vic",
//     [Symbol.toPrimitive](hint) {
//         console.log(hint);
//     },
// };

// let anotherObj = {};

// anotherObj[obj] = 1;
// console.log(+obj);
// console.log(anotherObj > obj);

// let user = {
//     name: "John",
//     money: 1000,

//     [Symbol.toPrimitive](hint) {
//         console.log(`hint: ${hint}`);
//         return hint === "string" ? `{name: ${this.name}}` : this.money;
//     },
// };

// alert(user);
// alert(+user);
// alert(user + 500);

// Symbol.for(user);
// console.log(Symbol.keyFor(Symbol.for(user)));

// let user = {
//     name: "Vic",
// };

// alert(user);
// alert(user.valueOf() === user);

// let user = {
//     name: "Justin",
//     salary: 1500,

//     toString() {
//         return JSON.stringify(this);
//     },

//     valueOf() {
//         return this.salary;
//     },
// };

// alert(user > 1000);
// alert(user + 500);

// let user = {
//     name: "Vic",

//     toString() {
//         return this.name;
//     },
// };

// alert(user > "Zak");
// alert(user + 500);

// let obj = {
//     toString() {
//         return "2";
//     },
// };

// alert(obj * 3);

let user = {
    name: "Vic",
    age: 34,

    [Symbol.toPrimitive](hint) {
        return hint === "string" ? JSON.stringify(this) : this.age;
    },
};

let id = Symbol.for(user);
// console.log(id);
alert(Symbol.keyFor(id));

// let id = Symbol();

// let id = Symbol("id");

// let id1 = Symbol("id");
// let id2 = Symbol("id");
// console.log(id1 === id2);
// console.log(id1);
// console.log(id1.description);

// let user = {
//     name: "Vic",
// };

// let id = Symbol("id");
// let id2 = Symbol("database_id");
// user[id] = 1;
// user[id2] = "00x0023";
// console.dir(user);

// const id = Symbol("id");
// const user = {
//     [id]: 1,
//     name: "Vic",
// };

// let id = Symbol("id");
// let user = {
//     name: "Vic",
//     age: 34,
//     [id]: 1,
// };

// console.log(user);
// console.table(user);

// for (const key in user) {
//     console.log(key, user[key]);
// }

// console.table(Object.keys(user));

// let id = Symbol("id");
// let user = {
//     [id]: 123,
// };

// console.log(user);

// let clone = Object.assign({}, user);
// let clone2 = { ...user };
// console.log(clone);
// console.log(clone2);

// let id2 = Symbol.for("id");
// console.log(id2.description);
// let id1 = Symbol.for("id");

// console.log(id1 === id2);

let sym1 = Symbol.for("id");
let sym2 = Symbol.for("name");

// console.log(Symbol.keyFor(sym1));
// console.log(Symbol.keyFor(sym2));

// let name = {
// [sym1]: 1,
// name: "Vic",
// };

let localSymbol = Symbol("id");

// console.log(Symbol.keyFor(globalSymbol));
// console.log(Symbol.keyFor(localSymbol));
// console.log(localSymbol.description);

// let user = {
//     [Symbol.for("id")]: 1,
//     name: "Vic",
//     age: 34,
// };

// console.log(user);
// console.table(user);
// console.log(Object.getOwnPropertySymbols(user));
// console.table(Object.getOwnPropertySymbols(user));

// console.log(user[Symbol.for("id")]);

let user = {
    [Symbol.for("id")]: 1,
    name: "Vic",
    age: 34,
};

console.table(Reflect.ownKeys(user));

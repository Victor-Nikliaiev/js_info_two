/* eslint-disable no-unused-vars */

function sum(a, b) {
    return a + b;
}

// console.log(sum(1, 2, 4, 4, 4));

function sumAll(...args) {
    return args.reduce((sum, current) => sum + current, 0);
}

// console.log(sumAll(1, 2, 2, 10, 5, 100));

// function showName(firstName, lastName, ...titles) {
//     console.log(`${firstName} ${lastName}`);
//     console.log(titles);
// }

// showName("Julius", "Caesar", "Consul", "Imperator");

function showName() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

// showName();
// showName("Victor");
// showName("Victor", "Onlight");

function f() {
    const print = () => console.log(arguments.length);
    print();
}

// f();
// f(1, 2, 3, "stuff");

// let arr1 = [3, 5, 100, 2];
// let arr2 = [6, 10, -5, 3];

// console.log(Math.max(...arr1, ...arr2));

// console.log([0, ...arr1, 2, ...arr2]);

// let str = "Hello";
// console.log([...str]);

let arr = [1, 2, 3, 4];
let arrCopy = [...arr];

// console.log(JSON.stringify(arr) === JSON.stringify(arrCopy));
// console.log(arr === arrCopy);
// arr.push(5);
// console.log(arrCopy);
// console.log(arr);

let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj };
console.log(JSON.stringify(obj) === JSON.stringify(objCopy));
console.log(obj === objCopy);
obj.d = 4;
console.table(obj);
console.table(objCopy);

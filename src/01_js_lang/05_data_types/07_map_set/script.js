// let map = new Map();

// map.set("1", "str1");
// map.set(1, "num1");
// map.set(true, "bool1");
// map.set(null, "null1");
// map.set(undefined, "undefined1");

// console.log(map.size);

// let aa;
// console.log(map.get(aa));

// let john = { name: "John" };
// let visitsCountMap = new Map();
// visitsCountMap.set(john, 1);
// console.log(visitsCountMap.get(john));

// visitsCountMap.set(john, visitsCountMap.get(john) + 1);
// console.log(visitsCountMap.get(john));

// let map = new Map();
// map.set("1", "str1")
//     .set(1, "num1")
//     .set(true, "bool1")
//     .set(null, "null1")
//     .set(undefined, "undefined1");

// console.log(map.size);

// let recipeMap = new Map([
//     ["tomatoes", 200],
//     ["cucumbers", 100],
//     ["potatoes", 50],
// ]);

// for (let key of recipeMap.keys()) {
//     console.log(key);
// }

// for (let value of recipeMap.values()) {
//     console.log(value);
// }

// for (let entry of recipeMap) {
//     console.log(entry);
// }

// recipeMap.forEach((value, key, map) => {
//     console.log(`${key}: ${value} in ${map.size} recipes`);
// });

// let obj = {
//     name: "John",
//     age: 30,
// };

// let map = new Map(Object.entries(obj));
// console.log(map);
// console.log(map.get("name"));
// console.log(map.get("age"));

// let prices = Object.fromEntries([
//     ["apple", 1],
//     ["orange", 2],
//     ["banana", 3],
// ]);

// let map = new Map([
//     ["apple", 1],
//     ["orange", 2],
//     ["banana", 3],
// ]);

// let obj = Object.fromEntries(map.entries());
// console.log(obj);

// console.log(obj.orange);

// let random = {
//     [Symbol.iterator]() {
//         return this;
//     },

//     next() {
//         return {
//             done: false,
//             value: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
//         };
//     },
// };

// let arr = [];

// let count = 0;

// for (let i of random) {
//     if (count === 1e6) break;

//     arr.push(i);
//     count++;
// }

// console.log(arr.length);
// let set = new Set(arr);
// console.log(set.size);

// let john1 = { name: "John", age: 30 };
// let john2 = { name: "John", age: 30 };
// let john3 = { name: "John", age: 30 };

// let visitors = new Set();
// visitors.add(john1);
// visitors.add(john2);
// visitors.add(john3);

// for (let user of visitors) {
//     console.log(user);
// }

// console.log(visitors.size);

// let set = new Set(["oranges", "bananas", "apples"]);
// set.forEach(console.log);

export function unique(arr) {
    return Array.from(new Set(arr));
}

export function aclean(array) {
    let map = new Map();

    for (let item of array) {
        let sorted = item.toLowerCase().split("").sort().join("");
        map.set(sorted, item);
    }

    return Array.from(map.values());
}

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// // Error: keys.push is not a function
// keys.push("more");
// console.table(keys);

function filterAnagrams(array) {
    const result = {};
    const sortString = str => str.toLowerCase().split("").sort().join("");

    for (let item of array) {
        result[sortString(item)] = item;
    }

    return Object.values(result);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(filterAnagrams(arr));

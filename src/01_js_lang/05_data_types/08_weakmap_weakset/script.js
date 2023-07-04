// let john = { name: "John" };

// let map = new Map();

// map.set(john, 20);

// john = null;

// console.log(map.keys().next().value);

// let weakMap = new WeakMap();

// let obj = {};

// weakMap.set(obj, "ok");
// weakMap.set("test", "error");

// let john = { name: "John" };
// let weakMap = new WeakMap();
// weakMap.set(john, "ok");
// john = null;

// let countVisits = new WeakMap();

// function countUser(user) {
//     let count = countVisits.get(user) || 0;
//     countVisits.set(user, count + 1);
// }

// let cache = new WeakMap();

// function process(obj) {
//     if (!cache.has(obj)) {
//         let result = obj + 1;

//         cache.set(obj, result);
//         return result;
//     }

//     return cache.get(obj);
// }

// let obj = {};

// let result1 = process(obj);
// let result2 = process(obj);

// obj = null;

// let visitedSet = new WeakSet();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// visitedSet.add(john);
// visitedSet.add(pete);
// visitedSet.add(mary);

// console.log(visitedSet.has(john));
// console.log(visitedSet.has(pete));
// console.log(visitedSet.has(mary));

// john = null;

// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// readMessages.add(messages[1]);

// readMessages.add(messages[0]);

// messages.shift();

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" },
];

let readAt = new WeakMap();

readAt.set(messages[0], new Date(2022, 2, 1));
readAt.set(messages[1], new Date(2022, 0, 1));

console.log(readAt.get(messages[0]));
console.log(readAt.get(messages[1]));

// let arr = ["John", "Smith"];

import { prompt } from "../../../utils.js";

// let [firstName, lastName] = arr;
// console.log(firstName);
// console.log(lastName);

// let [firstName, lastName] = "John Smith".split(" ");
// console.log(firstName);
// console.log(lastName);

// let [firstName, , title] = [
//     "Julius",
//     "Caesar",
//     "Consul",
//     "of the Roman republic",
// ];

// console.log(`${firstName} the ${title}`);

// let [a, b, c] = "abc";
// let [one, two, three] = new Set([1, 2, 3]);
// console.log(one, two, three);

// let user = {};

// [user.name, user.surname] = "John Smith".split(" ");
// console.table(user);

// let user = {
//     name: "John",
//     age: 30,
// };

// for (let [key, value] of Object.entries(user)) {
//     console.log(`${key}: ${value}`);
// }

// let user = new Map();
// user.set("name", "John");
// user.set("age", 30);

// for (let [key, value] of user) {
//     console.log(`${key}: ${value}`);
// }

// let guest = "Vic";
// let admin = "Jane";

// [guest, admin] = [admin, guest];

// console.log(admin, guest);

// console.log(name1);
// console.log(name2);
// console.log(rest);
// console.log(rest.length);

let [name1, name2, ...titles] = [
    "Julius",
    "Caesar",
    "Consul",
    "of the Roman republic",
];

// console.log(titles);

// let [firstName, lastName] = [];
// console.log(firstName);
// console.log(lastName);

// let [name = "Guest", surname = "Anonymous"] = ["Julius"];

// console.log(name);
// console.log(surname);

// let [
//     name = prompt("What's your name?: "),
//     surname = prompt("What's your surname?: "),
// ] = ["Julius"];

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200,
// };

// let { title, width, height } = options;
// console.log(title, width, height);

// let { width: w, height: h, title } = options;

// console.log(w, h, title);

// let { width = 100, height = 200, title } = options;
// console.log(width, height, title);

// let { width = prompt("width: "), title = prompt("title: ") } = options;

// let options = {
//     title: "Menu",
// };

// let { width: w = 100, height: h = 200, title } = options;

// console.log(w, h, title);

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200,
// };

// let { title } = options;
// console.log(title);

// let { title, ...rest } = options;

// console.table(rest);

// let title, width, height;

// ({ title, width, height } = { title: "Menu", width: 100, height: 200 });
// console.log(title, width, height);

// let options = {
//     size: {
//         width: 100,
//         height: 200,
//     },
//     items: ["Cake", "Donut"],
//     extra: true,
// };

// let {
//     size: { width, height },
//     items: [item1, item2],
//     title = "Menu",
// } = options;

// console.log(width, height, item1, item2, title);

let options = {
    title: "My Menu",
    items: ["Item1", "Item2"],
};

// function showMenu({
//     title = "Untitled",
//     width = 100,
//     height = 200,
//     items = [],
// }) {
//     console.log(`${title} ${width}x${height}`);
// }

// showMenu(options);

function showMenu({
    title = "Untitled",
    width: w = 100,
    height: h = 200,
    items = [],
} = {}) {
    console.log(`${title} ${w}x${h}`);
}

// showMenu();

// let user = { name: "John", years: 30 };

// let { name, years, isAdmin = false } = user;
// console.log(name, years, isAdmin);

export function topSalary(salaries) {
    let topPaidPerson = null;
    let topSalary = 0;

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > topSalary) {
            topSalary = salary;
            topPaidPerson = name;
        }
    }

    return topPaidPerson;
}

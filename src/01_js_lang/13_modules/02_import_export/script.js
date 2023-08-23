export let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export const MODULES_BECAME_STANDARD_YEAR = 2015;

export class User {
    constructor(name) {
        this.name = name;
    }
}

// export function sayHi(user) {
//     console.log(`Hello, ${user}`);
// }

function sayHi() {
    console.log("Hi!");
}

function sayBye() {
    console.log("Bye!");
}

// // export { sayHi, sayBye };
// export { sayHi as hi, sayBye as bye };

// export { sayHi as default };

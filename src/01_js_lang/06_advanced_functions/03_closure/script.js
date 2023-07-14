// {
//     let message = "Hello";
//     console.log(message);
// }

// {
//     let message = "Goodbye";
//     console.log(message);
// }

// if (true) {
//     let message = "Hello";
//     console.log(message);
// }

// for (let i = 0; i < 10; i++) {
//     let message = "Hello";
//     console.log(message);
// }

// console.log(message);

function sayHiBye(firstName, lastName) {
    console.log(`Hi, ${getFullName()}`);
    console.log(`Bye, ${getFullName()}`);

    function getFullName() {
        return firstName + " " + lastName;
    }
}

// sayHiBye("Vic", "Onlight");

function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

// let counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

function makeRandom(min, max) {
    return function () {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
}

let random = makeRandom(1, 10);
// console.log(random());

// const f = () => {
//     let value = 123;

//     return () => {
//         console.log(value);
//     };
// };

// let g = f();
// g();
// g = null;

function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };

    this.down = function () {
        return --count;
    };
}

// let counter = new Counter();
// console.log(counter.up());
// console.log(counter.up());
// console.log(counter.down());

function sum(a) {
    return function (b) {
        return a + b;
    };
}

// console.log(sum(1)(2));

export function inBetween(a, b) {
    return function (value) {
        return value >= a && value <= b;
    };
}

export function inArray(array) {
    return function (value) {
        return array.includes(value);
    };
}

export function byField(fieldName) {
    return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

function makeArmy() {
    let shooters = [];
    let i = 0;

    while (i < 10) {
        let num = i;
        let shooter = function () {
            console.log(num); // should show its number
        };

        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...

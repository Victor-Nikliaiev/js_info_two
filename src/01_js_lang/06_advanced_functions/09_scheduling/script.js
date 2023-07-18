// let timerId = setTimeout("console.log('1')", 0);

// function sayHi() {
//     console.log("Hello");
// }

// setTimeout(sayHi, 1000);

// function sayHi(phrase, who) {
//     console.log(`${phrase}, ${who}!`);
// }

// let timerId = setTimeout(() => console.log("Runs?"));
// // clearInterval(timerId);
// setTimeout(console.log, 1000, timerId, timerId._destroyed);

// let timerId = setInterval(() => console.log("tick:D"), 1000);
// setTimeout(() => {
//     clearInterval(timerId);
//     console.log("Stopt!");
// }, 10000);
// let count = 5;

// let timerId = setTimeout(function tick() {
//     if (!count) {
//         clearTimeout(timerId);
//         return;
//     }
//     console.log("tick");
//     count--;
//     timerId = setTimeout(tick, 2000);
// }, 2000);

// setTimeout(() => console.log("World!"));
// console.log("Hello");

// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//     times.push(Date.now() - start);
//     if (start + 100 < Date.now()) {
//         console.log(times);
//         return;
//     }
//     setTimeout(run);
// });

// let start = Date.now();
// let times = [];

// setImmediate(function run() {
//     times.push(Date.now() - start);
//     if (start + 100 < Date.now()) {
//         console.log(times);
//         return;
//     }
//     setImmediate(run);
// });

const printNumberInterval = (from, to) => {
    let timerId = setInterval(() => {
        if (from > to) {
            clearInterval(timerId);
            return;
        }

        console.log(from);
        from++;
    }, 1000);
};

// printNumberInterval(1, 10);

const printNumberTimeout = (from, to) => {
    let current = from;

    let timerId = setTimeout(function run() {
        console.log(current);
        current++;
        if (current > to) {
            clearTimeout(timerId);
            return;
        }

        setTimeout(run, 1000);
    }, 1000);
};

printNumberTimeout(1, 10);

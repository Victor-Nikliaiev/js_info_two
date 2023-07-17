// const sayHi = function () {
//     console.log("Hi");
// };

// console.log(sayHi.name);

// let user = {
//     sayHi() {},
//     sayBye: function () {},
// };

// console.log(user.sayHi.name);
// console.log(user.sayBye.name);

// let array = [function () {}];
// console.log(array[0].name);

// function f0() {}
// function f1(a) {}
// function f2(a, b) {}
// function many(a, b, ...many) {}

// console.log(f0.length);
// console.log(f1.length);
// console.log(f2.length);
// console.log(many.length);

// function sayHi() {
//     console.log("Hi :D");

//     if (!sayHi.counter) {
//         sayHi.counter = 0;
//     }

//     sayHi.counter++;
// }

// sayHi();
// sayHi();
// console.log(sayHi.counter);

// function makeCounter() {
//     return function counter() {
//         if (!counter.count) {
//             counter.count = 0;
//         }

//         return ++counter.count;
//     };
// }

// let counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let sayHi = function func(who) {
//     console.log(`Hi, ${who}`);
// };

// sayHi("John");

// const sayHi = function func(who) {
//     if (who) {
//         console.log(`Hi, ${who}`);
//         return;
//     }

//     func("Guest");
// };

// sayHi("John");
// sayHi();
// sayHi("Pete");
// sayHi();

// let sayHi = function func(who) {
//     if (who) {
//         console.log(`Hi, ${who}`);
//         return;
//     }

//     func("Guest");
// };

// sayHi("John");
// sayHi();

// let welcome = sayHi;
// sayHi = null;

// welcome("Vic");
// welcome();

export function makeCounter() {
    let count = 0;

    function counter() {
        return ++count;
    }

    counter.set = value => (count = value);

    counter.decrease = () => --count;

    return counter;
}

export function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f[Symbol.toPrimitive] = function func() {
        if (!func.count) {
            func.count = 0;
        }

        ++func.count;
        console.log(func.count);

        return currentSum;
    };

    return f;
}

// let range = {
//     from: 1,
//     to: 5,

//     [Symbol.iterator]() {
//         return {
//             current: this.from,
//             last: this.to,

//             next() {
//                 return this.current <= this.last
//                     ? { done: false, value: this.current++ }
//                     : { done: true };
//             },
//         };
//     },
// };

// for (let i of range) {
//     console.log(i);
// }

// let range = {
//     from: 1,
//     to: 5,

//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },

//     next() {
//         return this.current <= this.to
//             ? { done: false, value: this.current++ }
//             : { done: true };
//     },
// };

// for (let i of range) {
//     console.log(i);
// }

// for (let i of "string") {
//     console.log(i);
// }

// let str = "𝒳😂";

// for (let char of str) {
//     console.log(char);
// }

// let count = 0;

// for (let i of random) {
//     if (count > 10) break;
//     console.log(i);
//     count++;
// }
/////////////////////////////////////////////////////////////////////////////
let random = {
    [Symbol.iterator]() {
        return this;
    },

    next() {
        return { value: randomInt(1, 1e3) };
    },
};

function randomInt(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

let iterator = random[Symbol.iterator]();
let randomNumber1 = iterator.next().value;
let randomNumber2 = iterator.next().value;
let randomNumber3 = iterator.next().value;

let arrrrrr = Array.from(random);
console.log(randomNumber1);
console.log(randomNumber2);
console.log(randomNumber3);
////////////////////////////////////////////////////////////////////////////////

// console.log(randomNumber);

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2,
};

let arr = Array.from(arrayLike);
// console.log(arr);

let range = {
    from: 1,
    to: 10,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        return this.current <= this.to
            ? { done: false, value: this.current++ }
            : { done: true };
    },
};

// console.log(Array.from(range));
// console.log(Array.from(range, num => Math.pow(num, 2)));

let str = "𝒳😂";
let chars = Array.from(str);
// console.log(chars[0]);
// console.log(chars[1]);

function slice(str, start, end) {
    return Array.from(str).slice(start, end);
}

// console.log(slice("𝒳😂", 1, 2));

let smallRange = {
    from: 1,
    to: 10,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        return this.current <= this.to
            ? { done: false, value: this.current++ }
            : { done: true };
    },
};

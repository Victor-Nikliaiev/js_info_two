// function* generateSequence() {
//     yield 1;
//     yield 2;
//     return 3;
// }

// let generator = generateSequence();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// function* randomSequence() {
//     while (true) {
//         yield Math.random();
//     }
// }

// const random = randomSequence();
// console.table(random.next());
// console.table(random.next());
// console.table(random.next());
// console.table(random.next());

// function* generateSequence() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// console.log([...generateSequence()]);

// let range = {
//     *[Symbol.iterator]() {
//         while (true) {
//             yield Math.random();
//         }
//     },
// };

// console.log(range.next());

// function* generateSequence(start, end) {
//     for (let i = start; i <= end; i++) {
//         yield i;
//     }
// }

// function* generatePasswordCodes() {
//     yield* generateSequence(48, 57);
//     yield* generateSequence(65, 90);
//     yield* generateSequence(97, 122);
// }

// let srt = "";

// for (let code of generatePasswordCodes()) {
//     srt += String.fromCharCode(code);
// }

// console.log(srt);

// function* gen() {
//     let result = yield "2 + 2 = ?";

//     console.log(result);
// }

// let generator = gen();
// let question = generator.next().value;
// let answer = generator.next(4);

// function* gen() {
//     let ask1 = yield "2 + 2 = ?";
//     console.log(ask1);

//     let ask2 = yield "3 * 3 = ?";
//     console.log(ask2);
// }

// let generator = gen();

// console.log(generator.next().value);
// console.log(generator.next(4).value);
// console.log(generator.next(9));

// function* gen() {
//     try {
//         let result = yield "2 + 2 = ?";
//         console.log(result);
//     } catch (e) {
//         console.log(e.message);
//     }
// }

// let generator = gen();
// console.log(generator.next().value);
// generator.throw(new Error("Whoops!"));

// function* gen() {
//     let result = yield "2 + 2 = ?";
//     console.log(result);
// }

// let generator = gen();
// console.log(generator.next().value);
// try {
//     generator.throw(new Error("Whoops!"));
// } catch (e) {
//     console.log(e.message);
// }

// function* gen() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let generator = gen();
// console.log(generator.next());
// console.log(generator.return(4));
// console.log(generator.next());

export function* pseudoRandom(seed) {
    let value = seed;
    while (true) {
        value = (value * 16807) % 2147483647;
        yield value;
    }
}

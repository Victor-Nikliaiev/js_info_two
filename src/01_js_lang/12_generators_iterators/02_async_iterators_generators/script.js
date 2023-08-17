/* eslint-disable require-yield */
// let range = {
//     from: 1,
//     to: 5,

//     [Symbol.asyncIterator]() {
//         return {
//             current: this.from,
//             last: this.to,
//             async next() {
//                 await new Promise(resolve => setTimeout(resolve, 1000));

//                 if (this.current <= this.last) {
//                     return { done: false, value: this.current++ };
//                 } else {
//                     return { done: true };
//                 }
//             },
//         };
//     },
// };

// for await (let value of range) {
//     console.log(value);
// }

// function* generateSequence(start, end) {
//     for (let i = start; i <= end; i++) {
//         yield i;
//     }
// }

// for (let value of generateSequence(1, 5)) {
//     console.log(value);
// }

// let range = {
//     from: 1,
//     to: 5,

//     *[Symbol.iterator]() {
//         for (let value = this.from; value <= this.to; value++) {
//             yield value;
//         }
//     },
// };

// console.log([...range]);

// async function* generateAsyncSequence(start, end) {
//     for (let i = start; i <= end; i++) {
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         yield i;
//     }
// }

// let generator = generateAsyncSequence(1, 5);

// for await (let value of generator) {
//     console.log(value);
// }

// let range = {
//     from: 10,
//     to: 6,
//     from1: 5,
//     to1: 1,

//     async *[Symbol.asyncIterator]() {
//         for (let value = this.from; value >= this.to; value--) {
//             await new Promise(resolve => setTimeout(resolve, 1000));
//             yield value;
//         }
//     },

//     *[Symbol.iterator]() {
//         for (let value = this.from1; value >= this.to1; value--) {
//             yield value;
//         }
//     },
// };

// for await (let value of range) {
//     console.log(value);
// }

// for (let value of range) {
//     console.log(value);
// }

async function* fetchCommits(repo) {
    let url = `https://api.github.com/repos/${repo}/commits`;

    while (url) {
        const response = await fetch(url, {
            headers: { "User-Agent": "Our Script" },
        });
        const commits = await response.json();

        let nextPage = response.headers.get("Link").match(/<(.*)>; rel="next"/);
        nextPage = nextPage?.[1];
        url = nextPage;

        for (let commit of commits) {
            yield commit;
        }
    }
}

let count = 0;
let userList = [];

for await (const commit of fetchCommits("facebook/react")) {
    userList.push(commit.author.login);
    if (++count == 100) {
        break;
    }
}

console.table(userList);

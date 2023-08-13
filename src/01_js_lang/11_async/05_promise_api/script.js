// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 1000)),
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)),
//     new Promise(resolve => setTimeout(() => resolve(3), 3000)),
// ]).then(values => console.log(values));

// let urls = [
//     "https://api.github.com/users/iliakan",
//     "https://api.github.com/users/remy",
//     "https://api.github.com/users/jeresig",
//     "https://api.github.com/users/Victor-Nikliaiev",
// ];

// let requests = urls.map(url => fetch(url));

// Promise.all(requests).then(responses => {
//     responses.forEach(response => {
//         console.log(`${response.url}: ${response.status}`);
//     });
// });

// const names = ["John", "Paul23_", "George", "Ringo", "Victor-Nikliaiev"];
// const requests = names.map(name =>
//     fetch(`https://api.github.com/users/${name}`)
// );

// Promise.all(requests)
//     .then(responses => {
//         for (const response of responses) {
//             console.log(`${response.url}: ${response.status}`);
//         }

//         return responses;
//     })
//     .then(responses => Promise.all(responses.map(response => response.json())))
//     .then(users => users.forEach(user => console.log(user.name)));

// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) =>
//         setTimeout(() => reject(new Error("Whoops!")), 2000)
//     ),
//     new Promise(resolve => setTimeout(() => resolve(3), 3000)),
// ]).catch(console.log);

// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 5000)),
//     2,
//     3,
// ]).then(console.log);

// const urls = [
//     "https://api.github.com/users/iliakan",
//     "https://api.github.com/users/remy",
//     "https://no-such-url",
// ];

// Promise.allSettled(urls.map(url => fetch(url))).then(results => {
//     results.forEach((result, index) => {
//         if (result.status === "fulfilled") {
//             console.log(`${urls[index]}: ${result.value.status}`);
//         }

//         if (result.status === "rejected") {
//             console.log(`${urls[index]}: ${result.reason.message}`);
//         }
//     });
// });

// Promise.race([
//     new Promise(resolve => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) =>
//         setTimeout(() => reject(new Error("Whoops!")), 2000)
//     ),
//     new Promise(resolve => setTimeout(() => resolve(3), 3000)),
// ])
//     .catch(console.log)
//     .then(console.log);

// Promise.any([
//     new Promise((resolve, reject) =>
//         setTimeout(() => reject(new Error("Whoops!")), 1000)
//     ),
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)),
//     new Promise(resolve => setTimeout(() => resolve(3), 3000)),
// ]).then(console.log);

// Promise.any([
//     new Promise((res, rej) =>
//         setTimeout(() => rej(new Error("Whoops!")), 1000)
//     ),
//     new Promise((res, rej) => setTimeout(() => rej(new Error("Ouch!")), 2000)),
// ]).catch(err => {
//     console.log(err.constructor.name);
//     console.log(err.errors[0].message);
//     console.log(err.errors[1].message);
// });

let cache = new Map();

function loadCashed(url) {
    if (cache.has(url)) {
        return Promise.resolve(cache.get(url));
    }

    return fetch(url)
        .then(res => res.text())
        .then(text => {
            cache.set(url, text);
            return text;
        });
}

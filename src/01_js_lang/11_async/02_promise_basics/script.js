// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Done :D");
//     }, 1000);
// });

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("Whoops!"));
//     }, 1000);
// });

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Done :D");
//     }, 1000);
// });

// promise.then(
//     result => console.log(result),
//     err => console.log(err)
// );

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("Whoops!"));
//     }, 1000);
// });

// promise.then(
//     result => console.log(result),
//     err => console.log(err.message)
// );

// let promise = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("Done :D");
//     }, 1000);
// });

// promise.then(result => console.log(result));

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("Whoops!"));
//     }, 1000);
// });

// promise.catch(err => console.log(err.message));

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("value");
//     }, 2000);
// })
//     .finally(() => {
//         console.log("Finally!");
//     })
//     .then(result => {
//         console.log(result);
//     });

// new Promise((resolve, reject) => {
//     throw new Error("Whoops!");
// })
//     .finally(() => {
//         console.log("Promise is ready :D");
//     })
//     .catch(err => {
//         console.log(err.message);
//     });

// let promise = new Promise(resolve => {
//     resolve("Done :D");
// });

// promise.then(result => {
//     console.log(result);
// });

// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement("script");
//         script.src = src;

//         script.onload = () => resolve(script);
//         script.onerror = () =>
//             reject(new Error(`Script load error for ${src}`));

//         document.head.append(script);
//     });
// }

// let promise = loadScript(
//     "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
// );

// promise.then(() => console.log(_.VERSION));

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log("Showed up after 3 seconds"));

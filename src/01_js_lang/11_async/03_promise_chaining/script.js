// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve(1);
//     }, 1000);
// })
//     .then(result => {
//         console.log(result);
//         return result * 2;
//     })
//     .then(result => {
//         return result * 2;
//     })
//     .then(result => {
//         console.log(result);
//     });

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 1000);
// });

// promise
//     .then(result => {
//         return result * 2;
//     })
//     .then(result => console.log(result));

// promise
//     .then(result => {
//         return result * 3;
//     })
//     .then(result => console.log(result));

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 1000);
// })
//     .then(result => {
//         console.log(result);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(result * 2);
//             }, 1000);
//         });
//     })
//     .then(result => {
//         console.log(result);
//     });

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 1000);
// })
//     .then(result => {
//         console.log(result);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(result * 2);
//             }, 1000);
//         });
//     })
//     .then(result => {
//         console.log(result);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(result * 2);
//             }, 1000);
//         });
//     })
//     .then(result => {
//         console.log(result);
//     });

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

// loadScript("./scripts/script1.js")
//     .then(script => loadScript("./scripts/script2.js"))
//     .then(script => loadScript("./scripts/script3.js"))
//     .then(script => {
//         one();
//         two();
//         three();
//     });

// function Thenable(num) {
//     this.num = num;

//     this.then = function (resolve, reject) {
//         console.log(resolve);
//         setTimeout(() => {
//             resolve(this.num * 2);
//         }, 1000);
//     };
// }

// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve(1);
//     }, 1000);
// })
//     .then(result => {
//         return new Thenable(result);
//     })
//     .then(result => {
//         console.log(result);
//     });

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
    .then(user => console.log(user.name));

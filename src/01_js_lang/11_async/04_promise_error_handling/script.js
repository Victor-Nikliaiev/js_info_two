// fetch("https://no-such.sr.blabla")
//     .then(res => res.json())
//     .catch(err => console.log(err.message));

// new Promise(resolve => {
//     throw new Error("Whoops!");
// }).catch(err => {
//     console.log(err.message);
// });

// new Promise((res, rej) => {
//     res("ok");
// })
//     .then(res => {
//         blalba();
//     })
//     .catch(err => {
//         console.log(err.message);
//     });

// new Promise((res, rej) => {
//     res("ok");
// })
//     .then(res => {
//         throw new Error("Whoops!");
//     })
//     .catch(err => {
//         console.log(err.message);
//     })
//     .then(() => {
//         console.log("Next successful then :D");
//     });

// new Promise((resolve, reject) => {
//     throw new Error("Whoops!");
// })
//     .catch(error => {
//         if (error instanceof URIError) {
//             console.log("URI error!");
//             return;
//         }

//         console.log("Can't handle such error :(");
//         throw error;
//     })
//     .then(() => {
//         console.log("Next successful then :D");
//     })
//     .catch(err => {
//         console.log(err.message);
//     });

window.addEventListener("unhandledrejection", event => {
    console.log(event.promise);
    console.log(event.reason);
});

new Promise((resolve, reject) => {
    throw new Error("Whoops!");
});

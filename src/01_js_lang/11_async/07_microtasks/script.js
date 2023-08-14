// let promise = Promise.resolve("Promise done.");
// promise.then(res => {
//     console.log(res);
// });

// console.log("Code finished.");

// Promise.resolve(1)
//     .then(console.log)
//     .then(() => console.log("Done!"));

// console.log("Code finished.");

let promise = Promise.reject(new Error("Whoops!"));
setTimeout(() => {
    promise.catch(err => {
        console.log("timeOut: " + err.message);
    });
}, 1000);

process.on("unhandledRejection", err => {
    console.log(err.message);
});

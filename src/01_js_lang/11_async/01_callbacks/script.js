function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

// loadScript("./example.js", () => {
//     fromExample();
// });
// console.log("This line after loading script...");

// loadScript(
//     "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
//     () => {
//         console.log("It's loaded!");
//         console.log(typeof _.after);
//     }
// );

// loadScript("./script1.js", () => {
//     loadScript("./script2.js", () => {
//         loadScript("./script3.js", () => {
//             console.log("All done! :D");
//         });
//     });
// });

loadScript("./blabla.js", (error, script) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Script loaded!");
    }
});

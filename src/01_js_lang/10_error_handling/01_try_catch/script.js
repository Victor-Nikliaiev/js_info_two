// try {
//     console.log("Start of try block");
//     console.log("End of try runs");
// } catch (err) {
//     console.log("Catch is ignored, because there are no errors.");
// }

import { alert, confirm, prompt } from "../../../utils.js";

// try {
//     console.log("Start of try block");
//     lalala;
//     console.log("Never reached here");
// } catch (err) {
//     console.log("Error has occurred!");
// }

// try {
//     setTimeout(function () {
//         console.log(Blalbla);
//     });
// } catch (err) {
//     console.log("Error has occurred!");
// }

// setTimeout(function () {
//     try {
//         console.log(Blalbla);
//     } catch (err) {
//         console.log("Error has occurred!");
//     }
// });

// try {
//     lalala;
// } catch (err) {
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
// }

// try {
//     fdff;
// } catch {
//     console.log("Error has occurred!");
// }

// let json = "{ bad bad json :D }";

// try {
//     let user = JSON.parse(json);
//     console.log(user.name);
// } catch (err) {
//     console.log(
//         "Our apologies! the data has been corrupted! We'll request it onefold more."
//     );
//     console.log(err.name);
//     console.log(err.message);
//     // console.log(err.stack);
// }

// let json = '{"age": 30, "nasme": "Vic"}';

// try {
//     let user = JSON.parse(json);

//     if (!user.name) {
//         throw new SyntaxError("Incomplete data: no name.");
//     }

//     console.log(user.name);
// } catch (err) {
//     console.log(`JSON Error: ${err.message}`);
// }

// function readData() {
//     let json = '{"age": 30, "name": "Vic"}';

//     try {
//         let user = JSON.parse(json);

//         if (!user.name) {
//             throw new SyntaxError("Incomplete data: no name.");
//         }

//         blabla();
//     } catch (err) {
//         if (err.name === "SyntaxError") {
//             console.log(`JSON Error: ${err.message}`);
//         } else {
//             throw err;
//         }
//     }
// }

// try {
//     readData();
// } catch (err) {
//     console.log(err.name);
//     console.log(err.message);
// }

// try {
//     alert("try");
//     if (confirm("Make an error?: ")) BAD_CODE();
// } catch {
//     alert("catch");
// } finally {
//     alert("finally");
// }

// let num = +prompt("Enter a positive integer number: ");

// let diff, result;

// function fib(n) {
//     if (n < 0 || Math.trunc(n) != n) {
//         throw new Error("Must not be negative, and also an  integer.");
//     }
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// let start = Date.now();

// try {
//     result = fib(num);
// } catch {
//     result = 0;
// } finally {
//     diff = Date.now() - start;
// }

// console.log(result || "error occurred");
// console.log(`Execution took: ${diff}ms`);

// function func() {
//     try {
//         return "returned 1";
//     } finally {
//         console.log("finally");
//     }
// }

// console.log(func());

process.on("uncaughtException", err => {
    console.log(err.name);
    console.log(err.message);
});

function readData() {
    badFunc();
}

readData();

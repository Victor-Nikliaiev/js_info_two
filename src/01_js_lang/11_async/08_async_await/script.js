// async function f() {
//     return 1;
// }

import { prompt } from "../../../utils.js";

// f().then(console.log);

// async function f() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("It's resolved :D"), 1000);
//     });

//     let result = await promise;

//     console.log(result);
// }

// f();

// async function showAvatar() {
//     let response = await fetch(
//         "https://raw.githubusercontent.com/Victor-Nikliaiev/js_info_two/main/src/01_js_lang/11_async/03_promise_chaining/user.json"
//     );
//     let user = await response.json();

//     let githubResponse = await fetch(
//         `https://api.github.com/users/${user.name}`
//     );
//     let githubUser = await githubResponse.json();

//     let img = document.createElement("img");
//     img.src = githubUser.avatar_url;
//     document.body.append(img);

//     await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//     img.remove();

//     return githubUser;
// }

// showAvatar();

// let response = await fetch(
//     "https://raw.githubusercontent.com/Victor-Nikliaiev/js_info_two/main/src/01_js_lang/11_async/03_promise_chaining/user.json"
// );

// let user = await response.json();

// console.log(user);

// console.log("End of script.");

// class Thenable {
//     constructor(num) {
//         this.num = num;
//     }
//     then(resolve, reject) {
//         setTimeout(() => resolve(this.num * 2), 4000);
//     }
// }

// const process = async () => {
//     let result = await new Thenable(2);
//     console.log(result);
// };

// process();

// class Waiter {
//     async wait() {
//         return await Promise.resolve(1);
//     }
// }

// new Waiter().wait().then(console.log);

// async function f() {
//     try {
//         let response = await fetch("/no-such-url");
//         let user = await response.json();
//         return user;
//     } catch (err) {
//         console.log(err.message);
//         return err;
//     }
// }

// f().then(res => {
//     console.log(res.name);
// });

// async function f() {
//     let response = await fetch("/no-such-url");
// }

// f().catch(err => console.log(err.message));

// let result = await Promise.all([
//     new Promise(res => setTimeout(() => res(1), 3000)),
//     2,
//     3,
// ]);
// console.log(result);

// async function loadJSON(url) {
//     try {
//         let response = await fetch(url);

//         if (response.status === 200) {
//             return await response.json();
//         } else {
//             throw new Error(response.status);
//         }
//     } catch (err) {
//         console.log(err.message);
//     }
// }

// loadJSON("/no-such-url");

// class HttpError extends Error {
//     constructor(response) {
//         super(`${response.status} for ${response.url}`);
//         this.name = this.constructor.name;
//         this.response = response;
//     }
// }

// async function loadJSON(url) {
//     let response = await fetch(url);

//     if (response.status === 200) {
//         return response.json();
//     }

//     throw new HttpError(response);
// }

// async function demoGithubUser() {
//     let user;

//     while (true) {
//         try {
//             let name = prompt("Enter a github username: ");

//             user = await loadJSON(`https://api.github.com/users/${name}`);
//             break;
//         } catch (err) {
//             if (err instanceof HttpError && err.response.status === 404) {
//                 console.log("No such user, please reenter.");
//                 return;
//             }

//             throw err;
//         }
//     }

//     console.log(`Full name: ${user.name}`);
//     return user;
// }

// demoGithubUser();

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
    wait().then(console.log);
}

f();

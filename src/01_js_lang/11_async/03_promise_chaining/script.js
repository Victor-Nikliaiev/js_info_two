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

// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(res => res.json())
//     .then(user => console.log(user.name));

const USER_URL =
    "https://raw.githubusercontent.com/Victor-Nikliaiev/js_info_two/main/src/01_js_lang/11_async/03_promise_chaining/user.json";

function loadJSON(url) {
    return fetch(url).then(res => res.json());
}

function loadGithubUser(name) {
    return loadJSON(`https://api.github.com/users/${name}`);
}

function showAvatar(githubUser) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement("img");
        img.src = githubUser.avatar_url;
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    });
}

// fetch(USER_URL)
//     .then(response => response.json())
//     .then(user => fetch(`https://api.github.com/users/${user.name}`))
//     .then(response => response.json())
//     .then(user => {
//         return new Promise(resolve => {
//             const img = document.createElement("img");
//             img.src = user.avatar_url;
//             document.body.append(img);

//             setTimeout(() => {
//                 img.remove();
//                 resolve(user);
//             }, 3000);
//         });
//     })
//     .then(user => {
//         setTimeout(() => {
//             alert(`Stopped showing ${user.login}`);
//         }, 1);
//     });

loadJSON(USER_URL)
    .then(user => loadGithubUser(user.name))
    .then(user => showAvatar(user))
    .then(user => {
        setTimeout(() => {
            alert(`Stopped showing ${user.login}`);
        }, 1);
    });

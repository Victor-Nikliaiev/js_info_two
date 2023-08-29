// let target = {};
// let proxy = new Proxy(target, {});

import { proxyHandler } from "../../../utils.js";

// proxy.test = 5;
// console.log(proxy.test);

// for (let key in proxy) console.log(key);

// let numbers = [0, 1, 2];

// numbers = new Proxy(numbers, {
//     get(target, prop) {
//         if (prop in target) {
//             return target[prop];
//         } else {
//             return 0;
//         }
//     },
// });

// console.log(numbers[1]);
// console.log(numbers[122]);

// let dictionary = {
//     Hello: "Привет",
//     Bye: "Пока",
// };

// dictionary = new Proxy(dictionary, {
//     get(target, prop) {
//         if (prop in target) {
//             return target[prop];
//         }

//         return prop;
//     },
// });

// console.log(dictionary.Hello);
// console.log(dictionary.Bye);
// console.log(dictionary.Morning);

// let numbers = [];

// numbers = new Proxy(numbers, {
//     set(target, prop, value) {
//         if (typeof value === "number") {
//             target[prop] = value;
//             return true;
//         }

//         return false;
//     },
// });

// numbers.push(5);
// numbers.push(6);
// console.log(numbers);
// console.log(Array.isArray(numbers));
// numbers.push("7");

// let user = {
//     name: "John",
//     age: 30,
//     _password: "***",
// };

// user = new Proxy(user, {
//     ownKeys(target) {
//         return Object.keys(target).filter(key => !key.startsWith("_"));
//     },
// });

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(Object.getOwnPropertyDescriptors(user));

// let user = {
//     name: "John",
//     _password: "secret",
// };

// user = new Proxy(user, proxyHandler);

// user.name = "Vic";
// user.age = 34;

// console.log(user._password);
// user._password = "***";

// let range = {
//     from: 1,
//     to: 10,
// };

// range = new Proxy(range, {
//     has(target, prop) {
//         return prop >= target.from && prop <= target.to;
//     },
// });

// console.log(5 in range);
// console.log(50 in range);

// function delay(f, ms) {
//     return new Proxy(f, {
//         apply(target, thisArgs, args) {
//             setTimeout(() => target.apply(thisArgs, args), ms);
//         },
//     });
// }

// function sayHi(user) {
//     console.log(`Hi, ${user}`);
// }

// sayHi = delay(sayHi, 2000);
// sayHi("Victor");
// console.log(sayHi.length);

// let user = {};

// Reflect.set(user, "name", "John");

// console.log(user.name);

// let user = {
//     name: "Vic",
// };

// user = new Proxy(user, {
//     get(target, prop, receiver) {
//         console.log(`GET: ${prop}`);
//         return Reflect.get(target, prop, receiver);
//     },

//     set(target, prop, value, receiver) {
//         console.log(`SET: ${prop} = ${value}`);
//         return Reflect.set(target, prop, value, receiver);
//     },
// });

// let name = user.name;
// user.name = "Victor";

// let user = {
//     _name: "John",
//     get name() {
//         return this._name;
//     },
// };

// let userProxy = new Proxy(user, {
//     get(target, prop, receiver) {
//         return Reflect.get(...arguments);
//     },
// });

// let admin = {
//     __proto__: userProxy,
//     _name: "Vic",
// };

// console.log(admin._name);

// let map = new Map();

// let proxy = new Proxy(map, {
//     get(target, prop, receiver) {
//         let value = Reflect.get(...arguments);
//         return typeof value === "function" ? value.bind(target) : value;
//     },
// });

// proxy.set("name", "Victor");
// console.log(proxy.get("name"));

// class User {
//     #name = "Victor";

//     getName() {
//         return this.#name;
//     }
// }

// const user = new Proxy(new User(), {
//     get(target, prop, receiver) {
//         const value = Reflect.get(...arguments);
//         return typeof value === "function" ? value.bind(target) : value;
//     },
// });

// console.log(user.getName());

// let object = {
//     data: "Valuable data",
// };

// let { proxy, revoke } = Proxy.revocable(object, {});
// console.log(proxy.data);

// revoke();
// console.log(proxy.data);

// let revokes = new WeakMap();

// let object = {
//     data: "Valuable data",
// };

// let { proxy, revoke } = Proxy.revocable(object, {});

// revokes.set(proxy, revoke);
// console.log(proxy.data);

// revokes.get(proxy)();
// console.log(proxy.data);

// let user = {
//     name: "Vic",
// };

// // function wrap(object) {
// //     return new Proxy(object, {
// //         get(target, prop, receiver) {
// //             if (target[prop]) {
// //                 return Reflect.get(target, prop, receiver);
// //             }

// //             throw new ReferenceError(`Property does not exist: ${prop}`);
// //         },
// //     });
// // }

// // user = wrap(user);
// // console.log(user.name);
// // console.log(user.age);

// let array = [1, 2, 3];

// array = new Proxy(array, {
//     get(target, prop, receiver) {
//         if (prop < 0) {
//             prop = +prop + target.length;
//         }

//         return Reflect.get(target, prop, receiver);
//     },
// });

// console.log(array[0]);
// console.log(array[-1]);

function makeObservable(target) {
    let handlers = Symbol("handlers");
    target[handlers] = [];

    target.observe = function (handler) {
        this[handlers].push(handler);
    };

    return new Proxy(target, {
        set(target, prop, value, receiver) {
            let success = Reflect.set(...arguments);

            if (success) {
                target[handlers].forEach(handler => handler(prop, value));
            }

            return success;
        },
    });
}

let user = {};

user = makeObservable(user);
user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

user.name = "Vic";

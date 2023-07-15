// globalThis.count = 0;
// console.log(globalThis.count);

var gVar = 1;

// console.log(globalThis.gVar); // undefined

function testy() {
    console.log("Test and tested :D");
}

// globalThis.testy(); // error

// let gLet = 5;

// console.log(globalThis.gLet);

globalThis.currentUser = {
    name: "Vic",
};

console.log(currentUser.name);

let clone = structuredClone(globalThis.currentUser);
// console.log(clone);

console.log(globalThis.currentUser.name);

console.log(!!globalThis.Promise);

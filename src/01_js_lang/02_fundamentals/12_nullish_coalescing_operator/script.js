// let user;
// console.log(user ?? "Guest");

// let firstName = null;
// let lastName = null;
// let nickname = "Supercoder";

// console.log(firstName ?? lastName ?? nickname ?? "Guest");

// let height = 0;

// console.log(height || 100);
// console.log(height ?? 100);

// let height = null;
// let width = null;

// let area = (height ?? 100) * (width ?? 50);
// console.log(area);

// let x = (1 && 2) ?? 3;
// console.log(x);

let height;
height ??= 100;
console.log(height); // 100

let user;
user ||= "Guest";
console.log(user); // "Guest"

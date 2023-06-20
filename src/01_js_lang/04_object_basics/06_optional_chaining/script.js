// let user = {};

// console.log(user.address ? user.address.street : undefined);
// console.log(user.address && user.address.street && user.address.street.name);

// let user = { address: { street: {} } };

// console.log(user?.address?.street?.name);

// let document = null;
// let html = document?.querySelector(".elem")?.innerHTML;

// let user = null;

// console.log(user?.name);
// console.log(user?.address.street);

// let user = null;
// let x = 0;

// user?.sayHi(x++);
// console.log(x);

// let userGuest = {};
// let userAdmin = {
//     admin() {
//         console.log("I am an admin");
//     },
// };

// userGuest.admin?.();
// userAdmin.admin?.();

// let key = "firstName";

// let user1 = {
//     firstName: "John",
// };

// let user2 = null;

// console.log(user1?.[key]);
// console.log(user2?.[key]);
// delete user2?.[key];

let user = {};
user ? (user.name = "John") : null;
console.log(user);

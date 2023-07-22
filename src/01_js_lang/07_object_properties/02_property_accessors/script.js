// let user = {
//     name: "Vic",
//     surname: "Onlight",

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },

//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },
// };

// console.log(user.fullName);
// user.fullName = "Arhis Alight";
// console.table(user);

// let user = {
//     name: "Vic",
//     surname: "Onlight",
// };

// Object.defineProperty(user, "fullName", {
//     get() {
//         return `${this.name} ${this.surname}`;
//     },

//     set(value) {
//         [this.name, this.surname] = value.split(" ");
//     },
// });

// user.fullName = "Victor Boslawski";
// console.table(user);

// let user = {
//     get name() {
//         return this._name;
//     },

//     set name(value) {
//         if (value.length < 4) {
//             throw new Error("Value is too short, at least 4 characters");
//         }

//         this._name = value;
//     },
// };

// user.name = "Peter";
// user.name = "Pete";
// user.name = "Pee";

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get() {
            let thisYear = new Date().getFullYear();
            return thisYear - this.birthday.getFullYear();
        },
    });
}

let user = new User("Vic", new Date("1989-03-23"));

console.log(user);

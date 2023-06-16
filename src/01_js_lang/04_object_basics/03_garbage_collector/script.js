// let user = {
//     name: "John",
//     age: 30,
// };

// user = null;

// let user = {
//     name: "John",
//     age: 30,
// };

// let admin = user;
// user = null;

function marry(man, woman) {
    man.wife = woman;
    woman.husband = man;

    return {
        father: man,
        mother: woman,
    };
}

let family = marry(
    {
        name: "John",
        age: 30,
    },
    {
        name: "Jane",
        age: 20,
    }
);

// console.table(family);
// console.dir(family);

delete family.father;
delete family.mother.husband;

console.table(family);
console.dir(family);

family = null;

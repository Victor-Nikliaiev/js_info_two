// let message = "Hello";
// let phrase = message;

import _ from "lodash";

// let user = {
//     name: "John",
// };

// let admin = user;

// let user = { name: "John" };
// let admin = user;

// admin.name = "Vic";
// console.table(user);
// console.table(admin);

{
    let a = {};
    let b = a;

    // console.log(a == b);
    // console.log(a === b);
}

{
    let a = {};
    let b = {};
    // console.log(a == b);
    // console.log(a === b);
}

{
    const user = {
        name: "John",
    };

    user.name = "Vic";
    // console.log(user.name);
}

{
    let user = {
        name: "John",
        age: 20,
        isAdmin: true,
        isHuman: false,
    };

    let clone = {};

    for (let key in user) {
        clone[key] = user[key];
    }

    clone.name = "Pete";
    // console.log(user);
}

{
    let user = { name: "Vic" };

    let permission1 = { canView: true };
    let permission2 = { canEdit: true };

    Object.assign(user, permission1, permission2);

    // console.table(user);
}

{
    let user = { name: "Vic" };

    Object.assign(user, { name: "John", age: 20 });
    // console.log(user);
}

{
    let user = { name: "Vic", age: 34 };
    let clone = Object.assign({}, user);
    // console.log(clone);
    // console.log(clone === user);
}

{
    let user = {
        name: "Vic",
        sizes: {
            height: 205,
            weight: 90,
        },
    };

    // console.log(user.sizes.weight);

    let clone = Object.assign({}, user);
    // console.log(user.sizes === clone.sizes);
    user.sizes.height = 210;
    // console.log(clone.sizes);
}

{
    let user = {
        name: "Vic",
        age: 34,
        sizes: {
            height: 205,
            weight: 90,
        },
    };

    let clone = structuredClone(user);
    // console.log(clone);
    // console.log(clone.sizes === user.sizes);
    user.sizes.height = 210;
    // console.log(clone.sizes);
    // console.log(user.sizes);
}

{
    let user = {};

    user.me = user;
    let clone = structuredClone(user);
    // console.log(clone.me === clone);

    let clone2 = _.cloneDeep(user);
    console.log(clone2.me === clone2);
    console.log(clone.me === clone2.me);
}

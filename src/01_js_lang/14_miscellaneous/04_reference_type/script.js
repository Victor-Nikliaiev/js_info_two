// let user = {
//     name: "Vic",
//     go: function () {
//         console.log(this.name);
//     },
// };

// user.go();

let obj, method;

obj = {
    go: function () {
        console.log(this);
    },
};

obj.go(); // (1) [object Object]

obj.go();

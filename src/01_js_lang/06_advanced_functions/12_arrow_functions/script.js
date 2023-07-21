let group = {
    title: "Our Group",
    students: ["Vic", "John", "Mary", "Pete"],

    showList() {
        this.students.forEach(printList.bind(this));
    },
};

function printList() {
    console.log(`${this.title}: ${arguments[0]}`);
}

group.showList();

// function defer(f, ms) {
//     return function () {
//         setTimeout(
//             function () {
//                 f.apply(this, arguments);
//             }.bind(this, ...arguments),
//             ms
//         );
//     };
// }

// function sayHi(who) {
//     console.log("Hello, " + who);
// }

// let sayHiDeferred = defer(sayHi, 2000);
// sayHiDeferred("John");

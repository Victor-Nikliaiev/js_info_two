// console.log(true || false);
// console.log(true || true);
// console.log(false || true);
// console.log(false || false);

// if (1 || 0) {
//     console.log("Truly!");
// }

// let hour = 9;
// let isWeekend = true;

// if (hour < 9 || hour > 18 || isWeekend) {
//     console.log("The office is closed!");
// }

// console.log(1 || 0);
// console.log(0 || 1);
// console.log(null || 1);
// console.log(null || 0 || 1);
// console.log(undefined || null || 0);

// let firstName = "";
// let lastName = "";
// let nickname = "SuperCoder";

// console.log(firstName || lastName || nickname || "Anonymous");

// true || console.log("Not printed!");
// false || console.log("Printed!");

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);
// console.log(null && null);
// console.log(undefined && null);
// console.log(undefined && undefined);
// console.log(null && undefined);
// console.log(undefined && null);

// let hour = 12;
// let minutes = 30;

// if (hour == 12 && minutes == 30) {
//     console.log("It's 12:30");
// }

// if (1 && 0) {
//     console.log("Won't work because result is falsy!");
// }

// console.log(1 && 0);
// console.log(1 && 5);

// console.log(null && 5);
// console.log(0 && "No matter what!");
// console.log(1 && 2 && null && 3);
// console.log(1 && 2 && 3);

// console.log((2 && null) || (3 && 1));

// let x = 1;

// x > 0 && console.log("x is greater than 0");

// console.log(!!"Test");
// console.log(!!null);

// console.log(console.log(1) || 2 || console.log(3));

// let age = 90;

// if (age >= 14 && age <= 90) {
//     console.log("Proper age in range 14-90");
// }

// let age = 91;

// if (age < 14 || age > 90) {
//     console.log("I: Age is out of range 14-90");
// }

// if (!(age >= 14 && age <= 90)) {
//     console.log("N: Age is out of range 14-90");
// }

let userName = prompt("Who's there?", "");

if (userName == "Admin") {
    let password = prompt("What's the password?", "");

    if (password == "TheMaster") {
        console.log("Welcome!");
    } else if (!password) {
        console.log("Canceled");
    } else {
        console.log("Wrong password!");
    }
} else if (!userName) {
    console.log("Canceled");
} else {
    console.log("I don't know you!");
}

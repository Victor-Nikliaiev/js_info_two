import { alert, prompt } from "../../../utils.js";

// let singe = "single quote";
// let double = "double quote";
// let backticks = `backticks`;

// function sum(a, b) {
//     return a + b;
// }

// console.log(`1 + 2 = ${sum(1, 2)}`);

// let questList = `Guests:
//   *  John
//   *  Mary
//   *  Victor`;

// console.log(questList);

// let questList = "Guests:
// * John";

// let questList = "Guests:\n * John \n * Mary\n * Victor";
// console.log(questList);

// let str1 = "Hello\nWorld";
// let str2 = `Hello
// World`;
// console.log(str1);
// console.log(str2);
// console.log(str1 === str2);

// let backslash = "Backslash \\";
// console.log(backslash);
// console.log("I'm the one:D!");
// console.log("Hi!\n".length);

// let str = "Hello!";
// console.log(str[0]);
// console.log(str.at(0));
// console.log([1, 2, 3].at(0));
// console.log("Hello".at(-2));
// console.log(str[str.length - 1]);
// let result = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
// }
// console.log(result);

// let str = "Hello!";
// console.log(str[-1]);
// console.log(str.at(-1));

// for (let char of str) {
//     console.log(char);
// }

// let str = "Hi!";
// // str[0] = "h";
// str = "h" + str[1];
// console.log(str);

// alert("Interface".toLowerCase());
// alert("Interface".toUpperCase());
// alert("Interface"[0].toLowerCase());

// let str = "Widget with id";
// alert(str.indexOf("Widget"));
// alert(str.indexOf("widget"));
// alert(str.indexOf("id"));
// alert(str.indexOf("id", 2));

// let str = "As sly as a fox, as strong as an ox.";

// let result = {
//     target: "as",
//     counter: 0,
//     indexes: [],
//     pos: -1,
// };

// while (true) {
//     result.pos = str.indexOf(result.target, ++result.pos);

//     if (result.pos === -1) {
//         break;
//     }

//     result.counter++;
//     result.indexes.push(result.pos);
// }

// console.log(result);

// console.log(
//     `"${result.target}" occurs ${result.counter} times\nat indexes: ${result.indexes}`
// );

// let str = "Widget with id";

// if (str.indexOf("Widget") !== -1) {
//     console.log("Found");
// }

// alert(str.includes("Widget"));
// alert(str.includes("Hello"));
// console.log("Widget".includes("id", 3));
// console.log("Widget".startsWith("Wid"));
// console.log("Widget".endsWith("get"));
// const str = "stringify";

// console.log(str.slice(0, 5));
// console.log(str.slice(0, 1));
// console.log(str.slice(2));
// console.log(str.slice(-4, -1));

// console.log(str.substring(0, 3));
// console.log(str.substring(3, 0));
// console.log(str.slice(3, 0));

// let str = "stringify";
// console.log(str.substr(2, 4));
// console.log(str.substr(-4, 2));

// console.log("a" > "Z");
// console.log("Österreich" > "Zealand");

// console.log("Z".codePointAt(0).toString(16));
// console.log("z".codePointAt(0));
// console.log("z".codePointAt(0).toString(16));

// console.log(String.fromCodePoint(122));
// console.log(String.fromCodePoint(0x5a));

// let str = "";

// for (let i = 65; i <= 220; i++) {
//     str += String.fromCodePoint(i);
// }
// console.log(str);

// console.log("Österreich".localeCompare("Zealand"));
// console.log("a".localeCompare("á"));
// console.log("*".repeat(5));

// console.log("   hey                   ".trim());

export function ucFirst(str) {
    if (!str) return str;

    return str.at(0).toUpperCase() + str.slice(1);
}

export function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

export function truncate(str, userLength) {
    if (str.length <= userLength) return str;

    return str.slice(0, userLength - 1) + "...";
}

export function extractCurrencyValue(str) {
    return +str.slice(1);
}

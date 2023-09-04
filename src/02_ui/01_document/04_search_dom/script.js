// const elem = document.getElementById("elem");
// elem.style.background = "green";

// const liCollection = document.querySelectorAll("ul > li:last-child");

// for (const elem of document.body.children) {
//     if (elem.matches('a[href$="zip"]')) {
//         console.log("The archive can be found at " + elem.href);
//     }
// }

// const chapter = document.querySelector(".chapter");
// console.log(chapter.closest(".book"));
// console.log(chapter.closest("h1"));

// console.log(
//     document.getElementsByName("my-form")[0].querySelectorAll(".article")
// );

///////////////////// Search for elements //////////////////////

// 1
const ageTable = document.querySelector("#age-table");
// console.log(ageTable);

// 2
const labelElements = ageTable.querySelectorAll("label");
// console.log(labelElements);

// 3
const firstTd = ageTable.querySelector("td");
// console.log(firstTd);

// 4
const searchForm = document.getElementsByName("search")[0];
// console.log(searchForm);

// 5
const firstInput = searchForm.querySelector("input");

// 6
const lastInput = searchForm.querySelectorAll("input")[searchForm.length - 1];
console.log(lastInput);

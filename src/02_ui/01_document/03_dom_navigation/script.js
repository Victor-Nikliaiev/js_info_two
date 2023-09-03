// console.log(document.body.firstChild);
// console.log(document.body.childNodes[0]);

// console.log(document.body.lastChild);
// console.log(document.body.childNodes[document.body.childNodes.length - 1]);

// console.log(document.body.hasChildNodes());
// console.log(document.body.firstChild.hasChildNodes());

// console.log(
//     Array.from(document.body.childNodes).filter(
//         node => node.nextSibling === document.body.lastChild
//     )
// );
// let elem = document.body.lastElementChild;

// while ((elem = elem.parentElement)) {
//     console.log(elem.tagName);
// }

// for (let elem of document.body.children) {
//     console.log(elem.textContent);
// }

// const table = document.getElementById("table");

// console.log(table.rows[1].cells[0]);

let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = "red";
}

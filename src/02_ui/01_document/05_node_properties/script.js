// console.log(document.body.constructor.name);
// console.log(document.body instanceof HTMLBodyElement);

// HTMLDivElement.prototype.watch = function () {
//     console.log("Watching...");
// };

// const div1 = document.createElement("div");
// div1.innerHTML = "Test:D";
// document.body.append(div1);
// div1.watch();

// console.log(document.body.firstChild.nodeType);
// console.log(document.nodeType);

// console.log(document.body.nodeName);
// console.log(document.body.tagName);

// console.log(document.body.firstChild.tagName);
// console.log(document.body.firstChild.nodeName);

// console.log(document.tagName);
// console.log(document.nodeName);

// setTimeout(() => {
//     document.body.innerHTML += "<p>Test</p>";
// }, 2000);

// const text = document.body.firstChild;
// console.log(text.nodeValue.trim());
// console.log(text.nextSibling.data.trim());

// const news = document.querySelector("#news");
// let t = news.textContent
//     .replace(/[\n\r]+/g, "")
//     .split(" ")
//     .filter(letter => letter)
//     .join(" ");
// console.log(t);

// const input = prompt("What's your name? ");

// const elem1 = document.getElementById("elem1");
// const elem2 = document.getElementById("elem2");

// elem1.innerHTML = input;
// elem2.textContent = input;

// const test = document.getElementById("test");
// test.hidden = false;

// setInterval(() => {
//     test.hidden = !test.hidden;
// }, 10   );

// const elem = document.getElementById("elem");

// elem.onclick = e => {
//     e.preventDefault();
//     elem.value = "";
// };

const list = document.querySelector("ul");

for (let li of list.querySelectorAll("li")) {
    let text = li.firstChild.data.trim();
    let count = li.querySelectorAll("li").length;

    console.log(`${text}: ${count}`);
}

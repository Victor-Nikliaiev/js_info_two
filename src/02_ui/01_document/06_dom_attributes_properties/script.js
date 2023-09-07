// document.body.myData = {
//     name: "John",
//     age: 30,
// };

// console.log(document.body.myData);
// Element.prototype.sayTagName = function () {
//     return this.tagName;
// };

// console.log(document.body.attributes);
// console.log(document.body.getAttribute("something"));

// const elem = document.getElementById("elem");

// console.log(elem.getAttribute("about"));

// elem.setAttribute("type", "essay");

// console.log(elem.attributes[2].value);

// const userInput = document.getElementById("userInput");

// setTimeout(() => {
//     console.log(userInput.setAttribute("value", "dddd"));
// }, 3000);

// const aLink = document.getElementById("aLink");

// console.log(aLink.href);
// console.log(aLink.getAttribute("href"));

// const elephant = {
//     name: "Banbo",
//     age: 3,
// };

// const infoElements = document.querySelectorAll("[show-info]");

// for (let elem of infoElements) {
//     let field = elem.getAttribute("show-info");
//     elem.innerHTML = `${field}: ${elephant[field]}`;
// }

// const orders = document.querySelectorAll(".order");

// orders.forEach(order => (order.dataset.orderState = "pending"));

// console.log(document.body.dataset);

// const widget = document.querySelector("[data-widget-name]");

// console.log(widget);
// console.log(widget.dataset.widgetName);

const links = document.querySelectorAll("ul > li > a");

links.forEach(link => {
    let href = link.getAttribute("href");

    if (!href) return;
    if (!href.includes("://")) return;
    if (href.startsWith("http://internal.com")) return;

    link.style.color = "orange";
});

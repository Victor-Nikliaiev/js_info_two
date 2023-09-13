// console.log(document.body.className);
// console.log(document.body.classList);
// document.body.classList.add("article");
// document.body.classList.remove("test");
// document.body.classList.replace("comment", "title");
// console.log(document.body.className);

// for (const className of document.body.classList) {
//     console.log(className);
// }

// document.body.style.width = "100px";
// document.body.style.height = "100px";
// document.body.style.background = "green";

// const ul = document.querySelector("ul");
// const secondLi = ul.firstElementChild.nextElementSibling;
// let toggle = false;

// setInterval(() => {
//     setOpacity(secondLi, toggle);
//     toggle = !toggle;
// }, 80);

// function setOpacity(element, toggle) {
//     if (toggle) {
//         element.style.opacity = "0";
//         return;
//     }

//     element.style.opacity = "1";
// }

// document.body.style.background = "green";

// setTimeout(() => {
//     document.body.style.removeProperty("background");
// }, 4000);

// for (let property of document.body.style) {
//     document.body.style.removeProperty(property);
// }

// document.body.style.background = "green";
// document.body.style.margin = "100px";

// const computedStyles = getComputedStyle(document.body);

// console.log(computedStyles.backgroundColor);
// console.log(computedStyles.margin);
// console.log(computedStyles.fontSize);
// console.log(computedStyles.width);

function showNotification({ top = 0, right = 0, html, className = null }) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.style.top = `${top}px`;
    notification.style.right = `${right}px`;
    notification.innerHTML = html;

    if (className) {
        notification.classList.add(className);
    }

    document.body.append(notification);

    setTimeout(() => {
        notification.remove();
    }, 1500);
}

let i = 1;
setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: "Notification " + i++,
        className: "test",
    });
}, 2000);

/* eslint-disable no-unused-vars */
// function countRabbits() {
//     [1, 2, 3].forEach(alert);
// }

// const elem = document.querySelector("#elem");

// elem.onclick = function () {
//     alert("Hello!");
// };

// const elem = document.getElementById("elem");

// elem.onclick = function () {
//     alert("After");
// };

let button = document.querySelector("button");

// button.onclick = function () {
//     console.log(this.innerHTML);
// };

// let counter = 0;
function showInnerHTML(event) {
    if (counter === 2) {
        this.removeEventListener("click", showInnerHTML);
    }

    console.log(this.innerHTML);
    console.log(event);
    counter++;
}
// button.addEventListener("click", showInnerHTML);

function trackEventListenersDecorator(target, handlers = Symbol["handlers"]) {
    target[handlers] = [];

    target.addEventListenerAndSave = function (type, handler, options) {
        this[handlers].push({ type, handler, options });
        this.addEventListener(type, handler, options);
        console.log(this[handlers]);
    };

    target.removeAndDeleteEventListener = function (type) {
        this[handlers].forEach(eventInfo => {
            if (eventInfo.type === type) {
                this.removeEventListener(type, eventInfo.handler);
            }
        });

        this[handlers] = this[handlers].filter(
            handler => handler.type !== type
        );
    };

    return target;
}

// button = trackEventListenersDecorator(button);

// button.addEventListenerAndSave("click", showInnerHTML);
// button.addEventListenerAndSave("click", () => {
//     console.log("Handler # 2");
// });

// setTimeout(() => {
//     button.removeAndDeleteEventListener("click");
// }, 5000);

// document.addEventListener("DOMContentLoaded", () => {
//     console.log("DOMContentLoaded :D");
// });

// button.onclick = function (event) {
//     console.log(`Event type: ${event.type} at ${event.target}`);
//     console.log(`With coords: (${event.clientX}, ${event.clientY})`);
// };

// const obj = {
//     type: "event",
//     handleEvent(event) {
//         console.log(
//             `${this.type}: ${event.type} at ${event.target.constructor.name}`
//         );
//         console.log(`With coords: (${event.clientX}, ${event.clientY})`);
//     },
// };

// button.addEventListener("click", obj);

// class Menu {
//     handleEvent(event) {
//         switch (event.type) {
//             case "mousedown":
//                 button.innerHTML = "Mouse button pressed";
//                 break;
//             case "mouseup":
//                 button.innerHTML = "Mouse button released";
//                 break;
//         }
//     }
// }

// const menu = new Menu();

// button.addEventListener("mousedown", menu);
// button.addEventListener("mouseup", menu);

class Menu {
    handleEvent(event) {
        const type = event.type;
        const method = "on" + type[0].toUpperCase() + type.slice(1);
        this[method](event);
    }

    onMousedown() {
        button.innerHTML = "Mouse button pressed";
    }

    onMouseup() {
        button.innerHTML = "Mouse button released";
    }
}

// const menu = new Menu();

// button.addEventListener("mousedown", menu);
// button.addEventListener("mouseup", menu);

// #1
const text2 = document.getElementById("text");
button.onclick = function () {
    text2.hidden = true;
};

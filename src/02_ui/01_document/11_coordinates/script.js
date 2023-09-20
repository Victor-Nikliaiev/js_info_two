// const centerX = document.documentElement.clientWidth / 2;
// const centerY = document.documentElement.clientHeight / 2;

// console.log(centerX);
// console.log(centerY);

// let elem = document.elementFromPoint(centerX, centerY);

// elem.style.background = "red";

const box = document.getElementById("box");

function createMessageUnder(elem, html) {
    let message = document.createElement("div");
    message.innerHTML = html;
    let coords = elem.getBoundingClientRect();

    message.style.position = "absolute";
    message.style.top = `${getCoords(elem).bottom}px`;
    message.style.left = `${getCoords(elem).left}px`;
    message.style.color = "red";

    return message;
}

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.scrollY,
        left: box.left + window.scrollX,
        right: box.right + window.scrollX,
        bottom: box.bottom + window.scrollY,
    };
}

let message = createMessageUnder(box, "Message");
document.body.append(message);

setTimeout(() => {
    message.remove();
}, 5000);

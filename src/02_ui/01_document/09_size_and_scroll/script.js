const example = document.getElementById("example");
const computedStyles = getComputedStyle(example);

function isHidden(elem) {
    return !elem.offsetWidth && !elem.offsetHeight;
}

// example.remove();
// console.log(isHidden(example));

function scrollToTop() {
    console.log("Bottom :D");
    example.scrollTop = 0;
}

function scrollToBottom() {
    console.log("Bottom :D");
    example.scrollTop = 1e9;
}

const elem = document.getElementById("elem");

console.log(getComputedStyle(elem).width);
console.log(elem.clientWidth);
console.log(elem.offsetWidth);
console.log(elem.offsetHeight);

function getScrollBottom(elem) {
    return elem.scrollHeight - elem.clientHeight - elem.scrollTop;
}

function getScrollBarWidth() {
    const div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";

    document.body.append(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth;
}

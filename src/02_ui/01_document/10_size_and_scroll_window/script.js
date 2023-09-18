// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.clientHeight);

function getScrollbarSize() {
    document.documentElement.style.overflowY = "scroll";
    const scrollbarSize =
        window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflowY = "";

    return scrollbarSize;
}

const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.offsetHeight
);

// console.log(`scrollHeight: ${scrollHeight}`);
// console.log(`window.scrollY: ${window.scrollY}`);
// console.log(
//     scrollHeight - document.documentElement.clientHeight - window.scrollY
// );

function scrollToTop(value) {
    window.scrollBy({ behavior: "smooth", top: -value, left: 0 });
}

function scrollToBottom(value) {
    window.scrollBy(0, value, { behavior: "smooth" });
}

function makeModalWindow() {
    const modal = document.createElement("div");
    modal.style.width = "200px";
    modal.style.height = "200px";
    modal.style.backgroundColor = "white";
    modal.style.position = "fixed";
    modal.style.zIndex = "10000";
    modal.style.padding = "50px";
    modal.style.cursor = "pointer";
    modal.innerHTML = "Modal window";

    const div = document.body.querySelector("div");

    div.classList.add("body-opacity");

    const widthBefore = document.body.clientWidth;
    document.body.style.overflow = "hidden";
    const widthAfter = document.body.clientWidth;

    if (widthAfter > widthBefore) {
        div.style.paddingRight = widthAfter - widthBefore + "px";
    }

    document.body.append(modal);
    // console.log(document.documentElement.clientWidth);
    // console.log(document.documentElement.clientHeight);
    // modal.style.opacity = "1.0";
    modal.style.top =
        Math.round(
            document.documentElement.clientHeight / 2 - modal.offsetHeight / 2
        ) + "px";

    modal.style.left =
        Math.round(
            document.documentElement.clientWidth / 2 - modal.offsetWidth / 2
        ) + "px";
    // modal.parentElement.style.position = "relative";
    // modal.style.position = "absolute";

    modal.addEventListener("click", event => {
        if (event.target === modal) {
            const widthBefore = document.body.clientWidth;
            modal.remove();
            document.body.style.overflow = "";
            const widthAfter = document.body.clientWidth;
            div.style.paddingRight = "0px";

            div.style.opacity = "1.0";
        }
    });
}

makeModalWindow();

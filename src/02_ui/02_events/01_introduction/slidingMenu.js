const div = document.querySelector("div");
const arrowRight = document.querySelector("#arrowRight");
const arrowDown = document.querySelector("#arrowDown");
const ul = document.querySelector("ul");

div.addEventListener("click", () => {
    arrowRight.classList.toggle("show");
    arrowDown.classList.toggle("show");
    ul.classList.toggle("show");
});

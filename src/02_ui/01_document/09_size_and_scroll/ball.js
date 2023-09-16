const field = document.getElementById("field");
const ball = document.getElementById("ball");

let fieldCenterX = field.clientWidth / 2;
let fieldCenterY = field.clientHeight / 2;
let ballRadiusX = ball.offsetWidth / 2;
let ballRadiusY = ball.offsetHeight / 2;

ball.style.top = `${Math.round(fieldCenterY - ballRadiusY)}px`;
ball.style.left = `${Math.round(fieldCenterX - ballRadiusX)}px`;

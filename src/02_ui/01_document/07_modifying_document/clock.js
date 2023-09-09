/* eslint-disable no-unused-vars */

let timerId;

function clockStart() {
    if (timerId) {
        clearInterval(timerId);
    }

    timerId = setInterval(update, 1000);
    update();
}

function clockStop() {
    clearInterval(timerId);
}

function update() {
    let date = new Date();
    let [hours, minutes, seconds] = date
        .toLocaleTimeString()
        .split(":")
        .map(item => parseInt(item));

    const hoursElem = document.querySelector("[data-time='hours']");
    const minutesElem = document.querySelector("[data-time='minutes']");
    const secondsElem = document.querySelector("[data-time='seconds']");

    hoursElem.textContent = padSingleDigitTime(hours);
    minutesElem.textContent = padSingleDigitTime(minutes);
    secondsElem.textContent = padSingleDigitTime(seconds);
}

function padSingleDigitTime(time) {
    if (time < 10) {
        return `0${time}`;
    }

    return time;
}

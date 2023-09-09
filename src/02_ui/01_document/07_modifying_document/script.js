/* eslint-disable no-unused-vars */
// const div = document.createElement("div");
// div.className = "alert";
// div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
// document.body.prepend(div);

// const ol = document.getElementById("ol");

// setTimeout(() => {
//     ol.before("before");
// }, 2000);

// setTimeout(() => {
//     ol.after("after");
// }, 4000);

// const liFirst = document.createElement("li");
// liFirst.innerHTML = "prepend";
// ol.prepend(liFirst);

// const liLast = document.createElement("li");
// liLast.innerHTML = "append";
// ol.append(liLast);

// const image = document.createElement("img");
// image.src =
//     "data:image/jpeg;base64,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";

// image.style.margin = "50px";
// setTimeout(() => {
//     ol.replaceWith(image);
// }, 7000);

// const elem = document.getElementById("elem");
// elem.insertAdjacentHTML("beforebegin", "<p>Hello</p><hr />");

// document.body.insertAdjacentHTML(
//     "afterbegin",
//     `<div class="alert">
//         <strong>Hi there!</strong> You've read an important message.
//     </div>`
// );

// const div = document.createElement("div");
// div.classList.add("alert");
// div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
// document.body.appendChild(div);

// setTimeout(() => {
//     div.remove();
// }, 2000);

// const first = document.getElementById("first");
// const second = document.getElementById("second");

// setTimeout(() => {
//     second.after(first);
// }, 5000);

// const liFirst = document.getElementById("liFirst");

// const ols = document.querySelectorAll("ol");
// setTimeout(() => {
//     ols[1].prepend(liFirst);
// }, 3000);

// const div = document.querySelector("div.alert");
// let div2 = div.cloneNode(true);
// div2.querySelector("strong").innerHTML = "Bye, there!";

// div.after(div2);

// const ul = document.getElementById("ul");

// function getListContent() {
//     const fragment = new DocumentFragment();

//     for (let i = 0; i < 10; i++) {
//         const li = document.createElement("li");
//         li.append(i);
//         fragment.append(li);
//     }

//     return fragment;
// }

// ul.append(getListContent());

// const elem = document.getElementById("elem");

// function clear(elem) {
//     elem.innerHTML = "";
// }

// const table = document.getElementById("table");
// table.remove();

// function createDynamicList() {
//     const ul = document.createElement("ul");

//     while (true) {
//         const userInput = prompt("Enter an item: ");

//         if (!userInput) break;

//         const li = document.createElement("li");
//         li.textContent = userInput;

//         ul.append(li);
//     }

//     document.body.append(ul);
// }

// createDynamicList();
let data = {
    Fish: {
        trout: {},
        salmon: {},
    },

    Tree: {
        Huge: {
            sequoia: {},
            oak: {},
        },
        Flowering: {
            "apple tree": {},
            magnolia: {},
        },
    },
};

function createTree(container, data) {
    for (let key in data) {
        let li = document.createElement("li");
        li.textContent = key;

        if (Object.keys(data[key]).length) {
            const ul = document.createElement("ul");
            li.append(ul);
            createTree(ul, data[key]);
        }

        container.append(li);
    }
}

// let container = document.createElement("ul");
// createTree(container, data);
// document.body.append(container);

// const animals = document.getElementById("animals");

// for (let li of animals.querySelectorAll("li")) {
//     let descentsCount = li.querySelectorAll("li").length;
//     if (!descentsCount) continue;
//     li.firstChild.data += `[${descentsCount}]`;
// }

function createCalendar(elem, year, month) {
    // Array of weekday names starting from Monday
    const weekdays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    // Get the element where the calendar will be inserted
    const calendarElem = document.getElementById(elem);

    // Create a Date object for the first day of the specified month
    const firstDayOfMonth = new Date(year, month - 1, 1);

    // Get the number of days in the month
    const lastDayOfMonth = new Date(year, month, 0).getDate();

    // Create a table element for the calendar
    const table = document.createElement("table");

    // Create the table header (weekdays)
    const thead = document.createElement("thead");
    let tr = document.createElement("tr");
    for (let i = 0; i < 7; i++) {
        const th = document.createElement("th");
        th.textContent = weekdays[i];
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    table.appendChild(thead);

    // Create the table body (days)
    const tbody = document.createElement("tbody");
    let currentDate = new Date(firstDayOfMonth);
    while (currentDate.getMonth() === month - 1) {
        if (currentDate.getDay() === 1) {
            // Start a new row for each Monday
            tr = document.createElement("tr");
        }

        const td = document.createElement("td");
        td.textContent = currentDate.getDate();
        tr.appendChild(td);

        if (
            currentDate.getDay() === 0 ||
            currentDate.getDate() === lastDayOfMonth
        ) {
            // End the row on Sunday or the last day of the month
            tbody.appendChild(tr);
        }

        currentDate.setDate(currentDate.getDate() + 1);
    }
    table.appendChild(tbody);

    // Clear any existing content in the calendar element
    calendarElem.innerHTML = "";

    // Append the table to the calendar element
    calendarElem.appendChild(table);
}

// Example usage:
// createCalendar("calendar-container", 2023, 9); // Create a calendar for September 2023 and insert it into an element with the ID 'calendar-container'

// const ul = document.getElementById("ul");
// ul.firstElementChild.insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");

// let options = {
//     name: 0,
//     surname: 1,
//     age: 2,
// };

const table = document.querySelector("#table");
const tbody = table.querySelector("tbody");

let rows = Array.from(tbody.rows);

rows.sort((tr1, tr2) => {
    return tr1.cells[0].textContent.localeCompare(tr2.cells[0].textContent);
});
tbody.append(...rows);

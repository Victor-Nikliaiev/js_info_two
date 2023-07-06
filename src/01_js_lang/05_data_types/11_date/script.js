let now = new Date();
let jan01_1970 = new Date(0);
// console.log(jan01_1970);
let jan02_1970 = new Date(24 * 3600 * 1000);
// console.log(jan02_1970);

let dec31_1969 = new Date(-24 * 3600 * 1000);
// console.log(dec31_1969);

// let date = new Date("2017-01-26");
// console.log(date);

// console.log(new Date(2011, 0, 1, 2, 0, 0, 0));
// console.log(new Date(2011, 0, 1, 2));

// console.log(new Date(2011, 0, 1, 2, 3, 4, 567));

// console.log(new Date().getTimezoneOffset());
// console.log(new Date().getHours());
// console.log(new Date().getUTCHours());

// let today = new Date();
// today.setHours(0);
// console.log(today);

// let date = new Date(2023, 0, 31);
// console.log(date);

// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 3);
// console.log(date);

// let date = new Date();
// date.setSeconds(date.getSeconds() + 60);
// console.log(date);

// let date = new Date(2016, 0, 2);
// date.setDate(1);
// console.log(date);

// date.setDate(0);
// console.log(date);

// let date = new Date();
// console.log(+date);

// let start = Date.now();

// for (let i = 0; i < 1e5; i++) {
//     let doSomething = i * i * i;
// }

// let end = Date.now();
// console.log(`The loop took ${end - start} ms.`);

function diffSubtract(date1, date2) {
    return date2 - date1;
}

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function bench(f) {
    let date1 = new Date();
    let date2 = new Date();

    let start = Date.now();

    for (let i = 0; i < 1e5; i++) {
        f(date1, date2);
    }

    return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// bench(diffSubtract);
// bench(diffGetTime);

// for (let i = 0; i < 10; i++) {
//     time1 += bench(diffSubtract);
//     time2 += bench(diffGetTime);
// }

// console.log(`Total time of diffSubtract: ${time1} ms.`);
// console.log(`Total time of diffGetTime: ${time2} ms.`);

// let ms = Date.parse("1989-02-23T01:00:00.0000Z");

// console.log(new Date(ms).toLocaleTimeString());

// let d1 = new Date(2012, 1, 20, 3, 12);
// let d2 = new Date("2012-02-20T03:12");
// console.log(d1.toLocaleString());
// console.log(d2.toLocaleString());

export function getWeekDay(date) {
    let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    return days[date.getDay()];
}

export function getLocalDay(date) {
    let day = date.getDay();

    if (!day) day = 7;

    return day;
}

export function getDateAgo(date, days) {
    let dateAgo = new Date(date);
    dateAgo.setDate(date.getDate() - days);

    return dateAgo.getDate();
}

export function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.round((now - today) / 1000);
}

function getSecondsTillTomorrow() {
    let now = new Date();
    let tomorrow = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1
    );
    return Math.round((tomorrow - now) / 1000);
}

export function formatDate(date) {
    let now = new Date();
    let diff = now - date;

    if (diff < 1000) {
        return "right now";
    }

    let seconds = Math.floor(diff / 1000);

    if (seconds < 60) {
        return `${seconds} sec. ago`;
    }

    let mins = Math.floor(diff / 6e4);

    if (mins < 60) {
        return `${mins} min. ago`;
    }

    const getFormattedDateSuffix = date => {
        date = "" + date;

        if (date.length == 1) {
            return "0" + date;
        }

        if (date.length == 4) return date.slice(-2);

        return date;
    };

    let day = getFormattedDateSuffix(date.getDate());
    let month = getFormattedDateSuffix(date.getMonth() + 1);
    let year = getFormattedDateSuffix(date.getFullYear());
    let hours = getFormattedDateSuffix(date.getHours());
    let minutes = getFormattedDateSuffix(date.getMinutes());

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

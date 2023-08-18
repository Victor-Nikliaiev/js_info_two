export function sayHi(user) {
    let date = new Date();

    return `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] Hello ${user}!`;
}

export const config = {};

export function sayHi() {
    const date = new Date();
    return `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] Ready to serve ${
        config.user
    }!`;
}

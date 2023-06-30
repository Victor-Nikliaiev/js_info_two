import promptSync from "prompt-sync";
export const prompt = promptSync();
export { default as alert } from "alert";

export function confirm(message) {
    let userResponse = prompt(`${message}(y/n): `);

    if (
        userResponse.toLowerCase().includes("y") &&
        !userResponse.toLowerCase().includes("no")
    ) {
        return true;
    }

    return false;
}

export function shuffleV_2(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

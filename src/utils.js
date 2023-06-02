import promptSync from "prompt-sync";
export const prompt = promptSync();
export { default as alert } from "alert";

export function confirm(message) {
    let userResponse = prompt(`${message} (y/n)`);

    if (
        userResponse.toLowerCase().includes("y") &&
        !userResponse.toLowerCase().includes("no")
    ) {
        return true;
    }

    return false;
}

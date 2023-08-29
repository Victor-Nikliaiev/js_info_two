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

export const proxyHandler = {
    get(target, prop) {
        if (prop.startsWith("_")) {
            throw new Error("Access denied");
        }

        let value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
    },

    set(target, prop, value) {
        if (prop.startsWith("_")) {
            throw new Error("Access denied");
        }

        target[prop] = value;
        return true;
    },

    deleteProperty(target, prop) {
        if (prop.startsWith("_")) {
            throw new Error("Access denied");
        }

        delete target[prop];
        return true;
    },

    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith("_"));
    },
};

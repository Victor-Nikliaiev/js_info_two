import { confirm, prompt } from "../../../utils.js";

export const user = {};

while (true) {
    let userChoice = askPrintOrAdd();

    if (userChoice === "print") {
        console.table(user);
        break;
    }

    addToObject(user);
}

/**
 * Asks the user whether they want to add keys or print them, and returns the
 * appropriate response.
 *
 * @return {string} The string "add" if the user wants to add keys, or "print"
 *                  if they want to print them.
 */
export function askPrintOrAdd(option) {
    if (option === "add") {
        return "add";
    }

    if (option === "print") {
        return "print";
    }

    const addKeys = confirm("Do you want to add keys?");
    return addKeys ? "add" : "print";
}

/**
 * Adds a new key-value pair to the given object. If the value entered is a number,
 * it will be converted to a number before being added to the object.
 *
 * @param {Object} object - The object to add a key-value pair to.
 * @return {void} This function does not return anything.
 */
export function addToObject(object) {
    let key = prompt("Enter key: ");
    if (!key) return;

    let value = prompt(`Enter value for "${key}": `);
    if (!value) return;

    value = +value || value;

    object[key] = value;
}

// let arr = [1, 2, 3];
// let iterator = arr[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// let user = {
//     name: "John",
//     age: 30,
// };

// console.log(Array.isArray(Object.keys(user)));
// console.log(Reflect.ownKeys(user));

// let prices = {
//     banana: 1,
//     apple: 2,
//     orange: 3,
// };

// console.log(prices);
// let doublePrices = Object.fromEntries(
//     Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
// );

// console.log(doublePrices);

export function sumSalaries(salaries) {
    return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
}

export function count(object) {
    return Object.keys(object).length;
}

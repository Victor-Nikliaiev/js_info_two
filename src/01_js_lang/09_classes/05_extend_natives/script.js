import alert from "alert";

// class PowerArray extends Array {
//     isEmpty() {
//         return this.length === 0;
//     }
// }

// let powerArray = new PowerArray(1, 5, 10, 50);
// let filteredArray = powerArray.filter(item => item >= 10);
// // console.log(filteredArray);
// alert(filteredArray);
// console.log(powerArray.constructor === PowerArray);
// console.log(filteredArray);

class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }

    static get [Symbol.species]() {
        return Array;
    }
}

let arr = new PowerArray(...[1, 2, 3]);
let filtered = arr.filter(item => item >= 3);
console.log(filtered[0]);
// console.log(filtered.isEmpty());

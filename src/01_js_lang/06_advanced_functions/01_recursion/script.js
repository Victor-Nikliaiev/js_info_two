function pow(x, n) {
    return n == 1 ? x : x * pow(x, n - 1);
}

// console.log(pow(2, 3));

// let company = {
//     // the same object, compressed for brevity
//     sales: [
//         { name: "John", salary: 1000 },
//         { name: "Alice", salary: 1600 },
//     ],
//     development: {
//         sites: [
//             { name: "Peter", salary: 2000 },
//             { name: "Alex", salary: 1800 },
//         ],
//         internals: [{ name: "Jack", salary: 1300 }],
//     },
// };

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((sum, value) => sum + value.salary, 0);
    }

    let sum = 0;

    for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep);
    }

    return sum;
}

// console.log(sumSalaries(company));

function sumToLoop(num) {
    let sum = 0;

    for (let i = num; i >= 1; i--) {
        sum += i;
    }

    return sum;
}

// console.log(sumToLoop(1));
// console.log(sumToLoop(2));
// console.log(sumToLoop(3));
// console.log(sumToLoop(4));
// console.log(sumToLoop(100));

function sumToRecursion(num) {
    if (num <= 1) return num;
    return num + sumToRecursion(num - 1);
}
// console.log(sumToRecursion(3));
// console.log(sumToRecursion(4));
// console.log(sumToRecursion(100));
// console.log(sumToRecursion(100));
// console.log(factorial(5));

function sumToFormula(num) {
    return (num * (num + 1)) / 2;
}

function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

function fibRecursion(n) {
    if (n == 1 || n == 2) return 1;
    return fibRecursion(n - 1) + fibRecursion(n - 2);
}

function fib(index) {
    if (index === 0 || index === 1) return 0;

    let fibPrev = 0;
    let fibCurr = 1;

    for (let i = 2; i <= index; i++) {
        const temp = fibCurr;
        fibCurr = fibPrev + fibCurr;
        fibPrev = temp;
    }

    return fibCurr;
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

function printList(list) {
    let current = list;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

function printListRecursion(list) {
    if (!list) return;

    console.log(list.value);
    printListRecursion(list.next);
}

// printListRecursion(list);

function printListReverseLoop(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

// printListReverseLoop(list);

function printListReverseLoopRecursion(list) {
    if (list.next) {
        printListReverseLoopRecursion(list.next);
    }
    console.log(list.value);
}

printListReverseLoopRecursion(list);

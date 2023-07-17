// let sum = new Function("a", "b", "return a + b");

// console.log(sum(1, 2));

// let sayHi = new Function("console.log('Hi!')");
// sayHi();

function getFunc() {
    let value = "test";

    // let func = new Function("console.log(value)");

    function func() {
        console.log(value);
    }
    return func;
}

getFunc()();

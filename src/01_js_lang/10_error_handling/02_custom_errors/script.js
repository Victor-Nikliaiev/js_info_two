// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = this.constructor.name;
//     }
// }

// function test() {
//     throw new ValidationError("test");
// }

// try {
//     test();
// } catch (err) {
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
// }

// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = this.constructor.name;
//     }
// }

// function readUser(json) {
//     let user = JSON.parse(json);

//     if (!user.age) {
//         throw new ValidationError("No field: age");
//     }

//     if (!user.name) {
//         throw new ValidationError("No field: name");
//     }

//     return user;
// }

// try {
//     let user = readUser('{"age": 34}');
// } catch (err) {
//     switch (true) {
//         case err instanceof ValidationError:
//             console.log(`${err.name}: Invalid data. ${err.message}`);
//             break;

//         case err instanceof SyntaxError:
//             console.log(`JSON syntax error: ${err.message}`);
//             break;

//         default:
//             throw err;
//     }
// }

// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = this.constructor.name;
//     }
// }

// class PropertyRequiredError extends ValidationError {
//     constructor(property) {
//         super(`No property: ${property}`);
//         this.name = this.constructor.name;
//         this.property = property;
//     }
// }

// function readUser(json) {
//     let user = JSON.parse(json);

//     if (!user.age) {
//         throw new PropertyRequiredError("age");
//     }

//     if (!user.name) {
//         throw new PropertyRequiredError("name");
//     }

//     return user;
// }

// try {
//     let user = readUser('{"age": 34}');
// } catch (err) {
//     switch (true) {
//         case err instanceof ValidationError:
//             console.log(`Invalid data: ${err.message}`);
//             break;

//         case err instanceof SyntaxError:
//             console.log(`JSON syntax error: ${err.message}`);
//             break;

//         default:
//             throw err;
//     }
// }

// class MyError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = this.constructor.name;
//     }
// }

// class ValidationError extends MyError {}

// class PropertyRequiredError extends ValidationError {
//     constructor(property) {
//         super(`No property: ${property}`);
//         this.property = property;
//     }
// }

// console.log(new PropertyRequiredError("field").name);

class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.name = this.constructor.name;
        this.cause = cause;
    }
}

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

let err = new FormatError("formatting error");
console.log(err.message);
console.log(err.name);
// console.log(err.stack);
console.log(err instanceof FormatError);
console.log(err instanceof SyntaxError);

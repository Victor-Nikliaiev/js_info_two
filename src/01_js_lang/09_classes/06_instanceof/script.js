// class Rabbit {}
// let rabbit = new Rabbit();

// console.log(rabbit instanceof Rabbit);

// function Rabbit() {}

// console.log(new Rabbit() instanceof Rabbit);

// let arr = [1, 2, 3];
// console.log(arr instanceof Array);
// console.log(arr instanceof Object);

// class Animal {
//     static [Symbol.hasInstance](obj) {
//         if (obj.canEat) return true;
//         return false;
//     }
// }

// let obj = { canEat: true };
// let obj2 = { dimensions: 25 };

// console.log(obj instanceof Animal);
// console.log(obj2 instanceof Animal);
// console.log(obj.__proto__ === Animal.prototype);
// console.log(obj2.__proto__ === Animal.prototype);

// class Animal {}
// class Rabbit extends Animal {}

// let rabbit = new Rabbit();

// console.log(rabbit instanceof Animal);
// console.log(rabbit instanceof Rabbit);
// console.log(Animal.prototype.isPrototypeOf(rabbit));

// let objectToString = Object.prototype.toString;
// console.log(objectToString.call([]));

let s = Object.prototype.toString;

// console.log(s.call([]));
// console.log(s.call(1));
// console.log(s.call(true));
// console.log(s.call(() => {}));
// console.log(s.call(null));
// console.log(s.call(undefined));
// console.log(Undefined);

// let user = {
//     [Symbol.toStringTag]: "User",
// };
// console.log(Object.prototype.toString.call(user));

class Ani {
    [Symbol.toStringTag] = "Blabla";
}

let ani = new Ani();
console.log(typeof ani);

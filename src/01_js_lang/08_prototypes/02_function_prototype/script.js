// let animal = {
//     eats: true,
// };

// function Rabbit(name) {
//     this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit("White long-eared");

// // console.log(rabbit.eats);

// console.log(Rabbit.prototype.eats);

// function Rabbit(name) {
//     this.name = name;
//     console.log(name);
// }

// let rabbit = new Rabbit("White long-eared");
// let rabbit2 = rabbit.constructor("White long-eared #2");

// function Rabbit() {}

// Rabbit.prototype = {
//     jumps: true,
// };

// let rabbit = new Rabbit();
// console.log(rabbit.__proto__);

// function Rabbit() {}

// Rabbit.prototype.jumps = true;

// let rabbit = new Rabbit();
// console.log(rabbit.jumps);

// let animal = {
//     eats: true,
// };

// animal.__proto__.jumps = true;
// let rabbit = {
//     __proto__: animal,
// };

// rabbit.__proto__.alive = true;

// console.log(rabbit.jumps);
// console.log(rabbit.eats);
// console.log(animal);
// function Rabbit() {}

// Rabbit.prototype = {
//     jumps: true,
//     constructor: Rabbit,
// };

// let rabbit = new Rabbit();
// console.log(rabbit.jumps);
// console.log(rabbit.constructor === Rabbit);

function Obj() {
    this.value = true;
}

// let obj = new Obj();
// let obj2 = new obj.constructor();
// console.log(obj2.value);

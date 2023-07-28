/* eslint-disable no-prototype-builtins */

// class User {
//     static test = "test";
//     static staticMethod() {
//         console.log(this.test);
//     }
// }

// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }

//     static compare(articleA, articleB) {
//         return articleA.date - articleB.date;
//     }
// }

// let articles = [
//     new Article("Article 1", new Date(2019, 1, 1)),
//     new Article("Article 2", new Date(2019, 0, 2)),
//     new Article("Article 3", new Date(2019, 11, 1)),
// ];

// articles.sort(Article.compare);
// console.table(articles);

// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }

//     static createTodays(title) {
//         return new this(title, new Date());
//     }
// }

// let article = Article.createTodays("Article 1");
// console.table(article);
// console.log(article.constructor.createTodays("Article 2"));
// console.log(article.constructor == Article);

// class Article {
//     static publisher = "Vic";
// }

// console.log(Article.publisher);
// console.log(Article);

// class Animal {
//     static planet = "Earth";

//     constructor(name, speed) {
//         this.name = name;
//         this.speed = speed;
//     }

//     run(speed = 0) {
//         this.speed += speed;
//         console.log(`${this.name} is running at ${this.speed} km/h`);
//     }

//     static compare(animalA, animalB) {
//         return animalA.speed - animalB.speed;
//     }
// }

// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} hides!`);
//     }
// }

// let rabbits = [
//     new Rabbit("White Rabbit", 10),
//     new Rabbit("LongEar Rabbit", 20),
//     new Rabbit("Black Rabbit", 5),
// ];

// rabbits.sort(Animal.compare);
// console.table(rabbits);
// console.log(Rabbit.planet);

// class Animal {}
// class Rabbit extends Animal {}

// console.log(Rabbit.__proto__ === Animal);
// console.log(Rabbit.prototype.__proto__ === Animal.prototype);

class Rabbit extends Object {
    constructor(name) {
        super();
        this.name = name;
    }
}

let rabbit = new Rabbit("Rab");
console.log(Object.hasOwnProperty.call(rabbit, "name"));

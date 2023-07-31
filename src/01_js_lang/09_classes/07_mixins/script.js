// const sayHiBye = {
//     sayHi() {
//         console.log(`Hi, ${this.name}!`);
//     },
//     sayBye() {
//         console.log(`Bye, ${this.name}!`);
//     },
// };

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Object.assign(User.prototype, sayHiBye);

// new User("Vic").sayHi();
// new User("Vic").sayBye();

// const sayMixin = {
//     say(phrase) {
//         console.log(phrase);
//     },
// };

// const sayHiByeMixin = {
//     __proto__: sayMixin,

//     sayHi() {
//         super.say(`Hi, ${this.name}!`);
//     },

//     sayBye() {
//         super.say(`Bye, ${this.name}!`);
//     },
// };

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Object.assign(User.prototype, sayHiByeMixin);

// new User("Vic").sayHi();
// new User("Vic").sayBye();

let eventMixin = {
    on(eventName, handler) {
        if (!this._eventHandlers) this._eventHandlers = {};
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }

        this._eventHandlers[eventName].push(handler);
    },

    off(eventName, handler) {
        let handlers = this._eventHandlers?.[eventName];
        if (!handlers) return;
        for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
                handlers.splice(i--, 1);
            }
        }
    },

    trigger(eventName, ...args) {
        if (!this._eventHandlers?.[eventName]) return;

        this._eventHandlers?.[eventName].forEach(handler =>
            handler.apply(this, args)
        );
    },
};

class Menu {
    choose(value) {
        this.trigger("select", value);
    }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

const printValueHandler = value => {
    console.log(`You selected ${value}`);
};

menu.on("select", printValueHandler);

menu.choose("Apple");

menu.off("select", printValueHandler);

menu.choose("Banana");

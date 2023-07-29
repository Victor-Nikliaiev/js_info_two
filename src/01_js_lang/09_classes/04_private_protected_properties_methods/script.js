// class CoffeeMachine {
//     waterAmount = 0;

//     constructor(power) {
//         this.power = power;
//         console.log(`Created a coffee machine,  power: ${this.power}`);
//     }
// }

// let coffeeMachine = new CoffeeMachine(100);
// coffeeMachine.waterAmount = 200;

// class CoffeeMachine {
//     _waterAmount = 0;

//     set waterAmount(value) {
//         if (value < 0) {
//             value = 0;
//         }

//         this._waterAmount = 0;
//     }

//     get waterAmount() {
//         return this._waterAmount;
//     }

//     constructor(power) {
//         this._power = power;
//     }

//     get power() {
//         return this._power;
//     }
// }

// let coffeeMachine = new CoffeeMachine(100);
// console.log((coffeeMachine.power = 23));

// class CoffeeMachine {
//     _waterAmount = 0;

//     setWaterAmount(value) {
//         if (value < 0) {
//             value = 0;
//         }

//         this._waterAmount = value;
//     }

//     getWaterAmount() {
//         return this._waterAmount;
//     }
// }

// console.log(new CoffeeMachine());

// class CoffeeMachine {
//     #waterLimit = 200;

//     #fixWaterAmount(value) {
//         if (value < 0) return 0;
//         if (value > this.#waterLimit) return this.#waterLimit;

//         return value;
//     }

//     setWaterAmount(value) {
//         this.#waterLimit = this.#fixWaterAmount(value);
//     }
// }

// // let coffeeMachine = new CoffeeMachine();
// // console.log(coffeeMachine);

class CoffeeMachine {
    #waterAmount = 0;

    get waterAmount() {
        return this.#waterAmount;
    }

    set waterAmount(value) {
        if (value < 0) value = 0;

        this.#waterAmount = value;
    }
}

// const machine = new CoffeeMachine();
// machine.waterAmount = 200;
// console.log(machine.waterAmount);
// machine.waterAmount = -20;
// console.log(machine.waterAmount);

class MegaCoffeeMachine extends CoffeeMachine {
    #megaMode = false;

    set megaMode(value) {
        if (!this.waterAmount) return;

        this.#megaMode = value;
    }

    get megaMode() {
        return this.#megaMode;
    }
}

const megaMachine = new MegaCoffeeMachine();

megaMachine.megaMode = true;
console.log(megaMachine.megaMode);
megaMachine.waterAmount = 200;
megaMachine.megaMode = true;
console.log(megaMachine.megaMode);

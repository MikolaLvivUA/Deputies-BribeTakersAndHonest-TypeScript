"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Human_class_1 = require("./Human.class");
class Deputy extends Human_class_1.Human {
    constructor(weight, height, surname, name, age, bribeTaker, bribeSum, takenBribe = 0) {
        super(weight, height);
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.bribeTaker = bribeTaker;
        this.bribeSum = bribeSum;
        this.takenBribe = takenBribe;
    }
    getBribe(sum) {
        if (!this.bribeTaker) {
            console.log(`NO I'M HONEST DEPUTY`);
            return;
        }
        (sum <= this.bribeSum) ? (this.takenBribe += sum) : console.log('bribe is very big');
    }
}
exports.Deputy = Deputy;

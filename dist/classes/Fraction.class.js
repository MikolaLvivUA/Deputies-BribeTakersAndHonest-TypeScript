"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fraction {
    constructor(name, DeputyArray) {
        this.name = name;
        this.DeputyList = DeputyArray;
    }
    addDeputy(deputyObj) {
        this.DeputyList.push(deputyObj);
        console.log(`Deputy ${deputyObj.name} has been added`);
    }
    deleteDeputy(name) {
        let foundDeputy = this.DeputyList.findIndex((deputy) => deputy.name === name);
        if (foundDeputy < 0) {
            console.log('Deputy not found');
        }
        this.DeputyList.splice(foundDeputy, 1);
    }
    deleteAllBribeTakers() {
        const NotBribeTakers = this.DeputyList.filter((deputy) => !deputy.bribeTaker);
        this.DeputyList.splice(0, this.DeputyList.length);
        this.DeputyList = [...NotBribeTakers];
    }
    showBiggestBribeTaker() {
        const [BiggestBribeTaker] = this.DeputyList.sort((deputy1, deputy2) => {
            return deputy2.takenBribe - deputy1.takenBribe;
        });
        console.log(BiggestBribeTaker);
    }
    showAllDeputies() {
        this.DeputyList.forEach((deputy) => {
            console.log(`Name: ${deputy.name}, Surname: ${deputy.surname}, Age: ${deputy.age}`);
        });
    }
    deleteAllDeputies() {
        this.DeputyList.splice(0, this.DeputyList.length);
    }
    showFractionBribeSum() {
        this.DeputyList.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.takenBribe;
        }, 0);
    }
}
exports.Fraction = Fraction;

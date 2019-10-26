"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rada {
    constructor(FractionsList) {
        this.FractionsList = FractionsList;
    }
    addFraction(fractionObj) {
        this.FractionsList.push(fractionObj);
        console.log(`${fractionObj.name} has been added`);
    }
    deleteFraction(name) {
        const foundFraction = this.FractionsList.findIndex((fraction) => fraction.name === name);
        if (foundFraction < 0) {
            `Fraction ${name} not found`;
        }
        this.FractionsList.splice(foundFraction, 1);
    }
    showAllFraction() {
        this.FractionsList.forEach((fraction) => {
            console.log(`${fraction.name}`);
        });
    }
    ShowConcreticalFraction(name) {
        const foundFraction = this.FractionsList.find((fraction) => fraction.name === name);
        console.log(foundFraction);
    }
    addDeputyToFraction(fractionObj, deputyObj) {
        fractionObj.addDeputy(deputyObj);
        console.log(`${deputyObj.name} has been added to ${fractionObj.name}`);
    }
    ShowAllFractionBribeTakers(fractionObj) {
        const BribeTakers = fractionObj.DeputyList.filter((deputy) => deputy.bribeTaker);
        BribeTakers.forEach((bribeTaker) => {
            console.log(`${bribeTaker.name}, ${bribeTaker.surname}, ${bribeTaker.takenBribe}`);
        });
    }
    ShowBiggestBribeTaker(fractionObj) {
        fractionObj.showBiggestBribeTaker();
    }
    ShowAllFractionDeputies(fractionObj) {
        fractionObj.deleteAllDeputies();
    }
}
exports.Rada = Rada;

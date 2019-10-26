import {Fraction} from "./Fraction.class";
import {Deputy} from "./Deputy.class";

export class Rada {
    FractionsList: Array<Fraction>;

    constructor(FractionsList: Array<Fraction>) {
        this.FractionsList = FractionsList;
    }

    addFraction(fractionObj: Fraction) {
        this.FractionsList.push(fractionObj);
        console.log(`${fractionObj.name} has been added`)
    }

    deleteFraction(name: string) {
        const foundFraction = this.FractionsList.findIndex((fraction: Fraction) => fraction.name === name);
        if (foundFraction < 0) {
            `Fraction ${name} not found`
        }
        this.FractionsList.splice(foundFraction, 1);
    }

    showAllFraction() {
        this.FractionsList.forEach((fraction: Fraction) => {
            console.log(`${fraction.name}`)
        })
    }

    ShowConcreticalFraction(name: string) {
        const foundFraction = this.FractionsList.find((fraction: Fraction) => fraction.name === name);
        console.log(foundFraction);
    }

    addDeputyToFraction(fractionObj: Fraction, deputyObj: Deputy) {
        fractionObj.addDeputy(deputyObj);
        console.log(`${deputyObj.name} has been added to ${fractionObj.name}`)
    }

    ShowAllFractionBribeTakers(fractionObj: Fraction) {
        const BribeTakers = fractionObj.DeputyList.filter((deputy: Deputy) => deputy.bribeTaker);
        BribeTakers.forEach((bribeTaker: Deputy) => {
            console.log(`${bribeTaker.name}, ${bribeTaker.surname}, ${bribeTaker.takenBribe}`)
        })
    }

    ShowBiggestBribeTaker(fractionObj: Fraction) {
        fractionObj.showBiggestBribeTaker();
    }

}
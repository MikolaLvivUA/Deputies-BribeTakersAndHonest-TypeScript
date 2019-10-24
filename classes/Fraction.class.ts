import {Deputy} from "./Deputy.class";
import {DeputyModel} from "../model";

export class Fraction {
    name: string;
    DeputyArray: Array<Deputy>;

    constructor(name: string, DeputyArray: Array<Deputy>) {
        this.name = name;
        this.DeputyArray = DeputyArray;
    }

    deleteDeputy(name: string) {
        let foundDeputy = this.DeputyArray.findIndex((deputy: DeputyModel) => deputy.name === name);
        if (foundDeputy < 0){
            console.log('Deputy not found')
        }
        this.DeputyArray.splice(foundDeputy, 1);
    }
}
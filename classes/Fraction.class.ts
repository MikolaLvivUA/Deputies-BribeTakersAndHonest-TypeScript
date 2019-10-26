import {Deputy} from "./Deputy.class";

export class Fraction {
    name: string;
    DeputyList: Array<Deputy>;

    constructor(name: string, DeputyArray: Array<Deputy>) {
        this.name = name;
        this.DeputyList = DeputyArray;
    }

    addDeputy(deputyObj: Deputy) {
        this.DeputyList.push(deputyObj);
        console.log(`Deputy ${deputyObj.name} has been added`)
    }

    deleteDeputy(name: string) {
        let foundDeputy = this.DeputyList.findIndex((deputy: Deputy) => deputy.name === name);
        if (foundDeputy < 0) {
            console.log('Deputy not found')
        }
        this.DeputyList.splice(foundDeputy, 1);
    }

    deleteAllBribeTakers() {
        const NotBribeTakers = this.DeputyList.filter((deputy: Deputy) => !deputy.bribeTaker);

        this.DeputyList.splice(0, this.DeputyList.length);
        this.DeputyList = [...NotBribeTakers];
    }

    showBiggestBribeTaker() {
        const [BiggestBribeTaker] = this.DeputyList.sort((deputy1: Deputy, deputy2: Deputy) => {
            return deputy2.takenBribe - deputy1.takenBribe;
        });

        console.log(BiggestBribeTaker);
    }

    showAllDeputies() {
      this.DeputyList.forEach((deputy: Deputy) =>{
          console.log(`Name: ${deputy.name}, Surname: ${deputy.surname}, Age: ${deputy.age}`)
      })
    }

    deleteAllDeputies() {
        this.DeputyList.splice(0, this.DeputyList.length);
    }

    showFractionBribeSum() {
        this.DeputyList.reduce((previousValue: number, currentValue: Deputy) => {
           return  previousValue + currentValue.takenBribe
        }, 0)
    }
}
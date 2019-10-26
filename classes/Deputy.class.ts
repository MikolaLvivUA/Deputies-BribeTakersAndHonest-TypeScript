import {Human} from "./Human.class";

export class Deputy extends Human {
    surname: string;
    name: string;
    age: number;
    bribeTaker: boolean;
    bribeSum: number;
    takenBribe: number;

    constructor(weight: number, height: number, surname: string, name: string, age: number, bribeTaker: boolean,
                bribeSum: number, takenBribe: number = 0 ) {
        super(weight, height);
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.bribeTaker = bribeTaker;
        this.bribeSum = bribeSum;
        this.takenBribe = takenBribe
    }

    getBribe(sum: number): void {
        if(!this.bribeTaker){
            console.log(`NO I'M HONEST DEPUTY`);
            return
        }

        (sum <= this.bribeSum) ? (this.takenBribe += sum) : console.log('bribe is very big');
    }
}
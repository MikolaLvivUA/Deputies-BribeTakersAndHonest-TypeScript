import {Human} from "./Human.class";

export class Deputy extends Human {
    surname: string;
    name: string;
    age: number;
    bribeTaker: boolean;
    bribeSum: number;

    constructor(weight: number, height: number, surname: string, name: string, age: number, bribeTaker: boolean,
                bribeSum: number) {
        super(weight, height);
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.bribeTaker = bribeTaker;
        this.bribeSum = bribeSum;
    }

    getBribe(sum: number): void {
        (sum <= this.bribeSum) ? console.log('bribe has been taken') : console.log('bribe is very big');
    }
}
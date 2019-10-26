import {Deputy} from "./classes/Deputy.class";
import {Fraction} from "./classes/Fraction.class";
import {Rada} from "./classes";
//Create ne Deputies
const Vasyl = new Deputy(90,170,'Gnidenko', 'Vasyl', 42, true, 1000);

//Deputy Method testing
/*
console.log(Vasyl);
//give bribe
Vasyl.getBribe(900);
console.log(Vasyl);
*/

const Oksana = new Deputy(60,160,'Petrova', 'Oksana', 35, false, 0);
const Maria = new Deputy(55,157,'Duma', 'Maria', 42, true, 5000);
const Henadiy = new Deputy(130,178,'Herasumiv', 'Genadiy', 50, false, 0);

//Create new Fraction

const FirstITParty = new Fraction('FirstITFraction', [Oksana, Henadiy, Maria]);

// //Fraction method testing
// console.log(FirstITParty);
// FirstITParty.deleteDeputy('Henadiy'); //Delete deputy
// console.log(FirstITParty);
// FirstITParty.addDeputy(Vasyl); //addDeputy
// console.log(FirstITParty);
// FirstITParty.deleteAllBribeTakers(); //delete all bribeTaker
// console.log(FirstITParty);
// FirstITParty.showBiggestBribeTaker();  //showBiggestBribeTaker
// FirstITParty.showAllDeputies(); //ShowAllDeputies
// FirstITParty.deleteAllDeputies(); //delete AllDeputies
// FirstITParty.showFractionBribeSum(); //Show FractionBribeSum

//RADA

// const Rada1 = new Rada([]);
//
// Rada1.addFraction(FirstITParty); // Add Fraction
// Rada1.addDeputyToFraction(FirstITParty, Vasyl); //AddDeputy to fraction
// Rada1.showAllFraction(); // ShowAllFraction



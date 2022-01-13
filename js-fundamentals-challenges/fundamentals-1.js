// challenges from The Complete JavaScript Course 2022: From Zero to Expert!

/*
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
console.log(markBMI);

const johnBMI = johnWeight / johnHeight ** 2;
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
*/

//coding challenge 2

/*
if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
*/

//coding challenge 3

/*
const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 106) / 3;

console.log(averageScoreDolphins, averageScoreKoalas);

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
  console.log("Dolphins are the winners!");
} else if (
  averageScoreKoalas > averageScoreDolphins &&
  averageScoreKoalas >= 100
) {
  console.log("Koalas are the winners!");
} else if (
  averageScoreDolphins === averageScoreKoalas &&
  averageScoreDolphins >= 100 &&
  averageScoreKoalas >= 100
) {
  console.log("It's a draw!");
} else {
  console.log("No winner!");
}
*/

//coding challenge 4 - tip calculator


const billValue = 40;

const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// console.log(tip);

console.log(
  `The bill was ${billValue}, the tip was ${tip}, and the total value is ${
    billValue + tip
  }`
);

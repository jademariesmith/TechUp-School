// challenges from The Complete JavaScript Course 2022: From Zero to Expert!

//coding challenge 1

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

//coding challenge 2

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

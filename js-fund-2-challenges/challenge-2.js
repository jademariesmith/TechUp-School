// CODING CHALLENGE 2

//write a function that takes any bill value as input and returns corresponding tip
// tip is 15% of bill if 50 => bill <= 300
// tip is 20% of bill otherwise

function calcTip(billValue) {
  const isBillInRange = billValue >= 50 && billValue <= 300;
  const tip = isBillInRange ? billValue * 0.15 : billValue * 0.2;
  return tip;
}

// test the function with bill value 100
console.log(calcTip(100));

// create an array called "bills" with test data provided
const bills = [125, 555, 44];

//create an array called "tips" containing tip value for each bill in "bills" using function you've created
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

// BONUS Q: create an array called "total" containing total values bill + tip

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

// ^^ is there a more efficient way to write this for bigger data sets? like for every element in the array add the corresponding index element of the other array?

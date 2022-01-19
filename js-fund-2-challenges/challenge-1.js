//two teams: Dolphins and Koalas
// each team competes three times and an average is calculated.
// a team ONLY wins if they have at least double the score of the other

// 1 - an arrow function to calculate the average of 3 scores

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2 - use the function to calculate the average for both teams

const averageDolphins = calcAverage(85, 54, 41);
console.log(averageDolphins);

const averageKoalas = calcAverage(23, 34, 27);
console.log(averageKoalas);

// 3 - create a function called checkWinner that takes average of each team as parameters and logs the winner to the console together with their victory points e.g. Koalas win (30 vs 13)

function checkWinner(averageDolphins, averageKoalas) {
  if (averageDolphins > 2 * averageKoalas) {
    console.log(`Dolphins win (${averageDolphins} vs ${averageKoalas})`);
  } else if (averageKoalas > 2 * averageKoalas) {
    console.log(`Koalas win (${averageKoalas} vs ${averageDolphins})`);
  }
}

// 4 - use checkWinner to determine winner for data 1 and data 2
checkWinner(averageDolphins, averageKoalas);

// 5 - ignore draws
// removed = in if statement

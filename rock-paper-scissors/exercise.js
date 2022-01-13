// Write some code that lets 2 users play Rock Paper Scissors!

// Rules

// Rock beats Scissors
// Paper beats Rock
// Scissors beats Paper

// Challenge 1 - Hard Coding the Answer
// Use 2 variables to store what each user chose to play.
// eg. // const jade = "Rock"
// Then print out a sentence which says what each user's play was and who won the game!

// eg: Nicol plays Scissors, Jade plays Rock... Jade wins the game!

/*
const jade = "Paper";
const nicol = "Scissors";

const input = `Jade plays ${jade}; Nicol plays ${nicol}; ...`;

if (jade !== "Paper" && jade !== "Rock" && jade !== "Scissors") {
  console.log("Not a valid entry from Jade");
} else if (nicol !== "Paper" && nicol !== "Rock" && nicol !== "Scissors") {
  console.log("Not a valid entry from Nicol");
} else if (jade === "Rock" && nicol === "Scissors") {
  console.log(`${input}Jade wins the game!`);
} else if (jade === "Paper" && nicol === "Rock") {
  console.log(`${input}Jade wins the game!`);
} else if (jade === "Scissors" && nicol === "Paper") {
  console.log(`${input}Jade wins the game!`);
} else if (jade === nicol) {
  console.log(`${input}It's a draw!`);
} else {
  console.log(`${input}Nicol wins the game!`);
}
*/

// Challenge 2 - Using the prompt() command
// Using the JS console in your browser, write some code that lets each user input their play choice using the prompt() command, and then outputs the winner using the alert() command. See attachment for more details.

// eg.
// Prompt 1 asking user one for their input: Scissors
// Prompt 2 asking user two for their input: Rock
// Alert pop up: User 2 wins the game!

// Since you aren't using functions yet it might be best to write the code in VSCode and paste it into the JS console so that each prompt pops up after one another

const playerOneName = prompt("What is your name, player 1?");
const playerOne = prompt(`${playerOneName} - what do you play?`).toLowerCase();

const playerTwoName = prompt("What is your name, player 2?");
const playerTwo = prompt(`${playerTwoName} - what do you play?`).toLowerCase();

const input = `${playerOneName} plays ${playerOne}; ${playerTwoName} plays ${playerTwo}; ...`;

if (playerOne !== "paper" && playerOne !== "rock" && playerOne !== "scissors") {
  alert(`Not a valid entry from ${playerOneName}`);
} else if (
  playerTwo !== "paper" &&
  playerTwo !== "rock" &&
  playerTwo !== "scissors"
) {
  alert(`Not a valid entry from ${playerTwoName}`);
} else if (playerOne === "rock" && playerTwo === "scissors") {
  alert(`${input}${playerOneName} wins the game!`);
} else if (playerOne === "paper" && playerTwo === "rock") {
  alert(`${input}${playerOneName} wins the game!`);
} else if (playerOne === "scissors" && playerTwo === "paper") {
  alert(`${input}${playerOneName} wins the game!`);
} else if (playerOne === playerTwo) {
  alert(`${input}It's a draw!`);
} else {
  alert(`${input}${playerTwoName} wins the game!`);
}

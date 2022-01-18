// Some practice using your Rock Paper Scissors code:
// Move your code into a function called rockPaperScissors that only runs if you call rockPaperScissors()
// Update your code so that the function rockPaperScissors takes in 2 answers (ie arguments) and outputs the winner.
// calling function: rockPaperScissors('rock', 'paper')
// should output: "Paper wins!"

function sentenceCase(text) {
  return text.charAt(0).toUpperCase() + text.substring(1);
}

function rockPaperScissors(playerOne, playerTwo) {
  if (
    playerOne !== "paper" &&
    playerOne !== "rock" &&
    playerOne !== "scissors"
  ) {
    return "Not a valid entry from Player One";
  } else if (
    playerTwo !== "paper" &&
    playerTwo !== "rock" &&
    playerTwo !== "scissors"
  ) {
    return "Not a valid entry from Player Two";
  } else if (
    (playerOne === "rock" && playerTwo === "scissors") ||
    (playerOne === "paper" && playerTwo === "rock") ||
    (playerOne === "scissors" && playerTwo === "paper")
  ) {
    return `${sentenceCase(playerOne)} wins!`;
  } else if (playerOne === playerTwo) {
    return "It's a draw!";
  } else {
    return `${sentenceCase(playerTwo)} wins!`;
  }
}

const result = rockPaperScissors("scissors", "paper");
console.log(result);

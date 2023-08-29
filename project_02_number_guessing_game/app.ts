import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber = Math.floor(Math.random() * 10);

let score: number = 5;

let endGame: boolean = false;

const checkNumber = (num: number) => {
  if (score == 0) {
    console.log(chalk.red("GameOver You Lost"));
  } else if (randomNumber === num) {
    console.log(chalk.green(`You won and your score is ${score + 1}`));
    endGame = true;
  } else if (randomNumber < num) {
    console.log(chalk.gray(`I am smaller than ${num}. Tries Left ${score}`));
  } else if (randomNumber > num) {
    console.log(chalk.gray(`I am bigger than ${num}. Tries Left ${score}`));
  }
};

console.log(`Guess the Number`);

while (score > 0) {
  let input;
  if (!endGame) {
    input = await inquirer.prompt({
      type: "number",
      name: "guessedNuber",
      message: "Guess the right number",
    });
  } else {
    break;
  }
  score--;
  checkNumber(input?.guessedNuber);
}

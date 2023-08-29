import chalk from "chalk";
import inquirer from "inquirer";
async function getQuestions() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "operator",
      message: "Select operation which you want to perform 😒",
      choices: [
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division",
        "Power",
      ],
    },
    {
      type: "number",
      name: "number1",
      message: chalk.yellow("Please enter first number"),
    },
    {
      type: "number",
      name: "number2",
      message: chalk.yellow("Please enter second number"),
    },
  ]);

  return answers;
}

export default getQuestions;

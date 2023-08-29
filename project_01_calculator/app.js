import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import getQuestions from "./getQuestions.js";
import solveAnswers from "./solveAnswer.js";
let repeat = true;
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
const title = chalkAnimation.rainbow("Lets start calculation");
await sleep();
title.stop();
console.log(`|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`);
while (repeat) {
    const data = await getQuestions();
    solveAnswers(data);
    const rep = await inquirer.prompt({
        type: "list",
        name: "repeat",
        message: "Want to do more calculations?",
        choices: ["Yes", "No"],
    });
    console.clear();
    if (rep.repeat == "No") {
        repeat = false;
    }
}

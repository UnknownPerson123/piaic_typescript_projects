import chalk from "chalk";
function solveQuery(data) {
    let ans = 0;
    switch (data.operator) {
        case "Addition":
            ans = data.number1 + data.number2;
            break;
        case "Subtraction":
            ans = data.number1 - data.number2;
            break;
        case "Multiplication":
            ans = data.number1 * data.number2;
            break;
        case "Division":
            if (data.number2 == 0) {
                console.log(chalk.red("cannot divide by 0"));
                break;
            }
            ans = data.number1 / data.number2;
            break;
        case "Power":
            ans = data.number1 ** data.number2;
            break;
        default:
            break;
    }
    if (ans) {
        console.log(ans);
    }
}
export default solveQuery;

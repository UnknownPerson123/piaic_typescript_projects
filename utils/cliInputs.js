import inquirer from "inquirer";
function createClIInputs(type, name, message, choices) {
    let command;
    if (type === "list") {
        command = inquirer.prompt({
            type: "list",
            name,
            message,
            choices,
        });
    }
    else if (type === "input") {
        command = inquirer.prompt({
            type: "input",
            name,
            message,
        });
    }
    return command;
}
export default createClIInputs;

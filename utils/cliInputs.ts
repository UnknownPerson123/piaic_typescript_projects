import inquirer from "inquirer";
function createClIInputs(
  type: string,
  name: string,
  message: string,
  choices?: string[]
) {
  let command;
  if (type === "list") {
    command = inquirer.prompt({
      type: "list",
      name,
      message,
      choices,
    });
  } else if (type === "input") {
    command = inquirer.prompt({
      type: "input",
      name,
      message,
    });
  }
  return command;
}

export default createClIInputs;

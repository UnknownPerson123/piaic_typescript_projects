import inquirer from "inquirer";
const todoList = [
    { name: "brush", completed: false },
    { name: "take bath", completed: false },
    { name: "Read Book", completed: false },
    { name: "work", completed: false },
    { name: "complete project", completed: false },
    { name: "clean room", completed: false },
    { name: "clear dirt", completed: false },
];
function addTodo(task) {
    const newTask = {
        name: task,
        completed: false,
    };
    todoList.push(newTask);
}
async function removeTodo(id) {
    const cliInput = await createClIInputs("list", "completed", "Are you sure you want to delete it", ["Yes", "No"]);
    if (cliInput.completed === "Yes") {
        todoList.splice(id, 1);
    }
    console.log(todoList);
}
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
function getIndexOfTask(taskString) {
    return todoList.findIndex((task) => task.name === taskString);
}
let repeat = true;
async function startAgain() {
    let cliInput;
    const cliOptions = ["Add Todo", "Update Todo", "Delete Todo"];
    const availableTasks = todoList.map((todo) => `${todo.name}`);
    cliInput = await createClIInputs("list", "todo", "Please select which opetaion you want to do.", cliOptions);
    if (cliInput.todo === "Add Todo") {
        cliInput = await createClIInputs("input", "todo", "Please enter new task");
        addTodo(cliInput.todo);
        console.log(todoList);
    }
    else if (cliInput.todo === "Update Todo") {
        cliInput = await createClIInputs("list", "tasks", "Select which task you want to update", availableTasks);
        const index = getIndexOfTask(cliInput.tasks);
        cliInput = await createClIInputs("list", "completed", "Do you want to mark it completed?", ["Yes", "No"]);
        if (cliInput.completed === "Yes") {
            todoList[index].completed = true;
        }
        else {
            cliInput = await createClIInputs("input", "newInput", "Please enter updated Task");
            todoList[index].name = cliInput.newInput;
        }
        console.log(todoList);
    }
    else if (cliInput.todo === "Delete Todo") {
        const availableTasks = todoList.map((todo) => `${todo.name}`);
        cliInput = await createClIInputs("list", "task", "Select which task you want to delete", availableTasks);
        // console.log(object);
        const index = getIndexOfTask(cliInput.task);
        await removeTodo(index);
    }
}
while (repeat) {
    await startAgain();
    const ans = await inquirer.prompt({
        type: "list",
        name: "repeat",
        message: "Do you want to do more operations",
        choices: ["Yes", "No"],
    });
    if (ans.repeat === "No") {
        repeat = false;
    }
}
// startAgain();

import inquirer from "inquirer";
import generateUsers from "./generateUsers.js";
const usersData = generateUsers;
console.log(usersData);
// Code above is to generate 5 random users
function getUserIndex(userID) {
    return usersData.findIndex((user) => user.userId === userID);
}
function userAuthentication(index, userPin) {
    if (index < 0) {
        return false;
    }
    else if (currentUser.userPin !== userPin) {
        return false;
    }
    return true;
}
async function repeat(message) {
    console.log("Not enough money");
    const rep = await createCLIInputs("list", "rep", "Want to do other transaction", ["Yes", "No"]);
    if (rep.rep === "Yes") {
        await atmOptions();
    }
}
async function updateBalance(user, amount, type) {
    const transaction = {
        type,
        amount,
        desc: "",
    };
    if (type === "debit") {
        user.accountBalance += amount;
        transaction.desc = "Amount Added";
        updateTransactions(user, transaction);
    }
    else if (type === "credit") {
        if (user.accountBalance > amount) {
            user.accountBalance -= amount;
            transaction.desc = "Amount withdrew";
            updateTransactions(user, transaction);
        }
        else {
            await repeat("Insufficent Balance, Want to do other transaction.");
        }
    }
}
function updateTransactions(user, transaction) {
    const createTransaction = {
        type: transaction.type,
        amount: transaction.amount,
        desc: transaction.desc,
    };
    user.transactions?.push(createTransaction);
}
const cliData = await inquirer.prompt([
    {
        type: "number",
        name: "userId",
        message: "Please enter user id",
    },
    {
        type: "number",
        name: "userPin",
        message: "Please enter user pin",
    },
]);
function createCLIInputs(type, name, message, choices) {
    if (type === "list") {
        return inquirer.prompt({
            type: "list",
            name: name,
            message: message,
            choices: choices,
        });
    }
    if (type === "number") {
        return inquirer.prompt({
            type: "number",
            name: name,
            message: message,
        });
    }
}
async function transferAmount(userID, amount) {
    const index = getUserIndex(userID);
    console.log(index);
    if (currentUser.accountBalance > amount && index >= 0) {
        const foundUser = usersData[index];
        updateBalance(foundUser, amount, "debit");
        updateBalance(currentUser, amount, "credit");
        console.log({
            cur: currentUser.transactions,
            fou: foundUser.transactions,
        });
    }
    else {
        await repeat("Insufficent Balance, Want to do other transaction.");
    }
}
async function atmOptions() {
    const atmOptions = await createCLIInputs("list", "atm", "Which service you want to have.", ["Cash Withdraw", "Fast Cash", "Transfer Amount"]);
    if (atmOptions.atm == "Fast Cash") {
        const fastCash = await createCLIInputs("list", "fastCash", "How much money you want to withdraw", ["500", "1000", "5000", "10000", "20000", "25000"]);
        updateBalance(currentUser, +fastCash.fastCash, "credit");
    }
    else if (atmOptions.atm == "Cash Withdraw") {
        const cashWithdraw = await createCLIInputs("number", "cashWithdraw", "How much money you want to withdraw");
        updateBalance(currentUser, cashWithdraw.cashWithdraw, "credit");
    }
    else if (atmOptions.atm == "Transfer Amount") {
        const userId = await createCLIInputs("number", "id", "Enter User ID");
        const amount = await createCLIInputs("number", "amount", "How much money you want to transfer");
        transferAmount(userId.id, amount.amount);
    }
}
const index = getUserIndex(cliData.userId);
const currentUser = usersData[index];
if (await userAuthentication(index, cliData.userPin)) {
    await atmOptions();
}
else {
    console.log("Invalid User ID or Pin");
}

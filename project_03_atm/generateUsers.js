function generateRandomNumber() {
    return Math.floor(Math.random() * 90000) + 10000;
}
function generateUserData() {
    return {
        userId: generateRandomNumber(),
        userPin: generateRandomNumber(),
        accountBalance: generateRandomNumber(),
        billsPaid: [],
        moneyTransfered: [],
        transactions: [],
    };
}
const userData = [];
for (let i = 0; i < 5; i++) {
    userData.push(generateUserData());
}
export default userData;

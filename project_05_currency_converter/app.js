import inquirer from "inquirer";
const data = [
    {
        currency1: "GBP",
        currency2: "USD",
        price: 1.257,
    },
    {
        currency1: "GBP",
        currency2: "EUR",
        price: 1.17,
    },
    {
        currency1: "GBP",
        currency2: "KWD",
        price: 0.39,
    },
    {
        currency1: "GBP",
        currency2: "PKR",
        price: 387.42,
    },
    {
        currency1: "EUR",
        currency2: "KWD",
        price: 0.33,
    },
    {
        currency1: "EUR",
        currency2: "USD",
        price: 1.07,
    },
    {
        currency1: "EUR",
        currency2: "PKR",
        price: 330.77,
    },
    {
        currency1: "KWD",
        currency2: "PKR",
        price: 330.77,
    },
    {
        currency1: "KWD",
        currency2: "USD",
        price: 3.24,
    },
    {
        currency1: "PKR",
        currency2: "USD",
        price: 0.0032,
    },
];
const currencyData = await inquirer.prompt([
    {
        type: "list",
        name: "currency1",
        message: "Please select which currency you want to convert.",
        choices: ["USD", "GBP", "EUR", "KWD", "PKR"],
    },
    {
        type: "number",
        name: "amount",
        message: "Enter amount of total money want to convert.",
    },
    {
        type: "list",
        name: "currency2",
        message: "Please select in which currency you want to convert",
        choices: ["USD", "GBP", "EUR", "KWD", "PKR"],
    },
]);
const currency = data.filter((currency) => {
    if ((currency.currency1 === currencyData.currency1 &&
        currency.currency2 === currencyData.currency2) ||
        (currency.currency1 === currencyData.currency2 &&
            currency.currency2 === currencyData.currency1)) {
        return currency.price;
    }
});
let amount = 0;
if (currency[0].currency1 === currencyData.currency1) {
    amount = currencyData.amount * +currency[0].price;
}
else {
    amount = currencyData.amount / +currency[0].price;
}
console.log(amount);

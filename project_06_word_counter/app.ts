import cliInput from "../utils/cliInputs.js";

const inputData = await cliInput("input", "str", "Enter an english paragraph.");

// const data1 = '"Please select in which currency you want to convert"';

const data = inputData.str;

console.log(data.split("").filter((el: string) => el != " ").length);

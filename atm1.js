#! /usr/bin/env node
import inquirer from "inquirer";
let balanceWithdrawLimit = 500000;
let myBalance = 5000000;
let myPin = 44206;
console.log("Please, insert your card");
console.log("Welcome to MEEZAN Bank Limited.");
console.log("Please wait while your transaction is in process!");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code !!!");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Please! select option",
        choices: ["cash amount", "withdraw amount", "balance inquiry"]
    }
]);
console.log(operationAns);
if (operationAns.operation === "cash amount") {
    let cashAns = await inquirer.prompt([
        {
            name: "cash",
            type: "list",
            message: "Enter your amount",
            choices: ["1000", "5000", "10000", "25000", "50000", "100000"]
        }
    ]);
    console.log(cashAns);
    if (myBalance -= cashAns.cash) {
        console.log("Your remaining balance is: " + myBalance);
    }
    else {
        myBalance < cashAns.cash;
        console.log("Out of your range.");
    }
}
else if (operationAns.operation === "withdraw amount") {
    let withdrawAns = await inquirer.prompt([
        {
            name: "withdraw",
            type: "number",
            message: "Enter your amount"
        }
    ]);
    console.log(withdrawAns);
    if (withdrawAns.withdraw === balanceWithdrawLimit) {
        console.log("Out of your limit.");
    }
    else if (myBalance -= withdrawAns.withdraw) {
        console.log("Your remaining balance is: " + myBalance);
    }
    else {
        myBalance -= withdrawAns.withdraw;
        console.log("Insufficient Balance.");
    }
}
else if (operationAns.operation === "balance inquiry") {
    console.log("Your balance is: " + myBalance);
}
else {
    console.log("Incorrect pin number");
}
;
console.log("Please, Take your card. Sister ");
console.log("Please, Take your card. Brother ");
console.log("Thank You for user MEEZAN Bank Limited.");

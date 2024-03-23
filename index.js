#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 15 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number between 1 to 15: ",
    },
]);
if (answer.userGuessedNumber == randomNumber) {
    console.log('"Bravo! You have guessed the correct number"');
}
else {
    console.log('"Oops! you lose. Try Again!"');
}
;

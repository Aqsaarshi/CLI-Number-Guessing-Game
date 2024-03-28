#!usr / bin/env node
import inquirer from "inquirer";

//onst answers = await inquirer.prompt([
   // {name : "UserGuessedNumber",
    //type :"number",
   // message:"PLEASE GUESS A NUMBER ",
//},
//]);
const randomNumber = Math.floor (Math.random()* 10 + 1);
//console.log(randomNumber);

const answers = await inquirer.prompt([{
name :"userGuessdNumber",
type :"number",
message:"PLEASE GUESS A NUMBER BETWEEN 1-10:",
},]);


if (answers.userGuessdNumber === randomNumber)
{console.log("CONGRATULATION ! YOU GUESS RIGHT NUMBER.");
}
else
{console.log("YOU GUESS WRONG NUMBER");}


// Step 1:
// test that your javascript file is linked to your HTML file by console.log("Hello, world!");

// Step 2: 
// Create a function called getComputerChoice
// -getComputerChoice will randomly return "rock", "paper", "scissors"
// -HINT: Math.random() is a function that returns a number between 0 and 1.  You can use this to make random selections.
// -Once you think you've got this working, test it by console.log(getComputerChoice());

// Step 3:
// Create a function called getHumanChoice:
// -Write the code so getHumanChoice returns one of "rock", "paper", or "scissors" based on user input
// -HINT: prompt() is a function that will allow you to get user input
// -Once you think you've got this working, test it by console.log(getHumanChoice());

// Step 4:
// Score tracking
// -Create two variables to score human and computer scores
// -initialize these variables with a score of 0

// Step 5: 
// Write the logic to play one game
// -Create a function called playRound
// -2 parameters (humanChoice, computerChoice)
// -make sure that human choice logic is case-insensitive (rock, RoCK, RocK, ROCK should all work equally well)
// -Should console.log a message like "You win! Rock beats scissors")
// -increment the human/computer score based on winner

//console.log ("HelloWorld");

function getComputerChoice(){
    let getComputerChoice = Math.random()
    if (getComputerChoice >= 0 && getComputerChoice < .3333333333333334)
        return("paper")
    if (getComputerChoice >.3333333333333334 && getComputerChoice <= .6666666666666667) 
        return ("rock")
    if (getComputerChoice > .6666666666666667 && getComputerChoice <= 1) 
        return("scissors")
    console.log(getComputerChoice)
}




function getHumanChoice(){
    let Humanchoice = prompt("Rock, paper, scissors");
    console.log(Humanchoice);
    return Humanchoice;

}

//getHumanChoice();



let humanscore = 0
let computerscore = 0




function playRound(HumanChoice, ComputerChoice){
    if (HumanChoice == "rock" && ComputerChoice == "paper"){
        console.log("Human Win")}
    if (HumanChoice == "paper" && ComputerChoice == "rock"){
        console.log("Computer Win")}
    if (ComputerChoice == "scissors" && HumanChoice == "rock"){
        console.log("Human Win")}
    if (ComputerChoice == "rock" && HumanChoice == "scissors"){
        console.log("Computer Win")}
    if (ComputerChoice == "paper" && HumanChoice == "scissors"){
        console.log("Human Win")}
    if (ComputerChoice == "scissors" && HumanChoice == "paper"){
        console.log("Computer Win")}
    if (ComputerChoice == HumanChoice){
        console.log("Draw")}
}

playRound(getHumanChoice(), getComputerChoice())





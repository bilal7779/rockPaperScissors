let options = ["rock", "paper", "scissors"];

////////////////////////////////////

function getComputerChoice(){
   let index = Math.floor(Math.random() * 3);
   return options[index];
}

////////////////////////////////////

function getHumanChoice(){
   let humanAnswer = window.prompt("Rock, paper or scissors?");
   return humanAnswer.toLowerCase();
}

////////////////////////////////////

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        console.log("Human choice: ", humanChoice);
        console.log("Computer choice: ", computerChoice);
        if (humanChoice === computerChoice){
            console.log("It's a tie");
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                   (humanChoice === "paper" && computerChoice === "rock") ||
                   (humanChoice === "scissors" && computerChoice === "paper")){
            console.log("Win! ", humanChoice, " beats ", computerChoice );
            humanScore++;
            console.log("Your score is ", humanScore);
        } else if ((computerChoice === "rock" && humanChoice === "scissors") ||
                   (computerChoice === "paper" && humanChoice === "rock") ||
                   (computerChoice === "scissors" && humanChoice === "paper")) {
            console.log("Lose! ", computerChoice, " beats ", humanChoice);
            computerScore++;
            console.log("Computer score is ", computerScore);
        } else {
            console.log("This is not a correct option");
        }
    }

    // Call playRound to play a round of the game
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    console.log("Final human score: ", humanScore );
    console.log("Final computer score: ", computerScore );

    if (humanScore === computerScore){
        console.log("The final result is a tie")
    }
    else if (humanScore > computerScore){
        console.log("You have won")
    }
    else (console.log("You have lost"));

}

// Start the game
playGame();


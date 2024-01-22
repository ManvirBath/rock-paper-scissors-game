//variables to keep count of the score for each player 
let playerScore = 0;
let computerScore = 0;

//this function handles randomly returning computer's output 
function getComputerChoice() { 
    let cpuChoice = Math.floor(Math.random() * 3) + 1;
    switch(cpuChoice) {
        case 1: 
            return "rock";
            break;
        case 2: 
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

//this function plays a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    // if(![rock, paper, scissors].includes(playerSelection) || ![rock, paper, scissors].includes(computerSelection)) {
    //     throw new Error("Invalid choice. Please choose rock, paper, or scissors.");
    // }
    
    if(playerSelection === computerSelection) {
        return `Tie game. Play again. \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore} \n--------------------------------------------------------------`;
    } else if(
        (playerSelection === rock && computerSelection === scissors) ||
        (playerSelection === paper && computerSelection === rock) ||
        (playerSelection === scissors & computerSelection === paper)) 
    {
        playerScore++;
        return `You chose ${playerSelection} and computer chose ${computerSelection}. You win! ${playerSelection} beats ${computerSelection}.\nPlayer Score: ${playerScore} \nComputer Score: ${computerScore} \n--------------------------------------------------------------`
    } else {
        computerScore++;
        return `You chose ${playerSelection} and computer chose ${computerSelection}. You lose! ${computerSelection} beats ${playerSelection}.\nPlayer Score: ${playerScore} \nComputer Score: ${computerScore} \n--------------------------------------------------------------`
    }    
}

//function that plays the game as many times as the user wants
function playGames(times) {
    for(let i = 0; i < times; i++) {
        let playerSelection = prompt('rock, paper or scissors?');
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
    if(playerScore > computerScore) {
        let win = "Yay! You win the series."
        // console.log(win);
        return win;

    } else if(computerScore > playerScore) {
        let lose = "Aw! You lose the series!"
        // console.log(lose);
        return lose; 
    } else {
        let tie = "The series is a tie.";
        // console.log(tie);
        return tie;
    }
}

// playGames(5);
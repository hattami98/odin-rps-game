// Getting player's choice
// get user input
let getUserInput = () => {
    let input = prompt("Type your selection between rock, paper, and scissor: ");
    return input;
}

// standardize the input. here it's done by turning it into capitalized lowercase
let standardizeInput = input => {
    return input.substr(0,1).toUpperCase()+input.substr(1).toLowerCase();
};

// check if valid
let validizeInput = input => {
    if(input != "Rock" && input != "Paper" && input != "Scissor") return;
    return input;
}

// give warning if invalid
let inputWarning = input => {
    if(!input) return "Please enter valid input!";
}

// store input as player's selection
let playerSelection = () => {
    let choice = validizeInput(standardizeInput(getUserInput()));
    if(!choice) {
        alert(inputWarning(choice));
        choice = playerSelection();
    }
    return choice;
}

// Getting computer's choice
// get random number between 0-2
let getRandomNumber = () => {
    return Math.floor(Math.random() * 3);
}

// assign random number to rock, scissor, and paper
let assignSelection = (num) => {
    switch(num){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
        default:
            return;
    }
}

// store as computer selection
let computerSelection = () => standardizeInput(assignSelection(getRandomNumber()));

// show everyone's choice
let showChoice = (player, computer) => {
    alert(`You've chosen ${player} and Computer has chosen ${computer}`);
}

// compare player's and computer's choices
let playRound = (player, computer) => {
    if(player === computer) return "tie";
    else if(player === "Paper"){
        if(computer === "Rock") return "win";
        else return "defeat";
    }
    else if(player === "Scissor"){
        if(computer === "Paper") return "win";
        else return "defeat";
    }
    else if(player === "Rock"){
        if(computer === "Scissor") return "win";
        else return "defeat";
    }
}

// show result for that round
let showResult = (result, player, computer) => {
    if(result === "tie") alert("Tie!");
    else if(result === "win") alert(`You Win! ${player} beats ${computer}`);
    else if(result === "defeat") alert(`You Lose! ${computer} beats ${player}`);
}

// Main Game Function
let game = () => {
    // initialize score
    let playerScore = 0;
    let computerScore = 0;
    // play for 5 rounds
    for(let i = 0; i < 5; i++){
        // show current round
        alert(`Round ${i+1}!`);

        // play the round
        // get player's choice
        let playerChoice = playerSelection();

        // get computer's choice
        let computerChoice = computerSelection();

        // show both's choice
        showChoice(playerChoice, computerChoice);

        // compare both's choice
        let round = playRound(playerChoice, computerChoice);

        // show result
        showResult(round, playerChoice, computerChoice);

        // record score of current round
        if(round === "win") playerScore ++;
        else if(round === "defeat") computerScore ++;
        else;
    }
    // Show final result when game ends
    let showGameResult = (playerScore, computerScore) => {
        if(playerScore > computerScore){
            alert(`You Win this game! You: ${playerScore} Computer: ${computerScore}`);
        }
        else if(playerScore < computerScore){
            alert(`You Lose this game! You: ${playerScore} Computer: ${computerScore}`);
        }
        else {
            alert(`Tie! You: ${playerScore} Computer: ${computerScore}`);
        }
    }
    showGameResult(playerScore, computerScore);
}


// Page initialization
// Ask if user want to play rock, paper, scissor
let askUserToPlay = () => {
    return confirm("Do you want to play rock, paper, scissor game?");
}

// Ask if user want to play again
let askUserToPlayAgain = () => {
    return confirm("Do you want to play again?");
}

let playGame = answer => {
    if(answer){
        game();
        playGame(askUserToPlayAgain());
    }
}

playGame(askUserToPlay());





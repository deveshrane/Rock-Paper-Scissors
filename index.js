let computerSelection = "";
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
let pass = "Congratulations you Won !!!";
let fail = "Better luck next time.";
let val;
// computer's choice making function
function computerPlay() {
    let rand = Math.floor(Math.random() * 10);
    if (rand == 1 || rand == 2 || rand == 3) {
        computerSelection = "ROCK";
    } else if (rand == 4 || rand == 5 || rand == 6) {
        computerSelection = "PAPER";
    } else {
        computerSelection = "SCISSORS";
    }
    return computerSelection;
}

// game decision making process and score measure
function game(playerSelect, computerSelect) {
    const btn = document.querySelectorAll(".btn");
    btn[0].classList.remove("btn-comp");
    btn[1].classList.remove("btn-comp");
    btn[2].classList.remove("btn-comp");
    let PScore = document.getElementById('PScore');
    let CScore = document.getElementById('CScore');
    playerSelect = playerSelect.toUpperCase();
    if (playerSelect == "ROCK" && computerSelect == "ROCK") {
        PScore.textContent = playerScore;
        CScore.textContent = computerScore;
        btn[0].classList.add("btn-comp");
        result();
    } else if (playerSelect == "ROCK" && computerSelect == "PAPER") {
        computerScore++;
        PScore.textContent = playerScore;
        CScore.textContent = computerScore;
        btn[1].classList.add("btn-comp");
        result();
    } else if (playerSelect == "ROCK" && computerSelect == "SCISSORS") {
        playerScore++;
        PScore.textContent = playerScore;
        CScore.textContent = computerScore;
        btn[2].classList.add("btn-comp");
        result();
    } else if (playerSelect == "PAPER" && computerSelect == "ROCK") {
        playerScore++;
        PScore.textContent = playerScore;
        CScore.textContent = computerScore;
        btn[0].classList.add("btn-comp");
        result();
    } else if (playerSelect == "PAPER" && computerSelect == "PAPER") {
        PScore.textContent = playerScore;
        CScore.textContent = computerScore;
        btn[1].classList.add("btn-comp");
        result();
    } else if (playerSelect == "PAPER" && computerSelect == "SCISSORS") {
        computerScore++;
        PScore.textContent = playerScore;
        CScore.textContent = computerScore;
        btn[2].classList.add("btn-comp");
        result();
    } else if (playerSelect == "SCISSORS" && computerSelect == "ROCK") {
        computerScore++;
        PScore.textContent = playerScore;
        CScore.textContent = computerScore;
        btn[0].classList.add("btn-comp");
        result();
    } else if (playerSelect == "SCISSORS" && computerSelect == "PAPER") {
        playerScore++;
        PScore.textContent = playerScore;
        CScore.textContent = computerScore;
        btn[1].classList.add("btn-comp");
        result();
    } else if (playerSelect == "SCISSORS" && computerSelect == "SCISSORS") {
        PScore.textContent = playerScore;
        CScore.textContent = computerScore;
        btn[2].classList.add("btn-comp");
        result();
    }
}
// The following function takes input from the user
function input() {
    const btn = document.querySelectorAll(".btn");
    btn[0].addEventListener('click', (e) => {
        playerSelection = "ROCK";
        console.log(game(playerSelection, computerPlay()));
    }, false);
    btn[1].addEventListener('click', (e) => {
        playerSelection = "PAPER";
        console.log(game(playerSelection, computerPlay()));
    }, false);
    btn[2].addEventListener('click', (e) => {
        playerSelection = "SCISSORS";
        console.log(game(playerSelection, computerPlay()))
    }, false);
}
// The following function displays the output.
function result() {
    let resultOut = document.getElementById('result');
    if (playerScore == 5) {
        resultOut.textContent = pass;
        val = confirm("Want to play again?");
        console.log(val);
        if (val === true) {
            location.reload();
        }
    } else if (computerScore == 5) {
        resultOut.textContent = fail;
        val = confirm("Want to play again?");
        if (val === true) {
            location.reload();
        }
    }
}
input();
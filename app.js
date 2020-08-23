const easyButton = document.getElementById("easy");
const hardButton = document.getElementById("hard");
const inputBox = document.getElementById("inputBox");
const textOutput = document.getElementById("textOutput");

let computerGuess;
let userGuesses = [];
let attempts = 0;

const init = function() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}

const startGameView = function() {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

const easyMode = function() {
    startGameView();
}

const hardMode = function() {
    startGameView();
}

const compareGuess =  function() {
    const userGuess = Number(document.getElementById("inputBox").value);
    userGuesses.push(" " + userGuess);
    document.getElementById("guesses").innerHTML = userGuesses;
    attempts++;
    document.getElementById("attempts").innerHTML = attempts;

    if (userGuess > computerGuess) {
        textOutput.innerHTML = "Your guess is too high";
        inputBox.value = "";
    } else if (userGuess < computerGuess) {
        textOutput.innerHTML = "Your guess is too low";
        inputBox.value = "";
    } else {
        textOutput.innerHTML = 
        `Correct!!! You got it in ${attempts} attempts`;
    }
}

easyButton.addEventListener("click", easyMode);
hardButton.addEventListener("click", hardMode);
inputBox.addEventListener("change", compareGuess);
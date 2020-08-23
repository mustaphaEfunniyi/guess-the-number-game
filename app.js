const easyButton = document.getElementById("easy");
const hardButton = document.getElementById("hard");
const inputBox = document.getElementById("inputBox");
const textOutput = document.getElementById("textOutput");
const newGameButton = document.getElementById("newGameButton");
const gameArea = document.getElementById("gameArea");
const welcomeScreen = document.getElementById("welcomeScreen")

let computerGuess;
let userGuesses = [];
let attempts = 0;
let maxGuesses;
let low = 1;
let high = 100;

const updateRange = function() {
    const rangeOutput = document.getElementById("rangeOutput");
    rangeOutput.innerText = `${low} - ${high}`;
    rangeOutput.style.marginLeft = low + "%";
    rangeOutput.style.marginRight = 100 - high + "%";
    rangeOutput.classList.add("flash");

    const lowValue = document.getElementById("low");
    lowValue.style.flex = low + "%";
    lowValue.style.background = "#ef7b54";

    const space = document.getElementById("space");
    space.style.flex = high - low + "%";
    space.style.background = "#83e1d0";

    const highValue = document.getElementById("high");
    highValue.style.flex = 100 - high + "%";
    highValue.style.background = "#ef7b54";
}

const init = function() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    console.log(computerGuess);
    newGameButton.style.display = "none";
    gameArea.style.display = "none";
}

const startGameView = function() {
    welcomeScreen.style.display = "none";
    gameArea.style.display = "block";
}

const easyMode = function() {
    maxGuesses = 10;
    startGameView();
}

const hardMode = function() {
    maxGuesses = 5;
    startGameView();
}

const compareGuess =  function() {
    const userGuess = Number(inputBox.value);
    userGuesses.push(" " + userGuess);
    document.getElementById("guesses").innerHTML = userGuesses;
    attempts++;
    document.getElementById("attempts").innerHTML = attempts;

    if (attempts < maxGuesses) {
        if (userGuess > computerGuess) {
            if (userGuess < high) high = userGuess;
            textOutput.innerHTML = "Your guess is too high";
            inputBox.value = "";
        } else if (userGuess < computerGuess) {
            if (userGuess > low) low = userGuess;
            textOutput.innerHTML = "Your guess is too low";
            inputBox.value = "";
        } else {
            textOutput.innerHTML = 
            `Correct!!! You got it in ${attempts} attempts`;
            gameEnded();
        }
    } else {
        if (userGuess > computerGuess) {
            textOutput.innerHTML = 
            `YOU LOSE!!!, <br> The number was ${computerGuess}`;
            gameEnded();
        } else if (userGuess < computerGuess) {
            textOutput.innerHTML = 
            `YOU LOSE!!!, <br> The number was ${computerGuess}`;
            gameEnded();
        } else {
            textOutput.innerHTML = 
            `Correct!!! You got it in ${attempts} attempts`;
            gameEnded();
        }
    }
    updateRange();
}

const newGame= function() {
    window.location.reload();
}

const gameEnded = function() {
    document.getElementById("newGameButton").style.display = "inline";
    inputBox.setAttribute("readonly", "readonly");
}

easyButton.addEventListener("click", easyMode);
hardButton.addEventListener("click", hardMode);
inputBox.addEventListener("change", compareGuess);
newGameButton.addEventListener("click", newGame);
//declare wins, guessesLeft, and array with words
var winsCounter = 0;
console.log("wins " + winsCounter);
var guessesLeftCounter = 10;
console.log("guesses left " + guessesLeftCounter);
var words = ["pikachu", "rayquaza", "charizard", "squirtle", "mudkip"];

var chosenLetters = [];

var lettersGuessed = [];
//make function that when the window starts the comp chooses a word from the array
window.onload = function (event) {
    var compChoice = words[Math.floor(Math.random() * words.length)];
    console.log("chosen word " + compChoice);
    for (var i = 0; i < compChoice.length; i++) {
        chosenLetters[i] = "_";
    };
    console.log("chosen letters " + chosenLetters);
    document.getElementById("word").innerHTML = chosenLetters;
    var remainingLetters = compChoice.length;
    console.log("remaining letters " + remainingLetters);
    document.getElementById("guessesLeft").innerHTML = guessesLeftCounter;
    document.getElementById("wins").innerHTML = winsCounter;
        if (compChoice === "pikachu"){
            document.getElementById("pik").style.visibility = "visible";
        }else if (compChoice === "rayquaza"){
            document.getElementById("ray").style.visibility = "visible";
        }else if (compChoice === "charizard"){
            document.getElementById("char").style.visibility = "visible";
        }else if (compChoice === "squirtle"){
            document.getElementById("squ").style.visibility = "visible";
        }else if (compChoice === "mudkip"){
            document.getElementById("mud").style.visibility = "visible";
        }
    //make a function that reads the user's key pressed
    document.onkeyup = function (event) {
        var guessTrue = false;
        var userGuess = event.key;
        console.log("User Guess " + userGuess);
        //make a function that places the user's keys pressed into an empty array to show what you guessed
        chosenLetters.join(userGuess);
        console.log(chosenLetters);
        lettersGuessed.push(userGuess);
        console.log("Letters guessed incorrectly " + lettersGuessed);
        //make a function that reads if the user's key pressed matches a letter in the chosen words, if not subtract 1 guess from guessesLeftCounter
        for (var j = 0; j < compChoice.length; j++) {
            if (compChoice[j] === userGuess) {
                guessTrue = true;
                chosenLetters[j] = userGuess;
            console.log("chosen Letter " + chosenLetters);
            }
        }
        if (guessTrue){
            console.log("You guessed correctly")
            
            remainingLetters--;
            console.log("remaining letters " + remainingLetters);
        } else {
            guessesLeftCounter--;
            console.log("Guesses left " + guessesLeftCounter);
            document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
        }
            document.getElementById("guessesLeft").innerHTML = guessesLeftCounter;
            document.getElementById("word").innerHTML = chosenLetters;
            //make a function that updates the wins if the user gets the complete word
            if (remainingLetters === 0) {
                winsCounter++;
                document.getElementById("wins").innerHTML = winsCounter;
                console.log("wins " + winsCounter);
                chosenLetters = [];
                compChoice = words[Math.floor(Math.random() * words.length)];
                console.log("chosen word " + compChoice);
                for (var i = 0; i < compChoice.length; i++) {
                    chosenLetters[i] = "_";
                };
                console.log("chosen letters " + chosenLetters);
                remainingLetters = compChoice.length;
                console.log("remaining letters " + remainingLetters);
                document.getElementById("word").innerHTML = chosenLetters;
            }
            //make a function that alerts the user they won if they got 3 correct words
            if (winsCounter === 3) {
                alert("You win the game!!!")
                winsCounter = 0;
                document.getElementById("wins").innerHTML = winsCounter;
                console.log("wins " + winsCounter);
                chosenLetters = [];
                compChoice = words[Math.floor(Math.random() * words.length)];
                console.log("chosen word " + compChoice);
                for (var i = 0; i < compChoice.length; i++) {
                    chosenLetters[i] = "_";
                };
                console.log("chosen letters " + chosenLetters);
                document.getElementById("word").innerHTML = chosenLetters;
                remainingLetters = compChoice.length;
                console.log("remaining letters " + remainingLetters);
                guessesLeftCounter = 10;
                console.log("guesses left " + guessesLeftCounter);
                document.getElementById("guessesLeft").innerHTML = guessesLeftCounter;
            }
            if (guessesLeftCounter === 0){
                alert("You lost, try again!")
                winsCounter = 0;
                document.getElementById("wins").innerHTML = winsCounter;
                console.log("wins " + winsCounter);
                chosenLetters = [];
                compChoice = words[Math.floor(Math.random() * words.length)];
                console.log("chosen word " + compChoice);
                for (var i = 0; i < compChoice.length; i++) {
                    chosenLetters[i] = "_";
                };
                console.log("chosen letters " + chosenLetters);
                document.getElementById("word").innerHTML = chosenLetters;
                remainingLetters = compChoice.length;
                console.log("remaining letters " + remainingLetters);
                guessesLeftCounter = 10;
                console.log("guesses left " + guessesLeftCounter);
                document.getElementById("guessesLeft").innerHTML = guessesLeftCounter;
            }
        

    }
};


//make a function that restarts the game if guessesLeft reaches 0

//console log any extras
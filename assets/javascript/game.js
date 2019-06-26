//declare wins, guessesLeft, and array with words
var winsCounter = 0;
console.log("wins " + winsCounter);
var guessesLeftCounter = 10;
console.log("guesses left " + guessesLeftCounter);
var words = ["it", "dog"];

var chosenLetters = [];


//make function that when the window starts the comp chooses a word from the array
window.onload = function(event){
    var compChoice = words[Math.floor(Math.random() * words.length)];
    console.log("chosen word " + compChoice);
    for (var i = 0; i < compChoice.length; i++){
        chosenLetters[i] = "_";
    };
    console.log("chosen letters " + chosenLetters);
    var remainingLetters = compChoice.length;
    console.log("remaining letters " + remainingLetters);
    document.getElementById("underscore").innerHTML = compChoice;
    document.getElementById("underscore").style.visibility = "hidden";
    document.getElementById("guessesLeft").innerHTML = guessesLeftCounter;
    document.getElementById("wins").innerHTML = winsCounter;
//make a function that reads the user's key pressed
    document.onkeyup = function (event){
        var userGuess = event.key;
        console.log("User Guess " + userGuess);
//make a function that places the user's keys pressed into an empty array to show what you guessed
        chosenLetters.join(userGuess);
        console.log(chosenLetters);
//make a function that reads if the user's key pressed matches a letter in the chosen words, if not subtract 1 guess from guessesLeftCounter
        for (var j = 0; j < compChoice.length; j++){
            if (compChoice[j] === userGuess){
                chosenLetters[j] = userGuess;
                console.log(chosenLetters);
                remainingLetters--;
                console.log("remaining letters " + remainingLetters);
                }
                document.getElementById("guesses").innerHTML = chosenLetters;
//make a function that updates the wins if the user gets the complete word
            if (remainingLetters === 0){
                winsCounter++;
                document.getElementById("wins").innerHTML = winsCounter;
                console.log("wins " + winsCounter);
                chosenLetters = [];
                compChoice = words[Math.floor(Math.random() * words.length)];
                console.log("chosen word " + compChoice);
                for (var i = 0; i < compChoice.length; i++){
                    chosenLetters[i] = "_";
                };
                console.log("chosen letters " + chosenLetters);
                remainingLetters = compChoice.length;
                console.log("remaining letters " + remainingLetters);
            }
//make a function that alerts the user they won if they got 3 correct words
            if (winsCounter === 3){
                alert("You win the game!!!")
            }
        }
        
    }
};


//make a function that restarts the game if guessesLeft reaches 0

//console log any extras
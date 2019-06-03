var usedLetters = Array();
var guessesLeft = 10;
var possibleAnswers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var rightAnswer = possibleAnswers[Math.floor(Math.random()*possibleAnswers.length)];
var guessesSoFar = document.getElementById("guesses-so-far");
var wins = 0;
var losses = 0;

document.getElementById("right-answer").innerHTML = rightAnswer;

document.onkeyup = function (event) {
    var guess = (event.key)
    if (! usedLetters.includes(guess)){
        usedLetters.push(guess)
        guessesLeft--
    }
    if (rightAnswer.includes(guess)) {
        wins++;
        guessesLeft = 10;
    }
    if (! rightAnswer.includes(guess) && guessesLeft <= 0) {
        losses++
        guessesLeft = 10;
    }
    
    guessesSoFar.textContent = usedLetters;
    document.getElementById("guesses-left").innerHTML = " " + guessesLeft;  
    document.getElementById("wins").innerHTML = wins; 
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("right-answer").innerHTML = rightAnswer;
};

var usedLetters = Array();
//records keys pressed
var guessesSoFar = document.getElementById("guesses-so-far");
document.onkeyup = function (event) {
    if (! usedLetters.includes(event.key)){
        usedLetters.push(event.key)
    }
    guessesSoFar.textContent = usedLetters;
};
//counts down guesses left when a key is pressed
var i = document.getElementById("guesses-left");
document.onkeydown = function (event) {
    for (i = 10; i > 9; i--){
    if (i < 1) {
        document.write("you lose");
    }
}
};
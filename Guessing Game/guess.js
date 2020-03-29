var userGuess;
//Generate Random Number
var secretNumber = Math.floor(Math.random() * 10 + 1);
//console.log(secretNumber);
var reload = location.reload(forceGet);

//Capture User Guess
function compare() 
{
userGuess = document.getElementById("userInput").value;
    if (userGuess == secretNumber) alert("Congrats");
    else if(userGuess > secretNumber) alert("Too High");
    else if (userGuess < secretNumber) alert(" Too Low");
    else alert("that is not a number");

    var guessed = userGuess;
    var create = document.createElement("p");
    document.getElementById("post"). innerHTML = userGuess;
    var allGuesses = document.getElementById("post2").value;
}





var wins = 0;

var losses = 0;

var left = 10;

var guessed = [];

var options = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function(event) {

	var userGuess = event.key;
 
	var computerGuess = options[ Math.floor ( Math.random() * options.length)];

	if (options.indexOf(userGuess) === -1) {
		return false;

	} else if(guessed.indexOf(userGuess) !== -1) {

		alert("You already guess that!")
		return false;

	} else if (userGuess === computerGuess) {
		
		alert("That is correct!");
		wins++;
		left = 10;
		guessed = [];

	} else {
		
		alert("That is incorrect");
		left--;
		guessed.push(userGuess);
	
	}

	if(left === 0){
		
		
		alert("You are out of guesses!")
		losses++;
		left = 10;
		guessed = [];

	} 

	document.getElementById('wins').innerHTML = wins;
	document.getElementById('losses').innerHTML = losses;
	document.getElementById('left').innerHTML = left;
	document.getElementById('guessed').innerHTML = guessed;
}



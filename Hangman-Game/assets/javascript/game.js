var start = false;

var wins = 0;

var losses = 0;

var guessesLeft = 7;

var wordsList = ['anthrax','megadeth','slayer','metallica', 'pantera'];

var randomWord;

var answer;

var guesses = [];

var blanksAndSuccesses = [];

var alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.getElementById("metallica").style.visibility = "hidden";
document.getElementById("anthrax").style.visibility = "hidden";
document.getElementById("megadeth").style.visibility = "hidden";
document.getElementById("slayer").style.visibility = "hidden";
document.getElementById("pantera").style.visibility = "hidden";
// startGame()
// Its how we we will start and restart the game.
// (Note: It's not being run here. It's just being made for future use.)
function startGame() {

	document.getElementById("start").style.visibility = "hidden";

	document.getElementById("metallica").style.visibility = "hidden";
	document.getElementById("anthrax").style.visibility = "hidden";
	document.getElementById("megadeth").style.visibility = "hidden";
	document.getElementById("slayer").style.visibility = "hidden";
	document.getElementById("pantera").style.visibility = "hidden";


	guessesLeft = 7;

	blanksAndSuccesses = [];

	randomWord = wordsList[Math.floor(Math.random()*wordsList.length)];

	answer = randomWord.split("");

	var numBlanks = answer.length;

	
	for ( var i = 0; i < numBlanks; i++){
		
		 blanksAndSuccesses.push("_");

	}

	
	document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("guesses").innerHTML = guesses;
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;

	console.log(answer);
  }



 function checkLetters(letter) {


 	if ( answer.indexOf(letter) !== -1) {

 		for ( var i = 0; i < answer.length; i++ ) {
	 			if ( answer[i] === letter){
	 				blanksAndSuccesses[i] = letter;
	 			} 
			}

		}

	if (answer.indexOf(letter) === -1) {
			guesses.push(letter);
			guessesLeft--;

		}





		








}

 	

 function roundComplete() {
 	

 	document.getElementById("guessesLeft").innerHTML = guessesLeft;
 	document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
 	document.getElementById("guesses").innerHTML = guesses;

 	if ( blanksAndSuccesses.indexOf("_") === -1 ) {
 		wins++;
 		document.getElementById("wins").innerHTML = wins;
 		if( blanksAndSuccesses.join("") === "metallica"){
 			document.getElementById("metallica").style.visibility = "visible";
 		} else if ( blanksAndSuccesses.join("") === "anthrax") {
 			document.getElementById("anthrax").style.visibility = "visible";
 		} else if ( blanksAndSuccesses.join("") === "megadeth") {
 			document.getElementById("megadeth").style.visibility = "visible";
 		} else if ( blanksAndSuccesses.join("") === "slayer"){
 			document.getElementById("slayer").style.visibility = "visible";

 		} else {
 				document.getElementById("pantera").style.visibility = "visible";
 			}
 		
 		guesses = [];

 		document.getElementById("start").style.visibility = "visible";

 		
 	}

 	if ( guessesLeft === 0 ) {
 		losses++;
 		alert("You lose!");
 		document.getElementById("losses").innerHTML = losses;
 		
 		guesses = [];

 		document.getElementById("start").style.visibility = "visible";
 		
 	}



 }



document.onkeyup = function(event) {


	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

	if ( alphabet.indexOf(letterGuessed) === -1 
		|| guesses.indexOf(letterGuessed) !== -1 
		|| blanksAndSuccesses.indexOf(letterGuessed) !== -1 ) {
		return;
	}
		
	checkLetters(letterGuessed);

	roundComplete();
	
	

}
	




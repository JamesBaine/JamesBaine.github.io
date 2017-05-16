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

var metallica = new Audio('01 Battery.m4a');

var megadeth = new Audio('01 Holy Wars...The Punishment Due.m4a');

var anthrax = new Audio('02 Caught In a Mosh.m4a');

var pantera = new Audio('04 Fucking Hostile.m4a');

var slayer = new Audio('06 Black Magic.m4a');

document.getElementById("metallica").style.visibility = "hidden";
document.getElementById("anthrax").style.visibility = "hidden";
document.getElementById("megadeth").style.visibility = "hidden";
document.getElementById("slayer").style.visibility = "hidden";
document.getElementById("pantera").style.visibility = "hidden";
document.getElementById("one").style.visibility = "hidden";
document.getElementById("two").style.visibility = "hidden";
document.getElementById("three").style.visibility = "hidden";
document.getElementById("four").style.visibility = "hidden";
document.getElementById("five").style.visibility = "hidden";
document.getElementById("six").style.visibility = "hidden";
document.getElementById("seven").style.visibility = "hidden";


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
	document.getElementById("one").style.visibility = "hidden";
	document.getElementById("two").style.visibility = "hidden";
	document.getElementById("three").style.visibility = "hidden";
	document.getElementById("four").style.visibility = "hidden";
	document.getElementById("five").style.visibility = "hidden";
	document.getElementById("six").style.visibility = "hidden";
	document.getElementById("seven").style.visibility = "hidden";
	


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
			if (guessesLeft === 6) {
				document.getElementById("one").style.visibility = "visible";
			} else if (guessesLeft === 5) {
				document.getElementById("two").style.visibility = "visible";
			} else if (guessesLeft === 4) {
				document.getElementById("three").style.visibility = "visible";
			} else if (guessesLeft === 3){
				document.getElementById("four").style.visibility = "visible";
			} else if (guessesLeft === 2) {
				document.getElementById("five").style.visibility = "visible";
			} else if (guessesLeft === 1) {
				document.getElementById("six").style.visibility = "visible";
			} 





		






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
 			metallica.play();
 		} else if ( blanksAndSuccesses.join("") === "anthrax") {
 			document.getElementById("anthrax").style.visibility = "visible";
 			anthrax.play();
 		} else if ( blanksAndSuccesses.join("") === "megadeth") {
 			document.getElementById("megadeth").style.visibility = "visible";
 			megadeth.play();
 		} else if ( blanksAndSuccesses.join("") === "slayer"){
 			document.getElementById("slayer").style.visibility = "visible";
 			slayer.play();

 		} else if (blanksAndSuccesses.join("") === "pantera") {
 			document.getElementById("pantera").style.visibility = "visible";
 			pantera.play();
 		}
 		
 		guesses = [];

 		document.getElementById("start").style.visibility = "visible";

 		
 	}

 	if ( guessesLeft === 0 ) {
 		losses++;
		
		document.getElementById("seven").style.visibility = "visible";
			
 		
 		document.getElementById("losses").innerHTML = losses;
 		
 		guesses = [];

 		document.getElementById("start").style.visibility = "visible";
 		alert("You lose!");
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
	




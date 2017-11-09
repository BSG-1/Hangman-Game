//Creates an array that lists all of the possible word choices within game
	var words = ['kyloren', 'skywalker', 'vader', 'darth', 'palpatine', 'lando', 'r2d2', 'chewbacca', 'hansolo','rebelscum','empire']

//Game chooses word randomly
	var randomWordFromList = Math.floor(Math.random()*words.length);
	var chosenWord = words[randomWordFromList];
	var rightWord = [];
	var wrongWord = [];
	var underScore = [];
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Display underscores based on how long the word is
	var htmlUnderScore = document.getElementsByClassName('underscores');
	var htmlRightGuess = document.getElementsByClassName('rightGuess');
	var htmlWrongGuess = document.getElementsByClassName('wrongGuess');

	//testing it out
	console.log(chosenWord);

//Game creates underscores based on length of word
	var makeUnderScores = () => {
		for (var i = 0; i < chosenWord.length; i++) {
			underScore.push('_');
		}
		return underScore;
	}

	console.log(makeUnderScores());

//User input letter-guess
	document.addEventListener('keypress', (event) => {
		var keyLetter = String.fromCharCode(event.keyCode);
	
	//If the user's guess is right	
		if(chosenWord.indexOf(keyLetter) > -1) {
		//then add it to the rightWord array
			rightWord.push(keyLetter);

		//replacing the underscore with a right letter
		for (var i = 0; i < rightWord.length; i++) {
			if (keyLetter === rightWord[i]){
				underScore[chosenWord.indexOf(keyLetter)] = keyLetter;
				htmlUnderScore[0].innerHTML = underScore.join(' ');		
			}
		}


			//htmlRightGuess[0].innerHTML = rightGuesses.join(' ');	
		//checking to see if the user-input word matches the chosen word
			if(underScore.join('') == chosenWord) {
			alert('This one is stronnnggg in the Force!');
			}
		}

	//and if guess not correct, send to wrongWord array
		else {
			wrongWord.push(keyLetter);
			console.log(wrongWord);
			htmlWrongGuess[0].innerHTML = wrongWord;
		}
	});


		
//Check if letter-guess is correct

//If correct, push to correct array

//If wrong, push to wrong array

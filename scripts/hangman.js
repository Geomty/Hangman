// Change the secret word and allowed number of incorrect guesses here
var secretWord = 'hello'; // lowercase letters (no spaces) only please
var allowedGuesses = 5;



var name = prompt('What is your name?');
var secretArray = secretWord.split('');
var guessedWord = "";
for (i=0;i<secretWord.length;i++) {
    guessedWord += "_";
}
var guessedArray = guessedWord.split('');
var guessedArrayTwo = [];
var incorrectGuesses = 0;
var letters = 'qwertyuiopasdfghjklzxcvbnm';
alert(`${name}, a secret word has been chosen. You must try and guess what the secret word is. The secret word is ${secretWord.length} letters long and you are allowed ${allowedGuesses} incorrect guesses. Good luck.`);
while (secretWord != guessedWord) {
    if (incorrectGuesses >= allowedGuesses) {
        alert(`${name}, oh no! You have exceeded the allowed number of guesses. The secret word was "${secretWord}".`);
    } else {
        var answer = prompt('Guess a letter.');
        if (guessedArrayTwo.indexOf(answer) != -1) {
            incorrectGuesses++;
            alert(`${name}, you've already guessed that! "${guessedWord}" is how much of the word you've discovered so far, and you have guessed ${guessedArrayTwo.join(', ')}. You now have ${incorrectGuesses} incorrect guesses.`);
        } else if (answer.length != 1) {
            incorrectGuesses++;
            guessedArrayTwo.push(answer);
            alert(`${name}, you must input a single character. "${guessedWord}" is how much of the word you've discovered so far, and you have guessed ${guessedArrayTwo.join(', ')}. You now have ${incorrectGuesses} incorrect guesses.`);
        } else if (letters.indexOf(answer) == -1) {
            incorrectGuesses++;
            guessedArrayTwo.push(answer);
            alert(`${name}, you must input a lowercase letter. "${guessedWord}" is how much of the word you've discovered so far, and you have guessed ${guessedArrayTwo.join(', ')}. You now have ${incorrectGuesses} incorrect guesses.`);
        } else if (secretWord.indexOf(answer) == -1) {
            incorrectGuesses++;
            guessedArrayTwo.push(answer);
            alert(`${name}, I'm sorry, that letter is not in the secret word. "${guessedWord}" is how much of the word you've discovered so far, and you have guessed ${guessedArrayTwo.join(', ')}. You now have ${incorrectGuesses} incorrect guesses.`);
        } else {
            guessedArrayTwo.push(answer);
            while (secretArray.indexOf(answer) != -1) {
                guessedArray[secretArray.indexOf(answer)] = answer;
                secretArray[secretArray.indexOf(answer)] = "_";
            }
            guessedWord = guessedArray.join('');
            alert(`${name}, that letter is in the secret word! "${guessedWord}" is how much of the word you've discovered so far and you have guessed ${guessedArrayTwo.join(', ')}. Just a reminder, you have ${incorrectGuesses} incorrect guesses.`);
        }
    }
}
alert('Wait a minute... you discovered the secret word! Congratulations! Press "OK" to view your prize.');

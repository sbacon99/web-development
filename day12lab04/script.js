// Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses){

    if (totalGuesses === undefined){
        totalGuesses = 10;
    }

    var guess = prompt("Enter a number between 1 and 100.");

    if (guess == numToGuess){
        return i;
    }

    let i = 1;

    while (i < totalGuesses){

        if (guess < numToGuess){
            guess = prompt(guess + " is too small. Guess a larger number.");
            i++;
        }

        else if (guess > numToGuess){
            guess = prompt(guess + " is too large. Guess a smaller number.");
            i++;
        }

        else if (guess == null){
            return 0;
        }

        else{
            return i
        }
    }


    if (i == totalGuesses){
        return 0;
    }

}
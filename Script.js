function myFunction() {
    document.getElementById("demo").innerHTML = eightBall;
}

let randomNumber = Math.floor(Math.random() * 8);

let eightBall ="";





switch(randomNumber) {
    case 0:
        eightBall = `"I had no special talent. I just had a burning curiosity." - Albret Einstein`;
        break;
        case 1:
        eightBall = "Outlook not so good";
        break;
        case 2:
        eightBall = "My sources say no";
        break;
        case 3:
        eightBall = "Reply hazy try again";
        break;
        case 4:
        eightBall = "Signs point to yes";
        break;
        case 5:
        eightBall = "It is decidedly so";
        break;
        case 6:
        eightBall = "Do not count on it";
        break;
        case 7:
        eightBall = "It is certain";
        break;
}







/*let randomNumber = Math.floor(Math.random() * 3);

let message = '';

switch(randomNumber) {
    case 0:
        message = 'Hi!';
        break;
    case 1:
        message = 'How are you doing?';
        break;
    case 2:
        message = 'What do you plan on doing today?';
        break;
}



const computerWinsDisplay = document.getElementById('computer-wins');

const guessButton = document.getElementById('guess');


const humanIsWinner = compareGuesses(currentHumanGuess, computerGuess, target);


guessButton.addEventListener('click', () => {
    // Generate the target value
    target = generateTarget();
    // Retrieve the player's guess
    const currentHumanGuess = humanGuessInput.value;
    
  
    // Display the computer guess and the target
    computerGuessDisplay.innerText = computerGuess;
    targetNumberDisplay.innerText = target;
    
    // Determine if the human or computer wins:
    const humanIsWinner = compareGuesses(currentHumanGuess, computerGuess, target)
    const winner = humanIsWinner ? 'human' : 'computer'
  
    // Update the correct score:
    updateScore(winner);
  
    // Display the winner
    if (humanIsWinner) {
      computerWinsDisplay.innerText = "Hi, there!";
      guessButton.classList.toggle('winning-text');
    }
  
    // winnerDisplay.innerText = humanIsWinner ? 'You win!' : 'Computer wins!';
  
    // Display the current scores:
    humanScoreDisplay.innerText = humanScore;
    computerScoreDisplay.innerText = computerScore;
    
    // Set the correct disabled state for the buttons
    guessButton.setAttribute('disabled', true)
    nextRoundButton.removeAttribute('disabled');
  });
*/
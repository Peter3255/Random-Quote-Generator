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
        eightBall = `"Be the change you want to see in the world." - M. K. Gandhi`;
        break;
        case 2:
        eightBall = `"Failure is success if we learn from it." - Malcom. S Forbes`;
        break;
        case 3:
        eightBall = `"Tomorrow is the first blank page of a 365-day book. Write a good on." - Brad Paisley`;
        break;
        case 4:
        eightBall = `"No person has the right to rain on your dreams." - Martin Luther King Jr.`;
        break;
        case 5:
        eightBall = `"No act of kindness, no matter how small, is ever wasted." - Aesop`;
        break;
        case 6:
        eightBall = `"I am an optimist. It does not seem too much use be anything else." - Winston Churchill `;
        break;
        case 7:
        eightBall = `"He has a right to criticize, who has a heart to help." - Abraham Lincoln`;
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

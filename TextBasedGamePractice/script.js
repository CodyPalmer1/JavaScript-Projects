// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get the input, button, and message elements
const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');

// Initialize variables
let numberOfGuesses = 0;
const maxGuesses = 10;

// Function to check the user's guess
function checkGuess() {
    // Get the user's guess from the input
    const userGuess = parseInt(guessInput.value);

    // Check if the guess is valid
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    // Increase the number of guesses
    numberOfGuesses++;

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number in ${numberOfGuesses} attempts.`;
        endGame();
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
    } else {
        message.textContent = 'Too high! Try again.';
    }

    // Check if the maximum number of guesses has been reached
    if (numberOfGuesses === maxGuesses) {
        message.textContent = `Game over! The number was ${randomNumber}.`;
        endGame();
    }

    // Clear the input field
    guessInput.value = '';
}

// Function to end the game and disable the input and button
function endGame() {
    guessInput.disabled = true;
    submitBtn.disabled = true;
}

// Event listener for the Enter key
guessInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        checkGuess();
    }
});

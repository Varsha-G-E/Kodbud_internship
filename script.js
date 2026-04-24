let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guesses = []; // store previous guesses

function checkGuess() {
    let input = document.getElementById("guessInput");
    let guess = Number(input.value);
    let result = document.getElementById("result");
    let attemptText = document.getElementById("attempts");
    let previousText = document.getElementById("previous");

    if (!guess) {
        result.innerHTML = "❌ Enter a valid number!";
        return;
    }

    attempts++;
    guesses.push(guess);

    // Show previous guesses
    previousText.innerHTML = "Previous guesses: " + guesses.join(", ");

    if (guess > secretNumber) {
        result.innerHTML = "📉 Too high! Try again.";
    } 
    else if (guess < secretNumber) {
        result.innerHTML = "📈 Too low! Try again.";
    } 
    else {
        result.innerHTML = "🎉 Correct! You guessed it!";
        attemptText.innerHTML = "Attempts: " + attempts;
    }

    input.value = "";
}

// Enter key support
document.getElementById("guessInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

// 🔄 Restart function
function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guesses = [];

    document.getElementById("result").innerHTML = "";
    document.getElementById("attempts").innerHTML = "";
    document.getElementById("previous").innerHTML = "";

    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").focus();
}
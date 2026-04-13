#This imports the built-in random module, which allows us to generate random numbers. We will use this to create a secret number for the guessing game.
import random

# Generate random number between 1 and 100
secret_number = random.randint(1, 100)

# Initialize attempts counter to keep track of how many guesses the player has made.
attempts = 0

print("Welcome to Number Guessing Game!")
print("Guess a number between 1 and 100")

# This is the main game loop. It will continue to run until the player guesses the correct number. Inside the loop, we prompt the player to enter their guess, increment the attempts counter, and provide feedback on whether the guess is too high, too low, or correct.
while True:
    guess = int(input("Enter your guess: "))
    attempts += 1

    if guess > secret_number:
        print("📉 Too high! Try again.")
    elif guess < secret_number:
        print("📈 Too low! Try again.")
    else:
        print("🎉 Correct! You guessed it!")
        print("Attempts:", attempts)
        break
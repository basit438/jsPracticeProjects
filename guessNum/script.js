let randomNumber = Math.floor(Math.random() * 100) + 1;

let submit_btn = document.querySelector('#submit');

let result = document.querySelector('#result');

let guessLeft = document.querySelector('#guess-left');

let total_guess = 10;

guessLeft.innerHTML = `Guesses left: ${total_guess}`;

submit_btn.addEventListener('click', function(event){
    event.preventDefault(); // Prevent form submission
    let user_guess = parseInt(document.querySelector('#user-input').value);
    validateNum(user_guess);
    if(total_guess > 0) {
        if(user_guess !== randomNumber) {
            result.innerHTML = `Your guess is wrong`;
            total_guess--;
            guessLeft.innerHTML = `Guesses left: ${total_guess}`;
        } else {
            result.innerHTML = `Congratulations! You guessed the number`;
        }
    } else {
        result.innerHTML = `No guesses left! The number was ${randomNumber}`;
    }
});

function validateNum(user_guess){
    if(isNaN(user_guess) || user_guess > 100 || user_guess < 1){
        result.innerHTML = `Please enter a number between 1 & 100`;
    }
}

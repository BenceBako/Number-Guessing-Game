'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
};

const bodyBackground = function(bodyColor) {
    document.querySelector('body').style.backgroundColor = bodyColor;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
        // When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No Number! ⛔';
        displayMessage('⛔ No Number! ⛔');

        // When player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number! 🎉';
        displayMessage('🎉 Correct Number! 🎉');
        // document.querySelector('body').style.backgroundColor = '#60b347';
        bodyBackground('#60b347');
        document.querySelector('.number').textContent = secretNumber;

        // Highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        };

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '↘ Too High! ↘' : '↗ Too Low! ↗';
            displayMessage(guess > secretNumber ? '↘ Too High! ↘' : '↗ Too Low! ↗');
            score--;
            // document.querySelector('.score').textContent = score;
            displayScore(score);
        } else {
            // document.querySelector('.message').textContent = '👽 You lost the game! 👽';
            displayMessage('👽 You lost the game! 👽');
            // document.querySelector('.score').textContent = 0;
            displayScore(0);
        }
    };
});


// Reset everything on Play Again!
document.querySelector('.again').addEventListener('click', function() {
    score = 20;

    // document.querySelector('.score').textContent = score;
    displayScore(score);

    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...'
    displayMessage('Start guessing...');

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    // document.querySelector('body').style.backgroundColor = '#222';
    bodyBackground('#222');

});
'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
*/
//my Enum try...
const startOptions = Object.freeze({
  Score: 20,
});
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = startOptions.Score;
let highScore = 0;
const isGuessCorrect = function (guess) {
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
    guess > secretNumber
      ? (document.querySelector('.message').textContent = '📈Too high!')
      : (document.querySelector('.message').textContent = '📉Too low!');
  } else {
    document.querySelector('.message').textContent = '🏴‍☠️You Lost the game!';
    score--;
    document.querySelector('.score').textContent = score;
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '😒 NO NUMBER!';
    //When player win
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guess is not correct
  } else if (guess !== secretNumber) {
    isGuessCorrect(guess);
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = startOptions.Score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});

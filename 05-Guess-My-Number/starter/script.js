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

const resetBtn = function () {
  score = startOptions.Score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  messageText('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
};

const checkBtn = function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    messageText('😒 NO NUMBER!');
    //When player win
  } else if (guess === secretNumber) {
    messageText('Correct Number');
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
};

const messageText = function (message) {
  document.querySelector('.message').textContent = message;
};

const isGuessCorrect = function (guess) {
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
    messageText(guess > secretNumber ? '📈Too high!' : '📉Too low!');
  } else {
    messageText('🏴‍☠️You Lost the game!');
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.check').disabled = 'true';
  }
};

document.querySelector('.check').addEventListener('click', checkBtn);
document.querySelector('.again').addEventListener('click', resetBtn);

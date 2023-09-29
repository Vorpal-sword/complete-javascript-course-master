'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const score0Current = document.getElementById('current--0');
const score1Current = document.getElementById('current--1');
const Player0 = document.querySelector('.player--0');
const Player1 = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnRollPress = document.querySelector('.btn--roll');
const btnHoldPress = document.querySelector('.btn--hold');
//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
score0Current.textContent = 0;
score1Current.textContent = 0;
diceEl.classList.add('hidden');

const checkClickBtnRoll = function () {
  let randNumber1To6 = Number(Math.trunc(Math.random() * 6 + 1));
  score0El.textContent -= -randNumber1To6;
  diceEl.classList.remove('hidden');
};
btnRollPress.addEventListener('click', checkClickBtnRoll);

const checkClickBtnHold = function () {
  score0Current.textContent -= -Number(score0El.textContent);
  score0El.textContent = 0;
  if (Player0.classList.contains('player--active')) {
    Player0.classList.remove('player--active');
    Player1.classList.add('player--active');
  } else if (Player1.classList.contains('player--active')) {
    Player0.classList.add('player--active');
    Player1.classList.remove('player--active');
  }
};
btnHoldPress.addEventListener('click', checkClickBtnHold);

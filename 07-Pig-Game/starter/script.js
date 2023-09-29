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
const btnNewGamePress = document.querySelector('.btn--new');
const imgDice = document.querySelector('.dice');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
score0Current.textContent = 0;
score1Current.textContent = 0;
diceEl.classList.add('hidden');

const winnerClick = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const checkClickBtnRoll = function () {
  let randNumber1To6 = Number(Math.trunc(Math.random() * 6 + 1));
  if (Player0.classList.contains('player--active')) {
    if (randNumber1To6 !== 1) {
      score0El.textContent -= -randNumber1To6;
      if (
        Number(score0Current.textContent) + Number(score0El.textContent) >=
        3
      ) {
        btnRollPress.disabled = 'true';
        btnRollPress.style.backgroundColor = 'black';
        btnHoldPress.style.backgroundColor = 'green';
        btnHoldPress.addEventListener('click', winnerClick);
      }
      diceEl.classList.remove('hidden');
      for (let i = 1; i < 7; i++) {
        if (i === randNumber1To6) {
          imgDice.src = `dice-${i}.png`;
        }
      }
    } else {
      score0El.textContent = 0;
      imgDice.src = 'dice-1.png';
      checkClickBtnHold();
    }
  } else if (Player1.classList.contains('player--active')) {
    if (randNumber1To6 !== 1) {
      score1El.textContent -= -randNumber1To6;
      if (
        Number(score1Current.textContent) + Number(score1El.textContent) >=
        100
      ) {
        btnRollPress.disabled = 'true';
        btnRollPress.style.backgroundColor = 'black';
        btnHoldPress.style.backgroundColor = 'green';
        btnHoldPress.addEventListener('click', winnerClick);
      }
      diceEl.classList.remove('hidden');
      for (let i = 1; i < 7; i++) {
        if (i === randNumber1To6) {
          imgDice.src = `dice-${i}.png`;
        }
      }
    } else {
      score1El.textContent = 0;
      imgDice.src = 'dice-1.png';
      checkClickBtnHold();
    }
  }
};
btnRollPress.addEventListener('click', checkClickBtnRoll);
const checkClickBtnHold = function () {
  if (Player0.classList.contains('player--active')) {
    score0Current.textContent -= -Number(score0El.textContent);
    Player0.classList.remove('player--active');
    Player1.classList.add('player--active');
    score0El.textContent = 0;
  } else if (Player1.classList.contains('player--active')) {
    score1Current.textContent -= -Number(score1El.textContent);
    Player0.classList.add('player--active');
    Player1.classList.remove('player--active');
    score1El.textContent = 0;
  }
};
btnHoldPress.addEventListener('click', checkClickBtnHold);

const checkClickBtnNewGame = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  score0Current.textContent = 0;
  score1Current.textContent = 0;
  diceEl.classList.add('hidden');
};
btnNewGamePress.addEventListener('click', checkClickBtnNewGame);

//close modal Window
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

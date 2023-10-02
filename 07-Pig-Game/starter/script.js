'use strict';
//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const score0Current = document.getElementById('current--0');
const score1Current = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnRollPress = document.querySelector('.btn--roll');
const btnHoldPress = document.querySelector('.btn--hold');
const btnNewGamePress = document.querySelector('.btn--new');
const imgDice = document.querySelector('.dice');
//modal window part
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//
let activePlayer, activePlaterScore, scoreCurrent, playing;

//reset variables and start new game
const init = function () {
  playing = true;
  activePlayer = player0;
  activePlaterScore = activePlayer === player0 ? score0El : score1El;
  scoreCurrent = activePlayer.querySelector('.current-score');
  score0El.textContent = 0;
  score1El.textContent = 0;
  score0Current.textContent = 0;
  score1Current.textContent = 0;
  diceEl.classList.add('hidden');
  btnRollPress.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
  btnHoldPress.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();
// lockStupidTurn
const lockAndCustomizeBtns = function () {
  playing = false;
  diceEl.classList.add('hidden');
  activePlayer.classList.add('player--winner');
  activePlayer.classList.remove('player--active');
  btnHoldPress.addEventListener('click', winnerClick);
};
const checkClickBtnRoll = function () {
  if (playing) {
    const dice = Number(Math.trunc(Math.random() * 6 + 1));
    //
    if (dice !== 1) {
      activePlaterScore.textContent =
        Number(activePlaterScore.textContent) + dice;
      if (
        Number(scoreCurrent.textContent) +
          Number(activePlaterScore.textContent) >=
        50
      ) {
        lockAndCustomizeBtns();
      }
      diceEl.classList.remove('hidden');
      for (let i = 1; i < 7; i++) {
        if (i === dice) {
          imgDice.src = `dice-${i}.png`;
        }
      }
    } else {
      activePlaterScore.textContent = 0;
      imgDice.src = 'dice-1.png';
      checkClickBtnHold();
    }
    // My Previous Code
    // if (player0.classList.contains('player--active')) {
    //   if (dice !== 1) {
    //     score0El.textContent -= -dice;
    //     if (
    //       Number(score0Current.textContent) + Number(score0El.textContent) >=
    //       100
    //     ) {
    //       lockAndCustomizeBtns();
    //     }
    //     diceEl.classList.remove('hidden');
    //     for (let i = 1; i < 7; i++) {
    //       if (i === dice) {
    //         imgDice.src = `dice-${i}.png`;
    //       }
    //     }
    //   } else {
    //     score0El.textContent = 0;
    //     imgDice.src = 'dice-1.png';
    //     checkClickBtnHold();
    //   }
    // } else if (player1.classList.contains('player--active')) {
    //   if (dice !== 1) {
    //     score1El.textContent -= -dice;
    //     if (
    //       Number(score1Current.textContent) + Number(score1El.textContent) >=
    //       100
    //     ) {
    //       lockAndCustomizeBtns();
    //     }
    //     diceEl.classList.remove('hidden');
    //     for (let i = 1; i < 7; i++) {
    //       if (i === dice) {
    //         imgDice.src = `dice-${i}.png`;
    //       }
    //     }
    //   } else {
    //     score1El.textContent = 0;
    //     imgDice.src = 'dice-1.png';
    //     checkClickBtnHold();
    //   }
    // }
  }
};
btnRollPress.addEventListener('click', checkClickBtnRoll);
//Hold btn logic
const switchActivePlayer = function () {
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  activePlayer = player0.classList.contains('player--active')
    ? player0
    : player1;
  activePlaterScore = activePlayer === player0 ? score0El : score1El;
  scoreCurrent = activePlayer.querySelector('.current-score');
};
const updateCurrentScore = function () {
  scoreCurrent = activePlayer.querySelector('.current-score');
  scoreCurrent.textContent =
    Number(scoreCurrent.textContent) + Number(activePlaterScore.textContent);
  activePlaterScore.textContent = 0;
  //my previous code
  // if (player0.classList.contains('player--active')) {
  //   score0Current.textContent -= -score0El.textContent;
  //   score0El.textContent = 0;
  // } else if (player1.classList.contains('player--active')) {
  //   score1Current.textContent -= -score1El.textContent;
  //   score1El.textContent = 0;
  // }
};
const checkClickBtnHold = function () {
  if (playing) {
    updateCurrentScore();
    switchActivePlayer();
  }
};
btnHoldPress.addEventListener('click', checkClickBtnHold);

//open modal after winnerClick on hold btn
const winnerClick = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//close modal Window
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  btnHoldPress.removeEventListener('click', winnerClick);
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//reset and start new game
btnNewGamePress.addEventListener('click', init);

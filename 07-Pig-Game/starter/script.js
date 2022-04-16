'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current-0');
const current1El = document.getElementById('current-1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Condition
score0El.textContent = 0;
score1El.textContent = 0; // Convert to String Automatically
diceEl.classList.add('hidden');

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display the dice.
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for rolled 1: if true, switch to next Player
  if (dice !== 1) {
    // Add dice to current score;
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // Switch to next Player
  }
});

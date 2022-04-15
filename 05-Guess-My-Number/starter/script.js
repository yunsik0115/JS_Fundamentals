'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message');
// if it was id we use hash
// method that is available on document object.
// choose selector

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 30;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let score = 20; // initial score
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber; // Random Number

const x = function () {
  console.log(23);
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
  if (score > 0) {
    if (!guess) {
      document.querySelector('.message').textContent = '❌ No Number';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '⭕ Correct Number!';

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      score++;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
    }
  } else if (score === 0) {
    document.querySelector('.message').textContent = 'You Lost The Game';
  }
  document.querySelector('.score').textContent = score;
}); // addEventListener(when to act, what to act)

// Javascript will call function as soon as event happens.

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

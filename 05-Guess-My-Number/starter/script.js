'use strict';
console.log(document.querySelector('.message').textContent);
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

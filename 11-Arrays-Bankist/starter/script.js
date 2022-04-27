'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// Why arrays do have functions?
// arrays -> functions attached to objects(Array)

/*let arr = ['a', 'b', 'c', 'd', 'e'];

// slice method
console.log(arr.slice(2)); // extracting c d e it returns new array4
// it doens't mutate original array.
console.log(arr.slice(2, 4)); // c, d will be extracted and returned as new array.
console.log(arr.slice(-2)); // d, e will be extracted
console.log(arr.slice(1, -2)); // b, c will be extracted.
console.log([...arr]);

// splice -> mutate the original array.
console.log(arr.splice(2)); // extract c, d, e and delete from original array
// arr.splice(-1); // last one will be deleted and extracted from arr.
arr.splice(1, 2); // b, c will be deleted and only a,d will be left
console.log(arr); // a, b will be left on arr.

// reverse -> it does mutate the original array.
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// concatenation
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // It doesn't mutate original array

// join
console.log(letters.join('-')); // by using - seperator.
*/

// ES 2022 at method

/*const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last element
// if we do not know the length of array
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]); // last element
console.log(arr.at(-1));

// at method vs bracket notation -> if for method chaning use at method
console.log('jonas'.at(0)); // it will give us j
*/

// forEach method on array

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

for (const [i, movement] of movements.entries()) {
  // entries returns key and value at the same time
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}
console.log('---forEach---');

movements.forEach(function (movement) // value, index, array {
  // loopover each index value and execute function
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// for and forEach (continue and break statement doesn't work on foreach)

*/

// forEach with Map

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]); // key, value

currencies.forEach(function (value, key, map) {
  console.log(`${key} ${value}`);
});

// forEach with Set
const concurrenciesUnique = new Set(('USD', 'GBP', 'USD', 'EUR', 'EUR'));
concurrenciesUnique.forEach(function (value, _, map) {
  // _ throwaway variable which is unnecessary
});

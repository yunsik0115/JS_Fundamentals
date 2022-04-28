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

const displayMovements = function (acc) {
  // instead of global variable use parameters and pass it into function

  containerMovements.innerHTML = ''; // empty the entire new container.
  // .textContent = 0
  acc.movements.forEach(function (value, i) {
    // wants to create movements__row(on html file)

    const type = value > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${value}</div>
    </div>
    `; // string literal is best for creating html codes

    containerMovements.insertAdjacentHTML('afterbegin', html); // position right after the beginning of the parent element
    // should reference https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
  });
};

displayMovements(account1);
console.log(containerMovements.innerHTML); // -> All of created html element will be shown.
// afterbegin vs beforeend -> order of the movement will be inverted

const user = 'Steven Thomas Williams';
/*const userName = user
  .toLowerCase()
  .split(' ')
  .map(function (name) {
    return name[0];
  })
  .join(''); // result -> stw */

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

calcDisplayBalance(account1);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = -acc.movements // or Math.abs
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${out}€`;

  // Do not mutate array
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
// console.log(createUsernames('Steven Thomas Williams'));
console.log(accounts);

const updateUI = function (acc) {
  // DISPLAY MOVEMENTS
  displayMovements(acc);
  // DISPLAY BALANCE
  calcDisplayBalance(acc);
  // DISPLAY Summary
  calcDisplaySummary(acc);
};

// Event Handler

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // event parameter

  e.preventDefault(); // prevent form from submitting

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // DISPLAY UI MESSAGE
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Better Practice Refoctoring
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balance &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log('Transfer Valid');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
  }
  updateUI(currentAccount);
});
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

// main .app class opacity has set to 0
// we need to change to 100 to set it as visible.

// 3 array method
// 1. Map method -> based on original array creates new
// map apply the operation and return new array
// 2. filter literally filter and return new array which passed specified test condidion
// 3. boil all array elements down to one single value(adding all elements together)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// Just like forEach
const movementsUSD = movements.map(function (value) {
  return value * eurToUsd;
});

// same with
/*
movements.map(mov=> mov * eurToUsd); */

console.log(movements);
console.log(movementsUSD);

const movementDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1} You deposited ${mov}`;
  } else {
    return `Movement ${i + 1} You withdrew ${Math.abs(mov)}`;
  }
});

console.log(movementDescriptions);

const deposits = movements.filter(function (value) {
  return value > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

console.log(movements);

const balance = movements.reduce(function (
  accumulator,
  currentElementOfArray,
  i,
  arr
) {
  console.log(`Iteration ${i}: ${accumulator}`);
  return accumulator + currentElementOfArray;
},
0); // 0 -> initial value for iteration (accumulation)
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

/*
const balance = movements.reduce((acc, cur) => acc + cur), 0);
 */

// Maximum Value -> can be reduced by reduce
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
  // traverse array if acc indicates small number than mov mov will be retured as acc
}, movements[0]);
console.log(max);

movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0); // filter only > 0 movement
// filter mov which is more than 0
// map and apply mov * eurToUsd on every value in array
// accumulate all value in acc by using reduce method.
// -> end of chaining.

const firstWithdrawal = movements.find(mov => mov < 0); // will return true or false
// unlike filter it will traverse the array and return if it meets the condition.
// filter : return new array, find : return the found one
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

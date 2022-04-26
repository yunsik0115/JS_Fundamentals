'use strict';

/*const bookings = [];

// Default Parameters ES6 Below
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //numPassengers = numPassengers || 1;
  // default parameter, if numPassengers doesn't exsist.
  //price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000); // undefined parameters will be set to default value
*/

/*const flight = 'LH234';
const jonas = {
  name: 'jonas Schemdtmann',
  passport: 24849646564,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; // not a great practice
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24849646564) {
    alert('check in');
  } else {
    alert('wrong passport!');
  }
};

checkIn(flight, jonas);

console.log(flight); // Still LH234
// value calling
console.log(jonas); // Manipluation af Passenger Object Value.
// referencial calling

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random()) * 1000000000000;
};
newPassport(jonas);
checkIn(flight, jonas); */

/* const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original String : ${str}`);
  console.log(`Transformed String : ${fn(str)}`);

  console.log(`Transformed by : ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
// transform the string using function on the second parameter (upperfirstword)

transformer('Javascript is the best!', oneWord);
// passing the callback function on paramter.

// JS Using callback all the times.
const high5 = function () {
  console.log('Hello!');
}; // call back functions

document.body.addEventListener('click', high5);
// Higher order-function

['jonas', 'martha', 'adam'].forEach(high5);
// for each of them call back function will be called.

// transformer function don't care what kind of function was used
// creation the new level of function. */

/*const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('hey');
greeterHey('Jonas');
greeterHey('Steven');
// Closure Mechanism must be understood to understand how it works

greet('Hello')('jonas'); // it works
// important in functional programming
// rewriting greet function with arrow function

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');*/

/*const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked ad seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schemdtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah Williams'); // -> undefined -> irregular function call

// should use apply or bind

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  name: 'swiss',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); // takes arguments in array
console.log(swiss);

book.call(swiss, ...flightData); // takes arguments seperately

// book.apply is same with book.call(...)

// bind method

const bookEW = book.bind(eurowings); // creation of new function
const bookLX = book.bind(swiss);
const bookLH = book.bind(lufthansa);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application - we can preset parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// rate value is fixed and value is not fixed.

console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);

// addTaxRate and addTax are same function which use same algorithms.
*/

// Immediately Invoked Function Expressions(IIFE)

/*const runOnce = function () {
  console.log('this will never run again');
};
runOnce();

/* IIFE
(function () {
  console.log('this will never run again');
  const isPrivate = 23;
})();

console.log(isPrivate);

{
  () => console.log('This will also never run again');
}();

{
  const isPrivate = 23; // cannot accessed outside of object
  var notPrivate = 46; // Accessible anywhere
}

console.log(notPrivate);*/

/* const secureBooking = function () {
  // securebooking EC Variable Environment of execution context in which booker was created.
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); // booker function will get access to this variable environment which contains the passengerAccount Variable.

booker();
booker();
booker();

// how does booker() update passengerCount which has already gone from the STACK?
// Closure remembers everything
// Execution Context was terminated however booker() Execution context created on stack and Can use variable on Global scope
*/

/*let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// reassigning f function
h();
f();
console.dir(f); // closure will has 777*/
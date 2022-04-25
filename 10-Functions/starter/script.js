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

const greet = function (greeting) {
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
greetArr('Hi')('Jonas');

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

const flight = 'LH234';
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
checkIn(flight, jonas);

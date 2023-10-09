'use strict';
/*
///////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassangers = 1,
  price = 100 * numPassangers
) {
  //ES5
  //   numPassangers ||= 1;
  //   price ||= 199;
  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
const flight = 'LH234';
const max = {
  name: 'Maxim Suprunenko',
  passport: 2342342234,
};
const checkIn = function (flightNum, passanger) {
  flightNum = 'LH999';
  passanger.name = 'Mr. ' + passanger.name;
  if (passanger.passport === 2342342234) {
    alert('Check In');
  } else alert('Wrong passport');
};

//checkIn(flight, max);
console.log(flight);
console.log(max);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(max);
checkIn(flight, max);
*/
///////////////////////////////////////
// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

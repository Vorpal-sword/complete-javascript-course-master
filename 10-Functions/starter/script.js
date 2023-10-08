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
*/
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

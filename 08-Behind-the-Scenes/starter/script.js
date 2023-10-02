'use strict';
/* 
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const ouptpuy = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(firstName);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial,${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str); error
    console.log(millenial);
    //add(2, 3); onli without strict mode
  }
  printAge();
  return age;
}

const firstName = 'Max';
calcAge(1991);
//console.log(age); error
//printAge(); error

///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

*/
///////////////////////////////////////
// The this Keyword in Practice

console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);
const calcAgeArrow = birthYear => console.log(2037 - birthYear);
console.log(this);
alcAgeArrow(1991);

const max = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

max.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

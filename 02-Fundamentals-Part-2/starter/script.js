'use strict';

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge(birthYeah){
  return 2037 - birthYeah;
}
const age1 = calcAge(1991);

// Function expression
const calcAge2 = function (birthYeah){
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

///////////////////////////////////////
// Functions Calling Other Functions
const cutFruitPieces = fruit => fruit * 4;

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = oranges*4;

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));


///////////////////////////////////////
// Coding Challenge #1

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.

// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// HINT: To calculate average of 3 values, add them all together and divide by 3
// HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

// GOOD LUCK 😀
// Test 1
const calcAverage = (scoreFirst, scoreSecond, scoreThird) =>{
  return (scoreFirst + scoreSecond + scoreThird)/3;
}
const scoreDolphins = calcAverege();
const scoreKoalas = calcAverege();
function checkWinner(scoreDolphins, scoreKoalas){
  if (scoreDolphins >= scoreKoalas*2){
      console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
  }
  else if(scoreKoalas >= scoreDolphins*2){
      console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
  }
  else{
      console.log("No team wins...");
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

///////////////////////////////////////
// Introduction to Arrays

const frien1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven' , 'Peter'];
console.log(friends);

const yearsss = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Max)';
console.log(friends);
//friend = ['Bob','Alice']//illegal;

const firstName = 'Maxim';
const maxim = [firstName, 'Suprunenko', 2037 - 2003, 'learner', friends];
console.log(maxim);

//Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


const friends = ['Michael', 'Steven' , 'Peter'];

//Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('Max');
console.log(friends);

//Remove elements
friends.pop(); //delete last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();// delete first element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));// return -1 if haven`t element;

console.log(friends.includes('Steven'));//true
console.log(friends.includes('Bob'));//false
//use check strict

if (friends.includes('Steven')){
  console.log('u have a frend called Steven');
}

const calcTip = function(billValue){
    return billValue > 50 && billValue <300 ? billValue * 0.15 : billValue * 0.20;
};

const bills = [125, 555, 55];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]),];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]


///////////////////////////////////////
// Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const max = {
  firstName: 'Max',
  lastName: 'Suprunenko',
  age: 2037 - 2003,
  job: 'learner',
  friends: ['Michael', 'Peter', 'Steven']
};

///////////////////////////////////////
// Dot vs. Bracket Notation

const max = {
  firstName: 'Max',
  lastName: 'Suprunenko',
  age: 2037 - 2003,
  job: 'learner',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(max);
console.log(max.lastName);// dot notation
console.log(max['lastName']);//bracket notation

const nameKey = 'Name';
console.log(max['first' + nameKey]);
console.log(max['last' + nameKey]);

const interestedIn = prompt('What do u wanna know about Max? Choose between firstName, lastName, age, job, and friends');
if(max[interestedIn]){
  console.log(max[interestedIn]);
} else {
  console.log('Wrong Request! Choose between firstName, lastName, age, job, and friends');
}

max.location = 'Ukrainian';
max['inst'] = '@vorpalsword_yt'
console.log(max);

//Challenge
// "Max has 3 friends, and his best friend is called Michael"
console.log(`${max.firstName} has ${max.friends.length} friends, and his best friend is called ${max.friends[0]}`);


///////////////////////////////////////
// Object Methods

const max = {
  firstName: 'Max',
  lastName: 'Suprunenko',
  birthYeah: 2003,
  job: 'learner',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriverLicense: false,

  // calcAge: function(birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function() {
  //   console.log(this);
  //   return 2037 - this.birthYeah;
  // }
  calcAge: function() {
    this.age =  2037 - this.birthYeah;
    return this.age;
  },
  getSummery: function(){
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense?"a":"no"} driver's license`;
  }
};

console.log(max.calcAge());

console.log(max.age);
console.log(max.age);
console.log(max.age);
console.log(max.getSummery());

//console.log(max['calcAge'](1991));

//Challenge
//"Max is a 3..-year old learner, and he has a/no driver's license"

///////////////////////////////////////
// Coding Challenge #3


// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// GOOD LUCK 😀
//

const mark = {
  fullName: "Mark Miller's",
  mass: 78,
  height: 1.69,
  calcBMI: function(){
      this.bmi = this.mass/(this.height*this.height);
      return this.bmi;
  },
};
const john = {
  fullName: "John Smith's",
  mass: 92,
  height: 1.95,
  calcBMI: function(){
      this.bmi = this.mass/(this.height*this.height);
      return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(`${john.bmi > mark.bmi ? `${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})!` : `${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})!`}`);

///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}


///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];
const types = []
for (let i = 0; i < jonasArray.length; i++){
  console.log(jonasArray[i], typeof jonasArray[i]);
  types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1991, 2006, 1979, 2022];
const ages = [];
 for (let i=0; i < years.length; i++) {
    ages.push(2037-years[i]);
 }
 console/log(ages);

 // continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== 'string') continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === 'number') break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
*/
///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}


///////////////////////////////////////
// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!

// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

// 4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
//   4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
//   4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
//   4.3. Call the function with the 'totals' array

// GOOD LUCK 😀

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]); 
}

const calcAverage = function (arr) {
  sum = 0;
  for(i = 0; i < arr.length; i++){
      sum += arr[i];
  }
  return sum/arr.length;
}
calcAverage(totals);
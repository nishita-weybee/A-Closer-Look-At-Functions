'use strict';

// Coding Challenge #1

// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:  C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer: function () {
    let choice = Number(
      prompt(
        `${this.question} \n${this.options.join('\n')}\n (Write option number)`
      )
    );
    console.log(choice);
    typeof choice === 'number' &&
      choice < this.answers.length &&
      this.answers[choice]++;
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (typeof type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });


// Coding Challenge #2
// This is more of a thinking challenge than a coding challenge �
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// ------------------------------------------------
// // How Passing Arguments Works: Value vs. Reference
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123', 2);
// createBooking('LH133', 3);
// createBooking('LH143', 4);
// createBooking('LH153', 1, 100);

// const flight = 'HJ789';
// const john = {
//   name: 'NISHITA KALYANI',
//   passport: 12457966541,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr' + passenger.name;
// };

// checkIn(flight, john);

// // Functions Accepting callback function
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original String : ${str}`);
//   console.log(`New String : ${fn(str)}`);

//   console.log(`Tranformed by ${fn.name}`);
// };

// transformer('javascript is the best', upperFirstWord);
// transformer('javascript is the best', oneWord);

// const high5 = function () {
//   console.log('hiii');
// };

// document.body.addEventListener('click', high5);
// ['nishi', 'fenny', 'janvi'].forEach(high5);

// // function returning function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('heyy!');
// greeterHey('Nishita');
// greet('heyy!')('jeet chotai');

// const greet1 = greeting1 => {
//   return name => {
//     console.log(`${greeting1} ${name}`);
//   };
// };

// greet1('Hi!')('Kishani');

// // The call and apply Methods

// const airIndia = {
//   airline: 'AirIndia',
//   iatacCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iatacCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iatacCode}${flightNum}`, name });
//   },
// };

// airIndia.book(239, 'Nishita Kalayni');
// airIndia.book(635, 'Kishani Kalyani');
// console.log(airIndia);

// const wings = {
//   airline: 'Wings',
//   iatacCode: 'EW',
//   bookings: [],
// };

// const book = airIndia.book;
// // book(23, 'Jeet Chotai');
// book.call(wings, 23, 'Jeet Chotai');
// console.log(wings);
// book.call(airIndia, 29, 'Marry Cupper');
// console.log(airIndia);

// // The Bind Method
// const bookEW = book.bind(wings);
// const bookLH = book.bind(airIndia);
// bookEW(23, 'Steven Williams');
// bookLH(35, 'Muskan Solanki');

// const bookEW23 = book.bind(wings, 23);
// const bookLH35 = book.bind(airIndia, 35);
// bookEW23('Steven Williams');
// bookLH35('Muskan Solanki');

// airIndia.planes = 300;
// airIndia.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // airIndia.buyPlane();
// document
//   .querySelector('.buy')
//   .addEventListener('click', airIndia.buyPlane.bind(airIndia));

// const addTax = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// console.log(addTax(0.23)(100));
// console.log(addTax(0.23)(200));

// // Closure
// // example1
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.log('hello');
// h();
// f();
// console.dir(f);
// console.dir(h);

// // // example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`we are now boarding all ${n} passengers`);
//     console.log(`there are 3 grps each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`will start boarding in ${wait}`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);
// console.dir(boardPassengers);

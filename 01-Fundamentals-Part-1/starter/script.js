/*let js = "amazing";
if (js === "amazing") alert("javascript is fun!");
console.log(40 * 8 + 23 - 10); // explicitly output the result to console.

console.log("Jonas");
console.log(23);

let firstName = "Matilda"

// homework
// 1.
let country = "South Korea";
let continent = "Asia";
let population = 51780000;

console.log(country);
console.log(continent);
console.log(population);

// about single quotes and double quotes https://stackoverflow.com/questions/242813/when-should-i-use-double-or-single-quotes-in-javascript
console.log(firstName);
console.log(firstName);
console.log(firstName);*/

/*true;
console.log(true);

let javascriptIsFun = true;
console.log(typeof(javascriptIsFun));
console.log(typeof 23);
console.log(typeof 'jones');

javascriptIsFun = "YES!"; // Dynamic typing works (automatically change the type of variable)
console.log(typeof(javascriptIsFun));

let year;
console.log(year);
console.log(typeof(year)); // undefined

year = 1991;

console.log(typeof(year)); // number
console.log(typeof(null)); // undefined? -> Object (is actually null it is bug but not fixed due to legacy reasons?)*/

/*let age = 30;
age = 31; // mutating the age variable(set variable to something else, reassigning === mutating)
// for mutating variables using let is appropriate

const birthYear = 1991; // const cannot re-assign the value (immutable variable) must be initialized at declaration.

// birthYear = 1990;
// var must be avoided. (prior to ES6)
// var(function scoped) / let(block scoped) has difference*/

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2**3); // 2^3

const firstName = "Jonas";
const lastName = "schmedtmann";
console.log(firstName + ' ' + lastName); // concatenation

//typeof operator

// assignment Operators =
let x = 10 + 5;
x+=10;
x *= 4;
x++; x--;
console.log(x);

// comparison Operators >= <= > <
console.log(ageJonas > ageSarah);
console.log(ageSarah >= ageJonas);

const isFullAge = ageJonas >= 30;
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

/*const now = 2037;
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

const isFullAge = ageJonas >= 30;*/

/*const firstName = "Jonas";
const lastName = "Schmedtmann";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year-birthYear) + ' years old';
console.log(jonas);*/

/*const firstName = "Jonas";
const year = 2022;
const job = "teacher";
const birthYear = 1991;

const jonas = "I'm " + firstName + ', a ' + (year-birthYear) + ' years old ' + job + '!';

console.log(jonas);

// What is Template Literal?
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; // backticks
console.log(jonasNew);

console.log('string with \n\ multiple \n\ lines');*/

/*const age = 19;
const isOldEnough = (age >= 18);

console.log(isOldEnough);

// is same with

if(isOldEnough){
    console.log("Sarah can Start Driving License 😊")
} else {
    const yearsleft = age - 18;
    console.log("Sarah cannot start driving license Wait another" + `${yearsleft} years`);
}

const birthYear = 1991;

let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}

console.log(century);*/

/*// type conversion and type cohersion.
const inputYear = '1991';
console.log(inputYear + 18); // 199118

console.log((Number(inputYear) + 18)); // Number Function -> casting string to int(parseint)
console.log(Number('Jonas')); // NAN
console.log(typeof NaN);

console.log(String(23), 23);

// start of type cohersion
console.log("I am " + 23 + ' years old'); // 23 automatically casted to string.
console.log('23' - '10' - 3); // 23 - 10 - 3 = 10
console.log('23' / '2');

let n = '1' + '1';
n = n - 1;
console.log(n);*/

// Falsy and Truthy Values.

// 0 '' undefined null Nan => All Falsy, Anything else deemed as truthy value.
/*console.log(Boolean(0));
console.log(Boolean(undefined)); 
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money){
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

let height;
if (height){
    console.log("YAY! height is defined");
} else{
    console.log("height is undefined");
} */

/*const age = 18;
if (age === 18){ // return only true or false value
    console.log('you just became an adult'); // strictly equal
}

if (age == '18'){ // loosely equal
    console.log('type cohersion automatically happens!');
}

const favoriteNumber = Number(prompt("what's your favorite number?")); // prompt get value by string, need casting for type conversion.
console.log(favoriteNumber);

if(favoriteNumber == 23){
    console.log("23 is an amazaing number!");
} else{
    console.log("it is not 23");
}*/

/*const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); // AND
console.log(hasDriversLicense || hasGoodVision); // OR
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive){
    console.log("Sarah is able to drive");
} else {
    console.log("Sarah is not able to drive");
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log("Sarah is able to drive");
} else {
    console.log("Sarah is not able to drive");
} */

const day = 'monday';

switch(day) {
    case 'monday' : console.log("It's Monday"); break;
    case 'tuesday' : console.log("It's tuesday"); break;
    case 'wednesday' : console.log("It's wednesday'"); break;
    case 'thursday' : console.log("It's thursday'"); break;
    case 'friday' : console.log("It's friday"); break;
    default : console.log("Its still a great day to learn javascript!");
}
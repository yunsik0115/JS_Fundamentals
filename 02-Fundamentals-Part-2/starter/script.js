'use strict'; // has to be mentioned at the start of the script.
/*// easier to avoid accidential error, show visible errors at the developmental phase.

let hasDriverLicense = false;
const passTest = true;
if(passTest) // boolean function
{
    hasDriverLicense = true;
}

if(hasDriverLicense) // boolean function
{
    console.log("I can drive");
}

// const interface = 'Audio';
// interface is the reserved word
// const private = 534; // also the same

function logger(){ // function declaration.
    console.log("My name is jonas");
} 

logger(); // calling, running, invoking the function.
logger();
logger();

function fruitProcessor(apples, oranges){ // name should be descriptive.
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    // using template literals
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);*/

/*

// function declaration
function calcAge1(birthYear){
    const age = 2037 - birthYear
    return age;
}

// Declared function can be executed before the function decalration.
// While function expression can't be executed before the expression.
// => will learn about hoisting.

const age1 = calcAge1(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

/* Matter of personal Preference Expression vs Declaration */

// Arrow Function
/*const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(calcAge3);
console.log(typeof(calcAge3));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

// Arrow function -> many parameter -> get complicated.

console.log(yearsUntilRetirement(1980, "Bob"));
console.log(yearsUntilRetirement(1991, "Jonas"));*/

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']; // Or
//const years = new Array(1991,1992,1993,2008,2022)
console.log(friends);

for(let index=0; index<friends.length; index++)
{
    console.log(friends[index]);
}

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['',] -> Illegal to replace an array like this.

const firstName = 'Jonas'
const jonas = [firstName, 'Schemdtmann', 2037-1991, 'teacher', friends];
console.log(jonas);

//Exercise
const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const years = [1990,1967,2002,2010,2018];
calcAge(years); // Can not be executed
console.log(calcAge(years)); // Conversion to String happens, no meaningful result occur.

for(let index=0; index<friends.length; index++)
{
    console.log(calcAge(years[index]));
}


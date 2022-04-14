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


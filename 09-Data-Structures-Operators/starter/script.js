'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngerdient, ...otherIngredients) {
    console.log(mainIngerdient, otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole 21',
  mainIndex: 1,
});
/*
// ES6 Features
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[0];
const c = arr[0];

const [x, y, z] = arr; // destructuring array from the right side
// x,y,z isn't array
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second); // extract only first and second one

let [main, , secondary_cat] = restaurant.categories;
// extract 1~3 and skip 2nd index's variable
console.log(main, secondary_cat);

// this code below can be easily done by destructuring.
//const temp = main;
//main = secondary_cat;
//secondary_cat = temp;
//console.log(main,secondary_cat);
// like this code below

[main, secondary_cat] = [secondary_cat, main];
// we don't need temp variable if we use destructing like this.
console.log(main, secondary_cat);

console.log(restaurant.order(2, 0));

let [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//if nested array?
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

// what if we need all single value?
const [ind, , [jnd, knd]] = nested;
console.log(ind, jnd, knd);

// Default Values (if it isn't exist on the array)
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);*/

/*
// Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default value and class attribute alias.
const { menu1 = [], starterMenu: starters = [] } = restaurant;
console.log(menu1, starters);

// muatating variables(swap)
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // we need to wrap -> Javascript expect a code block
console.log(a, b);

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // set all value in arr (spread operator)
console.log(newArr);

console.log(...newArr); // pass all parameter in value
console.log(1, 2, 7, 8, 9); // same with code on top 137.

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
// value sepearted by commas

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 Arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT OBJECTS
const str = ' jonas';
const letters = [...str, ' ', 'S. '];
console.log(letters);
// J O N A S " " S. We can not use spread operator on Template Literals ` `

const ingredients = [
  prompt("Let's make pasta! Ingredient1?"),
  prompt('ingredient 2?'),
  prompt('ingredient 3?'),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Spread operator in object
const newRestraunt = { ...restaurant, founder: 'Guiseppe' };
console.log(newRestraunt);

const restrauntCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name); */

// spread because on Right side of =

// rest patterns
/* const arr = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoods);
// rest pattern always should be exist on the end of elements.

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// spread operators on functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(2, 3));

const x = [23, 5, 7];
console.log(add(...x));
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// OR Operator
console.log(3 || 'Jonas'); // result = 3 (result is 3)
// they can use any data type and return any data type -> we called it short circuiting
// if the first value is truthy value it returns first value immediately.
console.log('' || 'Jonas'); // -> jonas
console.log(true || 0); // -> true
console.log(undefined || null); // undefined - falsy value so the result is null

// undefiend or zero or empty string or hello or 23 or null -> result is hello (return the first truthy value)

// code related to guests1,2 are gonna return same value
//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// AND OPERATOR SHORT CIRCUITING
console.log('----- AND -----');
console.log(0 && 'Jonas'); // result is 0
// immediately returns falsy value
console.log(7 && 'Jonas'); // jonas will be returned

console.log('hello' && 23 && null && 'jonas'); // null will be returned.

//practical example
// if statement and code below will show same result & logic
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushRooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); */

/*
// null and undefined -> nullish value
const guests1 = restaurant.numGuests || 10;
console.log(guests1);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // coalescing null value to 10; */

/* const rest1 = {
  name: 'capru',
  numGuests: 20,
};

const rest2 = {
  name: 'capcap',
  owner: 'gilbers',
};

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10; // if guest == 0, it is a falsy value
rest1.numGuests ??= 10; // it can solve the problem right above. nullish operator

rest2.owner = rest2.owner && '<Anonymous>';
rest1.owner &&= '<Anonymous>'; // same

console.log(rest1);
console.log(rest2); */

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
};

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
console.log(p, q, r);

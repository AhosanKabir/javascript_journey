"use strict";

// we can use the spread operator to basically expand an array into all it's element.

// the spread operator is actually a bit similar to destructuring, because it helps us get elements out of arrays. Now the big difference is that the spread operator takes all the elements from the array and it also doesn't create new variables. And as a consequence , we can only use it in places where we would otherwise write values separated by commas.

//! Actually spread operator works on all so called iterables. there are different iterables in javascript. {{iterables are things like all arrays , strings , maps, sets etc, ** But not Objects **}} .

// So basically , most of the built-in data structures in javascript are now iterables, but except objects.

// default  object for work
const resturant = {
  name: "Classico Italiano",
  location: "Via Angelo Travanti 23, Firenze , Italy",
  catagories: [
    "Italian",
    "Pizzarea",
    "Vegeterian",
    "Garlic",
    "Organic",
    "Natural",
  ],

  StarterMenu: ["Bread", "Burger", "Pizza", " HotSnda ", "Pastalua"],

  mainMenu: ["Coffee", "Burger", "Pastsa", "Ristorica"],

  openingHour: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 22,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (startterIndex, mainIndex) {
    return [this.StarterMenu[startterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2 , ing3){
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

// 1. we want to create a new array based on this array but with some new element at the beginning.

const arr = [4, 5, 6];
const newArr = [1, 2, ...arr];
console.log(newArr);

// 2. we will create an array with more foods item in the main menu array .

const newMenu = ["butter ruti", ...resturant.mainMenu, "grill with nun"];

console.log(newMenu);

// ** Two important use cases of the spread operator **//
// one => Create shallow copies of arrays,
// two => Merge two arrays together.

// one => Create shallow copies of arrays
const mainMenuCopy = [...resturant.mainMenu];

// two => Merge two arrays together.
const menu = [...resturant.mainMenu, ...resturant.StarterMenu];
console.log(menu);

//iterables : strings , arrays , maps , sets , NOT objects.
const str = "ahosan";
console.log([...str]); // array make.
console.log(...str); // single element make.

// ?? multiple values separated by a comma are usually only expected when we pass arguments into a function,or when we build a new array.

// its not allowed with template literals :
// console.log(`${...str} kabir`); 



// ===================================================                         Real life example ===================================================

// Write our own function that excepts multiple arguments ans then use the spread operator to actually pass those arguments.

// hard code :
const ingredients = ['chess','mashroom' , 'leaves'];

//by prompt:
// const ingredients = [prompt("let's make pasta! ingredient 1 ?"), prompt("ingredient 2?"), prompt("ingredient 3?")];

// console.log(ingredients);

resturant.orderPasta (...ingredients);


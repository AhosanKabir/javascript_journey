"use strict";

// destructuring basically a way of unpacking values from an array or an object into separate variables. So in other words destructuring is to breka a complex data structure down  into a smaller data structure like a variable.

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

  order: function (startterIndex, mainIndex) {
    return [this.StarterMenu[startterIndex], this.mainMenu[mainIndex]];
  },
};

console.log(resturant);

//switching variable with array distruturing......
let [main, , secondary] = resturant.catagories;
console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);

//receive 2 return values from a function
console.log(resturant.order(2, 1));

const [start, mainn] = resturant.order(2, 1);
console.log(start, mainn);

//******************* */
//Nested Array
console.log("*****start nested array***");

const nested = [1, 2, 4, [5, 6]];
const [i, , , j] = nested;
console.log(i, j);

//We can also set default values for the variables when we are extracting them. And that's gonna be very useful in the case that we don't know the length of the array, this can sometimes happen in real world applications.

//if we have an array that is shorter than we might think, then we migh try to unpack the array in position that don't even exist. 

//zokhon api theke kono data collect kori tokhon ai default value set kore deya tah onek kaj ee dei.

const [p , q , r = 20 ] = [8,9];
console.log(p,q,r);

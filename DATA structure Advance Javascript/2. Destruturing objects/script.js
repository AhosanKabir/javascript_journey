"use strict";

// destructuring basically a way of unpacking values from an array or an object into separate variables. So in other words destructuring is to breka a complex data structure down  into a smaller data structure like a variable.

//This is an extremely useful addition to the language. Especially when we deal with the result of an API call,which basically means to get data from another web application, like weather data or data about movies or something like that. And this data usually comes in the form of objects basically. And then destructuring is really a lifesaver. So thsi is really used modern application.

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

  openingHour :{
    thu:{
        open : 12,
        close: 22
    },
    fri : {
        open : 11,
        close : 22
    },
    sat : {
        open : 0,
        close : 24
    }
  },

  order: function (startterIndex, mainIndex) {
    return [this.StarterMenu[startterIndex], this.mainMenu[mainIndex]];
  },
};

const {name , openingHour , catagories} = resturant;
console.log(resturant);
console.log(name , openingHour , catagories);


// But now what if we wanted the variable names to be different from the property name ??

const {name : resturantName, openingHour : hours, catagories: tags} = resturant;

console.log(resturantName , hours , tags);

//In the real world ,  we usually get data from somewhere else.

//*********** */
//next Mutating Variables

// We need to talk about mutating variables while destructuring objects.

let a = 555;
let b = 999;
const obj = {a:23 , b:45};
({a,b} = obj); // first bracket naah dile vul asbe. dite hba.
console.log(a,b);


//******************** */
//next Nested objects.

const {sat : {open ,close }} = openingHour;
console.log(open , close);
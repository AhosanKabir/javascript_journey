"use strict";

//The nullish coalescing ( ?? ) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand.

// ** null, undefined, 0, '', false, and NaN are considered falsy values **
// ** null and undefined are considered nullish values **

//------------- practical example -------------------

function getValues(value) {
  let getValue = value ?? 24;
  return getValue;
}

console.log(getValues());

//optional chaining operator (?.)

const obj = {
  personName: null,
  age: 26,
};

// otherwise result getting error because of null . This is for safety
const getName = obj.personName?.toUpperCase() ?? "No Name";
console.log(getName);

const getAge = obj.age?.toString() ?? "not available";

console.log(getAge);

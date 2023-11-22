"use strict";

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);

//     console.log(`Transformed string:${fn(str)}`);

//     console.log(`Transformed by:${fn.name}`);
// };

// transformer(`javascript is the best thing!`, upperFirstWord);

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  // console.log(first.toUpperCase(), others.join(' '));

  return [first.toUpperCase(), ...others].join(" ");
  // return [first.toUpperCase(), others.join(' ')]
};

// upperFirstWord(`hello there are`);

const transformer = function (str, callback) {
  const mainStr = `Original String :${str}`;
  console.log(mainStr);

  const transformString = `Transformed string: ${callback(str)}`;

  console.log(transformString);

  const transformerName = `Transformed by : ${callback.name}`;
  console.log(transformerName);
};

transformer(`Javascript is awsome man!`, upperFirstWord);
console.log(`-----------------`);
transformer(`Javascript is awsome man!`, oneWord);





//////////////////////////////////////////////////////
// built in higher order function

const arr = ["aaa", "bbbbb", "ccc", "ddd"];

//! getting undefined , because forEach doesn't return aything:
// const result =  arr.forEach((element,index)=>{
//     const all = `${index} : ${element}`;
//      return all;
// })

const result = [];
arr.forEach((element, index) => {
  const details = `${index} : ${element}`;
  result.push(details);
});

console.log(result);

// same output with object
const arrs = ["aaa", "bbbbb", "ccc", "ddd"];

const results = arrs.map((element, index) => {
  return { [index]: element };
});

console.log(results);

//single object 
const resultObject = results.reduce((acc, obj) => {
  const key = Object.keys(obj)[0];
  acc[key] = obj[key];
  return acc;
}, {});

console.log(resultObject);

// separate object 
const separateResultObject = results.reduce((acc, obj, index) => {
    const key = `${index}`;
    acc[key] = obj;
    return acc;
  }, {});

console.log(separateResultObject);



//? map is used when you want to transform each element of an array and create a new array based on those transformations. It's designed to produce a new array with the same number of elements as the original array. In your case, you were creating an array of objects with index-value pairs, and this is a good use case for map.

//? forEach is used for performing some action for each element in an array but doesn't produce a new array. It's typically used when you want to iterate over the array and do something with each element, but you're not necessarily interested in generating a new array.



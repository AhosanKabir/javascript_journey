"use strict";


// the spread operator is to unpack an array while rest is to pack elements into an array.
// it's called rest because it will take the rest of the elements. So the remaining elements of the array and then put them into a new array 

//SPREAD , because on RIGHT side of =
const arr = [1,2, ...[3,4]];

//REST , because on LEFT side of =
const [a, b, ...others]= [1,2,3,4,5,6,7,8];
console.log(a, b, others);
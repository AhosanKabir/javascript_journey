//spread Operator

//So we can use spread Operator to basically expand an array into all its elements. So basically unpacking all the array element at one.

const arrr = [4,5,6,7];
const newArr = [1,2,...arrr];
console.log(newArr);

const newArrr = [...arrr ,1 ,2]
console.log(newArrr);

const newArrrr = [1, ...arrr  ,2]
console.log(newArrrr);

//join array 
const joinArray = [...newArr , ...newArrr];
console.log(joinArray);
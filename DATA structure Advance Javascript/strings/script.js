"use strict";

//!  what is string ?
// A JavaScript string stores a series of characters like "John Doe".

//! createing strings :
const createString = "create string";

//!Character access :
// 1. charAt()
console.log(createString.charAt(1));
// 2. array-like object, where individual characters correspond to a numerical index:
console.log(createString[1]);

///////////////////// PART- 2///////////////////////////

const airline = "TAP Air Portigal";
const plane = `A320`;

console.log(airline[0]);
console.log(airline.length);
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));

// strings are case sensitives
//result is -1 when not found
console.log(airline.indexOf(`p`));

//! what can we actually can do with these indexes ?
//one good use case is to extract part of a string using the slice method. And slice method needs indexes as arguments.

// ****** keep in mind it's actually impossible to mutate STRINGS . They are primitives. ************
//! primitives value
// 1.string
// 2.Number
// 3.boolean
// 4.null
// 5.undefined
// 6.symbol

//! non primitive or Reference value or Object Values:
// 1.object
// 2.array
// 3.function
// 4.Date
// 5.others all.....

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//! comparing EMAILS :
const email = "hello@gmail.com";
const loginEmail = "Hello@gmail.Com \n";

const checkedEmail = loginEmail.toLowerCase().trim();
console.log(checkedEmail);

console.log(email === checkedEmail);

//! replace :
const speech = `All pasenger come to boarding door 23. Boarding door 23!`;

console.log(speech.replace("door", "gate"));
console.log(speech.replaceAll("door", "gate"));

//! Booleans :
const plane1 = `Airbus A320neo`;
console.log(plane1.includes("A320"));
console.log(plane1.includes("Boeing"));
console.log(plane1.startsWith("A320"));

if (plane1.startsWith("Airbus") && plane1.endsWith("neo")) {
  console.log("Part of the new Airbus familly");
}

//! example :

const checkBaggage = (items) => {
  const bagagge = items.toLowerCase();

  if (bagagge.includes("gun") || bagagge.includes("knife")) {
    console.log(`you are not allowed to go`);
  } else {
    console.log(`you are ready to go`);
  }
};

checkBaggage(`I have a laptop, some food and a pocket Knife`);
checkBaggage(`I have a socks, some food and a mobile`);
checkBaggage(`I have a Gun, some food and a pocket knife`);

////////////////// PART 3 ////////////////////////

//! split always return array

console.log(`a + b+ c+ d`.split("+"));
console.log(`Ahosan Kabir`.split(" "));

const [firstName, lastName] = `ahosan kabir`.split(" ");

const newName = [
  `Mr.`.toUpperCase(),
  firstName.charAt(0).toUpperCase() + firstName.slice(1),
  lastName,
].join(" ");

console.log(newName); //join return a new string

//! when one of the operands of the plus sign is a string it will convert all the operands to a string.

console.log(typeof 123456);
console.log(typeof (123456 + ""));

console.log(`----------------`);
const number = 12345;
console.log(typeof number);

// 2 ways to convert this number to a string
console.log(typeof (number + ""));
console.log(typeof String(number));

//! pad method :

const masterCreditCard = (cardNumber) => {
  const str = cardNumber + "";
  const sliceFirst = str.slice(0, 2);
  const sliceLast = str.slice(-2);

  const padnumber = sliceFirst + sliceLast.padStart( str.length - sliceFirst.length, '*'); 

    //  return padnumber

    console.log(padnumber);
};

masterCreditCard(25458865456411n);
masterCreditCard(2545886555555555554456411n);

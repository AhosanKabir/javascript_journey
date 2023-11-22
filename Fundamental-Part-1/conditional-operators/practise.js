//So we already saw 2 ways of writing conditionals. The regular if else statement and Switch statement 
// Now we have another ways of writing conditions and thts is conditional operators
// Conditional operators allows us to write all element in one line 
// But ternary operator is not thought as a replacement of if-else statement

//ternary operator
const age = 20;
age >= 18 ? console.log("drink water") : console.log("drink milk");

//another way
const price = 100;
const buy = price >= 100 ? ("Buy clothes") : ("buy shoe") ;
console.log(buy);

//same thing if else statement

let boyos = 23;
let age2;
if( boyos >= 18 ){
    age2 = "drink juice";
} else{
    age2 = "drink milk";
}
console.log(age2);

// another way to go .. now we use exression
// expression means which has a value to explore here expression is[ages>=20 ? "water 💧" : "milk 🥛"]

let ages = 23;
console.log(`i like to drink ${ages>=20 ? "water 💧" : "milk 🥛"}`);
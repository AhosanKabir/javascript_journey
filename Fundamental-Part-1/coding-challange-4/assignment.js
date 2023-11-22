
////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

let bill = 375;
// let tips = (15/100)* bill ;

let tips = bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.2;
let finalValue = (bill + tips);

// console.log(`The bill was ${bill}, the tip was ${tips}, and the total value ${finalValue}`);

let pay = `The bill was ${bill}, the tip was ${tips}, and the total value ${finalValue}`;
console.log(pay);

console.log(finalValue);
console.log(tips);



// same thing with if else statement
let bill1 = 45 ;

let tip1;

if(bill1 <= 300 && bill1 >=50){
    tip1 = bill1 * 0.15;
} else {
    tip1 = bill1 * 0.2;
}

let finalValue1 = (bill1 + tip1);

let pay1 = `The bill was ${bill1}, the tip was ${tip1}, and the total value ${finalValue1}`;

console.log(pay1);

console.log(finalValue1);
console.log(tip1);

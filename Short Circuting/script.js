//There are three properties about logical operators.So first they use any data type .

//Use any kind of data type, return any data type and they do something called short circuiting.

//About short circuiting, in the case of the OR operator, short circuiting means that if the first value is a truthy value, it will immediately return that first value.

console.log( 3 || "ahosan"); 
console.log('' || "riad");
console.log(true || 0);
console.log(undefined || null); //no short-cuiting.
console.log(false || false); //no short-cuiting.


//zekhane ese true value pabe tokhoni sei result tah niye execution bondho kore dibe ..
console.log(undefined || 0 || '' || "Ahosan" || 25 || null || false || true);

//USe case

let resturant = {
    menu : ["pizza" , "burger"],
    seat : ["chair" , "non ac" , "sofa"]
}

resturant.numGuest = 23;
console.log(resturant);
//without short circuit
const guest1 = resturant.numGuest ? resturant.numGuest : 10;
console.log(guest1);

//with short circuit. so much easier 
const guest2 = resturant.numGuest || 10 ;
console.log(guest2);


console.log("------- AND --------");

//AND operator works in the same exact oppsite way of the OR operator. AND operator short circuits, when the first value is falsy .and then immediately returns that falsy value without even evaluating the second operand.

console.log(0 && "jonas");
console.log(7 && false);

console.log("hello" && 7 && null && 'Ahosan'); 


// ***************************************************

//NULLISH COALESCING operator.

//It's an operator that was introduced in ES2020, 
//Only if first value was null or undefined only then second operand here would be executed and returned.

//not return 0 ..
resturant.numGuest = 0;
const guest = resturant.numGuest || 10;
console.log(guest);

//but it's return 0..
const guestCorrect = resturant.numGuest ?? 10;
console.log(guestCorrect);


//returned last operand
console.log(null ?? undefined ?? 'Ahosan');
console.log(undefined ?? "Riad" ?? 0 ?? null);
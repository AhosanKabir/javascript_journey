"use strict";

//In JavaScript, short-circuiting is the evaluation of an expression from left to right with || and && operators. JavaScript short-circuiting is also very useful because it may be used to replace if else statements.

//OR(||) short circuit:: In the case of OR, the expression is evaluated until we get one true result because the result will always be true.

// For practical applications, we can use the OR operator to set default values, And we can use AND operator to execute code in the second operand if the first one is true

// AND short circuit
console.log(false && true); //false
console.log(true && true); //true
console.log(true && false); // false

//if all values are truthy, the value of the last operand is returned.
console.log(true && true && false); //false
console.log(true && false && true); //false

// OR short circuit
console.log(false || true); //true
console.log(true || false); //true


//--------------- practical example -------------
// providing default values 

    let user = {
        personName : "",
        age : 24,
    }
    // Using || to provide a default value
    let name = user.personName || "Anonymous";
    console.log(name);

    let age = user.age || 18;
    console.log(age);
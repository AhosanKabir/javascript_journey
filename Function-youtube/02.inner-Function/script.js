'use strict';

// basic example 
function outerFunction(){
    function innerFunction(){
        function innerFunction2(){
            console.log(`I am come from inner function 2`);
        }

        innerFunction2();
        console.log(`i am come from inner Function`);
    }

    innerFunction();
    console.log(`i am come from outer function`);
}

outerFunction();


// Another example : 

function outerFunc(){
    return function innerFunc(){
        return 1+ 1 ;
    }
}

// 1 way : 
const getResult = outerFunc();
console.log(getResult());

// 2nd way : 
const getResults = outerFunc;
console.log(getResults()());


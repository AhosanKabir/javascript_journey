function logger(){
    console.log("My name is Riad. I am ready for learning Javascript");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitprocessor(apple, oranges){
    const juice = `Juice with ${apple} apples and ${oranges} oranges.`;
    return juice;
   
}
const appleJuice = fruitprocessor(5 , 4);
console.log(appleJuice);

// function declaration
function calcAge1(birthyear){
    return 2037 - birthyear ;
}
const age1 = calcAge1(1997);

//function expression 
const calcAge2 = function(birthyear){
    return 2037 - birthyear ;
}

const age2 = calcAge2(2000);

console.log(age1 , age2);

// Arrow function :::::::::::::::::::::
//for one parameter
//return don't need
const calcAge3 = birthyear => 2050 - birthyear;
const age3 = calcAge3(1990);
console.log(age3);

//for more perameter:
// return and {} must need 
const yearsUntilRetirement =(birthyear , firstName) =>{
    const age = 2050 - birthyear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} year's`; 
}

console.log(yearsUntilRetirement(2000 , "Riad"));
console.log(yearsUntilRetirement(2004 , "fahad"));


//called one function inside of another function..

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples , oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice; 
};

console.log(fruitProcessor(4 , 6));


// another exmple .........

const calcAge = function(birthyear){
    return 2050 - birthyear;
}


const UntilRetirement =function (birthyear , firstName){
    const age = calcAge(birthyear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} year's`);
        return retirement
    }else{
        console.log(`${firstName} has already retired`);
        return -1
    }
};

console.log(UntilRetirement(2000 , "Ahosan"));
console.log(UntilRetirement(1950 , "fahad")); 
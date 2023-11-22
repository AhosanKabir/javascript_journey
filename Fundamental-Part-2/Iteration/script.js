// ITERATION : THE FOR LOOP

//loops are a fundamental aspect of every programming language.

// for( let rep = 1 ; rep <=10 ; rep++){
//     console.log(`Lifting weight reptition ${rep} 🏋🏻‍♂️`);
// }

// loop for array ..

const ahosanArray = [ 
    'Ahosan',
    'Kabir', 
    2022 - 1998, 
    'Teacher', 
    ['Fahad','Biplob','Zamil'],
    true
];

let types =[];

for(let i= 0; i < ahosanArray.length; i++){
    //reading from ahosan array
    console.log(ahosanArray[i]);

    //filling from array
    //one way
    // types[i] = typeof ahosanArray[i];
    //2nd way
    types.push(typeof ahosanArray[i]);
};

console.log(types);

//practical example 
const years = [1994,1995,1996,1997,1998,1999]
const age = [];

for (let i = 0; i < years.length ; i++){
    age.push( 2022 - years[i] );
}

console.log(age);


//********************** */
//Use continue and break

const fahadArray = [ 
    'Mohammad',
    'Fahad', 
    2022 - 1998, 
    'Student', 
    ['Ahosan','Biplob','Zamil'],
    true
];

console.log('-------ONLY STRING-------');

for(let i = 0; i < fahadArray.length ; i++){
    if(typeof fahadArray[i] !== "string") continue;
    console.log(fahadArray[i] , typeof fahadArray[i]);
};


console.log('-------BREAK WITH NUMBER-------');

for(let i = 0; i < fahadArray.length ; i++){
    if(typeof fahadArray[i] === "number") break;
    console.log(fahadArray[i] , typeof fahadArray[i]);
};

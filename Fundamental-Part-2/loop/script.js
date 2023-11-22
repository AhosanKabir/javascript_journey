// LOOPING BACKWARDS AND LOOPS IN LOOPS

const ahosanArray = [
  "Ahosan",
  "Kabir",
  2022 - 1998,
  "Teacher",
  ["Fahad", "Biplob", "Zamil"],
  true,
];

for (let i = ahosanArray.length - 1; i >= 0; i--) {
  console.log(i, ahosanArray[i]);
}

// Next part ..
// loops inside a loop ..

//We have three different exercises and we want to repeat each of them five times. 

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`------Starting exercise ${exercise}`);

    for(let rep = 1; rep<6; rep++){
        console.log(`Lifting weight repetition ${rep}`);
    };
};



//*********************************************** */
// another loop example with while loop
// ********WHILE LOOP***************

//write one type
let rol = Math.random()*6;
console.log(Math.trunc(rol) + 1);


//write another type same thing.
let dice= Math.trunc(Math.random()*6) + 1;
console.log(dice);

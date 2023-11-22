'use strict';


// 1. The classical For loop
// 2. The For… of 
// 3. For…in pair
// 4. And the fancy, functional version: .forEach


/////////// ////////////////////////////////////
// The For… of loop
//The for…of loop iterates over the iterable objects (like Array, Map, Set, arguments object, …,etc), invoking a custom iteration hook with statements to be executed for the value of each distinct property

const brothers = ['Rishad', 'Emon','tijar', 'timmam',  'Azaz', 'tieam'];

const sister = ['tajin', 'tanisha', 'Puti'];

const allMembers = [...brothers , ...sister];
console.log(allMembers);

// Array loop 
for(const items of allMembers){
    console.log(items);
}

for (const el of allMembers.entries()){
    console.log(el);
}

for(const [i,el] of allMembers.entries()){
    console.log(`${i + 1} : ${el}`);
}


'use strict';


// basic structure 
// function init(){
//     let name = 'Ahosan';

//     function displayName(){
//         console.log(name);
//     }

//     displayName();
// }

// init();




function makeFunc(){
    console.log(`hello world`);
    const name = 'riad';
    return function displayName(){
        console.log(name);
        const random = Math.random();

        return function randoms(){
            console.log(random);
        }
    }
}

const myFunc = makeFunc();
const myfunc2 = myFunc();
myfunc2();
// console.dir(myFunc());

///////////////////////



function makeAdder(x){
    return function makeSum(y){
        return x + y;
    }
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(10));



/////////////////////////

// function makeSize(size){
//     return function(){
//         document.body.style.fontSize = `${size}px`;
//     }
// }

// const size12 = makeSize(12)
// const size13 = makeSize(26)
// const size14 = makeSize(42)


// document.getElementById(`size-12`).onclick= size12;
// document.getElementById(`size-13`).onclick= size13;
// document.getElementById(`size-14`).onclick= size14;




///////////////////////////// 
// main example 


function temporary(){
  let counter = 0; // this is the clouser , karon eitar kaj ses hoi nai. tai take bachiye rakha hobe. 
  return function(){
    counter+= 1;
    console.log(counter);
  }
}

const add = temporary();
console.dir(add);
add();
add();
add();
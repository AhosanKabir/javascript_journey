//! What is map ?
// A map is a data structure that we use to map values to keys. just like an object data is stored in key value pairs im maps. Maps are more useful then sets.

//! difference between objects and maps ?
// In MAPS , the keys can have any type and this can be huge. In OBJECTS , the keys are basically always strings. So in MAPS , we can have any type of key. It could even be {objects}, or {arrays}, or {other maps}.

const rest = new Map();

rest.set("name", "Classico Italiano");
rest.set(1, "France, Italy");
rest.set(2, "lisbon , Portugal");

rest
    .set("catagories", ["Italian", "Pizzeria"])
    .set("open", 11)
    .set('close' , 23)
    .set(true , 'We are open :D')
    .set(false, 'We are closed :(')

console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(1));

console.log(rest.size);

rest.delete(2)
console.log(rest);

console.log(rest.has(1));


rest.clear();
console.log(rest);


/////////////////////////////////////////////////////

// We can create map without using set() . we can create map using [] inside [] . but when we create something dynamic still we populate the map using set().
// [[key, value ],[key, value]

const question = new Map([
    ['question' , 'What is the best programming language in the world'],
    [1, 'C'],
    [2 , "Javascript"],
    [3,'python'],
    ['correct', 3],
    [true , 'Correct 🥇'],
    [false , 'Try Again ☹']
]);

console.log(question);


// if i have object from previous time, and i need to change it map then the tricks is change it with entries():

const obj ={
    fullName : "ahosan kabir",
    fatherName : "kazi Aminul islam",
    Age: 26,
    email: 'kaziahsoan1998@gmail.com'
}

console.log(obj);
console.log(Object.entries(obj));

const mapObj = new Map(Object.entries(obj));
console.log(mapObj);


//////////////////////////////////////////////////
// iterable map : 

console.log(question.get('question'));
for (let [key, value] of question){
    if( typeof key === 'number'){
        console.log(`Answer ${key} : ${value}`);
    }
}

// const answer = Number(prompt('Your answer'));
// console.log(answer);


// console.log( question.get(question.get('correct') === answer));



///////////////////////////////////////////////

// Convert map to array 
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);













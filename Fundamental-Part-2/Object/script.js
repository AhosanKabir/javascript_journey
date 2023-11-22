//object Basic structure :
//object are probably the most fundamental consept.
//The big difference between object and arrays , is that in objects , the order of these values does not matter at all when we want to retrive them.

//the simplest way of creating an object.It's called object literal Syntax.

const ahosan = {
    firstName : "Ahosan",
    lastName : "Kabir",
    age : 2037 - 1998,
    job : "Teacher & web developer",
    friends : ["Fahad" , "biplob" , "Zamil"]
};

console.log(ahosan);



// Dot vs Bracket notation
// we learn here how to retrive data from objects and also how to change data in objects using both dot and the bracket notation..


//the first way of getting a property from an object is by using the dot notation.
console.log(ahosan.lastName);

//now using bracket notation.
console.log(ahosan['lastName']);

//using bracket notation we do many things.but using dot notation we can't

const nameKey = "Name";
console.log(ahosan['first' + nameKey]);
console.log(ahosan['last' + nameKey]);


//what situations should we ues the dot notation and when do we have to use deep bracket notation ?

// So when we need to first compute the property name, then of course we have to use the bracket notation.

//in any other case , Just use the dot notation,which looks a lot claeaner and it's also easier to use.

//**** */ A real life example *****:
//const interestedIn = prompt('What do you want to know about Ahosan ? choose between firstName, lastName, age, job , and friends');

// console.log(ahosan[interestedIn]);

// if(ahosan[interestedIn]){
//     console.log(ahosan[interestedIn]);
// } else {
//     console.log('Wrong request! choose between firstName, lastName, age, job , and friends');
//     alert('Wrong request! choose between firstName, lastName, age, job , and friends');
// }; 

console.log(`${ahosan.firstName} has ${ahosan.friends.length} friends ,and his best friend is called ${ahosan.friends[0]}`);
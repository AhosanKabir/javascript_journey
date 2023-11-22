const friends = ["Ahosan", "Fahad", "Biplob"];

//array method start from here...

//push() method
// push method adds element to the end of an array.
friends.push("Jamil");
console.log(friends);

//unshift() method
//unshift method adds element to the begininig of an array
friends.unshift("Monjurul");
console.log(friends);

//pop()method
//pop method will remove the last element from the array.we didn't need any arguments here.

friends.pop();
console.log(friends);

//shift() method
// shift method will remove the first element from the array . and also here we didn't need any argument.

friends.shift();
console.log(friends);

//indexOf()method
// tell us in which position a certain element is in the array.if there is nothing we serach then we return simply -1 ; index number always start from 0

console.log(friends.indexOf("Fahad"));
console.log(friends.indexOf("Riad")); //return -1

//include() methods comes from ES6.
// the element will Simply return true if the element is on the array and false if it it's not .
//we can use the include method to write conditionals.

console.log(friends.includes("Ahosan"));
console.log(friends.includes("Riad"));

// conditional check with include() method **... 
if(friends.includes("Fahad")){
    console.log(`You have a friend named fahad`);
} else {
    console.log(`You have no friend called fahad`);
};

if(friends.includes("zamil")){
    console.log(`You have a friend named fahad`);
} else {
    console.log(`You have no friend called fahad`);
};
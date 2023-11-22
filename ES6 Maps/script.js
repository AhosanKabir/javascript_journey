// MAPS
//Maps are a lot more useful than sets.
//so What exactly is a map?

//Answer :
// A map is a Data Structure that we can use to map value to keys.So , just like an Object data is stored in key value pairs in maps. Now big difference between objects and maps is that in maps the keys can have any type and this can be huge. So, in Object , the Keys are basically always strings. But in map , we can have any type of key. It could even be objects, or Arrays , or other maps.

const rest = new Map();

//is set method we pass two Arguments. The First is the Key Name. the Second is the value part. Here When WE get the elements of course  the data type of the key matters.

//Indiviually..
rest.set("name", "Classico Italiano");
rest.set(1, "Dhaka , Bangladesh");
rest.set(2, "Konabari , Gajipur");

//All in one..
rest
  .set("Catagories", ["Italian", "Vegeterian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :( ");

console.log(rest.get("name"));
console.log(rest.get(1));
console.log(rest);

// We are not using this . It's so unreadble. It's just a simple look of power of map.
const time = 21;
// const getResturant = rest.get(time > rest.get("open") && time < rest.get(close)); 
// console.log(getResturant);
console.log(rest.get( time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("Catagories"));

rest.delete(2);
console.log(rest);

console.log(rest.size);


//************************************************//
//There is Actually another way of populating a new map without having to use the set mathods. It;s easy to use and understand.

const question = new Map([
    ['question' , 'What is the best programming language in the world?'],
    [1,"C"],
    [2, "Java"],
    [3, "Javascript"],
    [ 'correct' , 3],
    [true , 'Correct😎'],
    [false , 'Try again 🤧']
]);
console.log(question);

//{{{{{{{{{{{ .................................
// Whenever you need a map, when you already have an object. simple trick 😎;  

// console.log(Object.entries(openHour));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap); 
// ...................................}}}}}}}}}}

//maps are also iterable.

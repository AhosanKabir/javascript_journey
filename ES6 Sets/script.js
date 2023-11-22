// New Data Structure : SETS & MAPS

//All About Sets
//Case sensitive.

//Set is basically just a collection of unique values.So that means that a set can never have any duplicates. And that property makes them useful in certain situations.

const orderSet = new Set([
  "pasta",
  "Pizza",
  "Risito",
  "Pasta",
  "Pizza",
  "pasta",
  "pizza",
]);

console.log(orderSet);

console.log(orderSet.size);
console.log(orderSet.has("pizza"));
console.log(orderSet.has("Noodles"));

orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
orderSet.delete("Risito");
console.log(orderSet);
console.log(orderSet[1]); //can't acces

// How Do we Actually retrieve values out of a set?
//Answer : We wlii see no , this does'nt work, it gives us undefined no matter what number we put here. And that is because of sets there are actually no indexes. And in fact , there is no way of getting values out of a set.
// So there's really no need for getting data out  of a set .That's because if all values are unique, and if their order does not matter, then there is no point of retrieving values out of a set.

//If your goal is to actually store values in order and then retrive it, then the best use case , is to just use an array .

//Sets are also iterables. And therefore , we can loop over them.

//loop over set.
for (const order of orderSet) {
  console.log(order);
}

//** Let's see big use case*/
// So in a normal code base , ==>> the main use case of sets is actually to remove duplicate values of arrays.

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Waiter", "Chef"];

const stafUnique = new Set(staff);
console.log(stafUnique);


//But Now we actually want this to be an array. But the conversion from a set to an array is pretty easy, because they are both iterables. 
 
//so the spread Operator here works just like on an array .It works really exactly the same . So takes all the elements out of the iterable and essentially write them here, like comma separated, right.
const stafUniqueArray = [...new Set(staff)];
console.log(stafUniqueArray);

//count letter
console.log(new Set("Ahosan").size);
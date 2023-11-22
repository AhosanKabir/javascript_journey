//what is Sets ?
// set is basically just a collection  of unique values . so that means a set can never have any duplictes. And that property makes them usefull in certain situation.

// just like arrays sets are also iterables.
// strings are also iterables.

const orderSet = new Set([
  "pasta",
  "pizza",
  "risoto",
  "pasta",
  "pizza",
  "toast",
  "Pizza",
]);

console.log(orderSet);

console.log(orderSet.size);
console.log(orderSet.entries());
console.log(orderSet.has("pizza"));
console.log(orderSet.has("chicken"));

orderSet.add("garlic");
orderSet.add("bread");

console.log(orderSet);

orderSet.delete("bread");
console.log(orderSet);

// orderSet.clear();

// sets are actually no index . so we can't get value like array[index]. Because in sets are actually no indexes.

console.log(orderSet[2]); // result undefined.

// sets are also iterable
for (const menu of orderSet) {
  console.log(menu);
}

// ********** Big use case ****************

// in a normal code base ,the maon use case of sets is actually remove duplicates value from an array.

// spread operator works on all iterables.

const staff = ["waiter", "chef", "manager", "chef", "waiter"];
let singleValue = new Set(staff);
console.log(singleValue);

//by default get object. create array from set value :
singleValue = [...new Set(staff)];
console.log(singleValue);

///////////////////////////////////////////////////

//!!  sets are not comming for remove array . sets are not intended to replace arrays at all. Whenever you need to store values in order, and might contains duplicates always just use arrays.  !!
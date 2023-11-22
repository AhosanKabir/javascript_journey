let firstName = "Ahosan Kabir";
let job = "teacher";
let birthYear = 1997;
let year = 2021;

const Riad =
  " I'm " +
  firstName +
  " , a " +
  (year - birthYear) +
  " years old " +
  job +
  " ! " ;

console.log(Riad);


// same work doing with ES6 mathod

const riad = `I'm ${firstName} , a ${year - birthYear} years old ${job} !`;

console.log(riad) ;

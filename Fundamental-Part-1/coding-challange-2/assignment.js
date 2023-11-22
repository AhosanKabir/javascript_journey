let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let bmiMark = massMark / heightMark ** 2;
console.log(bmiMark);

let bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiJohn);

let markHeigherBmi = bmiMark > bmiJohn;
console.log(markHeigherBmi);


if (bmiMark > bmiJohn){
    console.log(`Marks BMI (${bmiMark}) is heigher than Johns (${bmiJohn}) !`);
} else{
    console.log(`Johns Bmi is heigher than Marks`);
}

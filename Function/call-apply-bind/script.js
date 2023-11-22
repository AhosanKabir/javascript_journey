'use strict';

const lufthasa ={
    airline: 'lufthansa',
    iataCode: "LH",
    bookings:[],

    // if use arrow function here on book then you are getting result undefined 
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name: `${name}`});
    }
} 

lufthasa.book(123 , 'Riad');
lufthasa.book(239, "fahad");
console.log(lufthasa);
'use strict'

// working with default peramiter :
const bookings = [];

const createBooking = function(flightNum , newPassengers = 1, price = 199) {

    const booking = {
        flightNum,
        newPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('LH23');

console.log(bookings);
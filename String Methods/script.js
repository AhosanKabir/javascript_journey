const airline = "TAP Air Portugal";
const plane = "A301";

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf("portugal"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4,7));

// if we don't know the value of string
console.log(airline.slice(0 , airline.indexOf(" ")));

const checkMiddleSeat = function(seat){
    const s = seat.slice(-1);
    if( s === 'B' || s === "E"){
        console.log("You get the middle Seat 🌟");
    } else {
        console.log("Hope next time you will find the seat 💗");
    }
};

checkMiddleSeat('11B');
checkMiddleSeat('21C');
checkMiddleSeat('40E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
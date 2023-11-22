const day = 'sunday';

switch (day) {
    case 'monday':
        console.log("I prepare my table");
        break;
    case 'tuesday':
        console.log("I wash my room");
        break;
    case 'wednesday':
    case 'thursday':
        console.log(
            "i prepare my self for learning"
        );
        break;
    case 'friday':
    case 'saturday':
        console.log("hurray, weekend is coming . Chill");
        break;
    case 'sunday':
        console.log("Start My week again");
        break;
    default:
        console.log("Your input is incorrect");
}

// same work done by if else statement but switch statment is more powerful and readble.

if(day === "monday"){
    console.log("I prepare my table");
} else if (day ===" tuesday"){
    console.log("I wash my room");
} else if(day === "wednesday" || day === "thursday"){
    console.log(
        "i prepare my self for learning"
    );
} else if (day === "friday" || day === "saturday"){
    console.log("hurray, weekend is coming . Chill");
} else if (day === "sunday"){
    console.log("Start My week again");
} else{
    console.log("you input is incorrect");
}
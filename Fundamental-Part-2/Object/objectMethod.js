const riad = {
    firstName : "Ahosan",
    lastName : "Kabir",
    birthYear :1998,
    job : "Teacher & web developer",
    friends : ["Fahad" , "biplob" , "Zamil"],
    hasDriverLicense:true,

    calcAge: function(){
        return 2037 - this.birthYear ;
    }
};

console.log(riad.calcAge());


//chalange 

const jonas = {
    firstname : 'jonathon',
    lastname : 'io',
    birthDay : 1998,
    job: 'teacher',
    hasLicense : true,
    // calAge : () => 2037 - this.birthDay 
    calAge : function(){
        return 2037 - this.birthDay;
    }
};

console.log(`${jonas.firstname} is a ${jonas.calAge()}- years old ${jonas.job} , and he has ${jonas.hasLicense? "a" : "no"} driver licences`);


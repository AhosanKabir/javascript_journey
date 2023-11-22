'use strict'

// callback function 

const  paymentSuccess = true;
const marks = 80;

// enroll process 
function enroll (callback){
    console.log(`course enrolment is in progress...`);

    setTimeout(() => {
        if(paymentSuccess){
            callback();
        } else {
            console.log( `enrolment failed`); 
        }
    } , 2000);
}


//course progress
function progress(callback){
    console.log(`course on progress.....`);

    setTimeout(() =>{
        if(marks >= 80){
            callback();
        }
        else{
            console.log(`you have not enough mark`);
        }
    } , 3000)
}

//get certificate

function getCertificate(callback){
    console.log(`preparing your cirtificate`);

    setTimeout(()=>{
        if(marks >= 90){
            callback();
        } else {
            console.log('you achived it. congrats!');
        }

    }, 2000)
}


function talented(){
    console.log(`you achieved it with talented marks`);
}



enroll(()=>{
    progress( ()=>{
        getCertificate(talented);
    });
});
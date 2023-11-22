"use strict";

// var show = document.querySelectorAll(".show-modal");
// show.addEventListener("click" , function(){
//     console.log("click me now");
// });
// console.log(show);

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnOpenModal);

const openBtn =  function () {
    //console.log("click me now");
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openBtn);
};

const closeBtn =  function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click' , closeBtn);
overlay.addEventListener('click' , closeBtn);

// *****************************
// key event handler


// document.addEventListener('keydown' , function(e){
//   if(e.key === 'Escape'){
//     if(!modal.classList.contains('hidden')){
//       closeBtn();
//     };
//   };
// });

//let's make Dry code 
document.addEventListener('keydown' , function(e){
  if(e.key === 'Escape' && !modal.classList.contains('hidden')){
      closeBtn();
  };
});
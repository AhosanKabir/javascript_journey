'use strict';

//Selecting element
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
//dice.style.display="none"; //aivabew set kora zai

const score = [0 , 0];
let currentScore = 0;
let activePlayer = 0;


const switchPlayer = function (){
    //Switch to next player.
    activePlayer = activePlayer === 0 ? 1 : 0 ;
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

//Rolling dice functionality 
btnRoll.addEventListener('click' , function(){
    //1.Generating a random dice roll
    const dice = Math.trunc(Math.random()*6) + 1 ;
    
    //2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //3.Check for rolled 1: if true, switch to nexr player

    if( dice !== 1){
        //add dice to current Score.
        currentScore  += dice;
        //current0El.textContent = currentScore; 
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else{
        //Switch to next player.
        // activePlayer = activePlayer === 0 ? 1 : 0 ;
        // currentScore = 0;
        // document.getElementById(`current--${activePlayer}`).textContent = 0;
        // player0El.classList.toggle('player--active');
        // player1El.classList.toggle('player--active');

        switchPlayer();
    } 

});


btnHold.addEventListener('click' , function(){
    //1.Add current score to active player's score
    score[activePlayer] += currentScore
    document.getElementById(`current--${activePlayer}`).textContent = score[activePlayer];

    //2.Check if player's score is >= 100
    //finish the Game.

    //3.Switch to the next player
    switchPlayer();
});
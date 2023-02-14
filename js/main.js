'user strict';

//VARIABLES

const inputNumber = document.querySelector('.js-user-number');
const btnGame = document.querySelector('.js-btn');
const userClues = document.querySelector('.js-clues');
const numberTries = document.querySelector('.js-tries');



//GENERAR NÚMERO ALEATORIO

const computerNumber = Math.ceil(Math.random() * 100);
console.log(computerNumber);


//EVENTO
function handleClick(event) {
    event.preventDefault(); 
    const userNumber = inputNumber.value;
    console.log(userNumber)
}
btnGame.addEventListener('click', handleClick);
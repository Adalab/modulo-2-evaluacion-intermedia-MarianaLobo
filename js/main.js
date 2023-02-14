'user strict';

//VARIABLES

const inputNumber = document.querySelector('.js-user-number');
const btnGame = document.querySelector('.js-btn');
const userClues = document.querySelector('.js-clues');
const numberTries = document.querySelector('.js-tries');


//GENERAR NÚMERO ALEATORIO

const computerNumber = Math.ceil(Math.random() * 100);
console.log(computerNumber);

function compare() {
    const userNumber = parseInt(inputNumber.value);
    if (userNumber > computerNumber) {
        userClues.innerHTML = "Demasiado alto";
    } else if (userNumber < computerNumber) {
        userClues.innerHTML = "Demasiado bajo";
    } else if (userNumber === computerNumber) {
        userClues.innerHTML = "Has ganado campeona!!!";
    }
}

//EVENTO
function handleClick(event) {
    event.preventDefault(); 
    compare();
}
btnGame.addEventListener('click', handleClick);
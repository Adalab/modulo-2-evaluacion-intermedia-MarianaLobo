'user strict';

//VARIABLES

const inputNumber = document.querySelector('.js-user-number');
const btnGame = document.querySelector('.js-btn');
const userClues = document.querySelector('.js-clues');
const numberTries = document.querySelector('.js-tries');

const computerNumber = getRandomNumber(100);
let round = 0;

//GENERAR NÚMERO ALEATORIO
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
console.log(computerNumber);

// COMPARAR
function compare() {
    const userNumber = parseInt(inputNumber.value);
    if (userNumber > 100 || userNumber < 1) {
        userClues.innerHTML = "El número debe estar entre 1 y 100";
    }else if (userNumber > computerNumber) {
        userClues.innerHTML = "Demasiado alto";
    } else if (userNumber < computerNumber) {
        userClues.innerHTML = "Demasiado bajo";
    } else if (userNumber === computerNumber) {
        userClues.innerHTML = "Has ganado campeona!!!";    
    }
}  

//CONTADOR DE INTENTOS
function counterRound(){
    round++;
    numberTries.innerHTML = "Número de intentos:" + round;
}

//EVENTO
function handleClick(event) {
    event.preventDefault();
    compare();
    counterRound();
}
btnGame.addEventListener('click', handleClick);
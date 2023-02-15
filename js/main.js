'use strict';

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

//ESCRIBIR PISTAS
function writeClues(clue) {
    userClues.innerHTML = clue;
}

// COMPARAR
function compare() {
    const userNumber = parseInt(inputNumber.value);

    counterRound(userNumber);

    if (isNaN(userNumber) || userNumber === "") {
        writeClues("Debes introducir un número");
    }else if (userNumber > 100 || userNumber < 1) {
        writeClues("El número debe estar entre 1 y 100");
    }else if (userNumber > computerNumber) {
        writeClues("Demasiado alto");
    } else if (userNumber < computerNumber) {
        writeClues("Demasiado bajo");
    } else if (userNumber === computerNumber) {
        writeClues("Has ganado campeona!!!");    
    }
}  

//CONTADOR DE INTENTOS
function counterRound(userNumber) {
    if (userNumber !== computerNumber) {
        round++;
        numberTries.innerHTML = round;
    }  
}

//EVENTO
function handleClick(event) {
    event.preventDefault();
    compare();
    
}
btnGame.addEventListener('click', handleClick);

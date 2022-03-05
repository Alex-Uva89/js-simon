// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)
// Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// PSEUDOCODICE

// CONTENUTO HTML:

const displayNumberRandom = document.getElementById('card_number_random');
const displayWinningNumbers = document.getElementById('result');
const btnPlay = document.getElementById('play');

// devo dichiararli da subito array altrimenti in alcune funzioni non possono funzionare
let numberPcRandom = []; // creo array da riempire per i numeri pc casuali
let numberUser = []; // creo array da riempire con i numeri del prompt dati dall'user 
let numberWinners = []; // creo array da riempire con i numeri dati dalla funzione di controllo

let removeNumberTimer = 5000; // inserisco variabile di tempo per far sparire i numeri
let askNumberPromptTimer = 1000; // inserisco variabile per far partire il prompt

// :::::::::::::: 1 - Visualizzare in pagina 5 numeri casuali. (for per creare 5 numeri)::::::::::

generateNumberPcRandom(5);
console.log(numberPcRandom);
printNumber(); // inserisco il comando che fa attivare la funzione della stampa numeri;
let timerRemove = setInterval(removeNumber, removeNumberTimer); //creo timer per far rimuovere i numeri con all'interno il timer per far partire il prompt


function calcRandomNumber(min, max) { // creo funzione per creare numeri randomici
    return Math.floor(Math.random() * (max - min) ) + min;
}

function generateNumberPcRandom(num) { //creo funzione per 
    numberPcRandom = [];
    for (let i = 0; numberPcRandom.length < num; i++) {
        let random = calcRandomNumber(1, 100);

        if (!numberPcRandom.includes(random)) {
            numberPcRandom.push(random);
        }
    }
    return numberPcRandom;
}


function printNumber() { // creo funzione per la stampa dei numeri
    displayNumberRandom.innerHTML = `<h2 class="number">${numberPcRandom}</h2>`;
}


// ::::::::::::::::: 2 - Da lì parte un timer di 30 secondi, alla fine spariscono. ::::::::::::::::

function removeNumber () {
    displayNumberRandom.innerHTML = ''; //la funzione parte riempiendo l'htm con uno spazio vuoto
    clearInterval(removeNumberTimer); //questa funzione essendo interval necessita di clear
    setTimeout(askNumberAtUser, askNumberPromptTimer); // creo il timer per far partire la richiesta dei numeri e insieme li controlla
}

//::::::::::: 3- chiedi all'utente (con dei prompt) di inserirli in ORDINE, uno alla volta.
//     3.1 - chiedo all'utente un numero 5 volte di seguito °°°°°CONTENUTO HTML°°°°°
//     3.2 - inserisco ogni numero che mi da l'utente in un array utente (numeriUtente)
//     3.3 - il software dice quanti e quali dei numeri da indovinare sono stati individuati.

function askNumberAtUser() {
    for(let i = 0; numberUser.length < numberPcRandom.length ; i++) { // creo ciclo per chiedere all'utente un numero di parole tanti quanti sono gli elementi dei numeri casuali
        let inputUser = parseInt(prompt('inserisci i numeri in sequenza:'))
        numberUser.push(inputUser);  
    }
    console.log(numberUser);
    isWinner();
}

//::::::::::: 4 - ogni numero dell array numeriUtente viene controllato all'interno di numeriCasuali

function isWinner() {
    for(let i = 0; i < numberUser.length; i++) {
        if (numberPcRandom[i] == numberUser[i]) {
            numberWinners.push(numberUser[i])
        }
    }
    displayWinningNumbers.innerHTML = 'Ottimo! Hai indovinato i numeri: ' + numberWinners;
}

//::::::::::: 5 - vengono dichiarati i numeri indovinati
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

let numberPcRandom; // creo array da riempire per i numeri pc casuali
let numberUse; // creo array da riempire con i numeri del prompt dati dall'user 
let numberWinners; // creo array da riempire con i numeri dati dalla funzione di controllo

let removeNumberTimer = 30000; // inserisco variabile di tempo per far sparire i numeri
let askNumberPromptTimer = 1000; // inserisco variabile per far partire il prompt




// :::::::::::::: 1 - Visualizzare in pagina 5 numeri casuali. (for per creare 5 numeri)::::::::::

generateNumberPcRandom(5);
console.log(numberPcRandom);


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

printNumber(); // inserisco il comando che fa attivare la funzione della stampa numeri;

function printNumber() { // creo funzione per la stampa dei numeri
    numeri.innerHTML = `<h2 class="number">randomNumber</h2>`;
}


// ::::::::::::::::: 2 - Da lì parte un timer di 30 secondi, alla fine spariscono. ::::::::::::::::
let timerRemove = setInterval(removeNumber, removeNumberTimer); //creo timer per far rimuovere i numeri con all'interno il timer per far partire il prompt

function removeNumber () {
    displayNumberRandom.innerHTML = '';
    clearInterval(removeNumberTimer);
    setTimeout(askNumberAtUser, askNumberPromptTimer); // creo il timer per far partire la richiesta dei numeri e insieme li controlla
}

//::::::::::: 3- chiedi all'utente (con dei prompt) di inserirli in ORDINE, uno alla volta.
//     3.1 - chiedo all'utente un numero 5 volte di seguito °°°°°CONTENUTO HTML°°°°°
//     3.2 - inserisco ogni numero che mi da l'utente in un array utente (numeriUtente)



// 4- il software dice quanti e quali dei numeri da indovinare sono stati individuati.



//     4.1 - ogni numero dell array numeriUtente viene controllato all'interno di numeriCasuali

//     4.2 - creo un array 'vittoria'
//     4.3 - i numeri uguali di numeriCasuali e numeriUtente vengono inseriti in 'vittoria'
//     4.4 - viene mostrato il contenuto dell'array 'vittoria'. °°°°°CONTENUTO HTML°°°°°
// BONUS SE RIESCO 4.5 - SE il box vittoria contiene 5 elementi compare il messaggio 'hai vinto' °°°°°CONTENUTO HTML°°°°°

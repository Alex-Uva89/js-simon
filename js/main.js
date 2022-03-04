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

// 0 - Si parte da schermata play
//     0.1 - si clicca play per far partire il gioco 

// :::::::::::::: 1 - Visualizzare in pagina 5 numeri casuali. (for per creare 5 numeri)::::::::::

const numberRandomPC = []; //array che contiene i numeri casuali

for (let numberCicle = 0; numberCicle < 5; numberCicle++) {            //  ciclo per creare i numeri casuali.
    let selectNumberRandom = Math.floor(Math.random() * (100 - 0) + 0);
    numberRandomPC.push(selectNumberRandom)
}

displayNumberRandom.innerHTML = numberRandomPC; //mostro i numeri a display


// ::::::::::::::::: 2 - Da lì parte un timer di 30 secondi, alla fine spariscono. ::::::::::::::::
const seeNumberAtUser = setTimeout(visibilityNumber, 10000); //attivo un timer di 10 sec per memorizzare i numeri


function visibilityNumber() {
    displayNumberRandom.innerHTML = ''; // funzione per cancellare i numeri visibili
}

//::::::::::: 3- chiedi all'utente (con dei prompt) di inserirli in ORDINE, uno alla volta.
//     3.1 - chiedo all'utente un numero 5 volte di seguito °°°°°CONTENUTO HTML°°°°°
//     3.2 - inserisco ogni numero che mi da l'utente in un array utente (numeriUtente)

let numberUser;
setTimeout(function() {
    let numberUser = sayNumberUser();
  }, 11000);


function sayNumberUser() {
    const numberArrayUser = [];   
    for (let cicloDiInput = 0; cicloDiInput < 5; cicloDiInput++) {
        let inputUser = parseInt(prompt('Indicami un numero che ricordi?'));
        numberArrayUser.push(inputUser);  
    }
    return numberArrayUser;
}

// 4- il software dice quanti e quali dei numeri da indovinare sono stati individuati.
for (let cicloDiControllo = numberRandomPC[0]; cicloDiControllo < numberRandomPC.length; cicloDiControllo++) {
    let controlloNumero = numberRandomPC[cicloDiControllo];
    console.log(controlloNumero);
    if (cicloDicontrollo(numberRandomPC[i]) = numberUser[i]) {
        displayWinningNumbers.innerHTML = 'Hai vinto';
    } else {
        displayWinningNumbers.innerHTML = 'Hai perso';
    }
    
}



//     4.1 - ogni numero dell array numeriUtente viene controllato all'interno di numeriCasuali

//     4.2 - creo un array 'vittoria'
//     4.3 - i numeri uguali di numeriCasuali e numeriUtente vengono inseriti in 'vittoria'
//     4.4 - viene mostrato il contenuto dell'array 'vittoria'. °°°°°CONTENUTO HTML°°°°°
// BONUS SE RIESCO 4.5 - SE il box vittoria contiene 5 elementi compare il messaggio 'hai vinto' °°°°°CONTENUTO HTML°°°°°

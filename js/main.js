// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)
// Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// PSEUDOCODICE

// 1 - Visualizzare in pagina 5 numeri casuali. (for per creare 5 numeri)
//     1.1 - creare i numeri casuali.
//     1.2 - creo un array dove inserire i numeri casuali (anche doppi) (numeriCasuali)
//     1.3 - visualizzare i numeriCasuali per 30 secondi.
// 2 - Da lì parte un timer di 30 secondi. alla fine del timer nascondo i numeri prensenti in numeriCasuali.
// 3- chiedi all'utente (con dei prompt) di inserirli in ORDINE, uno alla volta. (for per chiedere 5 numeri)
//     3.1 - chiedo all'utente un numero 5 volte di seguito
//     3.2 - inserisco ogni numero che mi da l'utente in un array utente (numeriUtente)
// 4- il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//     4.1 - ogni numero dell array numeriUtente viene controllato all'interno di numeriCasuali
//     4.2 - creo un array 'vittoria'
//     4.3 - i numeri uguali di numeriCasuali e numeriUtente vengono inseriti in 'vittoria'
//     4.4 - viene mostrato il contenuto dell'array 'vittoria'.
// BONUS SE RIESCO 4.5 - SE il box vittoria contiene 5 elementi compare il messaggio 'hai vinto'

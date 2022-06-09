/* Chiedi un numero di 4 cifre all’utente nel prompt
 e calcola la somma di tutte le cifre che compongono il numero. */

// chiedo il numero all'utente e lo salvo in inputNumber
let inputNumber = prompt('Dammi un numero di 4 cifre');

// visualizzo input originale dall'utente
console.log(inputNumber);

/* variabile flag a cui sommare di volta in volta 
le singole cifre del numero input */
let somma = 0;

// per ogni cifra di inputNumber
for (let i = 0; i < inputNumber.length; i++) {
  // sostituisco la cifra iniziale e sommo la cifra attuale alla precedente
  somma += parseInt(inputNumber[i]);

  /* per esteso sarebbe somma = somma + parseInt(inputNumber[i]) */
}

// stampo in console valore finale della variabile flag
console.log(somma);

/*  Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

// variabile flag per contenere la somma
let somma = 0;

// ciclo di 10 richieste di numeri all'utente
for (let i = 0; i < 10; i++) {
  // inserisco il dato dell'utente nella variabile come numero
  let userNumber = parseInt(prompt('Scrivi un numero'));
  //   eseguo la somma alla variabile flag ogni iterazione
  somma += userNumber;
}

// stampa della sommatoria al termine del ciclo
console.log(somma);

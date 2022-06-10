/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

// creazione array vuoto
const oddNumbers = [];

// dichiarazione variabile per input utente
let userNumber;

// ciclo per chiedere numero a utente 6 volte
for (let i = 0; i < 6; i++) {
  // richiesta di numero
  userNumber = parseInt(prompt('Dimmi un numero'));
  //   se il numero è dispari
  if (userNumber % 2 !== 0) {
    //   inserisci il numero corrente nell'array
    oddNumbers.push(userNumber);
  }
}

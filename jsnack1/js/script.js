/* Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
in verde i numeri pari. */

// array con dentro numeri
let numbers = [1, 5, 16, 468, 12, 34, 25, 9327, 1257, 2356];

// variabili per target DOM
let oddNumbers = document.getElementById('red');
let evenNumbers = document.getElementById('green');

console.log(oddNumbers);
console.log(evenNumbers);

// ciclo for per scorrere i numeri
for (let i = 0; i < numbers.length; i++) {
  // se l'elemento è pari
  if (numbers[i] % 2 === 0) {
    //   appendiamo l'elemento al div verde dei numeri pari
    evenNumbers.innerHTML += `${numbers[i]} `;
    // altrimenti
  } else {
    //   appendiamo l'elemento al div rosso dei numeri dispari
    oddNumbers.innerHTML += `${numbers[i]} `;
  }
}

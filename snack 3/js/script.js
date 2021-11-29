// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const min = 3;
const max = 5;

// myArray.forEach((element, index, array) => {
//     console.log( index[3]);
// });

const numeriRichiesti = myArray.filter((element, index, array) => {
    return index > min && index < max ;
});
console.log(numeriRichiesti);
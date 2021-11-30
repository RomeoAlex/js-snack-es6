// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// console.log(myArray);

const min = 3;
const max = 5;
newArray=[];

myArray.forEach((element, index, array) => {
// cerco tra gli indici
    if( index > min && index < max ){
//  attanzione!!!!ritorno del valore booleano ma non del valore interno 
// pusho l'elemento 
newArray.push(element);
};
});
console.log(newArray);

// const numeriRichiesti = myArray.filter((element, index, array) => {
//     return index > min && index < max ;
// });
// console.log(numeriRichiesti);
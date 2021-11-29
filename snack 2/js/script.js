// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadreCalcio = [
    {
        nome: 'Juventus',
        punti: 0,
        falliSubiti:0
    },
    {
        nome: 'Inter',
        punti: 0,
        falliSubiti:0
    },
    {
        nome: 'Milan',
        punti: 0,
        falliSubiti:0
    },
];
const newArray = [];
for (let i = 0;i < squadreCalcio.length; i++){
    const thisTeam = squadreCalcio[i];

    const numeroFalli = getRndInteger(0,50);
    const numeriPunti = getRndInteger(0,50);
    thisTeam.punti = numeriPunti;
    thisTeam.falliSubiti = numeroFalli;
    const {nome, falliSubiti} = thisTeam;

    const newArrayTeam ={
        nome, falliSubiti
    };
    newArray.push(newArrayTeam);

}
// console.log(squadreCalcio);
console.log(newArray);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
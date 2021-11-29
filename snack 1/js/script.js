// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM


const bici = [
{
    nome: 'Bianchi',
    peso: 5
},
{
    nome: 'SilverStar',
    peso:10
},
{
    nome: 'Rockriders',
    peso:7
}
];
// console.log(bici);

let pesoMinore = bici[0];
for(let i = 0; i > bici.length; i++){
    const thisBici = bici[i];
    if(thisBici.peso < pesoMinore.peso){
        pesoMinore = thisBici
    } 
}
console.log(pesoMinore);

const {nome, peso} = pesoMinore;
const biciVideo = `
<h2> La bici più leggera è ${nome} e pesa ${peso} kg </h2>
`;
document.getElementById('my-container').innerHTML = biciVideo;
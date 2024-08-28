const tableau = ['Sports', 'Cuisine', 1243, true, {}]; //FIXME:Tableau avec plusieurs types de données DANGER! À ne pas faire

const fruits = ['kiwi', 'Banane', 'Tomate', 'Fraise'];
// console.log(fruits[0]);

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.push('bleuets');

console.log(fruits);

function addition(a,b) {
    return a + b;
}

const additionnerLambda = (a,b) => a + b;

let result= additionnerLambda(1,2);
console.log(result);

fruits.forEach(f => console.log(f));

let resultat = fruits.filter(f => f.length > 6); //crée un autre tableau, n'affecte pas le tableau original
console.log(resultat);
console.log(fruits);

const MULTIPLICATEUR = 3;
const nombres = [10,21,32,42];
let produits = nombres.map(n => n * MULTIPLICATEUR)
.filter(n => n > 75)
.map(n => n + 9)
.forEach(n => console.log(n)); //crée un autre tableau, n'affecte pas le tableau original

console.log(produits); //undefined
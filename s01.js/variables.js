const prenom = "Yannick"; // Impossible de refaire =

let age = 35; // définir une variable qui peut être réaffectée, je peux refaire un = (1%)

age++;

console.log(prenom);

let nombreUn = 2;
let nombreDeux = 3;

// function addition(nombreUn, nombreDeux) {
//     return nombreUn + nombreDeux;
// }
// console.log(addition(nombreUn, nombreDeux));

// const resultat = addition(4,6);
// console.log(resultat);

function CreerMessage(prenom, age) {
    return `Bonjour, mon prénom est ${prenom} et j'ai ${age} ans`;
}

console.log(CreerMessage(prenom, age));


//############### en bas, c'est la même chose que ci-dessus mais pas ok, faire comme en haut #####################

// function afficherUtilisateur(prenom, age) {
//     console.log(`Bonjour, mon prénom est ${prenom} et j'ai ${age} ans`);
// }

// afficherUtilisateur(prenom,age);



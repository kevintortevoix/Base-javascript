// -------------------------------------------------EXERCICE 1-------------------------------------------

// const nombres = [1, 2, 3, 4, 5]
//     console.log(nombres)

//     for(let i = 0; i < nombres.length; i++){
//         console.log(nombres[i])
// }

// -------------------------------------------------EXERCICE 2-------------------------------------------

// function sommeTableau(tableau) {
//     let somme = 0;
//     for (let i = 0; i < tableau.length; i++) {
//         somme += tableau[i];
//     }
//     return somme;
// }

// let tableau = [1, 2, 3, 4, 5];
// console.log(sommeTableau(tableau));
// -------------------------------------------------EXERCICE 3-------------------------------------------

// function motPlusLong(tableauMots) {
//     let motLong = "";

//     for (let i = 0; i < tableauMots.length; i++) {

//         if (tableauMots[i].length > motLong.length) {
//             motLong = tableauMots[i];
//         }
//     }

//     return motLong;
// }

// let tableauMots = ["chaise", "table", "etagere", "porte"];
// console.log(motPlusLong(tableauMots));

// -------------------------------------------------EXERCICE 4-------------------------------------------

// const chaine = "kevin"

// function inverserChaine(chaine) {
//     let result = "";

//     for (let i = chaine.length - 1; i >= 0; i--) {
//         result += chaine[i];
//     }

//     return result;
// }

// console.log(inverserChaine(chaine));

// -------------------------------------------------EXERCICE 5-------------------------------------------

// const voyelles = "aeiouyAEIOUY"

// function compterVoyelles(chaine) {

//     let compteur = 0

//     for (let i = 0; i < chaine.length; i++) {
//         if (voyelles.includes(chaine[i])) {
//             compteur++;
//         }
//     }
//     return compteur;
// }

// console.log(compterVoyelles("kevin"));

// -------------------------------------------------EXERCICE 6-------------------------------------------

// function nombresPairs(tableau) {
//     let result = [];

//     for (let i = 0; i < tableau.length; i++) {
//         if (tableau[i] % 2 === 0) {
//             result.push(tableau[i]);
//         }
//     }

//     return result;
// }

// console.log(nombresPairs([1, 2, 3, 4, 5, 6])); 

// -------------------------------------------------EXERCICE 7-------------------------------------------

// const objet = {
//     nom : "kevin",
//     age : 30,
//     ville : le mans
// };

// function compterProprietes(objet){
//     let compte = 0;

//     for(let cle in objet){
//        

// -------------------------------------------------EXERCICE 8-------------------------------------------

// let produits = [
//  { nom: "Stylo", prix: 2 },
//  { nom: "Cahier", prix: 5 },
//  { nom: "Gomme", prix: 1 }
// ];


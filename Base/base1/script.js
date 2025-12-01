// -------------------------------------------------EXERCICE 1-------------------------------------------

const name = "Martin";
console.log(name)

let anneeNaissance = "2000";
console.log(anneeNaissance)

let difference = 2025 - 2000; // 25

if (name === "Martin" ) {
    console.log("Bonjour Mr" ,name, "Vous avez, ", difference, "ans")
} 

// -------------------------------------------------EXERCICE 2-------------------------------------------

let note_maths = "15"
let note_français = "12"
let note_HG = "9"
let moyenne = (15+12+9) /3;

console.log("la moyenne est de", moyenne, "/20")

// -------------------------------------------------EXERCICE 3-------------------------------------------

const sexe = 1;

if(sexe === 1){
    console.log("Vous etes un homme")    
}
else if (sexe === 2){
    console.log("Vous etes une femme")
}

// -------------------------------------------------EXERCICE 4-------------------------------------------

const heure = 6;

if(heure >= 6 && heure < 12 ){
   console.log("C'est le matin") 
}
else if(heure >=12  && heure < 21 ){
   console.log("C'est l'apres-midi") 
}
else if(heure <= 21){
    console.log("C'est la nuit")
}

// -------------------------------------------------EXERCICE 5-------------------------------------------

let choix = 1;

if(choix === 1) {
    console.log("Insérer")
}
else if (choix ===2){
    console.log("Supprimer")
}
else if (choix ===3){
    console.log("Afficher")
}
else if (choix ===4){
    console.log("Ce choix n'existe pas")
}

// -------------------------------------------------EXERCICE 6-------------------------------------------

let nombre = 15

if(nombre % 3 === && nombre % 5 === 0) {
    console.log("C'est un multiple de 3 et de 5");
}
else{
    console.log("Ce n'est pas un multiple de 3 et de 5");
}

// -------------------------------------------------EXERCICE 7-------------------------------------------

let compteur = 44000;

for (compteur; compteur <=44999; compteur++) {
    console.log("Code Postale n°" + compteur)
}

// -------------------------------------------------EXERCICE 8-------------------------------------------

let valeur = 0

for (valeur; valeur < 20; valeur += 2) {
    console.log("valeur jusqu'à 20", valeur)
}
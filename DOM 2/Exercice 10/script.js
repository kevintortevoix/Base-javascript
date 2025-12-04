let produits = [
    { nom: "Stylo", prix: 1.5 },
    { nom: "Cahier", prix: 3 },
    { nom: "Gomme", prix: 0.8 }
];

let filtre = [];

function SuperieurA1Euro() {

    for (let i = 0; i < produits.length; i++) {
        if (produits[i].prix > 1) {
            filtre.push(produits[i])
        }

    }
    return filtre
}

console.log(SuperieurA1Euro());
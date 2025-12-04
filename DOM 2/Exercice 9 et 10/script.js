let produits = [
    { nom: "Stylo", prix: 1.5 },
    { nom: "Cahier", prix: 3 },
    { nom: "Gomme", prix: 0.8 }
];


const table = document.createElement("table");
const header = document.createElement("tr");
const thNom = document.createElement("th");
const thPrix = document.createElement("th");

thNom.textContent = "Nom";
thPrix.textContent = "Prix";

header.appendChild(thNom);
header.appendChild(thPrix);
table.appendChild(header);


produits.forEach(produit => {
    const tr = document.createElement("tr");

    const tdNom = document.createElement("td");
    tdNom.textContent = produit.nom;
    tr.appendChild(tdNom);

    const tdPrix = document.createElement("td");
    tdPrix.textContent = produit.prix;
    tr.appendChild(tdPrix);

    table.appendChild(tr);
});


document.body.appendChild(table);



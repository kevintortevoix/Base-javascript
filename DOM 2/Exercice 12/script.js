let livres = [
    { titre: "Livre A", categorie: "Roman" },
    { titre: "Livre B", categorie: "Poésie" },
    { titre: "Livre C", categorie: "Roman" }
];


const categories = {};
livres.forEach(livre => {
    if (!categories[livre.categorie]) {
        categories[livre.categorie] = [];
    }
    categories[livre.categorie].push(livre.titre);
});


const container = document.createElement("div");

for (let categorie in categories) {
    const h2 = document.createElement("h2");
    h2.textContent = categorie;
    container.appendChild(h2);

    const ul = document.createElement("ul");

    categories[categorie].forEach(titre => {
        const li = document.createElement("li");
        li.textContent = titre;
        ul.appendChild(li);
    });

    container.appendChild(ul);
}

document.body.appendChild(container);


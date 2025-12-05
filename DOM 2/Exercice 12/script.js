let livres = [
    { titre: "Livre A", categorie: "Roman" },
    { titre: "Livre B", categorie: "Poésie" },
    { titre: "Livre C", categorie: "Roman" }
];

const div = document.getElementById("groupe");

let theme = [];

function structureLivres() {

    for (let i = 0; i < livres.length; i++) {
        if (!theme.includes(livres[i].categorie)) {
            theme.push(livres[i].categorie);
        }
    }

    for (let j = 0; j < theme.length; j++) {

        const h3 = document.createElement("h3")
        const ul = document.createElement("ul")


        h3.textContent = theme[j];
        div.appendChild(h3);
        div.appendChild(ul);

        for (let i = 0; i < livres.length; i++) {
            if (livres[i].categorie === theme[j]) {
                const li = document.createElement("li");
                li.textContent = livres[i].titre;
                ul.appendChild(li);
            }
        }
    }
    return theme;
}
console.log(structureLivres())


let personnes = ["alice", "bob", "claire"];
const ul = document.getElementById("listeNoms");

function afficherNomsMajuscules() {
    for (let i = 0; i < personnes.length; i++) {
        let nom = personnes[i];
        let nomMaj = nom.toUpperCase(); 

        const li = document.createElement("li");
        li.textContent = nomMaj
        ul.appendChild(li);
    }
}

console.log(afficherNomsMajuscules())
let personnes = ["alice", "bob", "claire"];

function afficherNomsMajuscules() {
    const liste = document.getElementById("liste-personnes");

    for (let nom of personnes) {
        const li = document.createElement("li");
        li.textContent = nom.toUpperCase(); 
        liste.appendChild(li);
    }
}
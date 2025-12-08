let compteur = 0

const button = document.getElementById("compter")
const resultat = document.getElementById("resultat")

button.addEventListener("click", () => {
    compteur++;
    resultat.textContent = `Vous avez cliqué ${compteur} fois.`;
});


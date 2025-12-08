const champ = document.getElementById("champTexte");
const bouton = document.getElementById("toggleChamp");

bouton.addEventListener("click", () => {
    champ.disabled = !champ.disabled;
});
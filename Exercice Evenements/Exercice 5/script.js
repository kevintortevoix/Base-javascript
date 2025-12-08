const champNom = document.getElementById("champNom");
const bouton = document.getElementById("afficherNom");
const message = document.getElementById("message");


bouton.addEventListener("click", function () {
    const nom = champNom.value;
    message.textContent = "Bonjour, " + nom;
});
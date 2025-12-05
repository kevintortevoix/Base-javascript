const button = document.getElementById("modifierTexte")
const paragraphe = document.getElementById("texte")

button.addEventListener("click", function() {
    paragraphe.textContent= "Le texte a été modifié avec succès."

});
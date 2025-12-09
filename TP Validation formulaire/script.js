const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // VALIDATION DU NOM
    const nom = document.getElementById("nom")
    const erreurNom = document.getElementById("erreur-nom");

    if (nom.value.length < 3) {
        erreurNom.textContent = "Le nom doit contenir au moins 3 caractères.";
    }
    else {
        erreurNom.textContent = "";
    }

    // VALIDATION DU PRENOM
    const prenom = document.getElementById("prenom")
    const erreurPrenom = document.getElementById("erreur-prenom");

    if (prenom.value.length < 2) {
        erreurPrenom.textContent = "Le nom doit contenir au moins 2 caractères.";
    }
    else {
        erreurPrenom.textContent = "";
    }

    // VALIDATION DU MAIL
    const email = document.getElementById("email")
    const erreurEmail = document.getElementById("erreur-email");
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (regexEmail.test(email.value)) {
        erreurEmail.textContent = "";
    }
    else {
        erreurEmail.textContent = "Veuillez entrer une adresse mail valide";
    }

    // VALIDATION DU MDP
    const password = document.getElementById("password")
    const erreurPassword = document.getElementById("erreur-password");
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z0-9]{8,}$/;

    if (password.value.length < 8) {
        erreurPassword.textContent = "Le nom doit contenir au moins 8 caractères.";
    }
    else {
        erreurPassword.textContent = "";
    }

    if (regexPassword.test(password.value)) {
        erreurPassword.textContent = "";
    }
    else {
        erreurPassword.textContent = "Veuillez entrer une adresse mail valide";
    }

    // VALIDATION DE L'AGE
    const age = document.getElementById("age")
    const erreurAge = document.getElementById("erreur-age")

    if (age.value >= 18) {
        erreurAge.textContent = ""
    }

    else {
        erreurAge.textContent = "L'âge doit être un nombre entre 18 et 99"
    }
    if (age.value < 99) {
        erreurAge.textContent = ""
    }

    else {
        erreurAge.textContent = "L'âge doit être un nombre entre 18 et 99"
    }
})

const produits = [
    { id: 1, nom: "Thé Vert Bio", prix: 12.99, image: "https://placehold.co/150?text=Thé+Vert+Bio" },
    { id: 2, nom: "Café Arabica", prix: 8.50, image: "https://placehold.co/150?text=Café+Arabica" },
    { id: 3, nom: "Infusion Menthe", prix: 5.00, image: "https://placehold.co/150?text=Infusion+Menthe" },
    { id: 4, nom: "Chocolat Chaud", prix: 15.00, image: "https://placehold.co/150?text=Chocolat+Chaud" }
];

let panier = [];

const containerProduits = document.getElementById("produits-container")

// A. Affichage des produits (DOM)

function afficherProduits(produits) {

    // Pour vider le champ
    containerProduits.innerHTML = "";

    produits.forEach(produit => {

        // Création de la carte
        const carte = document.createElement("div");
        carte.classList.add('product-card');

        // Création de la div qui va accueillir le contenu
        const divContent = document.createElement("div");
        divContent.classList.add("card-content");

        // Création de l'image
        const img = document.createElement("img");
        img.src = produit.image;
        img.alt = produit.nom;

        // Création de l'id
        const id = document.createElement("p");
        id.textContent = produit.id;

        // Création du nom des produits
        const pNom = document.createElement("h3");
        pNom.textContent = produit.nom;

        // Création du prix des produits
        const pPrix = document.createElement("p");
        pPrix.classList.add("card-price");
        pPrix.textContent = produit.prix + "€";

        // Création du bouton Ajouter
        const btnAjouter = document.createElement('button');
        btnAjouter.textContent = "Ajouter au panier";

        btnAjouter.addEventListener("click", () => {
            ajouterAuPanier(produit);
        });

        // Assemblage des élements

        carte.appendChild(img);
        carte.appendChild(divContent);

        divContent.appendChild(id);
        divContent.appendChild(pNom);
        divContent.appendChild(pPrix);
        divContent.appendChild(btnAjouter);

        containerProduits.appendChild(carte);

    });

}

// B. Gestion du Panier

// Fonction pour ajouter un produit au panier
const ajouterAuPanier = (produits) => {

    // Vérifie si le produit existe déjà
    const existe = panier.find(p => p.id === produits.id);

    if (existe) {
        // Si oui, augmente la quantité
        existe.quantite += 1;
    }
    else {
        // Sinon, ajoute le produit au panier
        panier.push({
            id: produits.id,
            nom: produits.nom,
            prix: produits.prix,
            quantite: 1
        });
    }

    // Met à jour l'affichage du panier
    afficherPanier();
}

// Supprimer un produit par son id
const supprimerDuPanier = (idProduit) => {
    panier = panier.filter(p => p.id !== idProduit);
    afficherPanier();
}

const listePanier = document.getElementById("panier-liste");
const montantTotal = document.getElementById("montant-total");

// Fonction pour afficher le panier
const afficherPanier = () => {
    listePanier.innerHTML = "";

    // si le panier est vide
    if (panier.length === 0) {
        listePanier.innerHTML = "Votre panier est vide."
        montantTotal.textContent = " 0.00 € ";
        return;
    }

    let total = 0

    // panier
    panier.forEach(produit => {

        // ligne permettant d'afficher le produit dans le panier
        const ligne = document.createElement("p");
        ligne.textContent = `${produit.quantite} ${produit.nom} ${produit.prix} €`;

        // Création du bouton supprimer
        const btnSupprimer = document.createElement("button")
        btnSupprimer.textContent = "Supprimer"

        // Ecoute du bouton supprimer
        btnSupprimer.addEventListener("click", () => {
            supprimerDuPanier(produit.id)
        })

        // Ajout au DOM
        ligne.appendChild(btnSupprimer)
        listePanier.appendChild(ligne);

        // Prix total
        total += produit.prix * produit.quantite;

    });

    // Affichage du total du panier
    montantTotal.textContent = total;
}


// D. Validation Mail

// Fonction pour écrire un mail valide grace au regex
function emailValide(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
const btnCommander = document.getElementById("btn-commander");
const emailClient = document.getElementById("email-client");
const messageFeedback = document.getElementById("message-feedback");

btnCommander.addEventListener("click", () => {

    // Réinitialisation du message
    messageFeedback.textContent = "";
    messageFeedback.style.color = "red";

    // Message d'erreur du a un panier vide
    if (panier.length === 0) {
        messageFeedback.textContent = "❌ Votre panier est vide.";
        return;
    }

    // Message d'erreur du a une adresse mail invalide
    if (!emailValide.test(emailClient.value)) {
        messageFeedback.textContent = "❌ Email invalide.";
        return;
    }

    // Message de validation de commande
    messageFeedback.style.color = "green";
    messageFeedback.textContent = "✅ Commande validée avec succès !";

    // vider le panier apres la commande
    panier = [];

    // Vide le champ mail apres la validation de la commande
    emailClient.value = "";

    // Mise a jour de l'affichage panier
    afficherPanier();
});

// Afficher les produits
afficherProduits(produits);








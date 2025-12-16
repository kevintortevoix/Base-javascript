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

    if(existe) {
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

const listePanier = document.getElementById("panier-liste");
const montantTotal = document.getElementById("montant-total");

// Fonction pour afficher le panier
const afficherPanier = () => {
    listePanier.innerHTML = "";

    if (panier.length === 0) {
        listePanier.innerHTML = "Votr panier est vide."
        montantTotal.textContent = " 0.00 € ";
        return
    }

    let total = 0

    panier.forEach(produit => {
        const ligne = document.createElement("p");
        ligne.textContent = ${produit.quantite} ${produit.nom} ${produit.prix} €;
        listePanier.appendChild(ligne);

        total += produit.prix;
    });
    montantTotal.textContent = total;
}


// D. Validation Mail

// Fonction pour écrire un mail valide grace au 
function emailValide(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
const btnCommander = document.getElementById("btn-commander");
const emailClient = document.getElementById("email-client");
const messageFeedback = document.getElementById("message-feedback");

btnCommander.addEventListener("click", () => {
    messageFeedback.textContent = "";
    messageFeedback.style.color = "red";

    if (panier.length === 0) {
        messageFeedback.textContent = "❌ Votre panier est vide.";
        return;
    }

    if (!emailValide(emailClient.value)) {
        messageFeedback.textContent = "❌ Email invalide.";
        return;
    }

    messageFeedback.style.color = "green";
    messageFeedback.textContent = "✅ Commande validée avec succès !";

    panier = [];
    emailClient.value = "";
    afficherPanier();
});


afficherProduits(produits);








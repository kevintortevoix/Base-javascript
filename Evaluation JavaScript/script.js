const produits = [
    { id: 1, nom: "Thé Vert Bio", prix: 12.99, image: "https://placehold.co/150?text=Thé+Vert+Bio" },
    { id: 2, nom: "Café Arabica", prix: 8.50, image: "https://placehold.co/150?text=Café+Arabica" },
    { id: 3, nom: "Infusion Menthe", prix: 5.00, image: "https://placehold.co/150?text=Infusion+Menthe" },
    { id: 4, nom: "Chocolat Chaud", prix: 15.00, image: "https://placehold.co/150?text=Chocolat+Chaud" }
];

const containerProduits = document.getElementById("produits-container")

// A. Affichage des produits (DOM)

function afficherProduits(produits) {

    containerProduits.innerHTML = "";

    produits.forEach(produit => {
        // créer le container card
        const carte = document.createElement("div");
        carte.classList.add('product-card');

        // créer l'image 
        const img = document.createElement("img");
        img.src = produit.image;
        img.alt = produit.nom; 

        // créer le contenu textuel 

        const divContent = document.createElement("div");
        divContent.classList.add("card-content");

        const h3 = document.createElement("h3");
        h3.textContent = produit.nom;


        const pPrix = document.createElement("p");
        pPrix.classList.add("card-price");
        pPrix.textContent = produit.prix + "€";

        // assemblage :

        divContent.appendChild(h3);
        divContent.appendChild(pPrix);

        carte.appendChild(img);
        carte.appendChild(divContent);

        containerProduits.appendChild(carte);

    });

    }

    afficherProduits(produits);


    // B. Gestion du Panier

    

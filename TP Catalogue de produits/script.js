
const listeProduits = [
    {
        nom: "Smartphone X",
        categorie: "Électronique",
        prix: 699,
        image: "https://placehold.co/200x150?text=Smartphone"
    },
    {
        nom: "Roman Policier",
        categorie: "Livres",
        prix: 14,
        image: "https://placehold.co/200x150?text=Livre"
    },
    {
        nom: "T-shirt Coton",
        categorie: "Vêtements",
        prix: 25,
        image: "https://placehold.co/200x150?text=T-shirt"
    },
    {
        nom: "Casque Bluetooth",
        categorie: "Électronique",
        prix: 89,
        image: "https://placehold.co/200x150?text=Casque"
    },
    {
        nom: "Sweat à capuche",
        categorie: "Vêtements",
        prix: 40,
        image: "https://placehold.co/200x150?text=Sweat"
    },
    {
        nom: "Essai Historique",
        categorie: "Livres",
        prix: 19,
        image: "https://placehold.co/200x150?text=Essai"
    }
];


const containerProduits = document.getElementById("products-container");
const inputRecherche = document.getElementById("search-input");
const boutonsFiltre = document.querySelectorAll(".filter-btn");
const noResultsMessage = document.getElementById("no-results");


// Etat de l'application 

let categorieActive = "Tous";
let rechercheActive = "";


// Function pour afficher les élements dans le DOM.

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

        const spanCat = document.createElement("span");
        spanCat.classList.add("card-category");
        spanCat.textContent = produit.categorie;

        const pPrix = document.createElement("p");
        pPrix.classList.add("card-price");
        pPrix.textContent = produit.prix + "€";

        // assemblage :

        divContent.appendChild(h3);
        divContent.appendChild(spanCat);
        divContent.appendChild(pPrix);


        carte.appendChild(img);
        carte.appendChild(divContent);

        containerProduits.appendChild(carte);

    });
}


// function pour filtrer un tableau de produits 

function filtrerProduits() {
    const result = listeProduits.filter(produit => {
        
        const nomProduit = produit.nom.toLowerCase();
        const recherche = rechercheActive.toLowerCase();


        const matchRecherche = nomProduit.includes(recherche);

         let matchCategorie = false;

        if(categorieActive === "Tous") {
            matchCategorie = true;
        } else if(produit.categorie === categorieActive) {
            matchCategorie = true;
        }

        if(matchCategorie && matchRecherche) {
            return true;
        } else {
            return false;
        }
    })

    console.table(result)
    afficherProduits(result)
}


inputRecherche.addEventListener("input", e => {
    rechercheActive = e.target.value;
    filtrerProduits()
})


boutonsFiltre.forEach(bouton => {
    bouton.addEventListener("click", (e) => {
        console.log(e.target.textContent)
        categorieActive = e.target.textContent;
        filtrerProduits();

    })
})


afficherProduits(listeProduits);
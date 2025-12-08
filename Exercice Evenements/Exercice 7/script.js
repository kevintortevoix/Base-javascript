const button = document.getElementById("ajouter");
const ul = document.getElementById("listeElements");

button.addEventListener("click", function () {
    const li = document.createElement("li");
    li.textContent = "Nouvel élément ajouté";
    ul.appendChild(li);
});
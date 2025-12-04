let fruits = ["pomme", "banane", "orange"];


const liste = document.getElementById("liste-fruits");


for (let fruit of fruits) {
    const li = document.createElement("li");
    li.textContent = fruit;
    liste.appendChild(li);
}
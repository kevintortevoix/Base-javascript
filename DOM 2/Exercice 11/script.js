let ages = [5, 18, 25, 15, 30];

const ul = document.getElementById("listeAges");

for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 18) {
        const liste1 = document.createElement("li");
        liste1.textContent = `mineur , ${ages[i]}`;
        ul.appendChild(liste1)
    }
    else {
        const liste2 = document.createElement("li");
        liste2.textContent = `majeur , ${ages[i]}`;
        ul.appendChild(liste2)
    }
}


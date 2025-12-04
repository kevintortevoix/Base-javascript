let nombres = [3, 8, 12, 5, 2];


const liste = document.getElementById("liste-nombres");


for (let nombre of nombres) {
    if (nombre % 2 === 0) {
        const li = document.createElement("li");
        li.textContent = nombre;
        liste.appendChild(li);
    }
}
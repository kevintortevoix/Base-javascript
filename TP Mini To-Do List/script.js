// Constante :
let tasks = [];
const addButton = document.getElementById("addBtn");
const ul = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const table = localStorage.getItem('tasks')
const clearBtn = document.getElementById('clearBtn')

// Ecouter le clic sur Ajouter
addButton.addEventListener("click", () => {
    if (taskInput.value) {
        tasks.push(taskInput.value);
        console.log(tasks)
    }
    render()
});

// Restaurer au chargement
if (table) {
    tasks = JSON.parse(table);
}
render()


function render() {
    // vide le champ
    ul.innerHTML = "";

    // Créer la liste dans le DOM
    tasks.forEach((liste, index) => {
        const li = document.createElement("li");
        li.textContent = liste;

        // Ajouter li dans ul
        ul.appendChild(li);

        // Creation du bouton Supprimer
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "❌"
        li.appendChild(deleteButton)

        // Retirez l’élément correspondant du tableau
        deleteButton.addEventListener("click", () => {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks))
            render()
        })

        clearBtn.addEventListener("click", () =>{
            tasks = []
            localStorage.removeItem('tasks')
            render()

        })

        // Sauvegarder la liste
        const result = JSON.stringify(tasks);
        localStorage.setItem("tasks", result)
    })
}
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value;

    const li = document.createElement("li");
    li.textContent = taskText

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";

    deleteBtn.addEventListener("click", function () {
    li.remove();
    });

    li.appendChild(deleteBtn);

    taskList.appendChild(li);











})

const elements = [];

const button = document.getElementById("addItemBtn");

const liste = document.querySelector("#liste");

addItemBtn.addEventListener("click", function () {

const numero = elements.length + 1;
const textElement = "Element " + numero;
elements.push(textElement)

const li = document.createElement("li");
li.textContent = textElement;
liste.appendChild(li)
})
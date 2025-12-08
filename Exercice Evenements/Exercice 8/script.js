const liste = document.getElementById("maListe");

liste.addEventListener("click", function (event) {
    if (event.target.classList.contains("cliquable")) {
        event.target.remove();
    }
});
const button = document.getElementById("deleteBtn")

deleteBtn.addEventListener("click", function () {

    const articles = document.getElementById("articles");
    const elementsuppr = articles.lastElementChild;
    articles.removeChild(elementsuppr);

})


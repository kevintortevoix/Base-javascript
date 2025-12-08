const li = document.getElementsByClassName("animal")
const input = document.getElementById("filtreAnimaux")

input.addEventListener("input", () => {
    for(let i = 0; i < li.length; i++) {
        if(li[i].textContent.includes(input.value)) {
            li[i].style.display = "";
        }
        else {
        li[i].style.display = "none";
        }
    }
});
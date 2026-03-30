const p = document.getElementById("texto")
const button = document.getElementById("mudarEstilo")

button.addEventListener("click", (event) => {
    event.preventDefault()

    p.style.color = "blue"
    p.style.fontSize = "24px"
    p.classList.add("destaque")
})
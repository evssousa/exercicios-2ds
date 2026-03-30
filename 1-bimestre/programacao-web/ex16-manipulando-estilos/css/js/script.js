const pResultado = document.getElementById("texto")
const btn = document.getElementById("mudarEstilo")

btn.addEventListener("click", () =>{
    texto.style.color = "red"
    texto.style.fontSize = "40px"
    texto.classList.add("destaque")
})
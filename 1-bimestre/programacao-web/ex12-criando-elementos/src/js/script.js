const lista = document.getElementById("lista")
const botao = document.getElementById("adicionar")
const item = document.createElement("li")



addEventListener("click", function criar() {
    item.textContent = "Novo Item"
    lista.appendChild(item)
})


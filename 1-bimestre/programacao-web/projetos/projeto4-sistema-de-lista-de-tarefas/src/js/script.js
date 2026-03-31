const { createElement } = require("react")

const tarefa = document.getElementById("tarefa")
const button = document.getElementById("adicionar")
const lista = document.getElementById("lista")

button.addEventListener("click", (event) => {
    event.preventDefault()

    const item = document.createElement("li")

    if (item === "") {
        alert("digite uma tarefa válida")
    }

    item.textContent = tarefa

    item.addEventListener("click", () => {

        item.classList.add("concluido")
})

    const remover = document.createElement("button")
    remover.textContent = "Remover"

remover.addEventListener("click", () => {
    item.remove()
})

item.appendChild(remover)
lista.appendChild(item)

input.value = ""
})
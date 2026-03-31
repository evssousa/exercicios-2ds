const btnAdd = document.getElementById("adicionar")
const lista = document.getElementById("lista")
let itens = []

btnAdd.addEventListener('click', () => {
        const item = document.getElementById("tarefa").value
        if(item == " "){
            alert('digite algo valido')
            return
        }
        const itemNaLista = document.createElement("li")
        const btnApagar = document.createElement("button")
        btnApagar.setAttribute("onclick", `apagar('${item}')`)
        btnApagar.textContent = "apagar"
        itemNaLista.textContent = item
        itemNaLista.setAttribute("id", `${item}`)
        itemNaLista.setAttribute("onclick", `concluido('${item}')`)
        itens.push(itemNaLista.value)
        lista.appendChild(itemNaLista)
        itemNaLista.appendChild(btnApagar)
})

function concluido(id){
    const texto = document.getElementById(id)
    texto.classList = "concluido"
}

function apagar(id){
    const texto = document.getElementById(id)
    texto.remove()
}
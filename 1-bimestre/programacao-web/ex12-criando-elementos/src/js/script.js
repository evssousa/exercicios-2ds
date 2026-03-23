const lista = document.getElementById("lista")
const botao = document.getElementById("adicionar")


botao.addEventListener("click", ()=>{
    const li = document.createElement("li") 
    li.textContent = "Novo Item"
    lista.appendChild(li) 
})
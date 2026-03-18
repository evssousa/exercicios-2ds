const titulo = document.getElementById("titulo")
const botao = document.getElementById("botao")

botao.addEventListener ("click", function trocar() {
 titulo.textContent = "Texto Alterado com JavaScript"
})
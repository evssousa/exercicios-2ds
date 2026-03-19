const nome = document.getElementById("nome")
const botao = document.getElementById("mostrar")
const resultado = document.getElementById("resultado")

botao.addEventListener("click", function mostrarNome() {
    resultado.textContent = "Olá" + nome.value
})
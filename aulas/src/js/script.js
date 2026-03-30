const form = document.getElementById("formulario")
const input = document.getElementById("nome")
const p = document.getElementById("resultado")
const buttonCor = document.getElementById("mudarCor")

form.addEventListener("submit", (evento) => {
    // Evitar do formulário atualizar quando enviar informações
    evento.preventDefault()

    p.textContent = `Olá, ${input.value}`
})

buttonCor.addEventListener("click", () => {
    p.style.color = "blue"
    p.setAttribute() // adicionar uma class no html
})
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    const nome = document.getElementById("nome")
    const idade = document.getElementById("idade")
    const p = document.getElementById("resultado")

    p.textContent = "Olá " + nome.value + ", você tem " + idade.value + " anos"
})
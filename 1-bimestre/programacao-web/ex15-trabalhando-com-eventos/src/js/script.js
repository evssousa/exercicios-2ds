const formulario =  document.getElementById("formulario")

formulario.addEventListener("submit", (event) =>{
    event.preventDefault()
    const nome = document.getElementById("nome").value
    const idade = document.getElementById("idade").value
    const pResultado = document.getElementById("resultado")
    pResultado.textContent = `Olá ${nome}, você tem ${idade} anos`
})
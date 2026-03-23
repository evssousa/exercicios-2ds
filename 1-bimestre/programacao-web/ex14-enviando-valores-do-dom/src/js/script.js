const nome = document.getElementById("nome")
const botao = document.getElementById("mostrar")
const p = document.getElementById("resultado")
valor = nome.value

botao.addEventListener("click" , ()=>{
    p.textContent = `Olá, ${valor}`
})
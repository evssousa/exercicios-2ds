const p = document.getElementById("mensagem")
const botao = document.getElementById("alterar")

botao.addEventListener("click" , ()=>{
    p.textContent = "Mensagem alterada com JavaScript"
})
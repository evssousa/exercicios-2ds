const botao = document.getElementById("mudarEstilo")
const texto = document.getElementById("texto") 

botao.addEventListener("click", ()=>{
    
    texto.classList.add("destaque")
    texto.style.color = "blue"
    texto.style.fontSize = "24px"
})

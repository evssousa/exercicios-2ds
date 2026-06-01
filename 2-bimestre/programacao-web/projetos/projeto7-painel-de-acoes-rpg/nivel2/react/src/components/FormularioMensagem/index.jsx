import Enviar from "./../../assets/enviar.png"
import "./style.css"

export default function FormularioMensagem(){
    const enviarMensagem = (event)=>{
        event.preventDefault()
        const nome = document.getElementById("inputNome").value
        const mensagem = document.getElementById("mensagem").value
    
        if(nome === "" && mensagem === ""){
            alert("preencha todos os campos para poder enviar a mensagem")
        } else if(mensagem === ""){
            alert("insira a mensagem que deseja enviar")
        } else if(nome === ""){
            alert("insira o nome para poder enviar mensagem")
        }else{
            alert(`
                mensagem: ${mensagem}
                de: ${nome}
                enviado com sucesso!!
            `)
        }
    } 
    
    return(
        <form onSubmit={enviarMensagem} className="formulario">
            <h2>FORMULÁRIO DE MENSAGEM</h2>
            <div className="informacoes">
                <div className="nomeInfo">
                    <label><strong>Nome:</strong></label>
                    <input type="text" className="inputNome" id="inputNome" placeholder="Digite seu nome"/>
                </div>
                <div className="mensagemInfo">
                    <label><strong>mensagem:</strong></label>
                    <textarea className="mensagem" type="text" id="mensagem" placeholder="Digite sua mensagem..."></textarea>
                </div>
            </div>
            <div className="botaoMensagem">
                <button className="botaoEnviar" type="submit">
                    <img src={Enviar}/>
                    ENVIAR MENSAGEM
                </button>
            </div>
        </form>
    )
}
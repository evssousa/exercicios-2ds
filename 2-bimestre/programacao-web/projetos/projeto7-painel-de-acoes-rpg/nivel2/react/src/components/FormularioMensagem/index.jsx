import Enviar from "./../../assets/enviar.png"

export default function FormularioMensagem(){
    return(
        <form className="formulario">
            <div className="nomeinfo">
                <label>Nome:</label>
                <input type="text" className="inputNome" placeholder="Digite seu nome"/>
            </div>
            <div className="mensagemInfo">
                <label>mensagem: </label>
                <textarea>Digite sua mensagem...</textarea>
            </div>
            <div className="botao">
                <button className="BotaoEnviar" type="submit">
                    <img src={Enviar}/>
                    ENVIAR MENSAGEM
                </button>
            </div>
        </form>
    )
}
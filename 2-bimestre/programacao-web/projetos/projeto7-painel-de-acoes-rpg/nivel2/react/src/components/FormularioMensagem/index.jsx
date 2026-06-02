import "./style.css"
import Enviar from "../../assets/enviar.png"
import Botao from "../Botao"

export default function FormularioMensagem() {
return (
    <>
        <form className="formulario">
            <h2>FORMULÁRIO DE MENSAGEM </h2>
            <div className="info-nome">
                <label>Nome:</label>
                <input type="text" placeholder="Digite seu nome"/>
            </div>
            <div className="info-mensagem">
                <label>Mensagem:</label>
                <textarea placeholder="Digite sua mensagem"></textarea>
            </div>
            <Botao
            className="botao-enviar"
            foto={Enviar}
            type="submit"
            texto="Enviar mensagem"
            onClick={() => (alert("Enviando formulário!"))}
            ></Botao>
        </form>
    </>
    )
}
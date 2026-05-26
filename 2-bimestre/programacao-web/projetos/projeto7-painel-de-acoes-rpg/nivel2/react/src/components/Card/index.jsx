import { Children } from "react"
import Botao from "../Botao"
import FotoDePerfil from "./../../assets/perfil.png"
import Escudo from "./../../assets/escudo.png"
import Espada from "./../../assets/espada.png"
import Fugir from "./../../assets/fugir.png"

export default function Card({ classe , Children, nivel, vida ,experiencia}){
    function atacar(){
        alert("Você desferiu um ataque ao inimigo!")
    }
    function defender(){
        alert("Você defendeu sua posição!")
    }
    function fugir(){
        alert("Você se acorvardou e fugiu da batalha!")
    }
    
    return(
        <div className="perfil">
            <div className="perfilImg">
                <img src={FotoDePerfil}/>
            </div>
            <div className="infos">
                <div className="nome">
                    <h1>{Children}</h1>
                </div>
                <div className="atributos">
                    <p>Classe: <span className="classe">{classe}</span></p>
                    <p>Nivel: <span className="nivel">{nivel}</span> </p>
                    <p>Vida: <span className="vida">{vida}</span>/1000</p>
                    <p>Experiência: <span className="experiencia">{experiencia}</span>/2000</p>
                </div>
            </div>
            <div className="botoes">
                <Botao acao={"ATACAR"} imagem={Espada} funcao={atacar}/>
                <Botao acao={"DEFENDER"} imagem={Escudo} funcao={defender}/>
                <Botao acao={"FUGIR"} imagem={Fugir} funcao={fugir}/>
            </div>
        </div>
    )
}
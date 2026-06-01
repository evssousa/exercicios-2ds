import { Children } from "react"
import Botao from "../Botao"
import "./style.css"
import FotoDePerfil from "./../../assets/perfil.png"
import Escudo from "./../../assets/escudo.png"
import Espada from "./../../assets/espada.png"
import Fugir from "./../../assets/fugir.png"

export default function Card({ classe , children, nivel, vida ,experiencia}){
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
            <div className="perfilInfos">
                <div className="perfilImg">
                    <img src={FotoDePerfil}/>
                </div>
                <div className="infos">
                    <div className="nome">
                        {children}
                    </div>
                    <div className="atributos">
                        <p>Classe: <span className="classe">{classe}</span></p>
                        <p>Nivel: <span className="nivel">{nivel}</span> </p>
                        <p>Vida: <span className="vida">{vida}</span><span className="vidaTotal">/1000</span></p>
                        <p>Experiência: <span className="experiencia">{experiencia}</span><span className="experienciaTotal">/2000</span></p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="botoes">
                <Botao 
                    texto={"ATACAR"} 
                    imagem={Espada} 
                    nomeBotao={"atacarBTT"} 
                    onClick={atacar}/>
                <Botao 
                    texto={"DEFENDER"}
                    imagem={Escudo} 
                    nomeBotao={"defenderBTT"} 
                    onClick={defender}/>
                <Botao 
                texto={"FUGIR"} 
                imagem={Fugir} 
                nomeBotao={"fugirBTT"} 
                onClick={fugir}/>
            </div>
        </div>
    )
}
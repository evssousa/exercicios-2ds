import Botao from "../Botao"
import "./style.css"
import Foto from "../../assets/images.png"
import IconAtk from "../../assets/espada.png"
import IconDf from "../../assets/escudo.png"
import IconFg from "../../assets/fugir.png"

export default function Card({ children }) {
return (
<>
<div className="container-cardq">
    <div className="infos">
        <div className="imagem-player">
            <img src={Foto} alt="Personagem" />
        </div>

        <div>
            {children}
        </div>
    </div>

    <div className="botoes">
        <div className="acoes">
            <Botao 
            texto="Atacar" 
            onClick={() => alert("Atacando inimigo!")}
            className="botao-atk"
            foto={IconAtk}
            >
            </Botao>
        </div>

        <div className="acoes">
            <Botao 
            texto="Defender"
            onClick={() => alert("Defendendo posição!")}
            className="botao-df"
            foto={IconDf}
            >
            </Botao>
        </div>

        <div className="acoes">
            <Botao 
            texto="Fugir"
            onClick={() => alert("Fugindo da batalha!")}
            className="botao-fg"
            foto={IconFg}
            ></Botao>
        </div>
    </div>
</div>
</>
)
}
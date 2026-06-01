import "./style.css"

export default function Botao({ texto, onClick, imagem, nomeBotao }){
    return(
        <button onClick={onClick} className={nomeBotao}><img src={imagem}/> {texto}</button>
    )
}
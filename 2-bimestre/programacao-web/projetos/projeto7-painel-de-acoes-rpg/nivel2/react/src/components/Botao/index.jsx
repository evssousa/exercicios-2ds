export default function Botao({ acao, funcao, imagem }){
    return(
        <button onClick={funcao}><img className="iconeBotão" src={imagem}/> {acao}</button>
    )
}
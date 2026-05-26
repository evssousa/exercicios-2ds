export default function Botao({ acao, funcao }){
    return(
        <button onClick={funcao}><img/> {acao}</button>
    )
}
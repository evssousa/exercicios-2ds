import "./style.css"
export default function ListaPersonagens({ personagens }) {
    if(!personagens || personagens.length <= 0){
        return(
            <>
            <p>Nenhum Personagem cadastrado</p>
            </>
        )
    } else{
        return(
            <div className="Visor">
                <ul>
                {personagens.map((personagem) => (
                    <li>{personagem.nome} - {personagem.classe}</li>
                ))}
                </ul>
            </div>
        )
    }
}
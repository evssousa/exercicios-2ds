import "./style.css"

export default function ListaPersonagem({ personagens }) {
    if (!personagens || personagens.length <= 0) {
        return (
            <div className="lista">
            <p>Nenhum personagem cadastrado</p>
            </div>
        )
    } else {
        return (
            <div className="lista">
                <ul>
                    {personagens.map((personagemCriado, index) => (
                        <li key={index}>{personagemCriado.nome} - {personagemCriado.classe}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
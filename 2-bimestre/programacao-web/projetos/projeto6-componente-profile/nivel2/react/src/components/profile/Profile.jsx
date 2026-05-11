export default function Profile({nome, idade, profissao, foto}) {
    return (
        <> 
        <img src={foto}/>
        <h1 className="nome">{nome}</h1>
        <h1 className="idade">{idade}</h1>
        <h1 className="profissao">{profissao}</h1>
        </>
    )
}
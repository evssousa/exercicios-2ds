import "../style/Profile.css"

export default function Profile({nome, idade, profissao, foto}) {
    return (
        <> 
        <img src={foto} className="foto"/>
        <h1 className="nome">{nome}</h1>
        <h1 className="idade">{idade}</h1>
        <h1 className="profissao">{profissao}</h1>
        </>
    )
}
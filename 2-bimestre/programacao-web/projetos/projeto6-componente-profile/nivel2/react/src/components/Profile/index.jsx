import "../../styles/ProfileCSS.css"

export default function Profile({nome, idade, profissao, foto}) {
    return (
        <> 
        <div className="profile-card">
        <img src={foto} className="foto"/>
        <h1 className="nome">{nome}</h1>
        <h1 className="idade">{idade}</h1>
        <h1 className="profissao">{profissao}</h1>
        <p className="colab">Colaborador/a</p>
        </div>
        </>
    )
}
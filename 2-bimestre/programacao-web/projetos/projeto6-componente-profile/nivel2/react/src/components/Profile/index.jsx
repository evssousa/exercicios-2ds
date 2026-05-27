import "../../styles/ProfileCSS.css"

export default function Profile({ imagem, nome, idade, profissao }) {
    return (
        <> 
        <div className="profile-card">
        <img src={imagem} alt="imagem" />
        <h1>{nome}</h1>
        <p>{idade}</p>
        <p>{profissao}</p>
        <h2>Colaborador/a</h2>
        </div>
        </>
    )
}
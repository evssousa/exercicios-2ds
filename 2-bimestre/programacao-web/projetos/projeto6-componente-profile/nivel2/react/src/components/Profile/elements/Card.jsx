export default function Card({ imagem , nome , idade , profissao}){
    return(
        <>
            <div className="profile-card">
                <div className="profile">
                    <img className="imagem" src={imagem} alt={`Foto de ${nome}`}/>
                    <h1 className="nome">{nome}</h1>
                </div>
                <div className="profile-infos">
                    <p className="idade">
                        <strong>idade:</strong> {idade} anos
                    </p>
                    <p className="profissao">
                        <strong>profissão:</strong> {profissao}
                    </p>
                </div>
            </div>
        </>
    )
}
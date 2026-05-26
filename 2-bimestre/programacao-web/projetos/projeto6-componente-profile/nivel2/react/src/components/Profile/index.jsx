 import Foto from "./elements/Foto"
 import Profissao from "./elements/Profissao"
 import Idade from "./elements/Idade"
 import Nome from "./elements/Nome"
 export default function Profile({foto , profissao , idade , nome }){
    return(
        <>
        <div className="profile-card">
                    <Foto foto={foto} />
        <Profissao profissao={profissao} />
        <Idade idade= {idade} />
        <Nome nome={nome} />
        </div>


        </>
    )
}
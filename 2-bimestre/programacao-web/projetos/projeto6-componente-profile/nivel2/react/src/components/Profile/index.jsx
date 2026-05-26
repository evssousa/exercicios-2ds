import Card from "./elements/Card";
import "./../../styles/ProfileCSS.css"

export default function Profile({nome , idade , imagem, profissao}){
    return(
        <>
            <Card
            imagem = {imagem}
            nome = {nome}  
            idade = {idade} 
            profissao = {profissao}
            />
        </>
    )
}
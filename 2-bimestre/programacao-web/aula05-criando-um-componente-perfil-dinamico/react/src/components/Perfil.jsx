export  default function Perfil() {
    const usuario = {
        nome: "nome",
        idade: 20,
        profissao: "profissão"
    }
    
    function checarIdade() {
        if (usuario.idade >= 18) {
            return `Você é maior de idade`
        } else {
            return `Você é menor de idade`
        }
    }
    return (
        <>
        <h1>
        {usuario.nome}
        {usuario.idade}
        {usuario.profissao}
        {checarIdade()}
        </h1>
       
        </>
    )
}
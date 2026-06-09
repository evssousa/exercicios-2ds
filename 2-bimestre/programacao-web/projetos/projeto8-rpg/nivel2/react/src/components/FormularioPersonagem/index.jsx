export default function FormularioPersonagem(nome, setNome, classe, setClasse, ...rest) {

function enviarPersonagem() {
    personagens({
        nome: {nome},
        clase: {classe}
    })
    }   
    return (
            <>
                <h1>Criador de Personagem</h1>
                <form {...rest}>
                    <input 
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome do personagem"
                    />

                    <input 
                    type="text"
                    value={classe}
                    onChange={(e) => setClasse(e.target.value)}
                    placeholder="Classe do personagem"
                    />

                    <button onClick={}>Cadastrar Personagem</button>
                </form>
            </>
        )
    }
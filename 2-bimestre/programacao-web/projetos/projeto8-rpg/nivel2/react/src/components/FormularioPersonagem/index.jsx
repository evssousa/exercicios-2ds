import { useState, useRef } from "react"
import "./style.css"
export default function FormularioPersonagem({ adicionarPersonagem }) {
    const [nome, setNome] = useState("")
    const [classe, setClasse] = useState("")
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)

    function enviarPersonagem(e) {
        e.preventDefault()
        const personagem = {
        nome: nome,
        classe: classe
        }
        adicionarPersonagem(personagemAnterior => [...personagemAnterior, personagem])
        inputRef1.current.value = ""
        inputRef2.current.value = ""
        inputRef1.current.focus()

        console.log("Lista atualizada")
    }
    return (
        <>
            <h1>Criador de Personagem</h1>
            <form onSubmit={enviarPersonagem} className="formulario">
                <label>Nome do personagem</label>
                <input 
                type="text"
                ref={inputRef1}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome do personagem"
                />

                <label>Classe do personagem</label>
                <input 
                type="text"
                ref={inputRef2}
                onChange={(e) => setClasse(e.target.value)}
                placeholder="Classe do personagem"
                />
                <button type="submit">Cadastrar Personagem</button>
            </form>
        </>
    )
}
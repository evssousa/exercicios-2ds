import { useState, useRef } from "react";
import "./style.css"
export default function FormularioPersonagem({ adicionarPersonagem }) {
    const [ nome, setNome ] = useState("")
    const [ classe, setClasse ] = useState("")
    const input1Ref = useRef(null)
    const input2Ref = useRef(null)
    
    function enviar(e){
        e.preventDefault()
        const novoPersonagem = {
            nome: nome,
            classe: classe
        }
        adicionarPersonagem(personagensAnteriores => [...personagensAnteriores, novoPersonagem])
        input1Ref.current.value = ""
        input2Ref.current.value = ""
        input1Ref.current.focus()
        console.log("Lista atualizada")
    }
    return(
        <div className="formulario">
            <form onSubmit={enviar}>
                <label>Nome</label> <br />
                <input type="text" ref={input1Ref} onChange={e => setNome(e.target.value)} placeholder="nome do personagem"/> <br />
                <label>Classe</label> <br />
                <input type="text" ref={input2Ref} onChange={e => setClasse(e.target.value)} placeholder="classe do personagem"/> <br />
                <button type="submit">Cadastrar Personagem</button>
            </form>
        </div>
    )

}
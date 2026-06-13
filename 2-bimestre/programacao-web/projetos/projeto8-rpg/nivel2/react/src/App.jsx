import ListaPersonagem from "./components/ListaPersonagens"
import FormularioPersonagem from "./components/FormularioPersonagem"
import PainelStatus from "./components/PainelStatus"
import { useState } from "react"
import "./App.css"
export default function App() {
    const [ personagens, setPersonagens ] = useState([])
    
    console.log(personagens)
    return (
        <div className="container">
            <h1>gerenciador de personagens rpg</h1>
            <FormularioPersonagem
            adicionarPersonagem={setPersonagens}
            />
            <ListaPersonagem
            personagens={personagens}
            />
            <PainelStatus 
            total={personagens?.length || 0}
            />
        </div>
    )
}
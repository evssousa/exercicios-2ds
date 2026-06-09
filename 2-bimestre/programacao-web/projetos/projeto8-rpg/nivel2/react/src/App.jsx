import { useState } from "react";
import FormularioPersonagem from "./components/FormularioPersonagem";
import ListaPersonagens from "./components/ListaPersonagens";
import PainelStatus from "./components/PainelStatus";
export default function App() {
    const [ personagens, setPersonagens ] = useState([])

    return(
        <div className="gerenciador-de-rpg">
            <h1>Gerenciador De Personagens Rpg</h1>
            <FormularioPersonagem adicionarPersonagem={setPersonagens} />
            <PainelStatus total={personagens?.length || 0} />
            <ListaPersonagens personagens={personagens} />
        </div>
    )
}
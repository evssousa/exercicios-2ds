import Card from "./components/Card";
import FormularioMensagem from "./components/FormularioMensagem";

export default function App(){
  return(
    <div className="container">
      <div className="card-perfil">
        <Card/>
      </div>
      <div className="card-mensagem">
        <FormularioMensagem/>
      </div>
      
    </div>
      
    
  )
}
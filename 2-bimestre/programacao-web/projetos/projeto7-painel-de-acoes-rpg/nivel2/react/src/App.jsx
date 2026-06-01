import Card from "./components/Card";
import Logo from "./assets/logo.png"
import FormularioMensagem from "./components/FormularioMensagem";
import "./app.css"

export default function App(){
  return(
    <div className="container">
      <div className="header">
        <div className="titulo">
          <img src={Logo}/> 
          <h1>LEGENDS ARENA</h1>
        </div>
      </div>
      <div className="card-perfil">
        <Card
          classe={"Tank"}
          nivel={25}
          vida={850}
          experiencia={1250}        
        >
          <h1>Guerreiro</h1>
        </Card>
      </div>
      <div className="card-mensagem">
        <FormularioMensagem/>
      </div>
      
    </div>
      
    
  )
}
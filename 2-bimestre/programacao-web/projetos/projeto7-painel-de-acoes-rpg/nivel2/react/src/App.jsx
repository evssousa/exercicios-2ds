import Card from "./components/Card"
import Botao from "./components/Botao"
import FormularioMensagem from "./components/FormularioMensagem"
import IconLogo from "./assets/logo.png"
import "./App.css"


export default function App() {
  return (
<>
<div className="container">
  <div className="barra">
    <img src={IconLogo} alt="" />
    <h1>LEGENDS ARENA</h1>
  </div>
  
    <Card>
      <div className="info-player">
        <div className="infos-texto">
          <h1>Guerreiro</h1>
          <p>Classe: <span>Tank</span></p>
          <p>Nivel: <span>25</span></p>
          <p>Vida: <span>850</span> / <span>1000</span></p>
          <p>Experiência: <span>1250</span> / <span>2000</span></p>
        </div>
      </div>
    </Card>


    <div className="form">
      <FormularioMensagem/>
    </div>
  </div>
</>
  )
}
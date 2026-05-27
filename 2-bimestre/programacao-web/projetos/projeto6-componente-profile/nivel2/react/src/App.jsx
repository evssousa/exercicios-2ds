import Foto from "../src/images/foto.png"
import Foto2 from "../src/images/foto2.png"
import Foto3 from "../src/images/foto3.png"
import Profile from "./components/Profile"
import Footer from "./components/Pages/Footer"
import "../src/App.css"

export default function App() {
  return (
    <>
    <div className="bar">
      <h1>Tech Vision</h1>
      <h1>Sistema interno</h1>
      </div> 
      <div className="titulo">
       <h1>Usuários do Sistema</h1>
       <h2>Conheça os membros de nossa equipe</h2>
      </div>
    <div className="card">
      <div className="profile">
      <Profile 
      imagem={Foto2}
      nome={"Mariana Silva"}
      idade={"Idade: 25 anos"}
      profissao={"Profissão: Engenheira"}
      />
      </div>

      <div className="profile">
      <Profile 
      imagem={Foto}
      nome={"João Santos"}
      idade={"Idade: 26 anos"}
      profissao={"Profissão: Desenvolvedor Frontend"}
      />
      </div>

      <div className="profile">
      <Profile 
      imagem={Foto3}
      nome={"Carlos Alberto"}
      idade={"Idade: 32 anos"}
      profissao={"Profissão: Desenvolvedor Backend"}
      />
      </div>
    </div>
    <div>
      <Footer />      
    </div>
    </>
  )
}
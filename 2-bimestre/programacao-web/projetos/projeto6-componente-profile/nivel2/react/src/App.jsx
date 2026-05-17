import foto from "../public/foto.avif"
import foto2 from "../public/foto2.png"
import foto3 from "../public/foto3.png"
import Profile from "./components/Profile"
import Footer from "./components/Pages/Footer"
import "./styles/App.css"

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
      foto={foto2}
      nome={"Mariana Silva"} 
      idade={"Idade: 26 anos"} 
      profissao={"Profissão: Gerente de Marketing"}
      />

      </div>

      <div className="profile">
      <Profile 
      foto={foto}
      nome={"João Santos"} 
      idade={"Idade: 23 anos"} 
      profissao={"Profissão: Designer Gráfico"}
      />
      </div>

      <div className="profile">
      <Profile 
      foto={foto3}
      nome={"Carlos Alberto"} 
      idade={"Idade: 36 anos"} 
      profissao={"Profissão: Dev Backend"}
      />
      </div>
    </div>
    <div>
      <Footer />      
    </div>
    </>
  )
}
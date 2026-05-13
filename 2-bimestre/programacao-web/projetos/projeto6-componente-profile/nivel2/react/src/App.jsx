import foto from "../public/foto.avif"
import Profile from "./components/Profile"
import "./style/App.css"

export default function App() {
  return (
    <>
    <div className="container">
    <div className="bar">
      <h1>Tech Vision</h1>
      <h2>Sistema interno</h2>
      </div> 
    <div className="card">
      <div className="profile-card">
      <Profile 
      foto={foto}
      nome={"João"} 
      idade={"Idade: 12 anos"} 
      profissao={"Profissão: Marceneiro"}
      />

      </div>

      <div className="profile-card">
      <Profile 
      foto={foto}
      nome={"João"} 
      idade={"Idade: 12 anos"} 
      profissao={"Profissão: Marceneiro"}
      />
      </div>

      <div className="profile-card">
      <Profile 
      foto={foto}
      nome={"João"} 
      idade={"Idade: 12 anos"} 
      profissao={"Profissão: Marceneiro"}
      />
      </div>
    </div>
    </div>
    </>
  )
}
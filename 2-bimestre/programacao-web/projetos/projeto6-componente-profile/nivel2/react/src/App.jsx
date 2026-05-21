import Profile from "./components/Profile"
import VendedorDegas from "./assets/vendedorDeGas.jpg"
import Gari from "./assets/gariFoto.png"
import programador from "./assets/programador.jpg"
import "./css/index.css"
import Navbar from "./components/Navbar"


export default function App(){
  return(
    <div className="container">
      <Navbar/>
      <div className="profile-list">
        <Profile
        nome={"Henrique"}
        profissao={"Vendedor de gás"}
        imagem={VendedorDegas}
        idade={40}
        />

        <Profile
        nome={"Francisco"}
        profissao={"Gari"}
        imagem={Gari}
        idade={35}
        />

        <Profile
        nome={"Cordeiro"}
        profissao={"garoto de programa"}
        imagem={programador}
        idade={26}
        />
      </div>    
    </div>
  )
}
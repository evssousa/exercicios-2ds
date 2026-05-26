import Profile from "./components/Profile"
import Gari from "./assets/gariFoto.png"
import programador from "./assets/programador.jpg"
import mulher from "./assets/mulher.jpg"
import "./styles/index.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


export default function App(){
  return(
    <>
      
      <div className="container">
        <Navbar/>
        <div className="principal">
          <div className="tituloInfos">
            <h1 className="titulo">Usuários do sistema</h1>
            <h2 className="subTitulo">Conheça os membros da nossa equipe</h2>
          </div>
          <div className="profile-list">
            <Profile
            nome={"Mariana"}
            profissao={"Dev"}
            imagem={mulher}
            idade={27}
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
        <Footer/>
      </div>
    </>
    )
  
}
import Profile from "./components/Profile";
import img1 from "./assets/mulher.png"
import "./styles/ProfileCSS.css"
export default function App(){
  return(
    <>

    <h1> Usuários do sistema </h1>
    
    <Profile foto={img1} nome={"ana"} idade={27} profissao={"filmaker"}/>
    <Profile foto={img1} nome={"ana"} idade={27} profissao={"filmaker"}/>
    <Profile foto={img1} nome={"mariana"} idade={27} profissao={"filmaker"}/>

    
    </>
  )
}
import "./../../styles/navbar.css"
import imgPessoas from "./../../assets/pessoas.png"

export default function Navbar(){
    return(
        <>
            <nav className="navbar">
                <div className="navbarInfos">
                    <div className="nomeSite">
                        <img className="logoImg" src={imgPessoas}/>
                        <p>TechVision</p>
                    </div>    
                    <p>Sistema interno</p>
                </div>
            </nav>
        </>
    )
}
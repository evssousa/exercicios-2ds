import foto from "../public/foto.avif"
import Profile from "./components/profile/Profile"

export default function App() {
  return (
    <> 
    <div>
      <Profile 
      foto={foto} 
      nome={"João"} 
      idade={12} 
      profissao={"Marceneiro"}
      />
    </div>
    </>
  )
}
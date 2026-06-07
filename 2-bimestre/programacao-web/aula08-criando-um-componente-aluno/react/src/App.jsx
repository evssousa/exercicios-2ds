import Aluno from "./components/Aluno"

export default function App(){
  return(
    <>
      <Aluno
        nome="João"
        curso="Desenvolvimento de sistemas"
      />
      <Aluno
        nome="Kauê"
        curso="Administração"
      />
      <Aluno
        nome="Adriel"
        curso="Redes de computadores"
      />
    </>
  )
}
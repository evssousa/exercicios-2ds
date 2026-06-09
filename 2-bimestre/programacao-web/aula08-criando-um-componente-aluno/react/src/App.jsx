import Aluno from "./components/Aluno"

export default function App() {
  return (
    <>
      <Aluno 
      nome={"João"}
      curso={"React"}
      />

      <Aluno 
      nome={""}
      curso={"Enfermagem"}
      />

      <Aluno 
      nome={"Maria"}
      curso={"Radiologia"}
      />
    </>
  )
}
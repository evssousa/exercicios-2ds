import Input from "./components/Input";

export default function App(){
    return(
        <div>
            <Input
              label="Nome"
              id="nome"
              placeholder="insira seu Nome"
              type="text"
            />
        </div>
    )
}
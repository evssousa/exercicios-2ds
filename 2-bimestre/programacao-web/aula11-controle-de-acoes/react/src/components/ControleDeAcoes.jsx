export default function ControleDeAcoes(){
    function atacar(){
        alert("Vc desferiu um ataque")
    }  
    function curar(){
        alert("Vc usou uma poção para se curar")
    }
    function fugir(){
        alert("Vc se acovardou e fugiu")
    }

    return(
        <>
            <button onClick={atacar}>atacar</button>
            <button onClick={curar}>curar</button>
            <button onClick={fugir}>fugir</button>
        </>
    )
}
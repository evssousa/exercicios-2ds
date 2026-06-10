export default function ControleDeAcoes() {
     function mensagemAtaque() {
    alert("Você atacou inimigo")
  }

  function mensagemCura() {
    alert("Você curou um aliado")
  }

  function mensagemFugir() {
    alert("Fugindo da Batalha")
  }
  
    return (
        <>
            <button onClick={mensagemAtaque}>Atacar</button>
            <button onClick={mensagemCura}>Cura</button>
            <button onClick={mensagemFugir}>Fugir</button>
        </>
    )
}
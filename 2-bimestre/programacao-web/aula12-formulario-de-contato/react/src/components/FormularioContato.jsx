export default function FormularioContato(){
    function enviar(){
        event.preventDefault()

        const nome = event.target[0].value
        const mensagem = event.target[1].value
        alert(`Mensagem enviada por ${nome}: ${mensagem}`)
    }
  return (
    <form onSubmit={enviar}>
      <input
        type="text"
        placeholder="Seu nome"
      />
      <input
        type="text"
        placeholder="Sua mensagem"
      />
      <button type="submit">
        Enviar
      </button>
    </form>
  )
}
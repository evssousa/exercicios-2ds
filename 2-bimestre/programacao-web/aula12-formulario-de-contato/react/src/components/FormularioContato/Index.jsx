export default function FormularioContato() {
    function enviarFormulario(event) {
        event.preventDefault()
        
        const nome = event.target[0].value
        const mensagem = event.target[1].value

        alert(`Mensagem enviada por ${nome}: ${mensagem}`)
    }
    
    return (
        <>
            <form onSubmit={enviarFormulario}>
            <input 
            type="text"
            placeholder="Digite seu nome" 
            />

            <input 
            type="text"
            placeholder="Digite sua mensagem"
            />

            <button type="submit">Enviar</button>
            </form>
        </>
    )
}
# 📘 AULA 56: USANDO EVENTOS DO JAVASCRIPT NO REACT

## FORMULÁRIOS COM onChange E onSubmit

# 🎯 Objetivos da Aula

- Trabalhar com `onChange`.
- Trabalhar com `onSubmit`.
- Capturar valores digitados.
- Utilizar `preventDefault`.

# 📚 Capturando Digitação

## 📄 `App.jsx`

```jsx
// Componente principal
export default function App() {

  // Captura texto digitado
  function capturarTexto(event) {
    console.log("Digitado:", event.target.value)
  }

  return (

    // Input
    <input
      type="text"
      onChange={capturarTexto}
      placeholder="Digite algo"
    />
  )
}
```

# 📚 Trabalhando com Formulários

## 📄 `App.jsx`

```jsx
// Componente principal
export default function App() {

  // Função de envio
  function enviarFormulario(event) {

    // Impede recarregamento
    event.preventDefault()

    alert("Formulário enviado!")
  }

  return (

    // Formulário
    <form onSubmit={enviarFormulario}>

      <input
        type="text"
        placeholder="Seu nome"
      />

      <button type="submit">
        Enviar
      </button>

    </form>
  )
}
```

# ⚠️ O que é preventDefault?

Sem:

```jsx
event.preventDefault()
```

o formulário recarrega a página.

Fim da aula!

_

# 📝 Atividade Rápida

## Formulário de Contato

Você deve criar um componente:

```
FormularioContato.jsx
```

# 📋 Requisitos

O componente deve possuir:

- input nome
- input mensagem
- botão enviar

# 📋 Ao enviar

Mostrar:

```
Mensagem enviada por [nome]: [mensagem]
```

# ⚠️ Importante

Usar:

```jsx
event.target[index].value
```

Sem usar state.
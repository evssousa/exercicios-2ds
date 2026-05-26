# 📘 AULA 54: PROPS COM REST PARAMS

# 🎯 Objetivos da Aula

- Entender o operador `...rest`.
- Criar componentes mais flexíveis.
- Repassar props automaticamente.
- Trabalhar com componentes reutilizáveis.

# 📚 O que é `...rest`?

O operador:

```jsx
...
```

permite capturar o restante das props.

## 📌 Exemplo

```jsx
function Botao({ texto, ...rest }) {

}
```

👉 Aqui:

- `texto` → separado
- `...rest` → pega o restante

# 📄 `Botao.jsx`

```jsx
// Componente Botao
function Botao({ texto, ...rest }) {

  return (

    // Botão
    <button

      style={{
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
      }}

      // Repassando props restantes
      {...rest}
    >

      {/* Texto do botão */}
      {texto}

    </button>
  )
}

export default Botao
```

# 📄 `App.jsx`

```jsx
// Importando componente
import Botao from "./components/Botao"

// Componente principal
function App() {

  return (
    <div>

      {/* Botão com evento */}
      <Botao
        texto="Clique aqui"
        onClick={() => alert("Botão clicado")}
      />

      {/* Botão submit */}
      <Botao
        texto="Enviar"
        type="submit"
      />

    </div>
  )
}

export default App
```

# 🧠 Explicação

```jsx
// texto → prop usada diretamente
// ...rest → pega o restante das props
```

Fim da aula!

_

# 📝 Atividade Rápida

## 🎯 Criando um componente Input

Você deve criar:

```
Input.jsx
```

# 📋 Requisitos

O componente deve:

- Receber:
    - `label`
    - `...rest`
- Exibir:
    - label
    - input
- Repassar as props para o `<input>`
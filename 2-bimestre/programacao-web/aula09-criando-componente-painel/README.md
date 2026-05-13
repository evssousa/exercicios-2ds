# 📘 AULA 53: COMPOSIÇÃO DE COMPONENTES COM CHILDREN

# 🎯 Objetivos da Aula

- Entender o conceito de composição de componentes.
- Aprender a usar a prop especial `children`.
- Criar componentes reutilizáveis que envolvem outros elementos.
- Melhorar a organização da interface.

# 📚 O que é `children`?

A prop `children` é uma prop especial do React.

Ela representa tudo que está dentro de um componente.

## 📌 Exemplo

```jsx
<Card>
  <h1>Olá</h1>
</Card>
```

👉 Tudo que está entre:

```jsx
<Card> </Card>
```

vai para:

```jsx
children
```

# 🧩 Criando um componente Card

## 📄 `Card.jsx`

```jsx
// Componente Card
function Card({ children }) {

  return (

    // Caixa do card
    <div
      style={{
        border: "2px solid #008cff",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px 0",
        backgroundColor: "#f0f8ff"
      }}
    >

      {/* Conteúdo recebido */}
      {children}

    </div>
  )
}

// Exportando componente
export default Card
```

# 📄 `App.jsx`

```jsx
// Importando componente Card
import Card from "./components/Card"

// Componente principal
function App() {

  return (
    <div>

      {/* Título da página */}
      <h1>Composição de Componentes</h1>

      {/* Primeiro card */}
      <Card>

        <h2>Título 1</h2>

        <p>Conteúdo do primeiro card</p>

      </Card>

      {/* Segundo card */}
      <Card>

        <h2>Título 2</h2>

        <p>Outro conteúdo aqui dentro do segundo card</p>

      </Card>

    </div>
  )
}

export default App
```

# 🧠 Explicação

O componente `Card` funciona como uma caixa reutilizável.

👉 Tudo que colocamos dentro dele é recebido por:

```jsx
children
```

# ✅ Vantagens do children

- Reutilização
- Flexibilidade
- Componentes mais organizados
- Layouts mais profissionais

Fim da aula!

_

# 📝 Atividade Rápida

## Criando um componente Painel

Você deve criar um componente:

```
Painel.jsx
```

# 📋 Requisitos

O componente deve:

- Utilizar `children`
- Possuir:
    - borda
    - padding
    - background-color
- Envolver conteúdos diferentes
# 📘 AULA 42: PRIMEIRA PÁGINA COM REACT E CONHECENDO O JSX

## 🎯 Objetivos da Aula

- Criar o primeiro projeto com React;
- Entender o que é o **JSX** e como ele funciona;
- Montar uma estrutura básica de um componente funcional React;
- Renderizar conteúdo na tela utilizando JSX;
- Compreender a diferença entre **HTML tradicional** e **JSX**.

## 📘 Parte Teórica: O que é JSX?

JSX (**JavaScript XML**) é uma sintaxe que mistura **HTML com JavaScript**.

👉 Ele é usado para criar interfaces no React.

### 📌 Exemplo JSX

```jsx
// Criando um elemento usando JSX
const elemento = <h1>Olá, mundo!</h1>
```

### 🔄 O que acontece por trás?

```jsx
// O React transforma JSX nisso:
React.createElement('h1', null, 'Olá, mundo!')
```

👉 Ou seja: JSX vira JavaScript.

## 🛠️ Vamos a Prática!

### ✏️ Arquivo: `main.jsx`

```jsx
// Importando React
import React from 'react'

// Importando ReactDOM para renderizar na tela
import ReactDOM from 'react-dom/client'

// Importando o componente principal
import App from './App.jsx'

// Importando estilos
import './index.css'

// Criando a raiz da aplicação e renderizando o componente App dentro da div #root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Componente principal da aplicação */}
    <App />
  </React.StrictMode>,
)
```

📌 Esse arquivo não precisa ser alterado!

### ✏️ Arquivo: `App.jsx`

```jsx
// Importando o CSS do componente
import './App.css'

// Criando o componente principal
export default function App() {

  // JSX começa aqui
  return (
    <div>

      {/* Título principal da aplicação */}
      <h1>Bem-vindo ao React!</h1>

      {/* Exibindo a data atual */}
      <p>Hoje é {new Date().toLocaleDateString()}</p>

      {/* Executando JavaScript dentro do JSX */}
      <p>5 + 3 = {5 + 3}</p>

      {/* Tudo precisa estar dentro de um único elemento pai */}
    </div>
  )
}
```

## 🚫 Diferenças entre HTML e JSX

| HTML | JSX |
| --- | --- |
| class | className |
| for | htmlFor |
| Pode não fechar | Deve fechar |

### 📌 Exemplos

```jsx
// Em JSX usamos className
<div className="container"></div>
```

```jsx
// Tags devem ser fechadas
<img src="img.png" />
```

## 🧠 Regras do JSX

- Um único elemento pai
- Pode usar `{}` para JavaScript
- Deve ser válido

Fim da aula!

_

# 📝 Atividade Rápida

## 🎯 Personalizando sua primeira página React

Você deve editar o arquivo `App.jsx` e personalizar o conteúdo da aplicação.

## 📋 Requisitos

Seu componente deve:

- Exibir seu nome em um `<h1>`
- Mostrar sua matéria favorita
- Criar uma variável:

```jsx
// Variável com seu filme favorito
const filmeFavorito = "Seu Filme"
```

- Exibir:

```jsx
<p>Meu filme favorito é: {filmeFavorito}</p>
```
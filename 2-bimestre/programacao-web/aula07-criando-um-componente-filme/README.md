# 📘 AULA 50: REUTILIZANDO COMPONENTES

## 🎯 Objetivos da Aula

- Entender o conceito de reutilização de componentes.
- Criar componentes reutilizáveis.
- Trabalhar com dados diferentes no mesmo componente.
- Organizar melhor a aplicação React.

## 📚 O que é reutilizar componentes?

Uma das maiores vantagens do React é poder criar um componente uma única vez e reutilizá-lo várias vezes.

👉 Isso evita repetição de código.

## ❌ Exemplo sem reutilização

```jsx
export default function App() {

  return (
    <div>

      <h2>Camisa</h2>
      <p>Preço: R$ 50</p>

      <h2>Tênis</h2>
      <p>Preço: R$ 200</p>

      <h2>Calça</h2>
      <p>Preço: R$ 120</p>

    </div>
  )
}
```

❌ Código repetido

❌ Difícil de manter

## ✅ Exemplo reutilizando componente

### 📄 `Produto.jsx`

```jsx
// Criando componente Produto
export default function Produto() {

  return (
    <>

      <h2>Camisa</h2>
      <p>Preço: R$ 50</p>

    </>
  )
}
```

### 📄 `App.jsx`

```jsx
// Importando componente Produto
import Produto from "./components/Produto"

// Componente principal
export default function App() {

  return (
    <div>

      {/* Reutilizando componente */}
      <Produto />

      <Produto />

      <Produto />

    </div>
  )
}
```

## 🧠 Vantagens da reutilização

- Menos repetição
- Código mais limpo
- Mais organização
- Mais fácil de alterar

## 📦 Organização dos Arquivos

```
src/
 ├── components/
 │    └── Produto.jsx
 │
 ├── App.jsx
```

Fim da aula!

_


# 📝 Atividade Rápida

## Criando um componente de Filme

#### Antes de tudo! 
1. Crie um novo projeto usando o Vite com React.
2. Nome do projeto deve ser "react" (obs: NÃO utilize o . no final do comando!).
3. Vá até a pasta `extras`, copie e cole no seu projeto os arquivos que contém lá:
    - pasta `test` cole dentro da pasta `src`;
    - o arquivo `setupTests.js` cole também dentro da pasta `src`;
    - arquivos `package.json` e `vite.config.js` devem substituir pelo os que vem no projeto;

#### Agora vamos lá!

Você deve criar um componente reutilizável chamado `Filme.jsx`.

## 📋 Requisitos

O componente deve mostrar:

- Nome do filme
- Ano do filme


## 📄 `App.jsx`

Utilizar o componente pelo menos 3 vezes.
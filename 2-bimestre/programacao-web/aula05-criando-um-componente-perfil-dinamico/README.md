# 📘 AULA 47: DADOS DINÂMICOS COM JSX, CRIANDO NOVOS COMPONENTES

## 🎯 Objetivos da Aula

- Trabalhar com dados dinâmicos no JSX.
- Exibir variáveis, objetos e expressões.
- Utilizar funções dentro do JSX.
- Criar componentes mais inteligentes.

## 📚 O que são Dados Dinâmicos?

No React, podemos usar **JavaScript dentro do JSX** usando:

```jsx
{}
```

Isso permite:

- Mostrar variáveis
- Fazer cálculos
- Usar funções
- Trabalhar com objetos

## 🔹 Exibindo Variáveis

```jsx
// Componente principal
function App() {

  // Variáveis JavaScript
  const nome = "João"
  const idade = 25

  return (
    <div>

      {/* Exibindo variáveis */}
      <h1>Olá, {nome}!</h1>
      <p>Você tem {idade} anos.</p>

    </div>
  )
}

export default App
```

## 🔹 Chamando Funções

```jsx
function App() {

  const nome = "João"

  // Função que retorna texto
  function saudacao() {
    return `Bem-vindo, ${nome}!`
  }

  return (
    <div>

      {/* Chamando função dentro do JSX */}
      <h1>{saudacao()}</h1>

    </div>
  )
}
```

## 🔹 Trabalhando com Objetos

```jsx
function App() {

  // Objeto JavaScript
  const usuario = {
    nome: "Maria",
    idade: 30,
    cidade: "Fortaleza"
  }

  return (
    <div>

      {/* Acessando propriedades do objeto */}
      <p>Nome: {usuario.nome}</p>
      <p>Idade: {usuario.idade}</p>
      <p>Cidade: {usuario.cidade}</p>

    </div>
  )
}
```

## 🔹 Expressões no JSX

```jsx
function App() {

  const preco = 100
  const desconto = 0.1

  return (
    <div>

      {/* Calculando valores */}
      <h1>Preço final: R${preco - (preco * desconto)}</h1>

    </div>
  )
}
```

## ⚠️ Atenção

- JSX aceita **expressões**
- Não aceita estruturas como `if` diretamente

## 🔹 Condicional com Ternário

```jsx
function App() {

  const logado = true

  return (
    <div>

      {/* Condição usando operador ternário */}
      {logado ? <p>Bem-vindo!</p> : <p>Faça login</p>}

    </div>
  )
}
```

# 📝 Atividade Rápida

## Criando um Componente Perfil Dinâmico

#### Antes de tudo! 
1. Crie um novo projeto usando o Vite com React.
2. Nome do projeto deve ser "react" (obs: NÃO utilize o . no final do comando!).
3. Vá até a pasta `extras`, copie e cole no seu projeto os arquivos que contém lá:
    - pasta `test` cole dentro da pasta `src`;
    - o arquivo `setupTests.js` cole também dentro da pasta `src`;
    - arquivos `package.json` e `vite.config.js` devem substituir pelo os que vem no projeto;

#### Agora vamos lá!

Crie um componente `Perfil.jsx`.

## 📋 Requisitos

O componente deve:

- Criar um objeto `usuario` com:
    - nome
    - idade
    - profissão
- Exibir os dados na tela
- Mostrar:

👉 "Você é maior de idade."

👉 ou

👉 "Você é menor de idade."
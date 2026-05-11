# 📘 AULA 49: O QUE SÃO PROPS E COMO USAR

## 🎯 Objetivos da Aula

- Entender o conceito de props.
- Aprender a enviar dados entre componentes.
- Trabalhar com desestruturação.
- Utilizar props para personalizar componentes.

## 📚 O que são Props?

Props significa:

```
properties
```

👉 São dados enviados para um componente.

## 🔹 Enviando Props

```jsx
// Enviando props para componente Pessoa
<Pessoa nome="Ana" idade={28} />
```

## 🔹 Recebendo Props

```jsx
// Recebendo props
export default function Pessoa(props) {

  return (
    <>

      <h2>Nome: {props.nome}</h2>

      <p>Idade: {props.idade}</p>

    </>
  )
}
```

## 🔹 Desestruturação

Forma mais organizada:

```jsx
// Desestruturando props
export default function Pessoa({ nome, idade }) {

  return (
    <>

      <h2>Nome: {nome}</h2>

      <p>Idade: {idade}</p>

    </>
  )
}
```

## ⚠️ Importante

Props:

- vêm do componente pai
- são somente leitura
- não devem ser alteradas

## 📄 Exemplo Completo

### `Pessoa.jsx`

```jsx
// Componente Pessoa
export default function Pessoa({ nome, idade }) {

  return (
    <>

      {/* Nome */}
      <h2>Nome: {nome}</h2>

      {/* Idade */}
      <p>Idade: {idade} anos</p>

    </>
  )
}
```

### `App.jsx`

```jsx
// Importando componente
import Pessoa from "./components/Pessoa"

// Componente principal
export default function App() {

  return (
    <div>

      {/* Enviando props */}
      <Pessoa nome="Carlos" idade={30} />

      <Pessoa nome="Juliana" idade={25} />

      <Pessoa nome="Eduardo" idade={35} />

    </div>
  )
}

```

Fim da aula!

_


# 📝 Atividade Rápida

## Criando um componente Aluno

#### Antes de tudo! 
1. Crie um novo projeto usando o Vite com React.
2. Nome do projeto deve ser "react" (obs: NÃO utilize o . no final do comando!).
3. Vá até a pasta `extras`, copie e cole no seu projeto os arquivos que contém lá:
    - pasta `test` cole dentro da pasta `src`;
    - o arquivo `setupTests.js` cole também dentro da pasta `src`;
    - arquivos `package.json` e `vite.config.js` devem substituir pelo os que vem no projeto;

#### Agora vamos lá!

Você deve criar um componente chamado `Aluno.jsx`.

## 📋 Requisitos

O componente deve receber props:

```jsx
nome
curso
```

## 📄 O componente deve mostrar

```
Nome do aluno
Curso do aluno
```

## 📄 `App.jsx`

Deve utilizar o componente pelo menos 3 vezes.
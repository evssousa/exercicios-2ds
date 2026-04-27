# 📘 AULA 44: CONHECENDO OS COMPONENTES DO REACT

## 🎯 Objetivos da Aula

- Compreender o que são componentes no React.
- Aprender a criar componentes funcionais.
- Organizar o código em múltiplos arquivos.
- Reutilizar componentes dentro da aplicação.

## 📚 O que são Componentes?

Componentes são **partes reutilizáveis da interface**.

👉 Em vez de escrever tudo em um único arquivo, podemos dividir em partes:

- Header
- Card
- Texto
- Botão

## 🧩 Exemplo sem componentes (problema)

```jsx
export default function App() {
  return (
    <div>
      <h1>Bem-vindo</h1>
      <h1>Bem-vindo</h1>
      <h1>Bem-vindo</h1>
    </div>
  )
}
```

❌ Código repetido

❌ Difícil de manter

## ✅ Usando Componentes (solução)

### 📁 Criando um componente

Por boa prática e organização, deve-se criar uma pasta chamada `components` dentro de `src` para criar os componentes.

📄 `src/components/Titulo.jsx`

```jsx
// Criando um componente chamado Titulo
export default function Titulo() {
  return (
    <div>
      <h1>Bem-vindo ao React</h1>
    </div>
  )
}
```

### 📄 Usando o componente no App.jsx

📄 `src/App.jsx`

```jsx
// Importando o componente
import { Titulo } from "./components/Titulo"

// Componente principal
export default function App() {
  return (
    <div>

      {/* Reutilizando o componente várias vezes */}
      <Titulo />
      <Titulo />
      <Titulo />

    </div>
  )
}
```

## 🧠 Vantagens dos Componentes

- Reutilização de código
- Organização
- Facilidade de manutenção
- Código mais limpo

## ⚠️ Regras importantes

- Nome do componente deve começar com **letra maiúscula**
- Sempre retornar JSX
- Pode ser reutilizado várias vezes

Fim da aula!

_

# 📝 Atividade Rápida

## 🎯 Criando primeiros componentes

Você deve criar dois componentes e utilizá-los no `App.jsx`.

#### Antes de tudo! 
1. Crie um novo projeto usando o Vite com React.
2. Nome do projeto deve ser "react" (obs: NÃO utilize o . no final do comando!).
3. Vá até a pasta `extras`, copie e cole no seu projeto os arquivos que contém lá:
    - pasta `test` cole dentro da pasta `src`;
    - o arquivo `setupTests.js` cole também dentro da pasta `src`;
    - arquivos `package.json` e `vite.config.js` devem substituir pelo os que vem no projeto;

## 📋 Requisitos

### 1. Criar componente `Titulo.jsx`

- Deve exibir:

```
Meu Primeiro Componente
```

### 2. Criar componente `Paragrafo.jsx`

- Deve exibir:

```
Estou aprendendo React
```

### 3. No `App.jsx`

- Importar os dois componentes
- Renderizar:

```jsx
<Titulo />
<Paragrafo />
```

## 💡 Estrutura esperada

```
src/
 ├── components/
 │    ├── Titulo.jsx
 │    └── Paragrafo.jsx
 ├── App.jsx
```
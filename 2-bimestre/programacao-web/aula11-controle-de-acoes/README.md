# 📘 AULA 55: USANDO EVENTOS DO JAVASCRIPT NO REACT

# 🎯 Objetivos da Aula

- Entender como React trabalha com eventos.
- Utilizar `onClick`.
- Criar funções manipuladoras de eventos.
- Passar parâmetros para funções em eventos.

# 📚 O que são eventos?

Eventos representam ações do usuário.

Exemplos:

- clique
- digitação
- envio de formulário
- movimento do mouse

# 📚 Eventos no React

No React:

✅ usamos camelCase

✅ passamos funções JavaScript

## 📌 Exemplo básico

```jsx
// Botão com evento de clique
<button onClick={minhaFuncao}>
  Clique aqui
</button>
```

# 📚 Criando Funções de Evento

## 📄 `App.jsx`

```jsx
// Componente principal
export default function App() {

  // Função chamada no clique
  function mensagem() {
    alert("Botão clicado!")
  }

  return (
    <div>

      {/* Botão */}
      <button onClick={mensagem}>
        Clique aqui
      </button>

    </div>
  )
}
```

# 📚 Passando Parâmetros

## 📄 `App.jsx`

```jsx
// Componente principal
export default function App() {

  // Função com parâmetro
  function saudacao(nome) {
    alert(`Olá, ${nome}!`)
  }

  return (
    <>

      <h2>Saudações</h2>

      {/* Botão Ana */}
      <button onClick={() => saudacao("Ana")}>
        Cumprimentar Ana
      </button>

      {/* Botão João */}
      <button onClick={() => saudacao("João")}>
        Cumprimentar João
      </button>

    </>
  )
}
```

# ⚠️ Atenção

❌ ERRADO:

```jsx
onClick={saudacao("Ana")}
```

Isso executa a função imediatamente.

✅ CORRETO:

```jsx
onClick={() => saudacao("Ana")}
```

Fim da aula!

_

# 📝 Atividade Rápida

## Controle de Ações

Você deve criar um componente:

```
ControleDeAcoes.jsx
```

# 📋 Requisitos

Criar 3 botões:

- Atacar
- Curar
- Fugir

# 📋 Cada botão deve

- usar `onClick`
- chamar uma função
- mostrar um `alert`
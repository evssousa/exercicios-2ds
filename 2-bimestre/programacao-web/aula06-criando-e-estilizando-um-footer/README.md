# 📘 AULA 48: ESTILIZANDO COMPONENTES E CONHECENDO OS FRAGMENT

## 🎯 Objetivos da Aula

- Criar componentes organizados em arquivos.
- Estilizar componentes com CSS.
- Entender o uso de Fragment.
- Evitar HTML desnecessário.

## 📚 Criando Componentes

```jsx
// Componente Header
function Header() {

  return (
    <header>

      {/* Título do site */}
      <h1>Meu Site React</h1>

    </header>
  )
}

export default Header
```

## 📚 Estilizando com CSS

### 📄 `Header.css`

```css
/* Estilo do header */
header {
  background-color: #282c34;
  color: white;
  padding: 20px;
  text-align: center;
}
```

### 📄 `Header.jsx`

```jsx
// Importando CSS
import "./Header.css"

function Header() {

  return (
    <header>

      {/* Conteúdo */}
      <h1>Meu Site React</h1>

    </header>
  )
}

export default Header
```

## 📚 O que é Fragment?

Fragment permite retornar vários elementos sem criar `<div>`.

## 🔹 Sem Fragment

```jsx
function Saudacao() {

  return (
    <div>
      <h1>Olá</h1>
      <p>Bem-vindo</p>
    </div>
  )
}
```

## 🔹 Com Fragment

```jsx
function Saudacao() {

  return (
    <>
      {/* Elementos sem div extra */}
      <h1>Olá</h1>
      <p>Bem-vindo</p>
    </>
  )
}
```

# 📝 Atividade Rápida

## 🎯 Criando e Estilizando um Footer com Fragment

#### Antes de tudo! 
1. Crie um novo projeto usando o Vite com React.
2. Nome do projeto deve ser "react" (obs: NÃO utilize o . no final do comando!).
3. Vá até a pasta `extras`, copie e cole no seu projeto os arquivos que contém lá:
    - pasta `test` cole dentro da pasta `src`;
    - o arquivo `setupTests.js` cole também dentro da pasta `src`;
    - arquivos `package.json` e `vite.config.js` devem substituir pelo os que vem no projeto;

#### Agora vamos lá!

## 📋 Requisitos

Crie os arquivos:

```
src/components/Footer.jsx
src/styles/footer.css
```

---

## 📄 `Footer.jsx`

O componente deve:

- Importar o arquivo `Footer.css`
- Usar Fragment com `<> </>`
- Renderizar uma tag `<footer>`
- Exibir o texto:

```
Todos os direitos reservados - 2026
```

---

## 📄 `Footer.css`

O CSS deve estilizar o `footer` com:

- `background-color`
- `color`
- `padding`
- `text-align`
- `border`
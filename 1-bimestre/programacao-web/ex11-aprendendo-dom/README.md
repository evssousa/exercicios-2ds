# 📘 EVENTOS E OBTENDO ELEMENTOS HTML NO DOM

# 📚 O que é DOM?

DOM significa **Document Object Model**.

Ele representa o HTML como uma **estrutura de objetos que o JavaScript pode manipular**.

Exemplo:

HTML

```html
<h1 id="titulo">Olá Mundo</h1>
```

JavaScript pode acessar esse elemento:

```jsx
const titulo = document.getElementById("titulo");
```

# 🖱️ O que são Eventos?

Eventos são **ações que acontecem na página**.

Exemplos:

- clique (`click`)
- digitação (`keyup`)
- carregar página (`load`)

# 📌 Exemplo de Evento

HTML

```html
<button id="botao">Clique</button>
```

JavaScript

```jsx
const botao = document.getElementById("botao")

botao.addEventListener("click", () => {
	console.log("Botão clicado")
})
```

# 🔎 Obtendo Elementos do DOM

### getElementById

```jsx
const titulo = document.getElementById("titulo")
```

### querySelector

```jsx
const paragrafo = document.querySelector("p")
```

Também pode selecionar classes:

```jsx
const card = document.querySelector(".card")
```

# 📝 Atividade Rápida

## Aprendendo DOM

Crie uma página onde um botão altera o texto de um título quando for clicado.

# 📄 index.html deve conter

- Um `<h1>` com id:

```
titulo
```

Texto inicial:

```
Aprendendo DOM
```

- Um botão com id:

```
botao
```

Texto do botão:

```
Alterar Texto
```

- Link para o arquivo JavaScript:

```html
<script src="./src/js/script.js"></script>
```

# 📄 script.js deve conter

- Seleção do título usando:

```
getElementById
```

- Seleção do botão
- Evento de clique que altera o texto do título para:

```
Texto Alterado com JavaScript
```
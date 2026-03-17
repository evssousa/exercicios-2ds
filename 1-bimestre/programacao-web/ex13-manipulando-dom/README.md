# 📘 PRATICANDO A MANIPULAÇÃO NO DOM

# 📚 Manipulando Elementos no DOM

Depois que um elemento é obtido do DOM, podemos **modificar seu conteúdo**.

Exemplo:

HTML

```html
<h1 id="titulo">Título Original</h1>;
```

JavaScript

```jsx
const titulo = document.getElementById("titulo");

titulo.textContent = "Novo Título";
```

# 🔹 textContent

Altera apenas o **texto do elemento**.

```jsx
elemento.textContent = "Novo texto";
```

# 🔹 innerHTML

Permite inserir **HTML dentro do elemento**.

```jsx
elemento.innerHTML = "<strong>Novo conteúdo</strong>";
```

# 📌 Exemplo com Evento

```jsx
const botao = document.getElementById("botao");
const paragrafo = document.getElementById("texto");

botao.addEventListener("click", () => {
  paragrafo.textContent = "Texto alterado";
});
```

# 📝 Atividade Rápida

## Manipulando DOM

Crie uma página onde um botão altera o conteúdo de um parágrafo ao ser clicado.

# 📄 index.html deve conter

- Um `<p>` com id:

```
mensagem
```

Texto inicial:

```
Texto original
```

- Um botão com id:

```
alterar
```

Texto do botão:

```
Alterar Mensagem
```

- Script conectado:

```jsx
<script src="./src/js/script.js"></script>
```

# 📄 script.js deve conter

- Seleção do parágrafo
- Seleção do botão
- Evento `click`
- Alterar o texto do parágrafo para:

```
Mensagem alterada com JavaScript
```
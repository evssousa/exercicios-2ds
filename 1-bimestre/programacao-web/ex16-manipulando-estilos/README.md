# 📘 AULA 28: MANIPULANDO ESTILOS E ATRIBUTOS NO JAVASCRIPT

# 📚 Alterando estilos com JavaScript

Podemos alterar estilos diretamente pelo JavaScript.

Exemplo:

```jsx
elemento.style.color = "red";
```

Outro exemplo:

```jsx
elemento.style.backgroundColor = "yellow";
```
# 📚 Alterando atributos HTML

Podemos modificar atributos usando:

```jsx
setAttribute()
```

Exemplo:

```jsx
imagem.setAttribute("src", "nova-imagem.png");
```
# 📚 Trabalhando com classes

Também podemos adicionar ou remover classes CSS.

```jsx
elemento.classList.add("classe");
elemento.classList.remove("classe");
```
# 📌 Exemplo

HTML

```jsx
<p id="texto">Texto de exemplo</p>
<button id="botao">Mudar cor</button>
```

JavaScript

```jsx
const texto = document.getElementById("texto");
const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
  texto.style.color = "blue";
});
```
# 📝 Atividade Rápida

## Manipulando estilos

Crie uma página com um parágrafo e um botão.

Quando o botão for clicado:

- A cor do texto deve mudar.
- O tamanho da fonte deve aumentar.
- Uma classe CSS deve ser adicionada ao parágrafo.
## 📄 index.html deve conter

Um parágrafo com id `texto`

Um botão com id `mudarEstilo`
## 📄 style.css

Criar uma classe chamada `destaque`

Que tenha:

```css
background-color: yellow;
padding: 10px;
```
## 📄 script.js deve conter

- Seleção do parágrafo
- Seleção do botão
- Evento `click`
- Alterar:

```jsx
color
fontSize
```

- Adicionar classe `destaque`
Exemplo esperado:

```jsx
texto.style.color = "blue";
texto.style.fontSize = "24px";
texto.classList.add("destaque");
```
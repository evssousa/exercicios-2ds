# 📘 AULA 27: TRABALHANDO COM EVENTOS E COM FORMULÁRIOS NO JAVASCRIPT

# 📚 Formulários no HTML

Formulários são utilizados para **coletar dados do usuário**.

Exemplo:

```html
<form>
  <input type="text" placeholder="Digite seu nome" />
  <button>Enviar</button>
</form>
```

Quando um formulário é enviado, a página normalmente **recarrega**.

Para evitar isso usamos:

```jsx
event.preventDefault();
```

# 📚 Evento submit

O evento `submit` é disparado quando um formulário é enviado.

Exemplo:

```jsx
const form = document.getElementById("formulario");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

# 📌 Exemplo completo

HTML

```html
<form id="formulario">
  <input type="text" id="nome" />
  <button type="submit">Enviar</button>
</form>

<p id="resultado"></p>
```

JavaScript

```jsx
const form = document.getElementById("formulario");
const nome = document.getElementById("nome");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  resultado.textContent = "Olá, " + nome.value;
});
```

# 📝 Atividade Rápida

## Trabalhando com eventos

Crie um formulário que permita ao usuário digitar **seu nome** e **sua idade**.

Ao enviar o formulário, uma mensagem deve aparecer na tela.

## 📄 index.html deve conter:

Um formulário com id `formulario`.

Dentro do formulário:

- um input para nome com id `nome`
- um input para idade com id `idade`
- um botão de envio
- um parágrafo com id `resultado`

## 📄 script.js deve conter

- Seleção do formulário
- Evento `submit`
- `event.preventDefault()`
- Capturar valores dos inputs
- Mostrar a mensagem “Olá NOME, você tem IDADE anos
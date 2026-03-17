# 📘 ENVIANDO VALORES DO DOM PARA O JAVASCRIPT

# 📚 Obtendo Valores de Inputs

Elementos de formulário possuem a propriedade:

```html
value
```

Exemplo:

HTML

```html
<input type="text" id="nome" />
```

JavaScript

```jsx
const input = document.getElementById("nome");

const valor = input.value;
```

---

# 📌 Exemplo Completo

HTML

```html
<input type="text" id="nome" />
<button id="botao">Mostrar Nome</button>
<p id="resultado"></p>
```

JavaScript

```jsx
const botao = document.getElementById("botao");
const input = document.getElementById("nome");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {
  resultado.textContent = input.value;
});
```

---

# 📝 Atividade Rápida

## Enviando valores do DOM

Crie uma página onde o usuário digita seu nome e o sistema exibe uma mensagem de boas-vindas.

---

# 📄 index.html deve conter

- Um input com id:

```
nome
```

- Um botão com id:

```
mostrar
```

Texto do botão:

```
Mostrar Nome
```

- Um parágrafo com id:

```
resultado
```

- Script conectado ao `script.js`.

---

# 📄 script.js deve conter

- Seleção do input
- Seleção do botão
- Seleção do parágrafo
- Evento `click`
- Mostrar no parágrafo:

```
Olá, NOME_DIGITADO
```

Exemplo:

```
Olá, Maria
```
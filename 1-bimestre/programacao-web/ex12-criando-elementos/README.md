# 📘 CRIANDO NOVOS ELEMENTOS NO DOM

# 📚 Criando Elementos no DOM

JavaScript pode **criar novos elementos HTML dinamicamente**.

# 📌 Exemplo

```jsx
// Criando elemento
const paragrafo = document.createElement("p");

// Definindo conteúdo no elemento
paragrafo.textContent = "Novo parágrafo criado";

// Inserindo no documento (document.body)
document.body.appendChild(paragrafo);

// Caso queira adicionar o p dentro de uma div, seria:
// div.appendChild(paragrafo)
```

Passos:

1️⃣ Criar elemento

2️⃣ Definir conteúdo

3️⃣ Inserir no DOM

# 📝 Atividade rápida

## Criando elementos

Crie uma página onde um botão adiciona novos itens em uma lista.

# 📄 index.html deve conter

- Um `<ul>` com id:

```
lista
```

- Um botão com id:

```
adicionar
```

Texto do botão:

```
Adicionar Item
```

- Link para `script.js`.

# 📄 script.js deve conter

- Seleção da lista
- Seleção do botão
- Evento de clique
- Criar um novo `<li>`
- Texto do item:

```
Novo Item
```

- Inserir o item dentro da lista.
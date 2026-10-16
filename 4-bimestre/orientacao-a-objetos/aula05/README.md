# 🎯 Aula 5 — Express: Configuração Básica e Criação de Rotas

## 🎯 Objetivos da Aula

- Entender o que é o **Express** e por que ele facilita o trabalho.
- Instalar e configurar o Express num projeto.
- Criar rotas com **`app.get`** e **`app.post`**.
- Responder em JSON com **`res.json`** e definir o **status** da resposta.

# 🧩 Por que Express?

Na aula 2 criamos um servidor com o módulo `http`. Para três rotas, o código ficou assim:

```jsx
http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") { ... }
    if (req.url === "/produtos" && req.method === "GET") { ... }
    if (req.url === "/produtos" && req.method === "POST") { ... }
    res.statusCode = 404
    res.end("Não encontrado")
})
```

Imagine com vinte rotas. Uma cadeia de `if` gigante, repetindo a comparação de caminho e de método em cada uma.

O **Express** é um pacote que resolve exatamente isso. Ele não substitui o `http` — ele é construído **em cima** dele e oferece uma forma organizada de declarar rotas.

| Com `http` puro | Com Express |
| --- | --- |
| `if` para cada caminho e método | uma função por rota |
| converter JSON à mão | `res.json()` faz a conversão |
| `res.statusCode = 404` | `res.status(404)` encadeável |
| tudo num bloco só | cada rota no seu lugar |

# 🏗️ Instalando e configurando

O Express **não** vem com o Node — precisa ser instalado. E, como o programa precisa dele para funcionar, ele é uma **dependência normal** (aula 1):

```bash
npm install express
```

## 📌 Exemplo 1 — O menor servidor Express

```jsx
const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("API no ar")
})

app.listen(3000, () => {
    console.log("Servidor em http://localhost:3000")
})
```

Compare com o Exemplo 4 da aula 2: mesmo resultado, sem nenhum `if`.

| Linha | O que faz |
| --- | --- |
| `express()` | cria a aplicação; é o objeto central |
| `app.get(caminho, fn)` | registra uma rota GET |
| `res.send(texto)` | envia a resposta |
| `app.listen(porta)` | põe o servidor no ar |

📌 Juntando com a aula 2, a porta vem do ambiente:

```jsx
const porta = Number(process.env.PORT) || 3000

app.listen(porta)
```

# 🧠 Rotas

Uma **rota** é a combinação de um **método HTTP** com um **caminho**.

```
   GET      /produtos
    ↑           ↑
  método     caminho
```

Os métodos principais:

| Método | Intenção | Exemplo |
| --- | --- | --- |
| `GET` | buscar dados | listar produtos |
| `POST` | criar algo novo | cadastrar produto |
| `PUT` | atualizar algo existente | mudar o preço |
| `DELETE` | remover algo | excluir produto |

No Express, cada método é um função do `app`:

```jsx
app.get("/produtos", ...)
app.post("/produtos", ...)
app.put("/produtos", ...)
app.delete("/produtos", ...)
```

📌 O mesmo caminho `/produtos` pode ter **quatro rotas diferentes** — uma por método. Elas não se confundem.

## 📌 Exemplo 2 — Respondendo em JSON

API séria não devolve texto solto, devolve **JSON**. O Express tem um método só para isso:

```jsx
const produtos = [
    { id: 1, nome: "Teclado", preco: 150 },
    { id: 2, nome: "Mouse", preco: 80 }
]

app.get("/produtos", (req, res) => {
    res.json(produtos)
})
```

O `res.json()` faz três coisas de uma vez:

1. converte o objeto para texto JSON (o `JSON.stringify` que fazíamos à mão);
2. define o cabeçalho `Content-Type: application/json`;
3. envia a resposta.

| Aula 2 (`http` puro) | Agora (Express) |
| --- | --- |
| `res.setHeader("Content-Type", "application/json")` | — |
| `res.end(JSON.stringify(produtos))` | `res.json(produtos)` |

## 📌 Exemplo 3 — Definindo o status

O `res.status()` define o código e **devolve o próprio `res`**, o que permite encadear:

```jsx
app.post("/produtos", (req, res) => {
    res.status(201).json({ mensagem: "Produto criado" })
})
```

Leitura: "status 201, e o corpo é este JSON".

Os status que vamos usar neste bimestre:

| Código | Nome | Quando usar |
| --- | --- | --- |
| 200 | OK | a busca deu certo |
| 201 | Created | criou um registro novo |
| 400 | Bad Request | o cliente mandou dado inválido |
| 404 | Not Found | não existe o que foi pedido |
| 500 | Internal Server Error | erro do servidor |

📌 Quando você não chama `res.status()`, o Express assume **200**. Por isso o Exemplo 2 funciona sem status explícito.

## 📌 Exemplo 4 — Várias rotas juntas

```jsx
const express = require("express")

const app = express()

const produtos = [
    { id: 1, nome: "Teclado", preco: 150 },
    { id: 2, nome: "Mouse", preco: 80 }
]

app.get("/", (req, res) => {
    res.json({ mensagem: "API de Produtos" })
})

app.get("/produtos", (req, res) => {
    res.json(produtos)
})

app.get("/produtos/total", (req, res) => {
    res.json({ total: produtos.length })
})

app.post("/produtos", (req, res) => {
    res.status(201).json({ mensagem: "Produto criado" })
})

module.exports = app
```

Repare na última linha. Ela é o ponto mais importante da aula.

# 🧪 Separando o `app` do `listen`

Igual ao que fizemos com o `handler` na aula 2: para poder **testar**, o módulo exporta o `app` e **não** chama o `listen`.

A estrutura padrão usa dois arquivos:

```text
index.js      ← cria o app, declara as rotas, exporta o app
servidor.js   ← importa o app e chama o listen
```

```jsx
// index.js
const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.json({ mensagem: "API de Produtos" })
})

module.exports = app
```

```jsx
// servidor.js
const app = require("./index")

const porta = Number(process.env.PORT) || 3000

app.listen(porta, () => {
    console.log(`Servidor na porta ${porta}`)
})
```

E o `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "start": "node servidor.js",
    "dev": "node --watch --env-file=.env servidor.js"
  }
}
```

> **Por quê?** Porque o teste precisa do `app`, mas **não** quer que uma porta seja ocupada. Se o `index.js` chamasse `listen`, todo teste subiria um servidor de verdade — e dois testes rodando ao mesmo tempo brigariam pela mesma porta.

## 🔬 Testando com supertest

O **supertest** é o pacote que faz requisições contra o `app` **sem abrir porta nenhuma**. Ele é ferramenta de desenvolvimento, então entra como `devDependency` (aula 1):

```bash
npm install supertest --save-dev
```

## 📌 Exemplo 5 — Um teste de rota

```jsx
const request = require("supertest")
const app = require("../index")

test("GET /produtos deve responder 200 com a lista", async () => {
    const res = await request(app).get("/produtos")

    expect(res.status).toBe(200)
    expect(res.body.length).toBe(2)
})

test("POST /produtos deve responder 201", async () => {
    const res = await request(app).post("/produtos")

    expect(res.status).toBe(201)
})
```

| Parte | O que é |
| --- | --- |
| `request(app)` | prepara uma requisição contra o seu app |
| `.get("/produtos")` | o método e o caminho |
| `await` | a requisição é assíncrona — sempre espere |
| `res.status` | o status que a rota respondeu |
| `res.body` | o corpo já convertido de JSON para objeto |

📌 Note o `async` na função do teste e o `await` na requisição. Sem eles, o teste termina antes da resposta chegar e passa sem testar nada.

# 📖 Conceitos importantes

| Conceito | Significado |
| --- | --- |
| Express | pacote que organiza rotas sobre o módulo `http` |
| `app` | a aplicação Express |
| Rota | combinação de método HTTP + caminho |
| `app.get/post/put/delete` | registra uma rota do método correspondente |
| `res.send()` | envia texto |
| `res.json()` | envia JSON e define o Content-Type |
| `res.status(n)` | define o status; pode ser encadeado |
| `app.listen()` | põe o servidor no ar |
| supertest | faz requisições ao `app` sem abrir porta |

# ⚠️ Erros comuns

### ❌ Chamar `app.listen()` no arquivo que é exportado

```jsx
app.listen(3000)
module.exports = app
```

O teste sobe um servidor de verdade e a porta pode ficar presa. Deixe o `listen` em outro arquivo.

### ❌ Esquecer de responder

```jsx
app.get("/produtos", (req, res) => {
    const lista = produtos
})
```

A rota existe mas nunca responde — a requisição fica pendurada. Toda rota precisa de um `res.json()`, `res.send()` ou equivalente.

### ❌ Responder duas vezes

```jsx
res.json(produtos)
res.status(404).json({ erro: "..." })
```

Erro `Cannot set headers after they are sent`. Use `return` antes do segundo caso.

### ❌ Trocar a ordem do `status` com o `json`

```jsx
res.json({ ok: true }).status(201)
```

O `json()` já envia a resposta — o `status` depois dele não tem efeito. Correto:

```jsx
res.status(201).json({ ok: true })
```

### ❌ Esquecer o `await` no teste

```jsx
test("...", () => {
    const res = request(app).get("/produtos")   // sem await
    expect(res.status).toBe(200)                 // undefined
})
```

Fim da aula!

_

# 🧩 Exercício Rápido

### 💬 API de Livros

Crie um arquivo chamado `index.js` com uma aplicação Express que tenha um array de livros com **dois** livros:

```jsx
{ id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis" }
{ id: 2, titulo: "O Cortico", autor: "Aluisio Azevedo" }
```

E estas quatro rotas:

| Método | Caminho | Status | Resposta |
| --- | --- | --- | --- |
| GET | `/` | 200 | o JSON `{ "mensagem": "API de Livros" }` |
| GET | `/livros` | 200 | o array completo de livros |
| GET | `/livros/total` | 200 | o JSON `{ "total": <quantidade de livros> }` |
| POST | `/livros` | 201 | o JSON `{ "mensagem": "Livro criado" }` |

Regras:

- use `res.json(...)` em todas as rotas;
- use `res.status(...)` apenas onde o status **não** é 200;
- o `total` deve ser calculado a partir do array (`.length`), não escrito à mão.

No final, exporte a aplicação com `module.exports = app`.

📌 **Não** chame `app.listen()` no `index.js`.

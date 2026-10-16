# 🎯 Aula 6 — Organizando Pastas de Rota e Criando um Router Main

## 🎯 Objetivos da Aula

- Entender por que um arquivo único com todas as rotas não escala.
- Criar um **`express.Router()`** e separar rotas em arquivos.
- Organizar a pasta **`routes/`**.
- Montar um **router principal** e conectá-lo com `app.use()`.

> Na aula anterior criamos rotas, todas no mesmo `index.js`. Funcionou com quatro rotas. Agora vamos ver o que fazer quando são quarenta.

# 🤔 O problema do arquivo único

Uma API real tem rotas de produtos, de clientes, de pedidos, de usuários. Tudo no `index.js` gera:

```jsx
// index.js — 400 linhas
app.get("/produtos", ...)
app.post("/produtos", ...)
app.get("/clientes", ...)
app.post("/clientes", ...)
app.get("/pedidos", ...)
// ... e continua
```

Os problemas são práticos:

- achar uma rota exige rolar o arquivo inteiro;
- duas pessoas mexendo em rotas diferentes dão conflito no mesmo arquivo;
- o caminho `/produtos` é repetido em toda rota de produto.

É o mesmo tipo de problema que vimos no 3º bimestre com objetos literais repetidos: **funciona, mas não escala**.

# 🧩 O Router

O Express resolve isso com o **Router**: um "mini app" que guarda um conjunto de rotas e pode ser encaixado no app principal.

```jsx
const express = require("express")

const router = express.Router()
```

O `router` tem os mesmos métodos do `app`:

```jsx
router.get("/", ...)
router.post("/", ...)
```

## 📌 Exemplo 1 — Um arquivo de rotas

```jsx
// routes/produtos.js
const express = require("express")

const router = express.Router()

const produtos = [
    { id: 1, nome: "Teclado", preco: 150 },
    { id: 2, nome: "Mouse", preco: 80 }
]

router.get("/", (req, res) => {
    res.json(produtos)
})

router.get("/total", (req, res) => {
    res.json({ total: produtos.length })
})

router.post("/", (req, res) => {
    res.status(201).json({ mensagem: "Produto criado" })
})

module.exports = router
```

Repare: os caminhos são `"/"` e `"/total"` — **sem** o `/produtos`. Isso é o ponto central do Router.

## 🔌 Conectando com `app.use()`

O `app.use()` monta o router sob um **prefixo**:

```jsx
// index.js
const express = require("express")
const produtosRouter = require("./routes/produtos")

const app = express()

app.use("/produtos", produtosRouter)

module.exports = app
```

O prefixo é **somado** ao caminho de cada rota do router:

| Prefixo no `app.use` | Caminho no router | Rota final |
| --- | --- | --- |
| `/produtos` | `/` | `/produtos` |
| `/produtos` | `/total` | `/produtos/total` |
| `/clientes` | `/` | `/clientes` |
| `/clientes` | `/ativos` | `/clientes/ativos` |

> **O router não sabe onde está montado.** Ele conhece só a parte final do caminho. Quem decide o prefixo é o `app.use()` — e por isso o mesmo router poderia ser montado em dois lugares diferentes.

## 📌 Exemplo 2 — Dois routers no mesmo app

```jsx
// routes/clientes.js
const express = require("express")

const router = express.Router()

const clientes = [{ id: 1, nome: "Ana" }]

router.get("/", (req, res) => {
    res.json(clientes)
})

module.exports = router
```

```jsx
// index.js
const express = require("express")
const produtosRouter = require("./routes/produtos")
const clientesRouter = require("./routes/clientes")

const app = express()

app.use("/produtos", produtosRouter)
app.use("/clientes", clientesRouter)

module.exports = app
```

Estrutura de pastas:

```text
projeto/
├── index.js              ← cria o app e monta os routers
├── servidor.js           ← chama o listen
├── package.json
└── routes/
    ├── produtos.js       ← rotas de produto
    └── clientes.js       ← rotas de cliente
```

📌 A convenção é **um arquivo por recurso**, com o nome do recurso no plural. Quem procura a rota de cliente sabe exatamente onde olhar.

# 🏗️ O Router Main

Com dois routers, o `index.js` do Exemplo 2 está bom. Com dez, ele volta a ser uma lista comprida de `require` e `app.use`.

A solução é um **router principal** (*router main*): um router que monta todos os outros, e que o app monta de uma vez só.

## 📌 Exemplo 3 — Criando o router principal

```jsx
// routes/index.js
const express = require("express")
const produtosRouter = require("./produtos")
const clientesRouter = require("./clientes")

const router = express.Router()

router.get("/", (req, res) => {
    res.json({ mensagem: "API da Loja" })
})

router.use("/produtos", produtosRouter)
router.use("/clientes", clientesRouter)

module.exports = router
```

Duas coisas novas:

- o router usa **`router.use()`** para montar outros routers — exatamente como o app faz;
- o caminho do `require` é `"./produtos"`, sem o `routes/`, porque o arquivo **já está** dentro de `routes/`.

```jsx
// index.js
const express = require("express")
const rotas = require("./routes")

const app = express()

app.use("/", rotas)

module.exports = app
```

📌 `require("./routes")` carrega automaticamente o `routes/index.js`. É a mesma convenção do `require("./index")`.

## 🗺️ Como o caminho é montado

Os prefixos se **acumulam** em cada nível:

```
app.use("/",              rotas)            →  /
    router.use("/produtos", produtosRouter) →  /produtos
        router.get("/total", ...)           →  /produtos/total
```

Então, pedir `GET /produtos/total`:

```
1. o app recebe o pedido e passa para o router principal (prefixo "/")
2. o router principal vê que começa com /produtos e passa para o produtosRouter
3. o produtosRouter procura a rota "/total" e responde
```

## 📌 Exemplo 4 — Com prefixo de versão

Uma vantagem prática: trocar o prefixo de toda a API numa linha.

```jsx
app.use("/api", rotas)
```

Agora todas as rotas viram `/api/produtos`, `/api/produtos/total`, `/api/clientes`. Nenhum arquivo de rota foi alterado.

É assim que APIs fazem versionamento:

```jsx
app.use("/api/v1", rotasV1)
app.use("/api/v2", rotasV2)
```

# 🧠 Resumindo a arquitetura

| Arquivo | Responsabilidade |
| --- | --- |
| `servidor.js` | só chama o `listen` |
| `index.js` | cria o `app` e monta o router principal |
| `routes/index.js` | monta todos os routers de recurso |
| `routes/produtos.js` | só as rotas de produto |
| `routes/clientes.js` | só as rotas de cliente |

Cada arquivo tem **um** motivo para ser alterado. Mexer nas rotas de cliente não encosta em nenhum outro arquivo.

# 📖 Conceitos importantes

| Conceito | Significado |
| --- | --- |
| `express.Router()` | cria um conjunto de rotas independente |
| `app.use(prefixo, router)` | monta um router sob um prefixo |
| `router.use(prefixo, outro)` | monta um router dentro de outro |
| `routes/` | pasta com um arquivo por recurso |
| Router main | router que agrupa todos os outros |
| Prefixo | parte do caminho definida no `use`, não no router |

# ⚠️ Erros comuns

### ❌ Repetir o prefixo dentro do router

```jsx
// routes/produtos.js
router.get("/produtos", ...)
```

```jsx
app.use("/produtos", produtosRouter)
```

A rota final vira `/produtos/produtos`. Correto:

```jsx
router.get("/", ...)
```

### ❌ Esquecer de exportar o router

```jsx
const router = express.Router()
router.get("/", ...)
// falta module.exports
```

O `require` devolve `{}` e o `app.use()` quebra. Sempre termine com:

```jsx
module.exports = router
```

### ❌ Exportar o app em vez do router

```jsx
// routes/produtos.js
const app = express()
module.exports = app
```

Dentro de `routes/` é sempre `express.Router()`, nunca `express()`.

### ❌ Usar `app.use` dentro de um arquivo de rota

Dentro de um router é `router.use()`. O `app` existe em um lugar só: o `index.js`.

### ❌ Errar o caminho do require

```jsx
// dentro de routes/index.js
const produtosRouter = require("./routes/produtos")   // ❌
const produtosRouter = require("./produtos")          // ✅
```

O caminho é sempre relativo ao arquivo **onde o `require` está escrito**.

Fim da aula!

_

# 🧩 Exercício Rápido

### 💬 API de Escola com routers separados

Nesta aula você vai criar **três** arquivos.

**1. `routes/alunos.js`** — um `express.Router()` com um array de dois alunos:

```jsx
{ id: 1, nome: "Ana", nota: 8 }
{ id: 2, nome: "Bruno", nota: 6 }
```

E duas rotas:

| Método | Caminho no router | Status | Resposta |
| --- | --- | --- | --- |
| GET | `/` | 200 | o array completo de alunos |
| GET | `/aprovados` | 200 | só os alunos com `nota` maior ou igual a 7 |

**2. `routes/index.js`** — o router principal, que deve:

- responder `GET /` com o JSON `{ "mensagem": "API da Escola" }`
- montar o router de alunos sob o prefixo `/alunos` com `router.use(...)`

**3. `index.js`** — a aplicação, que deve criar o `app` e montar o router principal sob o prefixo `/api` com `app.use(...)`.

As rotas finais devem ficar assim:

```
GET /api
GET /api/alunos
GET /api/alunos/aprovados
```

Exporte com `module.exports` em todos os três arquivos (o `router` nos dois de `routes/` e o `app` no `index.js`).

📌 **Não** chame `app.listen()` e **não** escreva `/alunos` dentro de `routes/alunos.js` — o prefixo é responsabilidade de quem monta.

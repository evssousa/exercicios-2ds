# 🚀 PROJETO 6 — API DE CATÁLOGO DA ESCOLA MUSICA

# 📋 PROJETO

Todas as rotas respondem em JSON.

### RF01 — Rotas de cursos

Crie a pasta `routes`.

Dentro dela, crie o arquivo `cursos.js`.

Use `express.Router()`.

Este é o array de cursos:

```jsx
{ id: 1, nome: "Violao Iniciante", instrumento: "violao", vagas: 12, ativo: true }
{ id: 2, nome: "Teclado Basico", instrumento: "teclado", vagas: 8, ativo: true }
{ id: 3, nome: "Bateria Avancada", instrumento: "bateria", vagas: 5, ativo: false }
```

| Método | Caminho no router | Status | Resposta |
| --- | --- | --- | --- |
| GET | `/` | 200 | o array completo |

Não escreva `cursos` no caminho da rota.

### RF02 — Router principal e app

Dentro de `routes`, crie o arquivo `index.js`.

Use `express.Router()`.

| Método | Caminho | Status | Resposta |
| --- | --- | --- | --- |
| GET | `/` | 200 | o JSON `{ "mensagem": "API de Escola Musica" }` |

Monte o router de cursos no prefixo `/cursos`.

Na raiz, crie o arquivo `index.js`.

Crie o `app`. Monte o router principal no prefixo `/api`.

As rotas finais ficam assim:

```
GET /api
GET /api/cursos
```

# 🧩 EXEMPLO DE ESTRUTURA

Este exemplo usa outro assunto. Serve só para mostrar o formato.

```jsx
// routes/cidades.js
const express = require("express")

const router = express.Router()

const cidades = [{ id: 1, nome: "Recife" }]

router.get("/", (req, res) => {
    res.json(cidades)
})

module.exports = router
```

```jsx
// routes/index.js
const express = require("express")
const cidadesRouter = require("./cidades")

const router = express.Router()

router.get("/", (req, res) => {
    res.json({ mensagem: "API de Exemplo" })
})

router.use("/cidades", cidadesRouter)

module.exports = router
```

```jsx
// index.js
const express = require("express")
const rotas = require("./routes")

const app = express()

app.use("/api", rotas)

module.exports = app
```

# 📁 ESTRUTURA DO PROJETO

```
escola-musica-catalogo
┣ index.js
┣ routes
┃ ┣ index.js
┃ ┗ cursos.js
┣ test
┃ ┗ catalogo.test.js
┣ package.json
┣ package-lock.json
┗ README.md
```

Não use `app.listen()`.

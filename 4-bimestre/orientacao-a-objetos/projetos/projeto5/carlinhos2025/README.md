# 🚀 PROJETO 5 — SERVIDOR DE STATUS DA FARMACIA

# 📋 PROJETO

### RF01 — Configuração

Crie o arquivo `config.js`.

Ele exporta a função `carregarConfig()`.

A função devolve este objeto:

| Propriedade | Vem de | Valor padrão |
| --- | --- | --- |
| `servico` | `process.env.SERVICO` | `"farmacia"` |
| `porta` | `process.env.PORT` | `3000` |

A `porta` é **número**.

### RF02 — Handler

Crie o arquivo `index.js`.

Ele exporta a função `handler(req, res)`.

| `req.url` | `statusCode` | Corpo |
| --- | --- | --- |
| `/` | 200 | `Monitor do servico: <nome do servico>` |
| `/status` | 200 | o JSON abaixo |
| outro | 404 | `Rota nao encontrada` |

O JSON da rota `/status`:

```
{
  "online": true,
  "servico": "farmacia-producao",
  "porta": 4000
}
```

Na rota `/status`, use `res.setHeader("Content-Type", "application/json")`.

# 🧩 EXEMPLO DE ESTRUTURA

Este exemplo usa outro assunto. Serve só para mostrar o formato.

```jsx
// exemplo.js
function carregarExemplo() {
    return {
        cidade: process.env.CIDADE || "sem-cidade",
        numero: Number(process.env.NUMERO) || 10
    }
}

module.exports = { carregarExemplo }
```

```jsx
// outro-exemplo.js
const { carregarExemplo } = require("./exemplo")

function responder(req, res) {
    const dados = carregarExemplo()

    if (req.url === "/cidade") {
        res.statusCode = 200
        res.end(dados.cidade)
        return
    }

    res.statusCode = 404
    res.end("Nao achei")
}

module.exports = responder
```

# 📁 ESTRUTURA DO PROJETO

```
farmacia-status
┣ config.js
┣ index.js
┣ test
┃ ┗ status.test.js
┣ package.json
┣ package-lock.json
┗ README.md
```

```jsx
// config.js
module.exports = { carregarConfig }

// index.js
module.exports = handler
```

Não use `createServer`. Não use `listen`.

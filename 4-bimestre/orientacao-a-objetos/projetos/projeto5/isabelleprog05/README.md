# 🚀 PROJETO 5 — SERVIDOR DE STATUS DA CLINICA

# 🎯 PROBLEMA

Você entrou na equipe de tecnologia da **clinica**, que mantém vários sistemas no ar.

Hoje, quando alguém pergunta se o sistema está funcionando, a resposta vem de alguém abrindo o navegador e olhando. Se o sistema cair num domingo, ninguém descobre até segunda.

A equipe decidiu que todo sistema vai expor um **servidor de status**: um endereço simples que qualquer pessoa — ou qualquer programa de monitoramento — consulta para saber se o serviço está no ar e em que configuração ele está rodando.

Como esse servidor roda em máquinas diferentes (a da equipe, a de testes e a de produção), **nada pode ficar escrito no código**: nome do serviço, porta e ambiente vêm de variáveis de ambiente.

Seu trabalho é construir esse servidor de status.

> ⏱️ **Tempo:** este projeto é feito em **um dia de aula (60 minutos)**, com prazo de entrega estendido. Ele foi dimensionado para ser concluído em 60 a 100 minutos no total.

# 📋 PROJETO

### RF01 — Scripts do projeto

O `package.json` deste projeto deve ter, além do `test` que já existe, dois scripts personalizados:

| Script | Comando |
| --- | --- |
| `start` | `node servidor.js` |
| `dev` | `node --watch --env-file=.env servidor.js` |

O `start` roda o servidor normalmente. O `dev` roda em modo watch, carregando as variáveis do arquivo `.env`.

### RF02 — Configuração por variável de ambiente

O projeto deve ter um módulo de configuração que exporte uma função `carregarConfig()`.

Ela devolve um objeto com três propriedades, lidas de `process.env`:

| Propriedade | Vem de | Valor padrão | Tipo |
| --- | --- | --- | --- |
| `servico` | `process.env.SERVICO` | `"clinica"` | texto |
| `porta` | `process.env.PORT` | `3000` | **número** |
| `ambiente` | `process.env.AMBIENTE` | `"desenvolvimento"` | texto |

Exemplo, com as variáveis definidas:

```
SERVICO=clinica-producao
PORT=4000
AMBIENTE=producao
```

```
carregarConfig()

// { servico: "clinica-producao", porta: 4000, ambiente: "producao" }
```

E sem nenhuma variável definida:

```
carregarConfig()

// { servico: "clinica", porta: 3000, ambiente: "desenvolvimento" }
```

⚠️ A `porta` precisa ser **número**, não texto. Tudo que vem de `process.env` chega como texto.

### RF03 — Rotas de identificação

O projeto deve exportar uma função `handler(req, res)`, usada pelo `createServer` do módulo `http`.

Ela deve responder a dois caminhos:

| `req.url` | `statusCode` | Corpo |
| --- | --- | --- |
| `/` | 200 | `Servidor de status: <nome do servico>` |
| `/vivo` | 200 | `vivo` |

Exemplo, com `SERVICO=clinica-producao`:

```
GET /

200
Servidor de status: clinica-producao
```

```
GET /vivo

200
vivo
```

### RF04 — Rota de status e caminho inexistente

A rota `/status` deve responder **200** com o cabeçalho `Content-Type` igual a `application/json` e, no corpo, o JSON com a configuração atual mais o campo `online`:

```
GET /status

200
Content-Type: application/json

{
  "online": true,
  "servico": "clinica-producao",
  "porta": 4000,
  "ambiente": "producao"
}
```

Qualquer outro caminho deve responder **404** com o corpo:

```
Rota nao encontrada
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
clinica-status
┣ config.js            ← carregarConfig()
┣ index.js             ← handler(req, res)
┣ test
┃ ┗ status.test.js
┣ package.json
┣ package-lock.json
┗ README.md
```

Regras de exportação:

```jsx
// config.js
module.exports = { carregarConfig }

// index.js
module.exports = handler
```

⚠️ **Não** chame `http.createServer()` nem `listen()` dentro do `index.js` — exporte somente a função `handler`. Quem sobe o servidor de verdade é o `servidor.js`, que você pode criar para testar no navegador (ele não é avaliado).

O estudante deverá decidir como organizar as funções dentro dos arquivos.

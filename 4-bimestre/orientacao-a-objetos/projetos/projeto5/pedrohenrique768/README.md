# 🚀 PROJETO 5 — SERVIDOR DE STATUS DA DOCERIA

# 🎯 PROBLEMA

Você entrou na equipe de tecnologia da **doceria**, que mantém vários sistemas no ar.

Hoje, quando alguém pergunta se o sistema está funcionando, a resposta vem de alguém abrindo o navegador e olhando. Se o sistema cair num domingo, ninguém descobre até segunda.

A equipe decidiu que todo sistema vai expor um **servidor de status**: um endereço simples que qualquer pessoa — ou qualquer programa de monitoramento — consulta para saber se o serviço está no ar e em que configuração ele está rodando.

Como esse servidor roda em máquinas diferentes (a da equipe, a de testes e a de produção), **nada pode ficar escrito no código**: nome do serviço, porta vêm de variáveis de ambiente.

Seu trabalho é construir esse servidor de status.

> ⏱️ **Tempo:** este projeto é feito em **um dia de aula (60 minutos)**, com prazo de entrega estendido. Ele foi dimensionado para ser concluído em 60 a 100 minutos no total.

# 💡 A IDEIA DO PROJETO

Um servidor de status é um programa que **responde perguntas simples sobre si mesmo**.

É parecido com a plaquinha de "ABERTO / FECHADO" na porta de uma loja: quem passa na frente não precisa entrar para saber se a loja está funcionando.

Neste projeto você vai escrever duas coisas:

1. Um arquivo que **lê a configuração** (nome do serviço e porta).
2. Um arquivo que **responde aos endereços** pedidos.

O nome do serviço e a porta não ficam escritos no código. Eles vêm de fora, das variáveis de ambiente. Assim o mesmo programa funciona em qualquer máquina.

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

Ela devolve um objeto com duas propriedades, lidas de `process.env`:

| Propriedade | Vem de | Valor padrão | Tipo |
| --- | --- | --- | --- |
| `servico` | `process.env.SERVICO` | `"doceria"` | texto |
| `porta` | `process.env.PORT` | `3000` | **número** |

Exemplo, com as variáveis definidas:

```
SERVICO=doceria-producao
PORT=4000
```

```
carregarConfig()

// { servico: "doceria-producao", porta: 4000 }
```

E sem nenhuma variável definida:

```
carregarConfig()

// { servico: "doceria", porta: 3000 }
```

⚠️ A `porta` precisa ser **número**, não texto. Tudo que vem de `process.env` chega como texto.

### RF03 — Rota de identificação

O projeto deve exportar uma função `handler(req, res)`, usada pelo `createServer` do módulo `http`.

Ela deve responder ao caminho `/` com o `statusCode` **200** e este corpo:

```
Status do servico: <nome do servico>
```

Exemplo, com `SERVICO=doceria-producao`:

```
GET /

200
Status do servico: doceria-producao
```

### RF04 — Rota de status e caminho inexistente

A rota `/status` deve responder **200** com o cabeçalho `Content-Type` igual a `application/json` e, no corpo, o JSON com a configuração atual mais o campo `online`:

```
GET /status

200
Content-Type: application/json

{
  "online": true,
  "servico": "doceria-producao",
  "porta": 4000
}
```

Qualquer outro caminho deve responder **404** com o corpo:

```
Rota nao encontrada
```

# 🪜 POR ONDE COMEÇAR

Faça nesta ordem. Termine um passo antes de ir para o próximo.

1. Abra o `package.json` e acrescente os dois scripts do RF01.
2. Crie o arquivo `config.js`.
3. Dentro dele, crie a função `carregarConfig()`.
4. Essa função devolve um objeto com `servico` e `porta`.
5. O valor de cada um vem de `process.env`. Se não vier nada, use o valor padrão da tabela.
6. No final do `config.js`, exporte a função.
7. Crie o arquivo `index.js`.
8. Dentro dele, importe o `carregarConfig` do `config.js`.
9. Crie a função `handler(req, res)`.
10. Dentro do handler, verifique o `req.url` e responda cada caminho da tabela.
11. No final do `index.js`, exporte o `handler`.
12. Rode `npm test` e conserte o que estiver vermelho, um teste por vez.

# 💬 DICAS

Dica: use `process.env.SERVICO` para ler a variável de ambiente.

Dica: use `||` para definir o valor padrão, assim: `process.env.SERVICO || "valor padrao"`.

Dica: use `Number(...)` para transformar o texto da porta em número.

Dica: use `res.statusCode = 200` para definir o status da resposta.

Dica: use `res.end("texto")` para enviar o corpo e encerrar a resposta.

Dica: use `res.setHeader("Content-Type", "application/json")` antes de enviar um JSON.

Dica: use `JSON.stringify(objeto)` para transformar o objeto em texto antes do `res.end`.

Dica: coloque um `return` depois de cada `res.end(...)`, para o código não continuar.

Dica: o `module.exports` vai sempre na última linha do arquivo.

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
doceria-status
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

⚠️ **Não** chame `http.createServer()` nem `listen()` dentro do `index.js`. Exporte só a função `handler`.

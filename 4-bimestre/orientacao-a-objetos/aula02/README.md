# 🎯 Aula 2 — Modo Watch, Variáveis de Ambiente e Servidor HTTP Básico

## 🎯 Objetivos da Aula

- Usar o **modo watch** do Node para reiniciar o programa automaticamente.
- Entender o que são **variáveis de ambiente** e usar o `process.env`.
- Criar um **servidor HTTP** com o módulo `http`.
- Responder a uma requisição com **status** e **corpo**.

> Na aula anterior criamos scripts no `package.json`. Agora vamos usar um deles de verdade — e colocar nosso primeiro servidor no ar.

# 👀 Modo watch

Ao desenvolver, você muda o código e quer ver o resultado. Sem ajuda, o ciclo é:

```
muda o código → Ctrl+C → node index.js → testa → muda o código → ...
```

O Node resolve isso com a opção `--watch`, que **reinicia o programa sozinho** a cada vez que você salva o arquivo.

## 📌 Exemplo 1 — Rodando em modo watch

```bash
node --watch index.js
```

E, como vimos na aula 1, isso vira um script:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js"
  }
}
```

```bash
npm run dev
```

📌 Use `dev` enquanto programa e `start` quando o programa for rodar "de verdade". Em produção não se usa watch — ficar vigiando arquivos é custo desnecessário.

# 🔐 Variáveis de ambiente

Alguns valores **não devem ficar escritos no código**:

- a porta em que o servidor roda;
- a senha do banco de dados;
- a chave de acesso a um serviço externo;
- se o sistema está em modo de teste ou de produção.

Por que não? Porque mudam de uma máquina para outra, e porque senha no código vai para o Git — e aí qualquer pessoa com acesso ao repositório tem sua senha.

**Variável de ambiente** é um valor que vem **de fora** do programa.

## 📌 Exemplo 2 — Lendo com process.env

O Node expõe todas elas no objeto `process.env`:

```jsx
console.log(process.env.PORT)
```

Rodando assim, a variável é definida na hora:

```bash
PORT=3000 node index.js
```

## 📌 Exemplo 3 — O valor padrão

Se a variável não existir, `process.env.PORT` é `undefined`. Para evitar isso, usamos o operador `||`:

```jsx
const porta = process.env.PORT || 3000

console.log(`Vou subir na porta ${porta}`)
```

Leitura: "use o `PORT` que veio de fora; se não vier nenhum, use 3000".

⚠️ Atenção: o valor de `process.env` é **sempre texto**. `PORT=3000` chega como `"3000"`, não como `3000`. Para comparar com número, converta:

```jsx
const porta = Number(process.env.PORT) || 3000
```

## 📄 O arquivo .env

Digitar as variáveis a cada execução é inviável. A convenção é um arquivo chamado `.env`:

```
PORT=3000
MENSAGEM=Bem-vindo a API
MODO=desenvolvimento
```

E o Node carrega esse arquivo com a opção `--env-file`:

```bash
node --env-file=.env index.js
```

Juntando com o watch, nosso script `dev` final:

```json
{
  "scripts": {
    "dev": "node --watch --env-file=.env index.js"
  }
}
```

### 🚨 O `.env` nunca vai para o Git

É a regra mais importante desta parte. O `.env` tem segredos, então ele entra no `.gitignore`:

```
node_modules/
.env
```

Mas aí ninguém sabe quais variáveis o projeto precisa. A solução é versionar um arquivo de exemplo, o `.env.example`, **sem os valores reais**:

```
PORT=
MENSAGEM=
MODO=
```

| Arquivo | Vai para o Git? | Conteúdo |
| --- | --- | --- |
| `.env` | ❌ nunca | valores reais, inclusive segredos |
| `.env.example` | ✅ sim | só os nomes das variáveis |

# 🏗️ Servidor HTTP

Agora o servidor. O Node já traz o módulo `http` embutido — não precisa instalar nada.

## 📌 Exemplo 4 — O menor servidor possível

```jsx
const http = require("http")

const servidor = http.createServer((req, res) => {
    res.end("Olá, mundo!")
})

servidor.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})
```

Três partes:

| Parte | O que faz |
| --- | --- |
| `require("http")` | carrega o módulo embutido do Node |
| `createServer(fn)` | cria o servidor; a função roda **a cada** requisição |
| `listen(porta, fn)` | põe o servidor no ar e fica esperando |

A função passada ao `createServer` recebe dois objetos:

- **`req`** (*request*) — o que o cliente pediu: caminho, método, cabeçalhos;
- **`res`** (*response*) — o que vamos devolver.

## 📌 Exemplo 5 — Status e cabeçalho

Uma resposta HTTP tem três pedaços: **status**, **cabeçalhos** e **corpo**.

```jsx
const servidor = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("Tudo funcionando")
})
```

| Comando | O que define |
| --- | --- |
| `res.statusCode = 200` | o status da resposta |
| `res.setHeader(...)` | um cabeçalho (aqui, o tipo do conteúdo) |
| `res.end(texto)` | envia o corpo e **encerra** a resposta |

Os status mais usados:

| Código | Significado | Quando usar |
| --- | --- | --- |
| 200 | OK | deu tudo certo |
| 201 | Created | criou algo novo |
| 404 | Not Found | o caminho não existe |
| 500 | Internal Server Error | erro do servidor |

## 📌 Exemplo 6 — Respondendo caminhos diferentes

O caminho pedido está em `req.url`:

```jsx
const servidor = http.createServer((req, res) => {
    if (req.url === "/") {
        res.statusCode = 200
        res.end("Página inicial")
        return
    }

    if (req.url === "/status") {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({ status: "online" }))
        return
    }

    res.statusCode = 404
    res.end("Não encontrado")
})
```

📌 Repare no `return` depois de cada `res.end()`: sem ele, o código continua e tenta responder duas vezes — o que gera erro.

E note o `JSON.stringify()`: o corpo da resposta é sempre **texto**. Para enviar um objeto, ele precisa ser convertido.

## 🧠 Separando o handler do servidor

Esse jeito de escrever funciona, mas tem um problema: a função está **presa dentro** do `createServer`, então não há como testá-la sem subir o servidor.

A solução é dar um nome a ela:

```jsx
function handler(req, res) {
    res.statusCode = 200
    res.end("Olá")
}

const servidor = http.createServer(handler)

servidor.listen(3000)

module.exports = handler
```

Agora o `handler` é uma função normal, que recebe dois objetos e mexe neles. Dá para chamá-la direto, passando objetos de mentira — e é exatamente assim que o teste desta aula funciona:

```jsx
const res = { statusCode: 0, corpo: "", end(t) { this.corpo = t } }

handler({ url: "/" }, res)

// agora é possível verificar res.statusCode e res.corpo
```

> **Código que só funciona rodando o servidor inteiro é código difícil de testar. Separar o handler resolve isso.**

# 📖 Conceitos importantes

| Conceito | Significado |
| --- | --- |
| `--watch` | reinicia o programa quando um arquivo é salvo |
| `--env-file` | carrega variáveis de ambiente de um arquivo |
| `process.env` | objeto com as variáveis de ambiente |
| `.env` | arquivo com os valores reais (fora do Git) |
| `.env.example` | arquivo de exemplo, só com os nomes |
| `http.createServer` | cria o servidor HTTP |
| `req` | dados da requisição recebida |
| `res` | resposta a ser devolvida |
| `req.url` | caminho que o cliente pediu |
| `res.statusCode` | status da resposta |
| `res.end()` | envia o corpo e encerra |

# ⚠️ Erros comuns

### ❌ Esquecer o `res.end()`

```jsx
http.createServer((req, res) => {
    res.statusCode = 200
})
```

O navegador fica carregando para sempre — a resposta nunca é encerrada.

Correto:

```jsx
http.createServer((req, res) => {
    res.statusCode = 200
    res.end("Pronto")
})
```

### ❌ Responder duas vezes

```jsx
res.end("Primeira")
res.end("Segunda")
```

Erro: a resposta já foi enviada. Sempre `return` depois do `res.end()`.

### ❌ Mandar objeto direto no `res.end()`

```jsx
res.end({ status: "online" })
```

Correto:

```jsx
res.end(JSON.stringify({ status: "online" }))
```

### ❌ Tratar `process.env` como número

```jsx
if (process.env.PORT === 3000) { }   // nunca é verdade
```

Correto:

```jsx
if (Number(process.env.PORT) === 3000) { }
```

### ❌ Subir o `.env` para o Git

Segredo no repositório é segredo vazado. Sempre no `.gitignore`.

Fim da aula!

_

# 🧩 Exercício Rápido

### 💬 Handler de um servidor de status

Crie um arquivo chamado `index.js` com uma função chamada `handler`, que receba `(req, res)` e responda de acordo com o `req.url`:

| `req.url` | `statusCode` | Corpo da resposta |
| --- | --- | --- |
| `/` | 200 | `"API no ar"` |
| `/status` | 200 | o JSON `{ "status": "online", "porta": <porta> }` |
| qualquer outro | 404 | `"Rota nao encontrada"` |

Regras:

- a `<porta>` deve vir de `process.env.PORT`, convertida para **número**, com **3000** como valor padrão quando a variável não existir;
- na rota `/status`, defina o cabeçalho `Content-Type` como `application/json` usando `res.setHeader(...)`, e envie o corpo com `JSON.stringify(...)`;
- use `res.end(...)` para enviar o corpo em todas as rotas.

No final, exporte a função com `module.exports = handler`.

📌 **Não** chame `createServer` nem `listen` no `index.js` — exporte apenas a função. O teste chama o `handler` diretamente, com objetos `req` e `res` simulados.

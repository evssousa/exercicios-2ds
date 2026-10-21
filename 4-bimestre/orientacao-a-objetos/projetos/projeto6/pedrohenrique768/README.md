# 🚀 PROJETO 6 — API DE CATÁLOGO DA MARCENARIA

# 🎯 PROBLEMA

A **Marcenaria** está montando o site novo e precisa de uma API para alimentar a página de catálogo.

A primeira versão foi escrita às pressas, com **todas as rotas dentro de um único arquivo**. Esse arquivo passou de 300 linhas em duas semanas, e agora duas pessoas não conseguem mexer em rotas diferentes sem dar conflito no Git.

A equipe decidiu refazer a API com a organização que a empresa usa nos outros projetos: **um arquivo de rotas por recurso**, dentro de uma pasta `routes/`, todos montados por um **router principal**.

A API também vai ganhar um prefixo de versão — `/api` — para que no futuro seja possível lançar uma `/api/v2` sem quebrar quem já usa a atual.

Seu trabalho é construir essa API organizada.

> ⏱️ **Tempo:** este projeto é feito em **um dia de aula (60 minutos)**, com prazo de entrega estendido. Ele foi dimensionado para ser concluído em 60 a 100 minutos no total.

# 💡 A IDEIA DO PROJETO

Quando um programa tem muitas rotas, colocar todas no mesmo arquivo deixa tudo difícil de achar.

A solução é separar: **cada assunto fica no seu próprio arquivo**.

É como uma pasta de documentos. Em vez de uma pilha única de papéis, você usa uma divisória para cada assunto.

No Express, essa divisória se chama **Router**.

Cada Router guarda as rotas de um assunto. Depois, o arquivo principal junta todos.

Uma coisa importante: o Router **não sabe** onde ele vai ser colocado. Ele só conhece o final do endereço. Quem decide o começo do endereço é quem monta o Router.

# 📋 PROJETO

Todas as rotas devem responder em **JSON**.

### RF01 — Rotas de moveis

Deve existir um arquivo de rotas para o recurso **moveis**, com um `Router` do Express.

O catálogo inicial tem três registros, nesta ordem:

```jsx
{ id: 1, nome: "Banco", madeira: "pinus", preco: 180, disponivel: true }
{ id: 2, nome: "Estante", madeira: "mdf", preco: 450, disponivel: true }
{ id: 3, nome: "Mesa", madeira: "eucalipto", preco: 700, disponivel: false }
```

O router deve ter estas rotas:

| Método | Caminho **no router** | Status | Resposta |
| --- | --- | --- | --- |
| GET | `/` | 200 | o array completo de moveis |
| GET | `/total` | 200 | o JSON `{ "total": <quantidade de moveis> }` |
| POST | `/` | 201 | o JSON `{ "mensagem": "Cadastro de movel realizado" }` |

⚠️ Os caminhos declarados no router **não** devem conter a palavra `moveis`. O prefixo é responsabilidade de quem monta o router.

O `total` deve ser calculado a partir do array, nunca escrito à mão.

### RF02 — Router principal

Deve existir um **router principal**, dentro da mesma pasta de rotas, responsável por:

- responder `GET /` com o JSON `{ "mensagem": "API de Marcenaria" }`;
- montar o router de moveis sob o prefixo `/moveis`;

⚠️ O router principal monta os outros com `router.use(...)`, não com `app.use(...)`. O `app` existe em um lugar só.

### RF03 — Aplicação com prefixo de versão

A aplicação deve criar o `app` do Express e montar o router principal sob o prefixo **`/api`**.

Com isso, as rotas finais da API ficam:

```
GET  /api
GET  /api/moveis
GET  /api/moveis/total
POST /api/moveis
```

E caminhos **sem** o prefixo devem responder **404**, porque nada está montado na raiz:

```
GET /moveis      → 404
```

# 🪜 POR ONDE COMEÇAR

Faça nesta ordem. Termine um passo antes de ir para o próximo.

1. Crie a pasta `routes`.
2. Dentro dela, crie o arquivo `moveis.js`.
3. Nesse arquivo, importe o Express e crie um `router` com `express.Router()`.
4. Copie o array de moveis do RF01 para dentro desse arquivo.
5. Crie a rota `GET /` que responde o array todo.
6. Crie a rota `GET /total` que responde a quantidade.
7. Crie a rota `POST /` que responde a mensagem com status 201.
8. No final do arquivo, exporte o `router`.
9. Dentro de `routes`, crie o arquivo `index.js`.
10. Nesse arquivo, crie outro `router`.
11. Crie a rota `GET /` que responde a mensagem da API.
12. Monte o router de moveis com `router.use("/moveis", ...)`.
13. Exporte esse `router`.
14. Na raiz do projeto, crie o arquivo `index.js`.
15. Nele, crie o `app` com `express()` e monte o router principal com `app.use("/api", ...)`.
16. Exporte o `app`.
17. Rode `npm test` e conserte o que estiver vermelho, um teste por vez.

# 💬 DICAS

Dica: use `express.Router()` nos arquivos dentro de `routes`, nunca `express()`.

Dica: use `express()` só no `index.js` da raiz.

Dica: dentro do router, o caminho da rota principal é só `"/"`.

Dica: use `res.json(...)` para responder em JSON.

Dica: use `res.status(201).json(...)` quando o status não for 200.

Dica: use `.length` para contar quantos itens o array tem.

Dica: dentro de `routes/index.js`, o caminho do require é `"./moveis"`, sem a pasta `routes`.

Dica: no `index.js` da raiz, o caminho do require é `"./routes"`.

Dica: todo arquivo termina com `module.exports`.

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
marcenaria-catalogo
┣ index.js                 ← cria o app e monta o router principal em /api
┣ routes
┃ ┣ index.js               ← router principal
┃ ┗ moveis.js            ← rotas de moveis
┣ test
┃ ┗ catalogo.test.js
┣ package.json
┣ package-lock.json
┗ README.md
```

Regras de exportação:

```jsx
// todos os arquivos dentro de routes/
module.exports = router

// index.js
module.exports = app
```

⚠️ **Não** chame `app.listen()` dentro do `index.js`. Se quiser testar no navegador, crie um `servidor.js` separado que importe o `app` e chame o `listen` (ele não é avaliado).

O estudante deverá decidir como organizar as rotas dentro de cada arquivo.

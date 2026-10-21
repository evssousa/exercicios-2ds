# 🚀 PROJETO 6 — API DE CATÁLOGO DA TEATRO

# 🎯 PROBLEMA

A **Teatro** está montando o site novo e precisa de uma API para alimentar a página de catálogo.

A primeira versão foi escrita às pressas, com **todas as rotas dentro de um único arquivo**. Esse arquivo passou de 300 linhas em duas semanas, e agora duas pessoas não conseguem mexer em rotas diferentes sem dar conflito no Git.

A equipe decidiu refazer a API com a organização que a empresa usa nos outros projetos: **um arquivo de rotas por recurso**, dentro de uma pasta `routes/`, todos montados por um **router principal**.

A API também vai ganhar um prefixo de versão — `/api` — para que no futuro seja possível lançar uma `/api/v2` sem quebrar quem já usa a atual.

Seu trabalho é construir essa API organizada.

> ⏱️ **Tempo:** este projeto é feito em **um dia de aula (60 minutos)**, com prazo de entrega estendido. Ele foi dimensionado para ser concluído em 60 a 100 minutos no total.

# 📋 PROJETO

Todas as rotas devem responder em **JSON**.

### RF01 — Rotas de pecas

Deve existir um arquivo de rotas para o recurso **pecas**, com um `Router` do Express.

O catálogo inicial tem três registros, nesta ordem:

```jsx
{ id: 1, titulo: "A Visita", genero: "drama", preco: 40, emCartaz: true }
{ id: 2, titulo: "O Noviço", genero: "comedia", preco: 35, emCartaz: true }
{ id: 3, titulo: "Hamlet", genero: "tragedia", preco: 60, emCartaz: false }
```

O router deve ter estas rotas:

| Método | Caminho **no router** | Status | Resposta |
| --- | --- | --- | --- |
| GET | `/` | 200 | o array completo de pecas |
| GET | `/em-cartaz` | 200 | só os pecas com `emCartaz` igual a `true` |
| GET | `/total` | 200 | o JSON `{ "total": <quantidade de pecas> }` |
| POST | `/` | 201 | o JSON `{ "mensagem": "Cadastro de peca realizado" }` |

⚠️ Os caminhos declarados no router **não** devem conter a palavra `pecas`. O prefixo é responsabilidade de quem monta o router.

O `total` deve ser calculado a partir do array, nunca escrito à mão.

### RF02 — Rotas de espectadores

Deve existir um segundo arquivo de rotas, para o recurso **espectadores**, também com um `Router`.

Os registros iniciais são:

```jsx
{ id: 1, nome: "Ana", tipo: "meia" }
{ id: 2, nome: "Bruno", tipo: "inteira" }
```

| Método | Caminho **no router** | Status | Resposta |
| --- | --- | --- | --- |
| GET | `/` | 200 | o array completo de espectadores |
| GET | `/total` | 200 | o JSON `{ "total": <quantidade de espectadores> }` |

📌 Note que `/total` existe nos dois routers e não há conflito: cada um só é consultado dentro do seu próprio prefixo.

### RF03 — Router principal

Deve existir um **router principal**, dentro da mesma pasta de rotas, responsável por:

- responder `GET /` com o JSON `{ "mensagem": "API de Teatro" }`;
- montar o router de pecas sob o prefixo `/pecas`;
- montar o router de espectadores sob o prefixo `/espectadores`;

⚠️ O router principal monta os outros com `router.use(...)`, não com `app.use(...)`. O `app` existe em um lugar só.

### RF04 — Aplicação com prefixo de versão

A aplicação deve criar o `app` do Express e montar o router principal sob o prefixo **`/api`**.

Com isso, as rotas finais da API ficam:

```
GET  /api
GET  /api/pecas
GET  /api/pecas/em-cartaz
GET  /api/pecas/total
POST /api/pecas
GET  /api/espectadores
GET  /api/espectadores/total
```

E caminhos **sem** o prefixo devem responder **404**, porque nada está montado na raiz:

```
GET /pecas      → 404
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
teatro-catalogo
┣ index.js                 ← cria o app e monta o router principal em /api
┣ routes
┃ ┣ index.js               ← router principal
┃ ┣ pecas.js             ← rotas de pecas
┃ ┗ espectadores.js      ← rotas de espectadores
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

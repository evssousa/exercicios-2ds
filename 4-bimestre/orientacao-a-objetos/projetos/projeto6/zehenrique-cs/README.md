# 🚀 PROJETO 6 — API DE CATÁLOGO DA BARBEARIA

# 🎯 PROBLEMA

A **Barbearia** está montando o site novo e precisa de uma API para alimentar a página de catálogo.

A primeira versão foi escrita às pressas, com **todas as rotas dentro de um único arquivo**. Esse arquivo passou de 300 linhas em duas semanas, e agora duas pessoas não conseguem mexer em rotas diferentes sem dar conflito no Git.

A equipe decidiu refazer a API com a organização que a empresa usa nos outros projetos: **um arquivo de rotas por recurso**, dentro de uma pasta `routes/`, todos montados por um **router principal**.

A API também vai ganhar um prefixo de versão — `/api` — para que no futuro seja possível lançar uma `/api/v2` sem quebrar quem já usa a atual.

Seu trabalho é construir essa API organizada.

> ⏱️ **Tempo:** este projeto é feito em **um dia de aula (60 minutos)**, com prazo de entrega estendido. Ele foi dimensionado para ser concluído em 60 a 100 minutos no total.

# 📋 PROJETO

Todas as rotas devem responder em **JSON**.

### RF01 — Rotas de cortes

Deve existir um arquivo de rotas para o recurso **cortes**, com um `Router` do Express.

O catálogo inicial tem três registros, nesta ordem:

```jsx
{ id: 1, nome: "Social", estilo: "classico", preco: 35, ativo: true }
{ id: 2, nome: "Degrade", estilo: "moderno", preco: 45, ativo: true }
{ id: 3, nome: "Navalhado", estilo: "moderno", preco: 55, ativo: false }
```

O router deve ter estas rotas:

| Método | Caminho **no router** | Status | Resposta |
| --- | --- | --- | --- |
| GET | `/` | 200 | o array completo de cortes |
| GET | `/ativos` | 200 | só os cortes com `ativo` igual a `true` |
| GET | `/total` | 200 | o JSON `{ "total": <quantidade de cortes> }` |
| POST | `/` | 201 | o JSON `{ "mensagem": "Cadastro de corte realizado" }` |

⚠️ Os caminhos declarados no router **não** devem conter a palavra `cortes`. O prefixo é responsabilidade de quem monta o router.

O `total` deve ser calculado a partir do array, nunca escrito à mão.

### RF02 — Rotas de clientes

Deve existir um segundo arquivo de rotas, para o recurso **clientes**, também com um `Router`.

Os registros iniciais são:

```jsx
{ id: 1, nome: "Ana", contato: "9999-3333" }
{ id: 2, nome: "Bruno", contato: "9999-4444" }
```

| Método | Caminho **no router** | Status | Resposta |
| --- | --- | --- | --- |
| GET | `/` | 200 | o array completo de clientes |
| GET | `/total` | 200 | o JSON `{ "total": <quantidade de clientes> }` |

📌 Note que `/total` existe nos dois routers e não há conflito: cada um só é consultado dentro do seu próprio prefixo.

### RF03 — Router principal

Deve existir um **router principal**, dentro da mesma pasta de rotas, responsável por:

- responder `GET /` com o JSON `{ "mensagem": "API de Barbearia" }`;
- montar o router de cortes sob o prefixo `/cortes`;
- montar o router de clientes sob o prefixo `/clientes`;
- montar o router de promoções sob o prefixo `/promocoes`;

⚠️ O router principal monta os outros com `router.use(...)`, não com `app.use(...)`. O `app` existe em um lugar só.

### RF04 — Aplicação com prefixo de versão

A aplicação deve criar o `app` do Express e montar o router principal sob o prefixo **`/api`**.

Com isso, as rotas finais da API ficam:

```
GET  /api
GET  /api/cortes
GET  /api/cortes/ativos
GET  /api/cortes/total
POST /api/cortes
GET  /api/clientes
GET  /api/clientes/total
GET  /api/promocoes
GET  /api/promocoes/total
```

E caminhos **sem** o prefixo devem responder **404**, porque nada está montado na raiz:

```
GET /cortes      → 404
```

### RF05 — Rotas de promoções

Deve existir um terceiro arquivo de rotas, para o recurso **promocoes**, com um `Router`.

As promoções iniciais são:

```jsx
{ id: 1, nome: "Social", desconto: 10 }
{ id: 2, nome: "Degrade", desconto: 20 }
```

| Método | Caminho **no router** | Status | Resposta |
| --- | --- | --- | --- |
| GET | `/` | 200 | o array completo de promoções |
| GET | `/total` | 200 | o JSON `{ "total": <quantidade de promoções> }` |

Esse router também é montado pelo router principal (RF03), sob o prefixo `/promocoes`.

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
barbearia-catalogo
┣ index.js                 ← cria o app e monta o router principal em /api
┣ routes
┃ ┣ index.js               ← router principal
┃ ┣ cortes.js            ← rotas de cortes
┃ ┣ clientes.js          ← rotas de clientes
┃ ┗ promocoes.js           ← rotas de promocoes
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

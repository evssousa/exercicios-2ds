# 🚀 PROJETO 6 — API DE CATÁLOGO DA LAVA RAPIDO

# 🎯 PROBLEMA

A **Lava Rapido** está montando o site novo e precisa de uma API para alimentar a página de catálogo.

A primeira versão foi escrita às pressas, com **todas as rotas dentro de um único arquivo**. Esse arquivo passou de 300 linhas em duas semanas, e agora duas pessoas não conseguem mexer em rotas diferentes sem dar conflito no Git.

A equipe decidiu refazer a API com a organização que a empresa usa nos outros projetos: **um arquivo de rotas por recurso**, dentro de uma pasta `routes/`, todos montados por um **router principal**.

A API também vai ganhar um prefixo de versão — `/api` — para que no futuro seja possível lançar uma `/api/v2` sem quebrar quem já usa a atual.

Seu trabalho é construir essa API organizada.

> ⏱️ **Tempo:** este projeto é feito em **um dia de aula (60 minutos)**, com prazo de entrega estendido. Ele foi dimensionado para ser concluído em 60 a 100 minutos no total.

# 📋 PROJETO

Todas as rotas devem responder em **JSON**.

### RF01 — Rotas de pacotes

Deve existir um arquivo de rotas para o recurso **pacotes**, com um `Router` do Express.

O catálogo inicial tem três registros, nesta ordem:

```jsx
{ id: 1, nome: "Simples", porte: "pequeno", preco: 35, disponivel: true }
{ id: 2, nome: "Completo", porte: "medio", preco: 70, disponivel: true }
{ id: 3, nome: "Premium", porte: "grande", preco: 140, disponivel: false }
```

O router deve ter estas rotas:

| Método | Caminho **no router** | Status | Resposta |
| --- | --- | --- | --- |
| GET | `/` | 200 | o array completo de pacotes |
| GET | `/disponiveis` | 200 | só os pacotes com `disponivel` igual a `true` |
| GET | `/total` | 200 | o JSON `{ "total": <quantidade de pacotes> }` |
| POST | `/` | 201 | o JSON `{ "mensagem": "Cadastro de pacote realizado" }` |

⚠️ Os caminhos declarados no router **não** devem conter a palavra `pacotes`. O prefixo é responsabilidade de quem monta o router.

O `total` deve ser calculado a partir do array, nunca escrito à mão.

### RF02 — Rotas de motoristas

Deve existir um segundo arquivo de rotas, para o recurso **motoristas**, também com um `Router`.

Os registros iniciais são:

```jsx
{ id: 1, nome: "Ana", veiculo: "Fiesta" }
{ id: 2, nome: "Bruno", veiculo: "Strada" }
```

| Método | Caminho **no router** | Status | Resposta |
| --- | --- | --- | --- |
| GET | `/` | 200 | o array completo de motoristas |
| GET | `/total` | 200 | o JSON `{ "total": <quantidade de motoristas> }` |

📌 Note que `/total` existe nos dois routers e não há conflito: cada um só é consultado dentro do seu próprio prefixo.

### RF03 — Router principal

Deve existir um **router principal**, dentro da mesma pasta de rotas, responsável por:

- responder `GET /` com o JSON `{ "mensagem": "API de Lava Rapido" }`;
- montar o router de pacotes sob o prefixo `/pacotes`;
- montar o router de motoristas sob o prefixo `/motoristas`;

⚠️ O router principal monta os outros com `router.use(...)`, não com `app.use(...)`. O `app` existe em um lugar só.

### RF04 — Aplicação com prefixo de versão

A aplicação deve criar o `app` do Express e montar o router principal sob o prefixo **`/api`**.

Com isso, as rotas finais da API ficam:

```
GET  /api
GET  /api/pacotes
GET  /api/pacotes/disponiveis
GET  /api/pacotes/total
POST /api/pacotes
GET  /api/motoristas
GET  /api/motoristas/total
```

E caminhos **sem** o prefixo devem responder **404**, porque nada está montado na raiz:

```
GET /pacotes      → 404
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
lava-rapido-catalogo
┣ index.js                 ← cria o app e monta o router principal em /api
┣ routes
┃ ┣ index.js               ← router principal
┃ ┣ pacotes.js           ← rotas de pacotes
┃ ┗ motoristas.js        ← rotas de motoristas
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

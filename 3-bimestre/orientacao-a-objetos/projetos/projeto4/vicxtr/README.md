# 🚀 PROJETO 4 — LOJA DE MATERIAIS DIDÁTICOS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma editora que está informatizando o catálogo de materiais didáticos.

Hoje, o cadastro de cada material é feito manualmente, o que já gerou materiais cadastrados com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o material correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Material (classe base)

O sistema deve possuir uma estrutura base `Material`, com atributos privados `titulo` e `edicao`, acessíveis através de getters.

Toda instância de `Material` deve possuir um método `descricao()`, que retorna:

```
Material cadastrado no catálogo
```

### RF02 — Apostila

Deve existir uma estrutura específica `Apostila`, que reaproveita as características comuns de `Material`.

`Apostila` deve sobrescrever `descricao()`, retornando:

```
Apostila disponível para venda
```

### RF03 — LivroTexto

Deve existir uma estrutura específica `LivroTexto`, que reaproveita as características comuns de `Material`.

`LivroTexto` deve sobrescrever `descricao()`, retornando:

```
Livro-texto disponível para venda
```

### RF04 — Digital

Deve existir uma estrutura específica `Digital`, que reaproveita as características comuns de `Material`.

`Digital` deve sobrescrever `descricao()`, retornando:

```
Material digital disponível para venda
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
apostila
livrotexto
digital
```

Por exemplo, ao solicitar:

```
criar("apostila", "Matemática Essencial", 3)
```

o sistema deverá retornar uma instância de `Apostila` com `titulo` `"Matemática Essencial"` e `edicao` `3`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de material inválido
```

### RF06 — Editora

O sistema deve permitir criar um(a) `Editora`, contendo `nome` e `anoDePublicacao`.

Exemplo:

```
const item = new Editora("Editora Alfa", 2023)

item.nome   // "Editora Alfa"
item.anoDePublicacao // 2023
```

### RF07 — CatalogoEditorial

O sistema deve permitir criar um(a) `CatalogoEditorial`, identificado por um `nome`.

Um(a) `CatalogoEditorial` deve permitir adicionar membros (instâncias de `Apostila`) e categorias (instâncias de `Editora`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new CatalogoEditorial("Catálogo Fundamental II")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Editora { nome: "Editora Alfa", anoDePublicacao: 2023 } ]
grupo.membros    // [ Apostila { titulo: "Matemática Essencial", edicao: 3 } ]
```

### RF08 — Pedido

O sistema deve permitir criar um(a) `Pedido`, associando um `valor` (quantidade) a um(a) `Editora`.

Uma instância de `Apostila` deve permitir receber vários registros do tipo `Pedido`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Pedido(120, item)

membro.adicionarRegistro(registro)

membro.registros // [ Pedido { valor: 120, editora: Editora { nome: "Editora Alfa", anoDePublicacao: 2023 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-loja-de-materiais-didaticos
┣ class
┃ ┣ Material.js
┃ ┣ Apostila.js
┃ ┣ LivroTexto.js
┃ ┣ Digital.js
┃ ┣ Editora.js
┃ ┣ CatalogoEditorial.js
┃ ┣ Pedido.js
┃ ┗ MaterialFactory.js
┣ test
┃ ┗ projeto.test.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

## ▶️ Como executar

```
npm install
node index.js
```

## 🧪 Como executar os testes

```
npm install
npm test
```

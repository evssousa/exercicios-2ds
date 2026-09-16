# 🚀 PROJETO 4 — LOJA DE ELETRÔNICOS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma loja de eletrônicos que está organizando o catálogo online.

Hoje, o cadastro de cada produto é feito manualmente, o que já gerou produtos cadastrados com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o produto correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Produto (classe base)

O sistema deve possuir uma estrutura base `Produto`, com atributos privados `nome` e `garantiaEmMeses`, acessíveis através de getters.

Toda instância de `Produto` deve possuir um método `descricao()`, que retorna:

```
Produto cadastrado na loja
```

### RF02 — Smartphone

Deve existir uma estrutura específica `Smartphone`, que reaproveita as características comuns de `Produto`.

`Smartphone` deve sobrescrever `descricao()`, retornando:

```
Smartphone disponível para venda
```

### RF03 — Notebook

Deve existir uma estrutura específica `Notebook`, que reaproveita as características comuns de `Produto`.

`Notebook` deve sobrescrever `descricao()`, retornando:

```
Notebook disponível para venda
```

### RF04 — Tablet

Deve existir uma estrutura específica `Tablet`, que reaproveita as características comuns de `Produto`.

`Tablet` deve sobrescrever `descricao()`, retornando:

```
Tablet disponível para venda
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
smartphone
notebook
tablet
```

Por exemplo, ao solicitar:

```
criar("smartphone", "Galaxy X", 12)
```

o sistema deverá retornar uma instância de `Smartphone` com `nome` `"Galaxy X"` e `garantiaEmMeses` `12`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de produto inválido
```

### RF06 — Marca

O sistema deve permitir criar um(a) `Marca`, contendo `nome` e `anoDeLancamento`.

Exemplo:

```
const item = new Marca("TechOne", 2023)

item.nome   // "TechOne"
item.anoDeLancamento // 2023
```

### RF07 — Estoque

O sistema deve permitir criar um(a) `Estoque`, identificado por um `nome`.

Um(a) `Estoque` deve permitir adicionar membros (instâncias de `Smartphone`) e categorias (instâncias de `Marca`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Estoque("Estoque Central")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Marca { nome: "TechOne", anoDeLancamento: 2023 } ]
grupo.membros    // [ Smartphone { nome: "Galaxy X", garantiaEmMeses: 12 } ]
```

### RF08 — Venda

O sistema deve permitir criar um(a) `Venda`, associando um `valor` (valor) a um(a) `Marca`.

Uma instância de `Smartphone` deve permitir receber vários registros do tipo `Venda`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Venda(1999, item)

membro.adicionarRegistro(registro)

membro.registros // [ Venda { valor: 1999, marca: Marca { nome: "TechOne", anoDeLancamento: 2023 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-loja-de-eletronicos
┣ class
┃ ┣ Produto.js
┃ ┣ Smartphone.js
┃ ┣ Notebook.js
┃ ┣ Tablet.js
┃ ┣ Marca.js
┃ ┣ Estoque.js
┃ ┣ Venda.js
┃ ┗ ProdutoFactory.js
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

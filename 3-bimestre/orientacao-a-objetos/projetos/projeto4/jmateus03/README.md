# 🚀 PROJETO 4 — LOJA DE ROUPAS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma loja de roupas que está organizando o catálogo online.

Hoje, o cadastro de cada peça é feito manualmente, o que já gerou peças cadastradas com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar a peça correta a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Peca (classe base)

O sistema deve possuir uma estrutura base `Peca`, com atributos privados `nome` e `tamanhoNumerico`, acessíveis através de getters.

Toda instância de `Peca` deve possuir um método `descricao()`, que retorna:

```
Peça cadastrada na loja
```

### RF02 — Camiseta

Deve existir uma estrutura específica `Camiseta`, que reaproveita as características comuns de `Peca`.

`Camiseta` deve sobrescrever `descricao()`, retornando:

```
Camiseta disponível para venda
```

### RF03 — Calca

Deve existir uma estrutura específica `Calca`, que reaproveita as características comuns de `Peca`.

`Calca` deve sobrescrever `descricao()`, retornando:

```
Calça disponível para venda
```

### RF04 — Casaco

Deve existir uma estrutura específica `Casaco`, que reaproveita as características comuns de `Peca`.

`Casaco` deve sobrescrever `descricao()`, retornando:

```
Casaco disponível para venda
```

### RF05 — Vestido

Deve existir uma estrutura específica `Vestido`, que reaproveita as características comuns de `Peca`.

`Vestido` deve sobrescrever `descricao()`, retornando:

```
Vestido disponível para venda
```

### RF06 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
camiseta
calca
casaco
vestido
```

Por exemplo, ao solicitar:

```
criar("camiseta", "Básica Azul", 42)
```

o sistema deverá retornar uma instância de `Camiseta` com `nome` `"Básica Azul"` e `tamanhoNumerico` `42`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de peça inválido
```

### RF07 — Tecido

O sistema deve permitir criar um(a) `Tecido`, contendo `nome` e `resistencia`.

Exemplo:

```
const item = new Tecido("Algodão", 7)

item.nome   // "Algodão"
item.resistencia // 7
```

### RF08 — Colecao

O sistema deve permitir criar um(a) `Colecao`, identificado por um `nome`.

Um(a) `Colecao` deve permitir adicionar membros (instâncias de `Camiseta`) e categorias (instâncias de `Tecido`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Colecao("Coleção Verão")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Tecido { nome: "Algodão", resistencia: 7 } ]
grupo.membros    // [ Camiseta { nome: "Básica Azul", tamanhoNumerico: 42 } ]
```

### RF09 — Venda

O sistema deve permitir criar um(a) `Venda`, associando um `valor` (valor) a um(a) `Tecido`.

Uma instância de `Camiseta` deve permitir receber vários registros do tipo `Venda`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Venda(59.9, item)

membro.adicionarRegistro(registro)

membro.registros // [ Venda { valor: 59.9, tecido: Tecido { nome: "Algodão", resistencia: 7 } } ]
```

### RF10 — Vestido

Além dos tipos anteriores, o sistema também deve reconhecer o tipo `Vestido`, que reaproveita as características comuns de `Peca`.

`Vestido` deve sobrescrever `descricao()`, retornando:

```
Vestido disponível para venda
```

A criação centralizada (RF de Factory) também deve aceitar o tipo:

```
vestido
```

### RF11 — Validação de valor

Um(a) `Venda` não pode ter um `valor` negativo.

Ao tentar adicionar um registro com `valor` negativo, `adicionarRegistro` deve gerar um erro:

```
Valor inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-loja-de-roupas
┣ class
┃ ┣ Peca.js
┃ ┣ Camiseta.js
┃ ┣ Calca.js
┃ ┣ Casaco.js
┃ ┣ Vestido.js
┃ ┣ Tecido.js
┃ ┣ Colecao.js
┃ ┣ Venda.js
┃ ┗ PecaFactory.js
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

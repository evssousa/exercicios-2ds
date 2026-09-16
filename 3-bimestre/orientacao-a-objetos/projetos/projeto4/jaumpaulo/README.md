# 🚀 PROJETO 4 — DELIVERY DE COMIDA

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um aplicativo de delivery que está reorganizando o cardápio.

Hoje, o cadastro de cada item é feito manualmente, o que já gerou itens cadastrados com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o item de cardápio correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — ItemCardapio (classe base)

O sistema deve possuir uma estrutura base `ItemCardapio`, com atributos privados `nome` e `tempoDePreparoEmMinutos`, acessíveis através de getters.

Toda instância de `ItemCardapio` deve possuir um método `descricao()`, que retorna:

```
Item cadastrado no cardápio
```

### RF02 — Lanche

Deve existir uma estrutura específica `Lanche`, que reaproveita as características comuns de `ItemCardapio`.

`Lanche` deve sobrescrever `descricao()`, retornando:

```
Lanche pronto para o pedido
```

### RF03 — Pizza

Deve existir uma estrutura específica `Pizza`, que reaproveita as características comuns de `ItemCardapio`.

`Pizza` deve sobrescrever `descricao()`, retornando:

```
Pizza pronta para o pedido
```

### RF04 — Sobremesa

Deve existir uma estrutura específica `Sobremesa`, que reaproveita as características comuns de `ItemCardapio`.

`Sobremesa` deve sobrescrever `descricao()`, retornando:

```
Sobremesa pronta para o pedido
```

### RF05 — Bebida

Deve existir uma estrutura específica `Bebida`, que reaproveita as características comuns de `ItemCardapio`.

`Bebida` deve sobrescrever `descricao()`, retornando:

```
Bebida pronta para o pedido
```

### RF06 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
lanche
pizza
sobremesa
bebida
```

Por exemplo, ao solicitar:

```
criar("lanche", "Combo Especial", 20)
```

o sistema deverá retornar uma instância de `Lanche` com `nome` `"Combo Especial"` e `tempoDePreparoEmMinutos` `20`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de item inválido
```

### RF07 — Ingrediente

O sistema deve permitir criar um(a) `Ingrediente`, contendo `nome` e `custo`.

Exemplo:

```
const item = new Ingrediente("Queijo", 8)

item.nome   // "Queijo"
item.custo // 8
```

### RF08 — Cardapio

O sistema deve permitir criar um(a) `Cardapio`, identificado por um `nome`.

Um(a) `Cardapio` deve permitir adicionar membros (instâncias de `Lanche`) e categorias (instâncias de `Ingrediente`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Cardapio("Cardápio de verão")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Ingrediente { nome: "Queijo", custo: 8 } ]
grupo.membros    // [ Lanche { nome: "Combo Especial", tempoDePreparoEmMinutos: 20 } ]
```

### RF09 — Avaliacao

O sistema deve permitir criar um(a) `Avaliacao`, associando um `valor` (nota) a um(a) `Ingrediente`.

Uma instância de `Lanche` deve permitir receber vários registros do tipo `Avaliacao`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Avaliacao(4.5, item)

membro.adicionarRegistro(registro)

membro.registros // [ Avaliacao { valor: 4.5, ingrediente: Ingrediente { nome: "Queijo", custo: 8 } } ]
```

### RF10 — Bebida

Além dos tipos anteriores, o sistema também deve reconhecer o tipo `Bebida`, que reaproveita as características comuns de `ItemCardapio`.

`Bebida` deve sobrescrever `descricao()`, retornando:

```
Bebida pronta para o pedido
```

A criação centralizada (RF de Factory) também deve aceitar o tipo:

```
bebida
```

### RF11 — Validação de valor

Um(a) `Avaliacao` não pode ter um `valor` negativo.

Ao tentar adicionar um registro com `valor` negativo, `adicionarRegistro` deve gerar um erro:

```
Valor inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-delivery-de-comida
┣ class
┃ ┣ ItemCardapio.js
┃ ┣ Lanche.js
┃ ┣ Pizza.js
┃ ┣ Sobremesa.js
┃ ┣ Bebida.js
┃ ┣ Ingrediente.js
┃ ┣ Cardapio.js
┃ ┣ Avaliacao.js
┃ ┗ ItemCardapioFactory.js
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

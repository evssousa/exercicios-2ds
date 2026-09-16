# 🚀 PROJETO 4 — ZOOLÓGICO VIRTUAL

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um zoológico que está digitalizando o cadastro dos animais.

Hoje, o cadastro de cada animal é feito manualmente, o que já gerou animais cadastrados com a espécie errada. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o animal correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Animal (classe base)

O sistema deve possuir uma estrutura base `Animal`, com atributos privados `nome` e `idade`, acessíveis através de getters.

Toda instância de `Animal` deve possuir um método `descricao()`, que retorna:

```
Animal cadastrado no zoológico
```

### RF02 — Mamifero

Deve existir uma estrutura específica `Mamifero`, que reaproveita as características comuns de `Animal`.

`Mamifero` deve sobrescrever `descricao()`, retornando:

```
Mamífero em exibição no recinto
```

### RF03 — Ave

Deve existir uma estrutura específica `Ave`, que reaproveita as características comuns de `Animal`.

`Ave` deve sobrescrever `descricao()`, retornando:

```
Ave em exibição no recinto
```

### RF04 — Reptil

Deve existir uma estrutura específica `Reptil`, que reaproveita as características comuns de `Animal`.

`Reptil` deve sobrescrever `descricao()`, retornando:

```
Réptil em exibição no recinto
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
mamifero
ave
reptil
```

Por exemplo, ao solicitar:

```
criar("mamifero", "Simba", 5)
```

o sistema deverá retornar uma instância de `Mamifero` com `nome` `"Simba"` e `idade` `5`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de animal inválido
```

### RF06 — Habitat

O sistema deve permitir criar um(a) `Habitat`, contendo `nome` e `capacidade`.

Exemplo:

```
const item = new Habitat("Savana", 12)

item.nome   // "Savana"
item.capacidade // 12
```

### RF07 — Recinto

O sistema deve permitir criar um(a) `Recinto`, identificado por um `nome`.

Um(a) `Recinto` deve permitir adicionar membros (instâncias de `Mamifero`) e categorias (instâncias de `Habitat`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Recinto("Recinto Sul")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Habitat { nome: "Savana", capacidade: 12 } ]
grupo.membros    // [ Mamifero { nome: "Simba", idade: 5 } ]
```

### RF08 — Alimentacao

O sistema deve permitir criar um(a) `Alimentacao`, associando um `valor` (quantidade) a um(a) `Habitat`.

Uma instância de `Mamifero` deve permitir receber vários registros do tipo `Alimentacao`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Alimentacao(3.5, item)

membro.adicionarRegistro(registro)

membro.registros // [ Alimentacao { valor: 3.5, habitat: Habitat { nome: "Savana", capacidade: 12 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-zoologico-virtual
┣ class
┃ ┣ Animal.js
┃ ┣ Mamifero.js
┃ ┣ Ave.js
┃ ┣ Reptil.js
┃ ┣ Habitat.js
┃ ┣ Recinto.js
┃ ┣ Alimentacao.js
┃ ┗ AnimalFactory.js
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

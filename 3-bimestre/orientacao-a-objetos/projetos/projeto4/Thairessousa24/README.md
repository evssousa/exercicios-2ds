# 🚀 PROJETO 4 — ESTÚDIO DE MÚSICA

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um estúdio de música que está organizando o catálogo de faixas.

Hoje, o cadastro de cada faixa é feito manualmente, o que já gerou faixas cadastradas com o gênero errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar a faixa correta a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Faixa (classe base)

O sistema deve possuir uma estrutura base `Faixa`, com atributos privados `titulo` e `duracaoEmSegundos`, acessíveis através de getters.

Toda instância de `Faixa` deve possuir um método `descricao()`, que retorna:

```
Faixa cadastrada no catálogo
```

### RF02 — Rock

Deve existir uma estrutura específica `Rock`, que reaproveita as características comuns de `Faixa`.

`Rock` deve sobrescrever `descricao()`, retornando:

```
Faixa de rock publicada
```

### RF03 — Pop

Deve existir uma estrutura específica `Pop`, que reaproveita as características comuns de `Faixa`.

`Pop` deve sobrescrever `descricao()`, retornando:

```
Faixa de pop publicada
```

### RF04 — Eletronica

Deve existir uma estrutura específica `Eletronica`, que reaproveita as características comuns de `Faixa`.

`Eletronica` deve sobrescrever `descricao()`, retornando:

```
Faixa eletrônica publicada
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
rock
pop
eletronica
```

Por exemplo, ao solicitar:

```
criar("rock", "Noite Clara", 214)
```

o sistema deverá retornar uma instância de `Rock` com `titulo` `"Noite Clara"` e `duracaoEmSegundos` `214`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de faixa inválido
```

### RF06 — Instrumento

O sistema deve permitir criar um(a) `Instrumento`, contendo `nome` e `quantidadeDeCordas`.

Exemplo:

```
const item = new Instrumento("Guitarra", 6)

item.nome   // "Guitarra"
item.quantidadeDeCordas // 6
```

### RF07 — Album

O sistema deve permitir criar um(a) `Album`, identificado por um `nome`.

Um(a) `Album` deve permitir adicionar membros (instâncias de `Rock`) e categorias (instâncias de `Instrumento`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Album("Álbum Horizonte")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Instrumento { nome: "Guitarra", quantidadeDeCordas: 6 } ]
grupo.membros    // [ Rock { titulo: "Noite Clara", duracaoEmSegundos: 214 } ]
```

### RF08 — Reproducao

O sistema deve permitir criar um(a) `Reproducao`, associando um `valor` (contagem) a um(a) `Instrumento`.

Uma instância de `Rock` deve permitir receber vários registros do tipo `Reproducao`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Reproducao(1520, item)

membro.adicionarRegistro(registro)

membro.registros // [ Reproducao { valor: 1520, instrumento: Instrumento { nome: "Guitarra", quantidadeDeCordas: 6 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-estudio-de-musica
┣ class
┃ ┣ Faixa.js
┃ ┣ Rock.js
┃ ┣ Pop.js
┃ ┣ Eletronica.js
┃ ┣ Instrumento.js
┃ ┣ Album.js
┃ ┣ Reproducao.js
┃ ┗ FaixaFactory.js
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

# 🚀 PROJETO 4 — MUSEU INTERATIVO

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um museu que está digitalizando o cadastro de exposições.

Hoje, o cadastro de cada exposição é feito manualmente, o que já gerou exposições cadastradas com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar a exposição correta a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Exposicao (classe base)

O sistema deve possuir uma estrutura base `Exposicao`, com atributos privados `titulo` e `anoDeInauguracao`, acessíveis através de getters.

Toda instância de `Exposicao` deve possuir um método `descricao()`, que retorna:

```
Exposição cadastrada no sistema
```

### RF02 — Arte

Deve existir uma estrutura específica `Arte`, que reaproveita as características comuns de `Exposicao`.

`Arte` deve sobrescrever `descricao()`, retornando:

```
Exposição de arte aberta ao público
```

### RF03 — Historia

Deve existir uma estrutura específica `Historia`, que reaproveita as características comuns de `Exposicao`.

`Historia` deve sobrescrever `descricao()`, retornando:

```
Exposição de história aberta ao público
```

### RF04 — Ciencia

Deve existir uma estrutura específica `Ciencia`, que reaproveita as características comuns de `Exposicao`.

`Ciencia` deve sobrescrever `descricao()`, retornando:

```
Exposição de ciência aberta ao público
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
arte
historia
ciencia
```

Por exemplo, ao solicitar:

```
criar("arte", "Mundo Antigo", 2019)
```

o sistema deverá retornar uma instância de `Arte` com `titulo` `"Mundo Antigo"` e `anoDeInauguracao` `2019`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de exposição inválido
```

### RF06 — Sala

O sistema deve permitir criar um(a) `Sala`, contendo `nome` e `capacidade`.

Exemplo:

```
const item = new Sala("Sala Norte", 80)

item.nome   // "Sala Norte"
item.capacidade // 80
```

### RF07 — Roteiro

O sistema deve permitir criar um(a) `Roteiro`, identificado por um `nome`.

Um(a) `Roteiro` deve permitir adicionar membros (instâncias de `Arte`) e categorias (instâncias de `Sala`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Roteiro("Roteiro Principal")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Sala { nome: "Sala Norte", capacidade: 80 } ]
grupo.membros    // [ Arte { titulo: "Mundo Antigo", anoDeInauguracao: 2019 } ]
```

### RF08 — Visita

O sistema deve permitir criar um(a) `Visita`, associando um `valor` (duração) a um(a) `Sala`.

Uma instância de `Arte` deve permitir receber vários registros do tipo `Visita`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Visita(45, item)

membro.adicionarRegistro(registro)

membro.registros // [ Visita { valor: 45, sala: Sala { nome: "Sala Norte", capacidade: 80 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-museu-interativo
┣ class
┃ ┣ Exposicao.js
┃ ┣ Arte.js
┃ ┣ Historia.js
┃ ┣ Ciencia.js
┃ ┣ Sala.js
┃ ┣ Roteiro.js
┃ ┣ Visita.js
┃ ┗ ExposicaoFactory.js
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

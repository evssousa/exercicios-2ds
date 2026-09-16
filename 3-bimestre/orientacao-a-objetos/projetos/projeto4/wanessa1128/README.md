# 🚀 PROJETO 4 — CLUBE ESPORTIVO

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um clube esportivo que está informatizando o cadastro de atletas.

Hoje, o cadastro de cada atleta é feito manualmente, o que já gerou cadastros com a modalidade errada. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o atleta correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Atleta (classe base)

O sistema deve possuir uma estrutura base `Atleta`, com atributos privados `nome` e `idade`, acessíveis através de getters.

Toda instância de `Atleta` deve possuir um método `descricao()`, que retorna:

```
Atleta cadastrado no clube
```

### RF02 — Futebol

Deve existir uma estrutura específica `Futebol`, que reaproveita as características comuns de `Atleta`.

`Futebol` deve sobrescrever `descricao()`, retornando:

```
Atleta de futebol convocado
```

### RF03 — Natacao

Deve existir uma estrutura específica `Natacao`, que reaproveita as características comuns de `Atleta`.

`Natacao` deve sobrescrever `descricao()`, retornando:

```
Atleta de natação convocado
```

### RF04 — Atletismo

Deve existir uma estrutura específica `Atletismo`, que reaproveita as características comuns de `Atleta`.

`Atletismo` deve sobrescrever `descricao()`, retornando:

```
Atleta de atletismo convocado
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
futebol
natacao
atletismo
```

Por exemplo, ao solicitar:

```
criar("futebol", "Otávio Machado", 19)
```

o sistema deverá retornar uma instância de `Futebol` com `nome` `"Otávio Machado"` e `idade` `19`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de atleta inválido
```

### RF06 — Categoria

O sistema deve permitir criar um(a) `Categoria`, contendo `nome` e `cargaHorariaDeTreino`.

Exemplo:

```
const item = new Categoria("Sub-20", 10)

item.nome   // "Sub-20"
item.cargaHorariaDeTreino // 10
```

### RF07 — EquipeClube

O sistema deve permitir criar um(a) `EquipeClube`, identificado por um `nome`.

Um(a) `EquipeClube` deve permitir adicionar membros (instâncias de `Futebol`) e categorias (instâncias de `Categoria`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new EquipeClube("Equipe Principal")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Categoria { nome: "Sub-20", cargaHorariaDeTreino: 10 } ]
grupo.membros    // [ Futebol { nome: "Otávio Machado", idade: 19 } ]
```

### RF08 — Resultado

O sistema deve permitir criar um(a) `Resultado`, associando um `valor` (pontuação) a um(a) `Categoria`.

Uma instância de `Futebol` deve permitir receber vários registros do tipo `Resultado`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Resultado(87, item)

membro.adicionarRegistro(registro)

membro.registros // [ Resultado { valor: 87, categoria: Categoria { nome: "Sub-20", cargaHorariaDeTreino: 10 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-clube-esportivo
┣ class
┃ ┣ Atleta.js
┃ ┣ Futebol.js
┃ ┣ Natacao.js
┃ ┣ Atletismo.js
┃ ┣ Categoria.js
┃ ┣ EquipeClube.js
┃ ┣ Resultado.js
┃ ┗ AtletaFactory.js
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

# 🚀 PROJETO 4 — FAZENDA INTELIGENTE

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma fazenda que está informatizando o controle de cultivos.

Hoje, o cadastro de cada cultivo é feito manualmente, o que já gerou cultivos cadastrados com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o cultivo correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Cultivo (classe base)

O sistema deve possuir uma estrutura base `Cultivo`, com atributos privados `nome` e `areaEmHectares`, acessíveis através de getters.

Toda instância de `Cultivo` deve possuir um método `descricao()`, que retorna:

```
Cultivo cadastrado no sistema
```

### RF02 — Graos

Deve existir uma estrutura específica `Graos`, que reaproveita as características comuns de `Cultivo`.

`Graos` deve sobrescrever `descricao()`, retornando:

```
Cultivo de grãos em monitoramento
```

### RF03 — Frutas

Deve existir uma estrutura específica `Frutas`, que reaproveita as características comuns de `Cultivo`.

`Frutas` deve sobrescrever `descricao()`, retornando:

```
Cultivo de frutas em monitoramento
```

### RF04 — Hortalicas

Deve existir uma estrutura específica `Hortalicas`, que reaproveita as características comuns de `Cultivo`.

`Hortalicas` deve sobrescrever `descricao()`, retornando:

```
Cultivo de hortaliças em monitoramento
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
graos
frutas
hortalicas
```

Por exemplo, ao solicitar:

```
criar("graos", "Soja Talhão 4", 12)
```

o sistema deverá retornar uma instância de `Graos` com `nome` `"Soja Talhão 4"` e `areaEmHectares` `12`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de cultivo inválido
```

### RF06 — Talhao

O sistema deve permitir criar um(a) `Talhao`, contendo `nome` e `areaEmHectares`.

Exemplo:

```
const item = new Talhao("Talhão Norte", 20)

item.nome   // "Talhão Norte"
item.areaEmHectares // 20
```

### RF07 — Propriedade

O sistema deve permitir criar um(a) `Propriedade`, identificado por um `nome`.

Um(a) `Propriedade` deve permitir adicionar membros (instâncias de `Graos`) e categorias (instâncias de `Talhao`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Propriedade("Propriedade Santa Fé")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Talhao { nome: "Talhão Norte", areaEmHectares: 20 } ]
grupo.membros    // [ Graos { nome: "Soja Talhão 4", areaEmHectares: 12 } ]
```

### RF08 — Colheita

O sistema deve permitir criar um(a) `Colheita`, associando um `valor` (quantidade) a um(a) `Talhao`.

Uma instância de `Graos` deve permitir receber vários registros do tipo `Colheita`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Colheita(340, item)

membro.adicionarRegistro(registro)

membro.registros // [ Colheita { valor: 340, talhao: Talhao { nome: "Talhão Norte", areaEmHectares: 20 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-fazenda-inteligente
┣ class
┃ ┣ Cultivo.js
┃ ┣ Graos.js
┃ ┣ Frutas.js
┃ ┣ Hortalicas.js
┃ ┣ Talhao.js
┃ ┣ Propriedade.js
┃ ┣ Colheita.js
┃ ┗ CultivoFactory.js
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

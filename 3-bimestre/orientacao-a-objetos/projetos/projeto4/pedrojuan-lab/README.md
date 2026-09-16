# 🚀 PROJETO 4 — CENTRAL DE CHAMADOS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma empresa de software que está organizando a abertura de chamados.

Hoje, cada chamado é classificado manualmente, o que já gerou chamados abertos com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o chamado correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Chamado (classe base)

O sistema deve possuir uma estrutura base `Chamado`, com atributos privados `nomeDoSolicitante` e `codigoDoChamado`, acessíveis através de getters.

Toda instância de `Chamado` deve possuir um método `resumo()`, que retorna:

```
Chamado aberto no sistema
```

### RF02 — Bug

Deve existir uma estrutura específica `Bug`, que reaproveita as características comuns de `Chamado`.

`Bug` deve sobrescrever `resumo()`, retornando:

```
Chamado de bug em análise
```

### RF03 — Duvida

Deve existir uma estrutura específica `Duvida`, que reaproveita as características comuns de `Chamado`.

`Duvida` deve sobrescrever `resumo()`, retornando:

```
Chamado de dúvida em análise
```

### RF04 — Feature

Deve existir uma estrutura específica `Feature`, que reaproveita as características comuns de `Chamado`.

`Feature` deve sobrescrever `resumo()`, retornando:

```
Chamado de nova funcionalidade em análise
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
bug
duvida
feature
```

Por exemplo, ao solicitar:

```
criar("bug", "Simone Ribeiro", 9931)
```

o sistema deverá retornar uma instância de `Bug` com `nomeDoSolicitante` `"Simone Ribeiro"` e `codigoDoChamado` `9931`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de chamado inválido
```

### RF06 — Prioridade

O sistema deve permitir criar um(a) `Prioridade`, contendo `nome` e `prazoEmHoras`.

Exemplo:

```
const item = new Prioridade("Alta", 4)

item.nome   // "Alta"
item.prazoEmHoras // 4
```

### RF07 — Fila

O sistema deve permitir criar um(a) `Fila`, identificado por um `nome`.

Um(a) `Fila` deve permitir adicionar membros (instâncias de `Bug`) e categorias (instâncias de `Prioridade`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Fila("Fila de suporte N2")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Prioridade { nome: "Alta", prazoEmHoras: 4 } ]
grupo.membros    // [ Bug { nomeDoSolicitante: "Simone Ribeiro", codigoDoChamado: 9931 } ]
```

### RF08 — Atualizacao

O sistema deve permitir criar um(a) `Atualizacao`, associando um `valor` (tempo gasto) a um(a) `Prioridade`.

Uma instância de `Bug` deve permitir receber vários registros do tipo `Atualizacao`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Atualizacao(2, item)

membro.adicionarRegistro(registro)

membro.registros // [ Atualizacao { valor: 2, prioridade: Prioridade { nome: "Alta", prazoEmHoras: 4 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-central-de-chamados
┣ class
┃ ┣ Chamado.js
┃ ┣ Bug.js
┃ ┣ Duvida.js
┃ ┣ Feature.js
┃ ┣ Prioridade.js
┃ ┣ Fila.js
┃ ┣ Atualizacao.js
┃ ┗ ChamadoFactory.js
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

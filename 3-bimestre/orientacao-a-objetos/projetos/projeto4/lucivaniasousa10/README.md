# 🚀 PROJETO 4 — SISTEMA DE EVENTOS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma produtora de eventos que está informatizando a venda de ingressos.

Hoje, a emissão de cada ingresso é feita manualmente, o que já gerou ingressos emitidos com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o ingresso correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Ingresso (classe base)

O sistema deve possuir uma estrutura base `Ingresso`, com atributos privados `nomeDoPortador` e `codigoDoIngresso`, acessíveis através de getters.

Toda instância de `Ingresso` deve possuir um método `descricao()`, que retorna:

```
Ingresso emitido pelo sistema
```

### RF02 — VIP

Deve existir uma estrutura específica `VIP`, que reaproveita as características comuns de `Ingresso`.

`VIP` deve sobrescrever `descricao()`, retornando:

```
Ingresso VIP validado na entrada
```

### RF03 — Pista

Deve existir uma estrutura específica `Pista`, que reaproveita as características comuns de `Ingresso`.

`Pista` deve sobrescrever `descricao()`, retornando:

```
Ingresso de pista validado na entrada
```

### RF04 — Camarote

Deve existir uma estrutura específica `Camarote`, que reaproveita as características comuns de `Ingresso`.

`Camarote` deve sobrescrever `descricao()`, retornando:

```
Ingresso de camarote validado na entrada
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
vip
pista
camarote
```

Por exemplo, ao solicitar:

```
criar("vip", "Aline Monteiro", 5521)
```

o sistema deverá retornar uma instância de `VIP` com `nomeDoPortador` `"Aline Monteiro"` e `codigoDoIngresso` `5521`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de ingresso inválido
```

### RF06 — Setor

O sistema deve permitir criar um(a) `Setor`, contendo `nome` e `capacidade`.

Exemplo:

```
const item = new Setor("Setor A", 200)

item.nome   // "Setor A"
item.capacidade // 200
```

### RF07 — Evento

O sistema deve permitir criar um(a) `Evento`, identificado por um `nome`.

Um(a) `Evento` deve permitir adicionar membros (instâncias de `VIP`) e categorias (instâncias de `Setor`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Evento("Festival de Verão")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Setor { nome: "Setor A", capacidade: 200 } ]
grupo.membros    // [ VIP { nomeDoPortador: "Aline Monteiro", codigoDoIngresso: 5521 } ]
```

### RF08 — Venda

O sistema deve permitir criar um(a) `Venda`, associando um `valor` (valor) a um(a) `Setor`.

Uma instância de `VIP` deve permitir receber vários registros do tipo `Venda`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Venda(250, item)

membro.adicionarRegistro(registro)

membro.registros // [ Venda { valor: 250, setor: Setor { nome: "Setor A", capacidade: 200 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-sistema-de-eventos
┣ class
┃ ┣ Ingresso.js
┃ ┣ VIP.js
┃ ┣ Pista.js
┃ ┣ Camarote.js
┃ ┣ Setor.js
┃ ┣ Evento.js
┃ ┣ Venda.js
┃ ┗ IngressoFactory.js
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

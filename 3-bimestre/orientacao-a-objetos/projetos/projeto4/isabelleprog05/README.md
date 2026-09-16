# 🚀 PROJETO 4 — BANCO DIGITAL

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um banco digital que está reorganizando o cadastro de contas.

Hoje, a abertura de cada conta é feita manualmente, o que já gerou contas abertas com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar a conta correta a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Conta (classe base)

O sistema deve possuir uma estrutura base `Conta`, com atributos privados `nomeDoTitular` e `numeroDaConta`, acessíveis através de getters.

Toda instância de `Conta` deve possuir um método `resumo()`, que retorna:

```
Conta aberta no sistema
```

### RF02 — Corrente

Deve existir uma estrutura específica `Corrente`, que reaproveita as características comuns de `Conta`.

`Corrente` deve sobrescrever `resumo()`, retornando:

```
Conta corrente ativada
```

### RF03 — Poupanca

Deve existir uma estrutura específica `Poupanca`, que reaproveita as características comuns de `Conta`.

`Poupanca` deve sobrescrever `resumo()`, retornando:

```
Conta poupança ativada
```

### RF04 — Empresarial

Deve existir uma estrutura específica `Empresarial`, que reaproveita as características comuns de `Conta`.

`Empresarial` deve sobrescrever `resumo()`, retornando:

```
Conta empresarial ativada
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
corrente
poupanca
empresarial
```

Por exemplo, ao solicitar:

```
criar("corrente", "Eduardo Farias", 10234)
```

o sistema deverá retornar uma instância de `Corrente` com `nomeDoTitular` `"Eduardo Farias"` e `numeroDaConta` `10234`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de conta inválido
```

### RF06 — Tarifa

O sistema deve permitir criar um(a) `Tarifa`, contendo `nome` e `valor`.

Exemplo:

```
const item = new Tarifa("Manutenção", 25)

item.nome   // "Manutenção"
item.valor // 25
```

### RF07 — Agencia

O sistema deve permitir criar um(a) `Agencia`, identificado por um `nome`.

Um(a) `Agencia` deve permitir adicionar membros (instâncias de `Corrente`) e categorias (instâncias de `Tarifa`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Agencia("Agência Centro")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Tarifa { nome: "Manutenção", valor: 25 } ]
grupo.membros    // [ Corrente { nomeDoTitular: "Eduardo Farias", numeroDaConta: 10234 } ]
```

### RF08 — Movimentacao

O sistema deve permitir criar um(a) `Movimentacao`, associando um `valor` (valor) a um(a) `Tarifa`.

Uma instância de `Corrente` deve permitir receber vários registros do tipo `Movimentacao`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Movimentacao(500, item)

membro.adicionarRegistro(registro)

membro.registros // [ Movimentacao { valor: 500, tarifa: Tarifa { nome: "Manutenção", valor: 25 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-banco-digital
┣ class
┃ ┣ Conta.js
┃ ┣ Corrente.js
┃ ┣ Poupanca.js
┃ ┣ Empresarial.js
┃ ┣ Tarifa.js
┃ ┣ Agencia.js
┃ ┣ Movimentacao.js
┃ ┗ ContaFactory.js
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

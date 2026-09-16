# 🚀 PROJETO 4 — SISTEMA DE PAGAMENTOS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma plataforma de e-commerce que precisa aceitar diferentes formas de pagamento.

Hoje, cada forma de pagamento é processada com verificações espalhadas pelo código, o que já gerou cobranças com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o pagamento correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Pagamento (classe base)

O sistema deve possuir uma estrutura base `Pagamento`, com atributos privados `referencia` e `parcelas`, acessíveis através de getters.

Toda instância de `Pagamento` deve possuir um método `resumo()`, que retorna:

```
Pagamento registrado no sistema
```

### RF02 — Pix

Deve existir uma estrutura específica `Pix`, que reaproveita as características comuns de `Pagamento`.

`Pix` deve sobrescrever `resumo()`, retornando:

```
Pagamento via Pix aprovado
```

### RF03 — Cartao

Deve existir uma estrutura específica `Cartao`, que reaproveita as características comuns de `Pagamento`.

`Cartao` deve sobrescrever `resumo()`, retornando:

```
Pagamento via cartão aprovado
```

### RF04 — Boleto

Deve existir uma estrutura específica `Boleto`, que reaproveita as características comuns de `Pagamento`.

`Boleto` deve sobrescrever `resumo()`, retornando:

```
Pagamento via boleto aprovado
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
pix
cartao
boleto
```

Por exemplo, ao solicitar:

```
criar("pix", "PED-1029", 3)
```

o sistema deverá retornar uma instância de `Pix` com `referencia` `"PED-1029"` e `parcelas` `3`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de pagamento inválido
```

### RF06 — Loja

O sistema deve permitir criar um(a) `Loja`, contendo `nome` e `taxa`.

Exemplo:

```
const item = new Loja("Marketplace A", 2)

item.nome   // "Marketplace A"
item.taxa // 2
```

### RF07 — Carteira

O sistema deve permitir criar um(a) `Carteira`, identificado por um `nome`.

Um(a) `Carteira` deve permitir adicionar membros (instâncias de `Pix`) e categorias (instâncias de `Loja`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Carteira("Carteira principal")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Loja { nome: "Marketplace A", taxa: 2 } ]
grupo.membros    // [ Pix { referencia: "PED-1029", parcelas: 3 } ]
```

### RF08 — Transacao

O sistema deve permitir criar um(a) `Transacao`, associando um `valor` (valor) a um(a) `Loja`.

Uma instância de `Pix` deve permitir receber vários registros do tipo `Transacao`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Transacao(150, item)

membro.adicionarRegistro(registro)

membro.registros // [ Transacao { valor: 150, loja: Loja { nome: "Marketplace A", taxa: 2 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-sistema-de-pagamentos
┣ class
┃ ┣ Pagamento.js
┃ ┣ Pix.js
┃ ┣ Cartao.js
┃ ┣ Boleto.js
┃ ┣ Loja.js
┃ ┣ Carteira.js
┃ ┣ Transacao.js
┃ ┗ PagamentoFactory.js
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

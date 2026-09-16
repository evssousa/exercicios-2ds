# 🚀 PROJETO 4 — AGÊNCIA DE VIAGENS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma agência de viagens que está informatizando a venda de pacotes.

Hoje, a venda de cada pacote é registrada manualmente, o que já gerou pacotes vendidos com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o pacote correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Pacote (classe base)

O sistema deve possuir uma estrutura base `Pacote`, com atributos privados `nomeDoCliente` e `duracaoEmDias`, acessíveis através de getters.

Toda instância de `Pacote` deve possuir um método `resumo()`, que retorna:

```
Pacote registrado no sistema
```

### RF02 — Nacional

Deve existir uma estrutura específica `Nacional`, que reaproveita as características comuns de `Pacote`.

`Nacional` deve sobrescrever `resumo()`, retornando:

```
Pacote nacional confirmado
```

### RF03 — Internacional

Deve existir uma estrutura específica `Internacional`, que reaproveita as características comuns de `Pacote`.

`Internacional` deve sobrescrever `resumo()`, retornando:

```
Pacote internacional confirmado
```

### RF04 — Cruzeiro

Deve existir uma estrutura específica `Cruzeiro`, que reaproveita as características comuns de `Pacote`.

`Cruzeiro` deve sobrescrever `resumo()`, retornando:

```
Pacote de cruzeiro confirmado
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
nacional
internacional
cruzeiro
```

Por exemplo, ao solicitar:

```
criar("nacional", "Gabriel Xavier", 7)
```

o sistema deverá retornar uma instância de `Nacional` com `nomeDoCliente` `"Gabriel Xavier"` e `duracaoEmDias` `7`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de pacote inválido
```

### RF06 — Destino

O sistema deve permitir criar um(a) `Destino`, contendo `nome` e `distanciaEmKm`.

Exemplo:

```
const item = new Destino("Fernando de Noronha", 545)

item.nome   // "Fernando de Noronha"
item.distanciaEmKm // 545
```

### RF07 — RoteiroViagem

O sistema deve permitir criar um(a) `RoteiroViagem`, identificado por um `nome`.

Um(a) `RoteiroViagem` deve permitir adicionar membros (instâncias de `Nacional`) e categorias (instâncias de `Destino`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new RoteiroViagem("Roteiro Nordeste")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Destino { nome: "Fernando de Noronha", distanciaEmKm: 545 } ]
grupo.membros    // [ Nacional { nomeDoCliente: "Gabriel Xavier", duracaoEmDias: 7 } ]
```

### RF08 — Reserva

O sistema deve permitir criar um(a) `Reserva`, associando um `valor` (valor) a um(a) `Destino`.

Uma instância de `Nacional` deve permitir receber vários registros do tipo `Reserva`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Reserva(3200, item)

membro.adicionarRegistro(registro)

membro.registros // [ Reserva { valor: 3200, destino: Destino { nome: "Fernando de Noronha", distanciaEmKm: 545 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-agencia-de-viagens
┣ class
┃ ┣ Pacote.js
┃ ┣ Nacional.js
┃ ┣ Internacional.js
┃ ┣ Cruzeiro.js
┃ ┣ Destino.js
┃ ┣ RoteiroViagem.js
┃ ┣ Reserva.js
┃ ┗ PacoteFactory.js
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

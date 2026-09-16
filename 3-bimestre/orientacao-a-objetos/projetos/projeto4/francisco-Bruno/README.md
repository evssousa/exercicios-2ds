# 🚀 PROJETO 4 — SEGURADORA DIGITAL

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma seguradora que está migrando a emissão de apólices para um sistema online.

Hoje, a emissão de cada apólice é feita manualmente, o que já gerou apólices emitidas com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar a apólice correta a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Apolice (classe base)

O sistema deve possuir uma estrutura base `Apolice`, com atributos privados `nomeDoSegurado` e `vigenciaEmMeses`, acessíveis através de getters.

Toda instância de `Apolice` deve possuir um método `resumo()`, que retorna:

```
Apólice registrada no sistema
```

### RF02 — Automovel

Deve existir uma estrutura específica `Automovel`, que reaproveita as características comuns de `Apolice`.

`Automovel` deve sobrescrever `resumo()`, retornando:

```
Apólice de automóvel emitida
```

### RF03 — Residencial

Deve existir uma estrutura específica `Residencial`, que reaproveita as características comuns de `Apolice`.

`Residencial` deve sobrescrever `resumo()`, retornando:

```
Apólice residencial emitida
```

### RF04 — Vida

Deve existir uma estrutura específica `Vida`, que reaproveita as características comuns de `Apolice`.

`Vida` deve sobrescrever `resumo()`, retornando:

```
Apólice de vida emitida
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
automovel
residencial
vida
```

Por exemplo, ao solicitar:

```
criar("automovel", "Renata Vieira", 12)
```

o sistema deverá retornar uma instância de `Automovel` com `nomeDoSegurado` `"Renata Vieira"` e `vigenciaEmMeses` `12`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de apólice inválido
```

### RF06 — Cobertura

O sistema deve permitir criar um(a) `Cobertura`, contendo `nome` e `limite`.

Exemplo:

```
const item = new Cobertura("Roubo", 50000)

item.nome   // "Roubo"
item.limite // 50000
```

### RF07 — Carteira

O sistema deve permitir criar um(a) `Carteira`, identificado por um `nome`.

Um(a) `Carteira` deve permitir adicionar membros (instâncias de `Automovel`) e categorias (instâncias de `Cobertura`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Carteira("Carteira Sul")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Cobertura { nome: "Roubo", limite: 50000 } ]
grupo.membros    // [ Automovel { nomeDoSegurado: "Renata Vieira", vigenciaEmMeses: 12 } ]
```

### RF08 — Sinistro

O sistema deve permitir criar um(a) `Sinistro`, associando um `valor` (valor) a um(a) `Cobertura`.

Uma instância de `Automovel` deve permitir receber vários registros do tipo `Sinistro`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Sinistro(3200, item)

membro.adicionarRegistro(registro)

membro.registros // [ Sinistro { valor: 3200, cobertura: Cobertura { nome: "Roubo", limite: 50000 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-seguradora-digital
┣ class
┃ ┣ Apolice.js
┃ ┣ Automovel.js
┃ ┣ Residencial.js
┃ ┣ Vida.js
┃ ┣ Cobertura.js
┃ ┣ Carteira.js
┃ ┣ Sinistro.js
┃ ┗ ApoliceFactory.js
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

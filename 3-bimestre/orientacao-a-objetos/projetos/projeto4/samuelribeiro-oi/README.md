# 🚀 PROJETO 4 — ESTACIONAMENTO INTELIGENTE

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um estacionamento que está informatizando o controle de vagas.

Hoje, a liberação de cada vaga é feita manualmente, o que já gerou vagas liberadas com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar a vaga correta a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Vaga (classe base)

O sistema deve possuir uma estrutura base `Vaga`, com atributos privados `identificador` e `andar`, acessíveis através de getters.

Toda instância de `Vaga` deve possuir um método `descricao()`, que retorna:

```
Vaga cadastrada no sistema
```

### RF02 — CarroVaga

Deve existir uma estrutura específica `CarroVaga`, que reaproveita as características comuns de `Vaga`.

`CarroVaga` deve sobrescrever `descricao()`, retornando:

```
Vaga para carro liberada
```

### RF03 — MotoVaga

Deve existir uma estrutura específica `MotoVaga`, que reaproveita as características comuns de `Vaga`.

`MotoVaga` deve sobrescrever `descricao()`, retornando:

```
Vaga para moto liberada
```

### RF04 — Preferencial

Deve existir uma estrutura específica `Preferencial`, que reaproveita as características comuns de `Vaga`.

`Preferencial` deve sobrescrever `descricao()`, retornando:

```
Vaga preferencial liberada
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
carro
moto
preferencial
```

Por exemplo, ao solicitar:

```
criar("carro", "B12", 2)
```

o sistema deverá retornar uma instância de `CarroVaga` com `identificador` `"B12"` e `andar` `2`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de vaga inválido
```

### RF06 — TarifaHora

O sistema deve permitir criar um(a) `TarifaHora`, contendo `nome` e `valorPorHora`.

Exemplo:

```
const item = new TarifaHora("Horário comercial", 8)

item.nome   // "Horário comercial"
item.valorPorHora // 8
```

### RF07 — SetorEstacionamento

O sistema deve permitir criar um(a) `SetorEstacionamento`, identificado por um `nome`.

Um(a) `SetorEstacionamento` deve permitir adicionar membros (instâncias de `CarroVaga`) e categorias (instâncias de `TarifaHora`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new SetorEstacionamento("Setor B")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ TarifaHora { nome: "Horário comercial", valorPorHora: 8 } ]
grupo.membros    // [ CarroVaga { identificador: "B12", andar: 2 } ]
```

### RF08 — Cobranca

O sistema deve permitir criar um(a) `Cobranca`, associando um `valor` (valor) a um(a) `TarifaHora`.

Uma instância de `CarroVaga` deve permitir receber vários registros do tipo `Cobranca`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Cobranca(16, item)

membro.adicionarRegistro(registro)

membro.registros // [ Cobranca { valor: 16, tarifaHora: TarifaHora { nome: "Horário comercial", valorPorHora: 8 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-estacionamento-inteligente
┣ class
┃ ┣ Vaga.js
┃ ┣ CarroVaga.js
┃ ┣ MotoVaga.js
┃ ┣ Preferencial.js
┃ ┣ TarifaHora.js
┃ ┣ SetorEstacionamento.js
┃ ┣ Cobranca.js
┃ ┗ VagaFactory.js
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

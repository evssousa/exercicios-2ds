# 🚀 PROJETO 4 — SISTEMA HOSPITALAR

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um hospital que está organizando o cadastro da equipe.

Hoje, o cadastro de cada profissional é feito manualmente, o que já gerou cadastros com a função errada. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o profissional correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Profissional (classe base)

O sistema deve possuir uma estrutura base `Profissional`, com atributos privados `nome` e `idade`, acessíveis através de getters.

Toda instância de `Profissional` deve possuir um método `atuacao()`, que retorna:

```
Profissional cadastrado no sistema
```

### RF02 — Medico

Deve existir uma estrutura específica `Medico`, que reaproveita as características comuns de `Profissional`.

`Medico` deve sobrescrever `atuacao()`, retornando:

```
Atendimento médico realizado
```

### RF03 — Enfermeiro

Deve existir uma estrutura específica `Enfermeiro`, que reaproveita as características comuns de `Profissional`.

`Enfermeiro` deve sobrescrever `atuacao()`, retornando:

```
Atendimento de enfermagem realizado
```

### RF04 — Recepcionista

Deve existir uma estrutura específica `Recepcionista`, que reaproveita as características comuns de `Profissional`.

`Recepcionista` deve sobrescrever `atuacao()`, retornando:

```
Atendimento de recepção realizado
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
medico
enfermeiro
recepcionista
```

Por exemplo, ao solicitar:

```
criar("medico", "Fábio Nogueira", 41)
```

o sistema deverá retornar uma instância de `Medico` com `nome` `"Fábio Nogueira"` e `idade` `41`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de profissional inválido
```

### RF06 — Especialidade

O sistema deve permitir criar um(a) `Especialidade`, contendo `nome` e `cargaHoraria`.

Exemplo:

```
const item = new Especialidade("Cardiologia", 40)

item.nome   // "Cardiologia"
item.cargaHoraria // 40
```

### RF07 — Setor

O sistema deve permitir criar um(a) `Setor`, identificado por um `nome`.

Um(a) `Setor` deve permitir adicionar membros (instâncias de `Medico`) e categorias (instâncias de `Especialidade`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Setor("Setor Norte")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Especialidade { nome: "Cardiologia", cargaHoraria: 40 } ]
grupo.membros    // [ Medico { nome: "Fábio Nogueira", idade: 41 } ]
```

### RF08 — Atendimento

O sistema deve permitir criar um(a) `Atendimento`, associando um `valor` (duração) a um(a) `Especialidade`.

Uma instância de `Medico` deve permitir receber vários registros do tipo `Atendimento`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Atendimento(30, item)

membro.adicionarRegistro(registro)

membro.registros // [ Atendimento { valor: 30, especialidade: Especialidade { nome: "Cardiologia", cargaHoraria: 40 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-sistema-hospitalar
┣ class
┃ ┣ Profissional.js
┃ ┣ Medico.js
┃ ┣ Enfermeiro.js
┃ ┣ Recepcionista.js
┃ ┣ Especialidade.js
┃ ┣ Setor.js
┃ ┣ Atendimento.js
┃ ┗ ProfissionalFactory.js
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

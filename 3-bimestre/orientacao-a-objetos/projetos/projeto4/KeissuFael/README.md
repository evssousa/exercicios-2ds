# 🚀 PROJETO 4 — CLÍNICA VETERINÁRIA

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma clínica veterinária que está informatizando o cadastro de pacientes.

Hoje, o cadastro de cada paciente é feito manualmente, o que já gerou cadastros com a espécie errada. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o paciente correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Paciente (classe base)

O sistema deve possuir uma estrutura base `Paciente`, com atributos privados `nome` e `idade`, acessíveis através de getters.

Toda instância de `Paciente` deve possuir um método `descricao()`, que retorna:

```
Paciente cadastrado na clínica
```

### RF02 — Cachorro

Deve existir uma estrutura específica `Cachorro`, que reaproveita as características comuns de `Paciente`.

`Cachorro` deve sobrescrever `descricao()`, retornando:

```
Consulta de cachorro registrada
```

### RF03 — Gato

Deve existir uma estrutura específica `Gato`, que reaproveita as características comuns de `Paciente`.

`Gato` deve sobrescrever `descricao()`, retornando:

```
Consulta de gato registrada
```

### RF04 — AveExotica

Deve existir uma estrutura específica `AveExotica`, que reaproveita as características comuns de `Paciente`.

`AveExotica` deve sobrescrever `descricao()`, retornando:

```
Consulta de ave exótica registrada
```

### RF05 — Roedor

Deve existir uma estrutura específica `Roedor`, que reaproveita as características comuns de `Paciente`.

`Roedor` deve sobrescrever `descricao()`, retornando:

```
Consulta de roedor registrada
```

### RF06 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
cachorro
gato
ave
roedor
```

Por exemplo, ao solicitar:

```
criar("cachorro", "Bidu", 3)
```

o sistema deverá retornar uma instância de `Cachorro` com `nome` `"Bidu"` e `idade` `3`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de paciente inválido
```

### RF07 — Vacina

O sistema deve permitir criar um(a) `Vacina`, contendo `nome` e `validadeEmMeses`.

Exemplo:

```
const item = new Vacina("V10", 12)

item.nome   // "V10"
item.validadeEmMeses // 12
```

### RF08 — Agenda

O sistema deve permitir criar um(a) `Agenda`, identificado por um `nome`.

Um(a) `Agenda` deve permitir adicionar membros (instâncias de `Cachorro`) e categorias (instâncias de `Vacina`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Agenda("Agenda da manhã")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Vacina { nome: "V10", validadeEmMeses: 12 } ]
grupo.membros    // [ Cachorro { nome: "Bidu", idade: 3 } ]
```

### RF09 — Atendimento

O sistema deve permitir criar um(a) `Atendimento`, associando um `valor` (custo) a um(a) `Vacina`.

Uma instância de `Cachorro` deve permitir receber vários registros do tipo `Atendimento`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Atendimento(120, item)

membro.adicionarRegistro(registro)

membro.registros // [ Atendimento { valor: 120, vacina: Vacina { nome: "V10", validadeEmMeses: 12 } } ]
```

### RF10 — Roedor

Além dos tipos anteriores, o sistema também deve reconhecer o tipo `Roedor`, que reaproveita as características comuns de `Paciente`.

`Roedor` deve sobrescrever `descricao()`, retornando:

```
Consulta de roedor registrada
```

A criação centralizada (RF de Factory) também deve aceitar o tipo:

```
roedor
```

### RF11 — Validação de valor

Um(a) `Atendimento` não pode ter um `valor` negativo.

Ao tentar adicionar um registro com `valor` negativo, `adicionarRegistro` deve gerar um erro:

```
Valor inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-clinica-veterinaria
┣ class
┃ ┣ Paciente.js
┃ ┣ Cachorro.js
┃ ┣ Gato.js
┃ ┣ AveExotica.js
┃ ┣ Roedor.js
┃ ┣ Vacina.js
┃ ┣ Agenda.js
┃ ┣ Atendimento.js
┃ ┗ PacienteFactory.js
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

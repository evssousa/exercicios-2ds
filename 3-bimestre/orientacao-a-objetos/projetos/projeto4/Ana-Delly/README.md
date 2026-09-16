# 🚀 PROJETO 4 — SISTEMA DE ESCOLA ONLINE

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma escola que está migrando seu controle acadêmico para um sistema online.

Hoje, sempre que um novo usuário é cadastrado, alguém do time escreve manualmente qual classe deve ser instanciada, o que já gerou cadastros com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o usuário correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Usuario (classe base)

O sistema deve possuir uma estrutura base `Usuario`, com atributos privados `nome` e `idade`, acessíveis através de getters.

Toda instância de `Usuario` deve possuir um método `acessoPainel()`, que retorna:

```
Acesso ao sistema escolar
```

### RF02 — Aluno

Deve existir uma estrutura específica `Aluno`, que reaproveita as características comuns de `Usuario`.

`Aluno` deve sobrescrever `acessoPainel()`, retornando:

```
Painel do Aluno: consultar notas e disciplinas
```

### RF03 — Professor

Deve existir uma estrutura específica `Professor`, que reaproveita as características comuns de `Usuario`.

`Professor` deve sobrescrever `acessoPainel()`, retornando:

```
Painel do Professor: gerenciar notas e turmas
```

### RF04 — Coordenador

Deve existir uma estrutura específica `Coordenador`, que reaproveita as características comuns de `Usuario`.

`Coordenador` deve sobrescrever `acessoPainel()`, retornando:

```
Painel do Coordenador: administração escolar
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
aluno
professor
coordenador
```

Por exemplo, ao solicitar:

```
criar("aluno", "Mariana Costa", 16)
```

o sistema deverá retornar uma instância de `Aluno` com `nome` `"Mariana Costa"` e `idade` `16`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de usuário inválido
```

### RF06 — Disciplina

O sistema deve permitir criar um(a) `Disciplina`, contendo `nome` e `cargaHoraria`.

Exemplo:

```
const item = new Disciplina("Matemática", 80)

item.nome   // "Matemática"
item.cargaHoraria // 80
```

### RF07 — Turma

O sistema deve permitir criar um(a) `Turma`, identificado por um `nome`.

Um(a) `Turma` deve permitir adicionar membros (instâncias de `Aluno`) e categorias (instâncias de `Disciplina`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Turma("1ºA")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Disciplina { nome: "Matemática", cargaHoraria: 80 } ]
grupo.membros    // [ Aluno { nome: "Mariana Costa", idade: 16 } ]
```

### RF08 — Nota

O sistema deve permitir criar um(a) `Nota`, associando um `valor` (nota) a um(a) `Disciplina`.

Uma instância de `Aluno` deve permitir receber vários registros do tipo `Nota`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Nota(8.5, item)

membro.adicionarRegistro(registro)

membro.registros // [ Nota { valor: 8.5, disciplina: Disciplina { nome: "Matemática", cargaHoraria: 80 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-sistema-de-escola-online
┣ class
┃ ┣ Usuario.js
┃ ┣ Aluno.js
┃ ┣ Professor.js
┃ ┣ Coordenador.js
┃ ┣ Disciplina.js
┃ ┣ Turma.js
┃ ┣ Nota.js
┃ ┗ UsuarioFactory.js
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

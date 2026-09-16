# 🚀 PROJETO 4 — PLATAFORMA DE CURSOS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma plataforma de cursos online que está reorganizando o catálogo.

Hoje, o cadastro de cada curso é feito manualmente, o que já gerou cursos cadastrados com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o curso correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Curso (classe base)

O sistema deve possuir uma estrutura base `Curso`, com atributos privados `titulo` e `cargaHoraria`, acessíveis através de getters.

Toda instância de `Curso` deve possuir um método `descricao()`, que retorna:

```
Curso publicado na plataforma
```

### RF02 — Gravado

Deve existir uma estrutura específica `Gravado`, que reaproveita as características comuns de `Curso`.

`Gravado` deve sobrescrever `descricao()`, retornando:

```
Curso gravado disponível
```

### RF03 — AoVivo

Deve existir uma estrutura específica `AoVivo`, que reaproveita as características comuns de `Curso`.

`AoVivo` deve sobrescrever `descricao()`, retornando:

```
Curso ao vivo disponível
```

### RF04 — Workshop

Deve existir uma estrutura específica `Workshop`, que reaproveita as características comuns de `Curso`.

`Workshop` deve sobrescrever `descricao()`, retornando:

```
Workshop disponível
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
gravado
aovivo
workshop
```

Por exemplo, ao solicitar:

```
criar("gravado", "POO na prática", 40)
```

o sistema deverá retornar uma instância de `Gravado` com `titulo` `"POO na prática"` e `cargaHoraria` `40`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de curso inválido
```

### RF06 — Modulo

O sistema deve permitir criar um(a) `Modulo`, contendo `nome` e `cargaHoraria`.

Exemplo:

```
const item = new Modulo("Introdução", 8)

item.nome   // "Introdução"
item.cargaHoraria // 8
```

### RF07 — Trilha

O sistema deve permitir criar um(a) `Trilha`, identificado por um `nome`.

Um(a) `Trilha` deve permitir adicionar membros (instâncias de `Gravado`) e categorias (instâncias de `Modulo`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Trilha("Trilha Backend")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Modulo { nome: "Introdução", cargaHoraria: 8 } ]
grupo.membros    // [ Gravado { titulo: "POO na prática", cargaHoraria: 40 } ]
```

### RF08 — Certificado

O sistema deve permitir criar um(a) `Certificado`, associando um `valor` (nota final) a um(a) `Modulo`.

Uma instância de `Gravado` deve permitir receber vários registros do tipo `Certificado`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Certificado(9, item)

membro.adicionarRegistro(registro)

membro.registros // [ Certificado { valor: 9, modulo: Modulo { nome: "Introdução", cargaHoraria: 8 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-plataforma-de-cursos
┣ class
┃ ┣ Curso.js
┃ ┣ Gravado.js
┃ ┣ AoVivo.js
┃ ┣ Workshop.js
┃ ┣ Modulo.js
┃ ┣ Trilha.js
┃ ┣ Certificado.js
┃ ┗ CursoFactory.js
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

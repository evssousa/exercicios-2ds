# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE CERTIFICADOS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma plataforma de cursos online que precisa emitir certificados para os alunos.

Atualmente, a plataforma reconhece três situações diferentes:

- Certificado de conclusão de curso;
- Certificado de participação em evento;
- Certificado de premiação em desafio.

A equipe precisa de uma solução organizada para criar esses certificados e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto de certificado a partir de uma informação recebida pela plataforma.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Certificado de conclusão

O sistema deve permitir criar um certificado de conclusão de curso.

O certificado deve possuir o nome do aluno e, quando emitido, deve produzir:

```
Certificado de conclusão emitido para: NOME
```

Exemplo:

```
Certificado de conclusão emitido para: Marina Alves
```

### RF02 — Certificado de participação

O sistema deve permitir criar um certificado de participação em evento.

Quando emitido, deve produzir:

```
Certificado de participação emitido para: NOME
```

Exemplo:

```
Certificado de participação emitido para: Rodrigo Lima
```

### RF03 — Certificado de premiação

O sistema deve permitir criar um certificado de premiação em desafio.

Quando emitido, deve produzir:

```
Certificado de premiação emitido para: NOME
```

Exemplo:

```
Certificado de premiação emitido para: Célia Barros
```

### RF04 — Comportamentos diferentes

Embora os três tipos de certificado possuam uma operação de emissão em comum, cada tipo deve apresentar seu próprio comportamento.

O sistema deve permitir trabalhar com diferentes tipos de certificado sem que o código responsável por utilizá-los precise conhecer os detalhes internos de cada um.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o certificado adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
conclusao
participacao
premiacao
```

Por exemplo, ao solicitar:

```
criar("conclusao", "Marina Alves")
```

o sistema deverá retornar um certificado correspondente ao tipo solicitado.

### RF06 — Utilização do certificado

Depois que um certificado for criado, o sistema deverá permitir executar sua emissão utilizando a mesma operação, independentemente do tipo de certificado criado.

Exemplo:

```
const certificado = ...
certificado.emitir()
```

O resultado deverá depender do tipo de certificado.

### RF07 — Tipo inválido

Caso seja solicitado um tipo de certificado que o sistema não conhece, a criação deverá gerar um erro.

Exemplo:

```
Tipo de certificado inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-3v2-poo
┣ test
┃ ┗ certificado.test.js
┣ Certificado.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE CERTIFICADOS DE CURSO

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma escola técnica que emite certificados de curso de modalidades diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Certificado de curso presencial emitido;
- Certificado de curso online emitido;
- Certificado de curso híbrido emitido.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Certificado de curso presencial emitido

O sistema deve permitir criar certificado de curso presencial emitido.

O objeto deve possuir aluno e, quando a operação for executada, deve produzir:

```
Certificado de curso presencial emitido para: ALUNO
```

Exemplo:

```
Certificado de curso presencial emitido para: Rebeka Sousa
```

### RF02 — Certificado de curso online emitido

O sistema deve permitir criar certificado de curso online emitido.

Quando a operação for executada, deve produzir:

```
Certificado de curso online emitido para: ALUNO
```

Exemplo:

```
Certificado de curso online emitido para: Caio Nunes
```

### RF03 — Certificado de curso híbrido emitido

O sistema deve permitir criar certificado de curso híbrido emitido.

Quando a operação for executada, deve produzir:

```
Certificado de curso híbrido emitido para: ALUNO
```

Exemplo:

```
Certificado de curso híbrido emitido para: Vitória Leal
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `CertificadoCurso`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
presencial
online
hibrido
```

Por exemplo, ao solicitar:

```
criar("presencial", "Rebeka Sousa")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const certificadocurso = ...
certificadocurso.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `aluno`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `intercambio-sem-convenio`, a criação deverá gerar um erro:

```
Tipo de certificado inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
rebekasous15
┣ test
┃ ┗ certificadocurso.test.js
┣ CertificadoCurso.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `CertificadoCurso.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`rebekasous15`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

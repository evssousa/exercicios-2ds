# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE LAUDOS DE EXAMES

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um laboratório clínico que emite laudos de exames de tipos diferentes.

Atualmente o sistema precisa lidar com quatro situações diferentes:

- Laudo de exame de sangue emitido;
- Laudo de raio-x emitido;
- Laudo de ultrassom emitido;
- Laudo de ressonância emitido.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Laudo de exame de sangue emitido

O sistema deve permitir criar laudo de exame de sangue emitido.

O objeto deve possuir paciente e, quando a operação for executada, deve produzir:

```
Laudo de exame de sangue emitido para: PACIENTE
```

Exemplo:

```
Laudo de exame de sangue emitido para: Mateus Viana
```

### RF02 — Laudo de raio-x emitido

O sistema deve permitir criar laudo de raio-x emitido.

Quando a operação for executada, deve produzir:

```
Laudo de raio-x emitido para: PACIENTE
```

Exemplo:

```
Laudo de raio-x emitido para: Joana Prado
```

### RF03 — Laudo de ultrassom emitido

O sistema deve permitir criar laudo de ultrassom emitido.

Quando a operação for executada, deve produzir:

```
Laudo de ultrassom emitido para: PACIENTE
```

Exemplo:

```
Laudo de ultrassom emitido para: Nilton Cruz
```

### RF04 — Laudo de ressonância emitido

O sistema deve permitir criar laudo de ressonância emitido.

Quando a operação for executada, deve produzir:

```
Laudo de ressonância emitido para: PACIENTE
```

Exemplo:

```
Laudo de ressonância emitido para: Sérgio Aquino
```

### RF05 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `LaudoExame`.

### RF06 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
sangue
raiox
ultrassom
ressonancia
```

Por exemplo, ao solicitar:

```
criar("sangue", "Mateus Viana")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF07 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const laudoexame = ...
laudoexame.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `paciente`.

### RF08 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `tomografia-sem-solicitacao`, a criação deverá gerar um erro:

```
Tipo de laudo inválido
```

### RF09 — Dado obrigatório

O sistema não deve permitir criar um objeto sem informar paciente.

Se o dado não for informado (string vazia), a criação deverá gerar um erro:

```
Paciente é obrigatório
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
jmateus03
┣ test
┃ ┗ laudoexame.test.js
┣ LaudoExame.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `LaudoExame.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`jmateus03`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

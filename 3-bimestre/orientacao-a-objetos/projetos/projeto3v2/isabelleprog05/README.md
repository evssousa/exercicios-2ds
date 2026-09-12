# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE ATESTADOS MÉDICOS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma clínica que emite atestados médicos de tipos diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Atestado de afastamento emitido;
- Atestado de comparecimento emitido;
- Atestado de aptidão física emitido.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Atestado de afastamento emitido

O sistema deve permitir criar atestado de afastamento emitido.

O objeto deve possuir paciente e, quando a operação for executada, deve produzir:

```
Atestado de afastamento emitido para: PACIENTE
```

Exemplo:

```
Atestado de afastamento emitido para: Sala 12 - Bloco B
```

### RF02 — Atestado de comparecimento emitido

O sistema deve permitir criar atestado de comparecimento emitido.

Quando a operação for executada, deve produzir:

```
Atestado de comparecimento emitido para: PACIENTE
```

Exemplo:

```
Atestado de comparecimento emitido para: Sala 04 - Bloco A
```

### RF03 — Atestado de aptidão física emitido

O sistema deve permitir criar atestado de aptidão física emitido.

Quando a operação for executada, deve produzir:

```
Atestado de aptidão física emitido para: PACIENTE
```

Exemplo:

```
Atestado de aptidão física emitido para: Laboratório de Informática
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Atestado`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
afastamento
comparecimento
aptidaoFisica
```

Por exemplo, ao solicitar:

```
criar("afastamento", "Sala 12 - Bloco B")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const atestado = ...
atestado.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `paciente`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `sanidade-mental`, a criação deverá gerar um erro:

```
Tipo de atestado inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
isabelleprog05
┣ test
┃ ┗ atestado.test.js
┣ Atestado.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Atestado.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`isabelleprog05`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

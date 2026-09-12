# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE LAUDOS TÉCNICOS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma empresa de engenharia que emite laudos técnicos de tipos diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Laudo estrutural emitido por;
- Laudo elétrico emitido por;
- Laudo hidráulico emitido por.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Laudo estrutural emitido por

O sistema deve permitir criar laudo estrutural emitido por.

O objeto deve possuir responsável técnico e, quando a operação for executada, deve produzir:

```
Laudo estrutural emitido por: RESPONSÁVEL TÉCNICO
```

Exemplo:

```
Laudo estrutural emitido por: Laboratório de Química
```

### RF02 — Laudo elétrico emitido por

O sistema deve permitir criar laudo elétrico emitido por.

Quando a operação for executada, deve produzir:

```
Laudo elétrico emitido por: RESPONSÁVEL TÉCNICO
```

Exemplo:

```
Laudo elétrico emitido por: Laboratório de Física
```

### RF03 — Laudo hidráulico emitido por

O sistema deve permitir criar laudo hidráulico emitido por.

Quando a operação for executada, deve produzir:

```
Laudo hidráulico emitido por: RESPONSÁVEL TÉCNICO
```

Exemplo:

```
Laudo hidráulico emitido por: Laboratório de Biologia
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Laudo`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
estrutural
eletrico
hidraulico
```

Por exemplo, ao solicitar:

```
criar("estrutural", "Laboratório de Química")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const laudo = ...
laudo.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `responsavel`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `acustico`, a criação deverá gerar um erro:

```
Tipo de laudo inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
edgartec444
┣ test
┃ ┗ laudo.test.js
┣ Laudo.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Laudo.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`edgartec444`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

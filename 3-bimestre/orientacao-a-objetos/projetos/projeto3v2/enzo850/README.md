# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE DECLARAÇÕES ESCOLARES

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma escola que emite declarações escolares de tipos diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Declaração de matrícula emitida;
- Declaração de frequência emitida;
- Declaração de conclusão emitida.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Declaração de matrícula emitida

O sistema deve permitir criar declaração de matrícula emitida.

O objeto deve possuir aluno e, quando a operação for executada, deve produzir:

```
Declaração de matrícula emitida para: ALUNO
```

Exemplo:

```
Declaração de matrícula emitida para: Mesa 12
```

### RF02 — Declaração de frequência emitida

O sistema deve permitir criar declaração de frequência emitida.

Quando a operação for executada, deve produzir:

```
Declaração de frequência emitida para: ALUNO
```

Exemplo:

```
Declaração de frequência emitida para: Mesa 5
```

### RF03 — Declaração de conclusão emitida

O sistema deve permitir criar declaração de conclusão emitida.

Quando a operação for executada, deve produzir:

```
Declaração de conclusão emitida para: ALUNO
```

Exemplo:

```
Declaração de conclusão emitida para: Área VIP
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Declaracao`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
matricula
frequencia
conclusao
```

Por exemplo, ao solicitar:

```
criar("matricula", "Mesa 12")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const declaracao = ...
declaracao.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `aluno`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `transferencia`, a criação deverá gerar um erro:

```
Tipo de declaração inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
enzo850
┣ test
┃ ┗ declaracao.test.js
┣ Declaracao.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Declaracao.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`enzo850`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

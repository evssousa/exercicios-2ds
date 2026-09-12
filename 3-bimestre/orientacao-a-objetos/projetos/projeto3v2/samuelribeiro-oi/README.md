# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE FATURAS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma operadora de telefonia que emite faturas de planos diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Fatura de plano pré-pago emitida;
- Fatura de plano pós-pago emitida;
- Fatura de plano controle emitida.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Fatura de plano pré-pago emitida

O sistema deve permitir criar fatura de plano pré-pago emitida.

O objeto deve possuir cliente e, quando a operação for executada, deve produzir:

```
Fatura de plano pré-pago emitida para: CLIENTE
```

Exemplo:

```
Fatura de plano pré-pago emitida para: Samuel Ribeiro
```

### RF02 — Fatura de plano pós-pago emitida

O sistema deve permitir criar fatura de plano pós-pago emitida.

Quando a operação for executada, deve produzir:

```
Fatura de plano pós-pago emitida para: CLIENTE
```

Exemplo:

```
Fatura de plano pós-pago emitida para: Equipe de vendas
```

### RF03 — Fatura de plano controle emitida

O sistema deve permitir criar fatura de plano controle emitida.

Quando a operação for executada, deve produzir:

```
Fatura de plano controle emitida para: CLIENTE
```

Exemplo:

```
Fatura de plano controle emitida para: Turma 2DS
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Fatura`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
prePago
posPago
controle
```

Por exemplo, ao solicitar:

```
criar("prePago", "Samuel Ribeiro")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const fatura = ...
fatura.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `cliente`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `corporativo-sem-contrato`, a criação deverá gerar um erro:

```
Tipo de fatura inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
samuelribeiro-oi
┣ test
┃ ┗ fatura.test.js
┣ Fatura.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Fatura.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`samuelribeiro-oi`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

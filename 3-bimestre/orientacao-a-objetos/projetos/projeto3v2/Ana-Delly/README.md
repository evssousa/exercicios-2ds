# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE APÓLICES

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma seguradora que emite apólices de seguro de tipos diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Apólice de seguro auto emitida;
- Apólice de seguro residencial emitida;
- Apólice de seguro de vida emitida.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Apólice de seguro auto emitida

O sistema deve permitir criar apólice de seguro auto emitida.

O objeto deve possuir segurado e, quando a operação for executada, deve produzir:

```
Apólice de seguro auto emitida para: SEGURADO
```

Exemplo:

```
Apólice de seguro auto emitida para: Marina Alves
```

### RF02 — Apólice de seguro residencial emitida

O sistema deve permitir criar apólice de seguro residencial emitida.

Quando a operação for executada, deve produzir:

```
Apólice de seguro residencial emitida para: SEGURADO
```

Exemplo:

```
Apólice de seguro residencial emitida para: Rodrigo Lima
```

### RF03 — Apólice de seguro de vida emitida

O sistema deve permitir criar apólice de seguro de vida emitida.

Quando a operação for executada, deve produzir:

```
Apólice de seguro de vida emitida para: SEGURADO
```

Exemplo:

```
Apólice de seguro de vida emitida para: Célia Barros
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Apolice`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
auto
residencial
vida
```

Por exemplo, ao solicitar:

```
criar("auto", "Marina Alves")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const apolice = ...
apolice.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `segurado`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `viagem`, a criação deverá gerar um erro:

```
Tipo de apólice inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
Ana-Delly
┣ test
┃ ┗ apolice.test.js
┣ Apolice.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Apolice.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`Ana-Delly`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

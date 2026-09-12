# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE LAUDOS HOSPITALARES

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um hospital que emite laudos de alta de tipos diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Laudo de alta melhorada emitido;
- Laudo de alta a pedido emitido;
- Laudo de alta administrativa emitido.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Laudo de alta melhorada emitido

O sistema deve permitir criar laudo de alta melhorada emitido.

O objeto deve possuir paciente e, quando a operação for executada, deve produzir:

```
Laudo de alta melhorada emitido para: PACIENTE
```

Exemplo:

```
Laudo de alta melhorada emitido para: Thaires Sousa
```

### RF02 — Laudo de alta a pedido emitido

O sistema deve permitir criar laudo de alta a pedido emitido.

Quando a operação for executada, deve produzir:

```
Laudo de alta a pedido emitido para: PACIENTE
```

Exemplo:

```
Laudo de alta a pedido emitido para: Alan Ferreira
```

### RF03 — Laudo de alta administrativa emitido

O sistema deve permitir criar laudo de alta administrativa emitido.

Quando a operação for executada, deve produzir:

```
Laudo de alta administrativa emitido para: PACIENTE
```

Exemplo:

```
Laudo de alta administrativa emitido para: Bianca Rocha
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `LaudoAlta`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
altaMelhorada
altaAPedido
altaAdministrativa
```

Por exemplo, ao solicitar:

```
criar("altaMelhorada", "Thaires Sousa")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const laudoalta = ...
laudoalta.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `paciente`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `obito-sem-registro`, a criação deverá gerar um erro:

```
Tipo de laudo inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
Thairessousa24
┣ test
┃ ┗ laudoalta.test.js
┣ LaudoAlta.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `LaudoAlta.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`Thairessousa24`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

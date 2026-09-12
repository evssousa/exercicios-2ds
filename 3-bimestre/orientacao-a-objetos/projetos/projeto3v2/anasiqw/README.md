# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE CRACHÁS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma empresa que emite crachás de acesso para pessoas diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Crachá de funcionário emitido;
- Crachá de visitante emitido;
- Crachá de terceirizado emitido.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Crachá de funcionário emitido

O sistema deve permitir criar crachá de funcionário emitido.

O objeto deve possuir pessoa e, quando a operação for executada, deve produzir:

```
Crachá de funcionário emitido para: PESSOA
```

Exemplo:

```
Crachá de funcionário emitido para: Camila Duarte
```

### RF02 — Crachá de visitante emitido

O sistema deve permitir criar crachá de visitante emitido.

Quando a operação for executada, deve produzir:

```
Crachá de visitante emitido para: PESSOA
```

Exemplo:

```
Crachá de visitante emitido para: Rafael Nogueira
```

### RF03 — Crachá de terceirizado emitido

O sistema deve permitir criar crachá de terceirizado emitido.

Quando a operação for executada, deve produzir:

```
Crachá de terceirizado emitido para: PESSOA
```

Exemplo:

```
Crachá de terceirizado emitido para: Beatriz Lopes
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Cracha`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
funcionario
visitante
terceirizado
```

Por exemplo, ao solicitar:

```
criar("funcionario", "Camila Duarte")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const cracha = ...
cracha.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `pessoa`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `estagiario-sem-cadastro`, a criação deverá gerar um erro:

```
Tipo de crachá inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
anasiqw
┣ test
┃ ┗ cracha.test.js
┣ Cracha.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Cracha.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`anasiqw`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

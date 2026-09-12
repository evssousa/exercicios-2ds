# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE CARTEIRINHAS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma academia que emite carteirinhas de acesso a modalidades diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Carteirinha de musculação emitida;
- Carteirinha de natação emitida;
- Carteirinha de lutas emitida.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Carteirinha de musculação emitida

O sistema deve permitir criar carteirinha de musculação emitida.

O objeto deve possuir aluno e, quando a operação for executada, deve produzir:

```
Carteirinha de musculação emitida para: ALUNO
```

Exemplo:

```
Carteirinha de musculação emitida para: Diego Farias
```

### RF02 — Carteirinha de natação emitida

O sistema deve permitir criar carteirinha de natação emitida.

Quando a operação for executada, deve produzir:

```
Carteirinha de natação emitida para: ALUNO
```

Exemplo:

```
Carteirinha de natação emitida para: Patrícia Nunes
```

### RF03 — Carteirinha de lutas emitida

O sistema deve permitir criar carteirinha de lutas emitida.

Quando a operação for executada, deve produzir:

```
Carteirinha de lutas emitida para: ALUNO
```

Exemplo:

```
Carteirinha de lutas emitida para: Vinícius Rocha
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Carteirinha`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
musculacao
natacao
lutas
```

Por exemplo, ao solicitar:

```
criar("musculacao", "Diego Farias")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const carteirinha = ...
carteirinha.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `aluno`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `ioga-avulsa`, a criação deverá gerar um erro:

```
Tipo de carteirinha inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
Andr3z1n
┣ test
┃ ┗ carteirinha.test.js
┣ Carteirinha.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Carteirinha.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`Andr3z1n`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

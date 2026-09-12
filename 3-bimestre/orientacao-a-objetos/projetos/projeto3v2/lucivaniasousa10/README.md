# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE SELOS DE QUALIDADE

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma padaria industrial que emite selos de qualidade de tipos diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Selo orgânico emitido;
- Selo artesanal emitido;
- Selo integral emitido.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Selo orgânico emitido

O sistema deve permitir criar selo orgânico emitido.

O objeto deve possuir produto e, quando a operação for executada, deve produzir:

```
Selo orgânico emitido para: PRODUTO
```

Exemplo:

```
Selo orgânico emitido para: chocolate
```

### RF02 — Selo artesanal emitido

O sistema deve permitir criar selo artesanal emitido.

Quando a operação for executada, deve produzir:

```
Selo artesanal emitido para: PRODUTO
```

Exemplo:

```
Selo artesanal emitido para: frango
```

### RF03 — Selo integral emitido

O sistema deve permitir criar selo integral emitido.

Quando a operação for executada, deve produzir:

```
Selo integral emitido para: PRODUTO
```

Exemplo:

```
Selo integral emitido para: queijo
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `SeloQualidade`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
organico
artesanal
integral
```

Por exemplo, ao solicitar:

```
criar("organico", "chocolate")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const seloqualidade = ...
seloqualidade.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `produto`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `zero-acucar-nao-testado`, a criação deverá gerar um erro:

```
Tipo de selo inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
lucivaniasousa10
┣ test
┃ ┗ seloqualidade.test.js
┣ SeloQualidade.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `SeloQualidade.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`lucivaniasousa10`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

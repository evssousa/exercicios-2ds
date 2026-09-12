# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE PASSAPORTES

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um órgão consular que emite passaportes de tipos diferentes.

Atualmente o sistema precisa lidar com quatro situações diferentes:

- Passaporte comum emitido;
- Passaporte diplomático emitido;
- Passaporte oficial emitido;
- Passaporte emergencial emitido.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Passaporte comum emitido

O sistema deve permitir criar passaporte comum emitido.

O objeto deve possuir cidadão e, quando a operação for executada, deve produzir:

```
Passaporte comum emitido para: CIDADÃO
```

Exemplo:

```
Passaporte comum emitido para: Voo LA3210
```

### RF02 — Passaporte diplomático emitido

O sistema deve permitir criar passaporte diplomático emitido.

Quando a operação for executada, deve produzir:

```
Passaporte diplomático emitido para: CIDADÃO
```

Exemplo:

```
Passaporte diplomático emitido para: Voo GL1450
```

### RF03 — Passaporte oficial emitido

O sistema deve permitir criar passaporte oficial emitido.

Quando a operação for executada, deve produzir:

```
Passaporte oficial emitido para: CIDADÃO
```

Exemplo:

```
Passaporte oficial emitido para: Voo AZ7788
```

### RF04 — Passaporte emergencial emitido

O sistema deve permitir criar passaporte emergencial emitido.

Quando a operação for executada, deve produzir:

```
Passaporte emergencial emitido para: CIDADÃO
```

Exemplo:

```
Passaporte emergencial emitido para: Voo TP9001
```

### RF05 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Passaporte`.

### RF06 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
comum
diplomatico
oficial
emergencial
```

Por exemplo, ao solicitar:

```
criar("comum", "Voo LA3210")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF07 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const passaporte = ...
passaporte.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `cidadao`.

### RF08 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `provisorio-sem-registro`, a criação deverá gerar um erro:

```
Tipo de passaporte inválido
```

### RF09 — Dado obrigatório

O sistema não deve permitir criar um objeto sem informar cidadão.

Se o dado não for informado (string vazia), a criação deverá gerar um erro:

```
Cidadão é obrigatório
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
emanoelzzs
┣ test
┃ ┗ passaporte.test.js
┣ Passaporte.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Passaporte.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`emanoelzzs`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

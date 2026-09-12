# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE CONTRATOS DE TRABALHO

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um setor de recursos humanos que emite contratos de trabalho de tipos diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Contrato CLT emitido;
- Contrato PJ emitido;
- Contrato de estágio emitido.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Contrato CLT emitido

O sistema deve permitir criar contrato clt emitido.

O objeto deve possuir funcionário e, quando a operação for executada, deve produzir:

```
Contrato CLT emitido para: FUNCIONÁRIO
```

Exemplo:

```
Contrato CLT emitido para: Mário Maciel
```

### RF02 — Contrato PJ emitido

O sistema deve permitir criar contrato pj emitido.

Quando a operação for executada, deve produzir:

```
Contrato PJ emitido para: FUNCIONÁRIO
```

Exemplo:

```
Contrato PJ emitido para: Renata Castro
```

### RF03 — Contrato de estágio emitido

O sistema deve permitir criar contrato de estágio emitido.

Quando a operação for executada, deve produzir:

```
Contrato de estágio emitido para: FUNCIONÁRIO
```

Exemplo:

```
Contrato de estágio emitido para: Douglas Pinto
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `ContratoTrabalho`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
clt
pj
estagio
```

Por exemplo, ao solicitar:

```
criar("clt", "Mário Maciel")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const contratotrabalho = ...
contratotrabalho.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `funcionario`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `temporario-sem-prazo`, a criação deverá gerar um erro:

```
Tipo de contrato inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
mariomaciel10
┣ test
┃ ┗ contratotrabalho.test.js
┣ ContratoTrabalho.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `ContratoTrabalho.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`mariomaciel10`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

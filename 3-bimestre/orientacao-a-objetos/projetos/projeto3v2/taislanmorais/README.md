# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE GUIAS DE REMESSA

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um depósito que emite guias de remessa de mercadorias de tipos diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Guia de transferência emitida;
- Guia de devolução emitida;
- Guia de amostra emitida.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Guia de transferência emitida

O sistema deve permitir criar guia de transferência emitida.

O objeto deve possuir produto e, quando a operação for executada, deve produzir:

```
Guia de transferência emitida para: PRODUTO
```

Exemplo:

```
Guia de transferência emitida para: Teclado mecânico
```

### RF02 — Guia de devolução emitida

O sistema deve permitir criar guia de devolução emitida.

Quando a operação for executada, deve produzir:

```
Guia de devolução emitida para: PRODUTO
```

Exemplo:

```
Guia de devolução emitida para: Monitor 24 polegadas
```

### RF03 — Guia de amostra emitida

O sistema deve permitir criar guia de amostra emitida.

Quando a operação for executada, deve produzir:

```
Guia de amostra emitida para: PRODUTO
```

Exemplo:

```
Guia de amostra emitida para: Cabo HDMI
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `GuiaRemessa`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
transferencia
devolucao
amostra
```

Por exemplo, ao solicitar:

```
criar("transferencia", "Teclado mecânico")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const guiaremessa = ...
guiaremessa.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `produto`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `consignacao-nao-registrada`, a criação deverá gerar um erro:

```
Tipo de guia inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
taislanmorais
┣ test
┃ ┗ guiaremessa.test.js
┣ GuiaRemessa.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `GuiaRemessa.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`taislanmorais`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

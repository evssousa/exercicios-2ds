# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE CUPONS FISCAIS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma loja que emite cupons fiscais de tipos diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Cupom fiscal à vista emitido;
- Cupom fiscal parcelado emitido;
- Cupom fiscal de troca (crédito) emitido.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Cupom fiscal à vista emitido

O sistema deve permitir criar cupom fiscal à vista emitido.

O objeto deve possuir cliente e, quando a operação for executada, deve produzir:

```
Cupom fiscal à vista emitido para: CLIENTE
```

Exemplo:

```
Cupom fiscal à vista emitido para: DEZOFF
```

### RF02 — Cupom fiscal parcelado emitido

O sistema deve permitir criar cupom fiscal parcelado emitido.

Quando a operação for executada, deve produzir:

```
Cupom fiscal parcelado emitido para: CLIENTE
```

Exemplo:

```
Cupom fiscal parcelado emitido para: MENOS20
```

### RF03 — Cupom fiscal de troca (crédito) emitido

O sistema deve permitir criar cupom fiscal de troca (crédito) emitido.

Quando a operação for executada, deve produzir:

```
Cupom fiscal de troca (crédito) emitido para: CLIENTE
```

Exemplo:

```
Cupom fiscal de troca (crédito) emitido para: FRETEZERO
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `CupomFiscal`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
avista
parcelado
trocaCredito
```

Por exemplo, ao solicitar:

```
criar("avista", "DEZOFF")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const cupomfiscal = ...
cupomfiscal.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `cliente`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `consignado`, a criação deverá gerar um erro:

```
Tipo de cupom fiscal inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
kyara469
┣ test
┃ ┗ cupomfiscal.test.js
┣ CupomFiscal.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `CupomFiscal.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`kyara469`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

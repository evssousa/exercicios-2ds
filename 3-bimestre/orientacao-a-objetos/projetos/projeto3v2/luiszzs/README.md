# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE CONTRATOS DE LOCAÇÃO

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma locadora de veículos que emite contratos de locação de tipos diferentes.

Atualmente o sistema precisa lidar com quatro situações diferentes:

- Contrato de locação diária emitido;
- Contrato de locação semanal emitido;
- Contrato de locação mensal emitido;
- Contrato de locação anual emitido.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Contrato de locação diária emitido

O sistema deve permitir criar contrato de locação diária emitido.

O objeto deve possuir cliente e, quando a operação for executada, deve produzir:

```
Contrato de locação diária emitido para: CLIENTE
```

Exemplo:

```
Contrato de locação diária emitido para: ABC1D23
```

### RF02 — Contrato de locação semanal emitido

O sistema deve permitir criar contrato de locação semanal emitido.

Quando a operação for executada, deve produzir:

```
Contrato de locação semanal emitido para: CLIENTE
```

Exemplo:

```
Contrato de locação semanal emitido para: XYZ9K88
```

### RF03 — Contrato de locação mensal emitido

O sistema deve permitir criar contrato de locação mensal emitido.

Quando a operação for executada, deve produzir:

```
Contrato de locação mensal emitido para: CLIENTE
```

Exemplo:

```
Contrato de locação mensal emitido para: PIA4T50
```

### RF04 — Contrato de locação anual emitido

O sistema deve permitir criar contrato de locação anual emitido.

Quando a operação for executada, deve produzir:

```
Contrato de locação anual emitido para: CLIENTE
```

Exemplo:

```
Contrato de locação anual emitido para: QRS2W11
```

### RF05 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Contrato`.

### RF06 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
diaria
semanal
mensal
anual
```

Por exemplo, ao solicitar:

```
criar("diaria", "ABC1D23")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF07 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const contrato = ...
contrato.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `cliente`.

### RF08 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `locacao-com-opcao-compra`, a criação deverá gerar um erro:

```
Tipo de contrato inválido
```

### RF09 — Dado obrigatório

O sistema não deve permitir criar um objeto sem informar cliente.

Se o dado não for informado (string vazia), a criação deverá gerar um erro:

```
Cliente é obrigatório
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
luiszzs
┣ test
┃ ┗ contrato.test.js
┣ Contrato.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Contrato.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`luiszzs`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

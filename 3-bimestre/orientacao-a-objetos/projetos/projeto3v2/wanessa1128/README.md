# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE COMPROVANTES DE POSTAGEM

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma agência dos correios que emite comprovantes de postagem de tipos diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Comprovante de postagem de carta emitido;
- Comprovante de postagem de Sedex emitido;
- Comprovante de postagem de PAC emitido.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Comprovante de postagem de carta emitido

O sistema deve permitir criar comprovante de postagem de carta emitido.

O objeto deve possuir remetente e, quando a operação for executada, deve produzir:

```
Comprovante de postagem de carta emitido para: REMETENTE
```

Exemplo:

```
Comprovante de postagem de carta emitido para: Wanessa Lopes
```

### RF02 — Comprovante de postagem de Sedex emitido

O sistema deve permitir criar comprovante de postagem de sedex emitido.

Quando a operação for executada, deve produzir:

```
Comprovante de postagem de Sedex emitido para: REMETENTE
```

Exemplo:

```
Comprovante de postagem de Sedex emitido para: Gabriel Teles
```

### RF03 — Comprovante de postagem de PAC emitido

O sistema deve permitir criar comprovante de postagem de pac emitido.

Quando a operação for executada, deve produzir:

```
Comprovante de postagem de PAC emitido para: REMETENTE
```

Exemplo:

```
Comprovante de postagem de PAC emitido para: Sandra Muniz
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Comprovante`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
carta
sedex
pac
```

Por exemplo, ao solicitar:

```
criar("carta", "Wanessa Lopes")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const comprovante = ...
comprovante.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `remetente`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `telegrama-descontinuado`, a criação deverá gerar um erro:

```
Tipo de comprovante inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
wanessa1128
┣ test
┃ ┗ comprovante.test.js
┣ Comprovante.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Comprovante.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`wanessa1128`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

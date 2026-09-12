# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE ESCRITURAS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um cartório de registro de imóveis que emite escrituras de tipos diferentes.

Atualmente o sistema precisa lidar com quatro situações diferentes:

- Escritura de compra e venda emitida;
- Escritura de doação emitida;
- Escritura de usufruto emitida;
- Escritura de permuta emitida.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Escritura de compra e venda emitida

O sistema deve permitir criar escritura de compra e venda emitida.

O objeto deve possuir proprietário e, quando a operação for executada, deve produzir:

```
Escritura de compra e venda emitida para: PROPRIETÁRIO
```

Exemplo:

```
Escritura de compra e venda emitida para: ABC1D23
```

### RF02 — Escritura de doação emitida

O sistema deve permitir criar escritura de doação emitida.

Quando a operação for executada, deve produzir:

```
Escritura de doação emitida para: PROPRIETÁRIO
```

Exemplo:

```
Escritura de doação emitida para: XYZ9K88
```

### RF03 — Escritura de usufruto emitida

O sistema deve permitir criar escritura de usufruto emitida.

Quando a operação for executada, deve produzir:

```
Escritura de usufruto emitida para: PROPRIETÁRIO
```

Exemplo:

```
Escritura de usufruto emitida para: PIA4T50
```

### RF04 — Escritura de permuta emitida

O sistema deve permitir criar escritura de permuta emitida.

Quando a operação for executada, deve produzir:

```
Escritura de permuta emitida para: PROPRIETÁRIO
```

Exemplo:

```
Escritura de permuta emitida para: QRS2W11
```

### RF05 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Escritura`.

### RF06 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
compraVenda
doacao
usufruto
permuta
```

Por exemplo, ao solicitar:

```
criar("compraVenda", "ABC1D23")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF07 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const escritura = ...
escritura.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `proprietario`.

### RF08 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `inventario-informal`, a criação deverá gerar um erro:

```
Tipo de escritura inválido
```

### RF09 — Dado obrigatório

O sistema não deve permitir criar um objeto sem informar proprietário.

Se o dado não for informado (string vazia), a criação deverá gerar um erro:

```
Proprietário é obrigatório
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
jaumpaulo
┣ test
┃ ┗ escritura.test.js
┣ Escritura.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Escritura.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`jaumpaulo`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

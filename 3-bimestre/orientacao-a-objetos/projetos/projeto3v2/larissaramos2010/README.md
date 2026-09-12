# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE CERTIFICADOS DE SHOW

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma produtora de eventos que emite certificados de participação em shows de tipos diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Certificado de show de abertura emitido;
- Certificado de show principal emitido;
- Certificado de show de encerramento emitido.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Certificado de show de abertura emitido

O sistema deve permitir criar certificado de show de abertura emitido.

O objeto deve possuir artista e, quando a operação for executada, deve produzir:

```
Certificado de show de abertura emitido para: ARTISTA
```

Exemplo:

```
Certificado de show de abertura emitido para: Tempo Perdido
```

### RF02 — Certificado de show principal emitido

O sistema deve permitir criar certificado de show principal emitido.

Quando a operação for executada, deve produzir:

```
Certificado de show principal emitido para: ARTISTA
```

Exemplo:

```
Certificado de show principal emitido para: Evidências
```

### RF03 — Certificado de show de encerramento emitido

O sistema deve permitir criar certificado de show de encerramento emitido.

Quando a operação for executada, deve produzir:

```
Certificado de show de encerramento emitido para: ARTISTA
```

Exemplo:

```
Certificado de show de encerramento emitido para: Aquarela
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `CertificadoShow`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
abertura
principal
encerramento
```

Por exemplo, ao solicitar:

```
criar("abertura", "Tempo Perdido")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const certificadoshow = ...
certificadoshow.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `artista`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `participacao-especial-nao-confirmada`, a criação deverá gerar um erro:

```
Tipo de certificado inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
larissaramos2010
┣ test
┃ ┗ certificadoshow.test.js
┣ CertificadoShow.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `CertificadoShow.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`larissaramos2010`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

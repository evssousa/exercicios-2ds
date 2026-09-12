# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE DOCUMENTOS CIVIS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um cartório que emite documentos civis de tipos diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Certidão de nascimento emitida;
- Certidão de casamento emitida;
- Certidão de óbito emitida.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Certidão de nascimento emitida

O sistema deve permitir criar certidão de nascimento emitida.

O objeto deve possuir cidadão e, quando a operação for executada, deve produzir:

```
Certidão de nascimento emitida para: CIDADÃO
```

Exemplo:

```
Certidão de nascimento emitida para: Bruno Souza
```

### RF02 — Certidão de casamento emitida

O sistema deve permitir criar certidão de casamento emitida.

Quando a operação for executada, deve produzir:

```
Certidão de casamento emitida para: CIDADÃO
```

Exemplo:

```
Certidão de casamento emitida para: Helena Dias
```

### RF03 — Certidão de óbito emitida

O sistema deve permitir criar certidão de óbito emitida.

Quando a operação for executada, deve produzir:

```
Certidão de óbito emitida para: CIDADÃO
```

Exemplo:

```
Certidão de óbito emitida para: Otávio Ramos
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Documento`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
certidaoNascimento
certidaoCasamento
certidaoObito
```

Por exemplo, ao solicitar:

```
criar("certidaoNascimento", "Bruno Souza")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const documento = ...
documento.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `cidadao`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `reconhecimento-firma`, a criação deverá gerar um erro:

```
Tipo de documento inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
francisco-Bruno
┣ test
┃ ┗ documento.test.js
┣ Documento.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Documento.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`francisco-Bruno`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

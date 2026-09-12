# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE LICENÇAS DE SOFTWARE

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma empresa de tecnologia que emite licenças de software de tipos diferentes.

Atualmente o sistema precisa lidar com quatro situações diferentes:

- Licença trial emitida;
- Licença mensal emitida;
- Licença anual emitida;
- Licença vitalícia emitida.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Licença trial emitida

O sistema deve permitir criar licença trial emitida.

O objeto deve possuir cliente e, quando a operação for executada, deve produzir:

```
Licença trial emitida para: CLIENTE
```

Exemplo:

```
Licença trial emitida para: Fábio Teixeira
```

### RF02 — Licença mensal emitida

O sistema deve permitir criar licença mensal emitida.

Quando a operação for executada, deve produzir:

```
Licença mensal emitida para: CLIENTE
```

Exemplo:

```
Licença mensal emitida para: Renata Alves
```

### RF03 — Licença anual emitida

O sistema deve permitir criar licença anual emitida.

Quando a operação for executada, deve produzir:

```
Licença anual emitida para: CLIENTE
```

Exemplo:

```
Licença anual emitida para: Cláudio Matos
```

### RF04 — Licença vitalícia emitida

O sistema deve permitir criar licença vitalícia emitida.

Quando a operação for executada, deve produzir:

```
Licença vitalícia emitida para: CLIENTE
```

Exemplo:

```
Licença vitalícia emitida para: Empresa Delta
```

### RF05 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Licenca`.

### RF06 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
trial
mensal
anual
vitalicia
```

Por exemplo, ao solicitar:

```
criar("trial", "Fábio Teixeira")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF07 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const licenca = ...
licenca.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `cliente`.

### RF08 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `pirata`, a criação deverá gerar um erro:

```
Tipo de licença inválido
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
davysonzzs
┣ test
┃ ┗ licenca.test.js
┣ Licenca.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Licenca.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`davysonzzs`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

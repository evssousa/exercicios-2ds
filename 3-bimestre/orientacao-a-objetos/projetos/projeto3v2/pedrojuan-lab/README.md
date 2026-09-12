# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE GUIAS DE IMPOSTO

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um sistema fiscal que emite guias de recolhimento de impostos de tipos diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Guia de ICMS emitida;
- Guia de ISS emitida;
- Guia de IPI emitida.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Guia de ICMS emitida

O sistema deve permitir criar guia de icms emitida.

O objeto deve possuir contribuinte e, quando a operação for executada, deve produzir:

```
Guia de ICMS emitida para: CONTRIBUINTE
```

Exemplo:

```
Guia de ICMS emitida para: Empresa Alfa Ltda
```

### RF02 — Guia de ISS emitida

O sistema deve permitir criar guia de iss emitida.

Quando a operação for executada, deve produzir:

```
Guia de ISS emitida para: CONTRIBUINTE
```

Exemplo:

```
Guia de ISS emitida para: Empresa Beta Ltda
```

### RF03 — Guia de IPI emitida

O sistema deve permitir criar guia de ipi emitida.

Quando a operação for executada, deve produzir:

```
Guia de IPI emitida para: CONTRIBUINTE
```

Exemplo:

```
Guia de IPI emitida para: Empresa Gama Ltda
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Guia`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
icms
iss
ipi
```

Por exemplo, ao solicitar:

```
criar("icms", "Empresa Alfa Ltda")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const guia = ...
guia.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `contribuinte`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `iptu-fora-do-sistema`, a criação deverá gerar um erro:

```
Tipo de guia inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
pedrojuan-lab
┣ test
┃ ┗ guia.test.js
┣ Guia.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Guia.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`pedrojuan-lab`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

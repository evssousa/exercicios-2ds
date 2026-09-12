# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE VOUCHERS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma agência de viagens que emite vouchers de tipos diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Voucher de hospedagem emitido;
- Voucher de passeio emitido;
- Voucher de transfer emitido.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Voucher de hospedagem emitido

O sistema deve permitir criar voucher de hospedagem emitido.

O objeto deve possuir cliente e, quando a operação for executada, deve produzir:

```
Voucher de hospedagem emitido para: CLIENTE
```

Exemplo:

```
Voucher de hospedagem emitido para: Lote 1 - Pacote Sul
```

### RF02 — Voucher de passeio emitido

O sistema deve permitir criar voucher de passeio emitido.

Quando a operação for executada, deve produzir:

```
Voucher de passeio emitido para: CLIENTE
```

Exemplo:

```
Voucher de passeio emitido para: Lote 2 - Pacote Nordeste
```

### RF03 — Voucher de transfer emitido

O sistema deve permitir criar voucher de transfer emitido.

Quando a operação for executada, deve produzir:

```
Voucher de transfer emitido para: CLIENTE
```

Exemplo:

```
Voucher de transfer emitido para: Staff - Cortesia
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Voucher`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
hospedagem
passeio
transfer
```

Por exemplo, ao solicitar:

```
criar("hospedagem", "Lote 1 - Pacote Sul")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const voucher = ...
voucher.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `cliente`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `seguro-viagem`, a criação deverá gerar um erro:

```
Tipo de voucher inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
caiovictor-allainmain
┣ test
┃ ┗ voucher.test.js
┣ Voucher.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Voucher.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`caiovictor-allainmain`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE PROTOCOLOS DE ATENDIMENTO

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma central de suporte técnico que emite protocolos de atendimento de tipos diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Protocolo de suporte básico emitido;
- Protocolo de suporte prioritário emitido;
- Protocolo de suporte emergencial emitido.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Protocolo de suporte básico emitido

O sistema deve permitir criar protocolo de suporte básico emitido.

O objeto deve possuir cliente e, quando a operação for executada, deve produzir:

```
Protocolo de suporte básico emitido para: CLIENTE
```

Exemplo:

```
Protocolo de suporte básico emitido para: Impressora sem papel
```

### RF02 — Protocolo de suporte prioritário emitido

O sistema deve permitir criar protocolo de suporte prioritário emitido.

Quando a operação for executada, deve produzir:

```
Protocolo de suporte prioritário emitido para: CLIENTE
```

Exemplo:

```
Protocolo de suporte prioritário emitido para: Sistema lento
```

### RF03 — Protocolo de suporte emergencial emitido

O sistema deve permitir criar protocolo de suporte emergencial emitido.

Quando a operação for executada, deve produzir:

```
Protocolo de suporte emergencial emitido para: CLIENTE
```

Exemplo:

```
Protocolo de suporte emergencial emitido para: Servidor fora do ar
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Protocolo`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
suporteBasico
suportePrioritario
suporteEmergencial
```

Por exemplo, ao solicitar:

```
criar("suporteBasico", "Impressora sem papel")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const protocolo = ...
protocolo.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `cliente`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `suporte-vip-sem-contrato`, a criação deverá gerar um erro:

```
Tipo de protocolo inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
luis-fernando-braga-dos-santos
┣ test
┃ ┗ protocolo.test.js
┣ Protocolo.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Protocolo.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`luis-fernando-braga-dos-santos`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

# 🚀 PROJETO 4 — CENTRAL DE NOTIFICAÇÕES

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma plataforma digital que precisa enviar diferentes tipos de notificação aos usuários.

Hoje, o disparo de cada notificação é feito manualmente escolhendo a classe certa no código, o que já gerou envios com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar a notificação correta a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Notificacao (classe base)

O sistema deve possuir uma estrutura base `Notificacao`, com atributos privados `titulo` e `prioridade`, acessíveis através de getters.

Toda instância de `Notificacao` deve possuir um método `resumo()`, que retorna:

```
Notificação registrada no sistema
```

### RF02 — Email

Deve existir uma estrutura específica `Email`, que reaproveita as características comuns de `Notificacao`.

`Email` deve sobrescrever `resumo()`, retornando:

```
Notificação enviada por e-mail
```

### RF03 — SMS

Deve existir uma estrutura específica `SMS`, que reaproveita as características comuns de `Notificacao`.

`SMS` deve sobrescrever `resumo()`, retornando:

```
Notificação enviada por SMS
```

### RF04 — PushApp

Deve existir uma estrutura específica `PushApp`, que reaproveita as características comuns de `Notificacao`.

`PushApp` deve sobrescrever `resumo()`, retornando:

```
Notificação enviada por push no aplicativo
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
email
sms
pushapp
```

Por exemplo, ao solicitar:

```
criar("email", "Pedido aprovado", 2)
```

o sistema deverá retornar uma instância de `Email` com `titulo` `"Pedido aprovado"` e `prioridade` `2`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de notificação inválido
```

### RF06 — Canal

O sistema deve permitir criar um(a) `Canal`, contendo `nome` e `limiteDeCaracteres`.

Exemplo:

```
const item = new Canal("Prioritário", 160)

item.nome   // "Prioritário"
item.limiteDeCaracteres // 160
```

### RF07 — ListaEnvio

O sistema deve permitir criar um(a) `ListaEnvio`, identificado por um `nome`.

Um(a) `ListaEnvio` deve permitir adicionar membros (instâncias de `Email`) e categorias (instâncias de `Canal`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new ListaEnvio("Campanha de outubro")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Canal { nome: "Prioritário", limiteDeCaracteres: 160 } ]
grupo.membros    // [ Email { titulo: "Pedido aprovado", prioridade: 2 } ]
```

### RF08 — Disparo

O sistema deve permitir criar um(a) `Disparo`, associando um `valor` (custo) a um(a) `Canal`.

Uma instância de `Email` deve permitir receber vários registros do tipo `Disparo`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Disparo(0.05, item)

membro.adicionarRegistro(registro)

membro.registros // [ Disparo { valor: 0.05, canal: Canal { nome: "Prioritário", limiteDeCaracteres: 160 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-central-de-notificacoes
┣ class
┃ ┣ Notificacao.js
┃ ┣ Email.js
┃ ┣ SMS.js
┃ ┣ PushApp.js
┃ ┣ Canal.js
┃ ┣ ListaEnvio.js
┃ ┣ Disparo.js
┃ ┗ NotificacaoFactory.js
┣ test
┃ ┗ projeto.test.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

## ▶️ Como executar

```
npm install
node index.js
```

## 🧪 Como executar os testes

```
npm install
npm test
```

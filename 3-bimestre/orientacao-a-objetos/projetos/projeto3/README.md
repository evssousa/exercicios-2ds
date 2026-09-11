# 🚀 PROJETO 3 — SISTEMA DE NOTIFICAÇÕES

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma plataforma digital que precisa enviar diferentes tipos de notificações aos seus usuários.

Atualmente, o sistema possui diferentes formas de notificar o usuário:

- Notificação por e-mail;
- Notificação por SMS;
- Notificação por aplicativo.

A equipe precisa de uma solução organizada para criar essas notificações e permitir que cada tipo tenha seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto de notificação a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Notificação por e-mail

O sistema deve permitir criar uma notificação destinada ao e-mail de um usuário.

A notificação deve possuir uma mensagem e, quando enviada, deve produzir:

```
E-mail enviado: MENSAGEM
```

### RF02 — Notificação por SMS

O sistema deve permitir criar uma notificação destinada a SMS.

Quando enviada, deve produzir:

```
SMS enviado: MENSAGEM
```

### RF03 — Notificação por aplicativo

O sistema deve permitir criar uma notificação destinada ao aplicativo.

Quando enviada, deve produzir:

```
Notificação no aplicativo: MENSAGEM
```

### RF04 — Comportamentos diferentes

Embora as notificações possuam uma operação de envio em comum, cada tipo deve apresentar seu próprio comportamento.

O sistema deve permitir trabalhar com diferentes tipos de notificação sem que o código responsável por utilizá-las precise conhecer os detalhes internos de cada uma.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a notificação adequada de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
email
sms
app
```

Por exemplo, ao solicitar:

```
criar("email", "Seu pedido foi aprovado")
```

o sistema deverá retornar uma notificação correspondente ao tipo solicitado.

### RF06 — Utilização da notificação

Depois que uma notificação for criada, o sistema deverá permitir executar seu envio utilizando a mesma operação, independentemente do tipo de notificação criado.

Exemplo:

```
const notificacao = ...
notificacao.enviar()
```

O resultado deverá depender do tipo de notificação.

### RF07 — Tipo inválido

Caso seja solicitado um tipo de notificação que o sistema não conhece, a criação deverá gerar um erro.

Exemplo:

```
Tipo de notificação inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-3-poo
┣ test
┃ ┗ notificacao.test.js
┣ notificacao.js
┣ factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.
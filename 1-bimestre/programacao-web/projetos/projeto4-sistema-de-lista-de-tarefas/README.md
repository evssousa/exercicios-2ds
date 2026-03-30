# 📘 PROJETO 4 — SISTEMA DE LISTA DE TAREFAS

# 🧩 Problema

Uma pessoa possui várias tarefas para fazer durante o dia, mas não tem uma forma simples de **organizar e acompanhar o que já foi feito**.

Para resolver esse problema, será desenvolvido um **sistema simples de lista de tarefas (To-Do List)** que funcione diretamente no navegador.

# 📋 Enunciado

Desenvolva uma aplicação web que permita ao usuário **gerenciar uma lista de tarefas**.

O usuário deverá poder **adicionar tarefas, visualizar as tarefas na tela, marcar tarefas como concluídas e remover tarefas da lista**.

A aplicação deverá ser desenvolvida utilizando **HTML, CSS e JavaScript**, manipulando os elementos diretamente no DOM.

# 📑 Requisitos Funcionais

### RF01 — Campo de tarefa

A página deve possuir um campo de texto onde o usuário possa digitar uma tarefa.

### RF02 — Botão de adicionar

Deve existir um botão que permita **adicionar a tarefa digitada na lista**.

### RF03 — Lista de tarefas

As tarefas adicionadas devem aparecer em uma **lista visível na página, com `<ul>` ou `<div>`**.

### RF04 — Marcar tarefa como concluída

Ao clicar em uma tarefa, ela deve:

- mudar o estilo visual
- indicar que a tarefa foi concluída

Exemplo:

- texto riscado
- mudança de cor
- fundo diferente

### RF05 — Remover tarefa

Cada tarefa deve possuir um botão **Remover**, que exclua a tarefa da lista.

### RF06 — Validação

Caso o usuário tente adicionar uma tarefa vazia, o sistema deve:

- impedir a adição
- mostrar uma mensagem de aviso.

# 💡 Comportamento Esperado

Usuário digita:

```
Estudar JavaScript
```

Ao clicar em **Adicionar**, aparece na lista:

```
• Estudar JavaScript   [Remover]
```

Se clicar no texto:

```
 ~Estudar JavaScript~
```

Tarefa marcada como concluída.
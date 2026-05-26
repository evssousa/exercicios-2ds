# 📘 PROJETO 7 — PAINEL DE AÇÕES RPG

# 🧩 PROBLEMA

Uma empresa de jogos está desenvolvendo um novo MMORPG chamado **Legends Arena**.

O sistema precisa de uma interface onde o jogador possa:

- visualizar informações do personagem
- executar ações rápidas
- enviar mensagens
- utilizar componentes reutilizáveis

Seu trabalho será desenvolver esse painel utilizando React.

# 📋 PROJETO

Você deverá criar uma interface RPG contendo:

- um card de personagem
- botões de ação
- formulário de mensagem
- estilização completa com CSS
- componentes reutilizáveis

# 📁 ESTRUTURA OBRIGATORIA

```
src/
├── components/
│   ├── Card/
│   │   ├── index.jsx
│   │   ├── style.css
│   ├── FormularioMensagem/
│   │   ├── index.jsx
│   │   ├── style.css
├── App.jsx
└── App.test.jsx
```

# 📑 REQUISITOS

## RF01 — Criar componente Card

Criar:

```
src/components/Card
```

O componente deve:

- utilizar `children`
- funcionar como container reutilizável
- possuir estilização própria

## RF02 — Criar componente FormularioMensagem

Criar:

```
src/components/FormularioMensagem
```

O componente deve possuir:

- input nome
- input mensagem
- botão enviar

## RF03 — Trabalhar com onSubmit

O formulário deve:

- utilizar `onSubmit`
- utilizar `preventDefault`
- mostrar alert com:
    - nome
    - mensagem

## RF04 — Trabalhar com CSS

Todos os componentes devem possuir:

```
style.css
```

## RF05 — Trabalhar com Organização Profissional

Cada componente deve possuir:

- pasta própria
- CSS próprio

# 🖼️ TELA DO PROJETO

O aluno deverá criar uma interface semelhante a esta:

![wireframenv1.png](./src/assets/wireframenv1.png)

Boas práticas! 🤙
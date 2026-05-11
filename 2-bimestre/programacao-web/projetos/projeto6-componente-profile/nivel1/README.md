# 📘 PROJETO 6: COMPONENTE PROFILE

# 🧩 PROBLEMA

A empresa fictícia **TechVision** está desenvolvendo um sistema interno para seus funcionários.

O sistema precisa exibir informações dos usuários em cartões de perfil.

Seu trabalho será desenvolver um componente chamado `Profile` , onde os designs já criaram o wireframe:

![Wireframe](./src/assets/wireframe.png)

Você deve criar o sistema de acordo com o wireframe proposto acima. As imagens dos funcionários você poderá pegar qualquer uma no Google Imagens (foto de pessoas!).

Esse componente deverá ser:

- reutilizável
- estilizado
- organizado
- fácil de manter

# 📋 PROJETO

Você deverá criar um componente React capaz de mostrar:

- Foto do usuário
- Nome
- Idade
- Profissão

O componente será reutilizado várias vezes com dados diferentes. Abaixo também está as classes utilizadas na estilização:

```
profile-card
padding
background-color
```

# 📑 REQUISITOS

## RF01 — Criar componente Profile

Criar:

```
./src/components/Profile/index.jsx
```

O componente deve receber props:

```
nome
idade
profissao
foto
```

## RF02 — Exibir informações do usuário

O componente deve mostrar:

- imagem
- nome
- idade
- profissão

## RF03 — Criar CSS

Criar:

```
./src/styles/Profile.css
```

O CSS deve estilizar:

- imagem
- textos

## RF04 — Utilizar o componente 3 vezes

O `App.jsx` deve renderizar 3 usuários diferentes.

Boas práticas! 🤙
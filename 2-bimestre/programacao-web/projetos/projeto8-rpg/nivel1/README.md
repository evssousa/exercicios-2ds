# 📘 PROJETO 8 — CADASTRO DE HERÓIS

# 🧩 PROBLEMA

Você foi contratado para criar uma pequena tela para um jogo de RPG.

O sistema deve permitir cadastrar heróis e exibi-los em uma lista.

Atualmente os jogadores estão anotando os nomes dos personagens em papel. Seu objetivo é facilitar esse processo criando uma tela simples para cadastro.

# 📋 PROJETO

Criar uma aplicação chamada:

```
Cadastro de Heróis
```

O sistema permitirá:

- Digitar o nome de um herói.
- Cadastrar o herói.
- Exibir os heróis cadastrados em uma lista.

# 📁 Estrutura Obrigatória

```
src/
├── components/
│
│   ├── FormularioHeroi/
│   │   ├── index.jsx
│   │   └── style.css
│
│   ├── ListaHerois/
│   │   ├── index.jsx
│   │   └── style.css
│
├── test/
│   ├── FormularioHeroi.test.jsx
│   ├── ListaHerois.test.jsx
│   └── App.test.jsx
│
├── App.jsx
└── main.jsx
```

# 📑 REQUISITOS

## RF01 — Título

A aplicação deve exibir:

```
Cadastro de Heróis
```

## RF02 — Campo Nome

O sistema deve possuir um campo:

```
Nome do Herói
```

## RF03 — Input Controlado

O campo deve utilizar:

```jsx
useState()
```

## RF04 — Botão de Cadastro

Deve existir um botão:

```
Cadastrar
```

## RF05 — Lista de Heróis

Os heróis cadastrados devem ser exibidos em uma lista.

## RF06 — Utilizar map()

A lista deve ser renderizada utilizando:

```jsx
map()
```

## RF07 — Compartilhamento de Estado

A lista de heróis deve ficar armazenada no:

```
App.jsx
```

e ser enviada para os componentes através de props.

# 🎨 REQUISITOS VISUAIS

A interface deve possuir:

- Fundo branco
- Título destacado
- Input com borda
- Botão estilizado
- Lista organizada
- Espaçamento entre os elementos

# 📄 EXEMPLO DE FUNCIONAMENTO

Ao iniciar:

```
Cadastro de Heróis

[Nome do Herói]

[CADASTRAR]

Nenhum herói cadastrado.
```

Após cadastrar:

```
Cadastro de Heróis

[Nome do Herói]

[CADASTRAR]

• Arthur
• Merlin
• Legolas
```

# 🖼️ TELA ESPERADA

```
----------------------------------

       CADASTRO DE HERÓIS

----------------------------------

Nome do Herói

[______________________]

[ CADASTRAR ]

----------------------------------

Heróis Cadastrados

• Arthur
• Merlin
• Legolas

----------------------------------
```
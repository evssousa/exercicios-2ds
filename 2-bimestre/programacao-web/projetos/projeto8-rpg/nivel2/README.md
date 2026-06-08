# 📘 PROJETO 8 — GERENCIADOR DE PERSONAGENS RPG

# 🧩 PROBLEMA

Uma empresa está desenvolvendo um sistema para auxiliar mestres de RPG durante suas campanhas.

Atualmente os mestres precisam anotar informações dos personagens em papel ou planilhas, dificultando a organização.

Sua missão é criar um sistema simples que permita:

- cadastrar personagens
- visualizar os personagens cadastrados
- acompanhar quantos personagens existem
- exibir mensagens automáticas do sistema

# 📋 PROJETO

Você deverá criar uma aplicação chamada:

```
Gerenciador de Personagens RPG
```

O sistema permitirá cadastrar personagens através de um formulário e visualizar uma lista dos personagens cadastrados.

# 📁 Estrutura Obrigatória

```
src/
├── components/
│
│   ├── FormularioPersonagem/
│   │   ├── index.jsx
│   │   └── style.css
│
│   ├── ListaPersonagens/
│   │   ├── index.jsx
│   │   └── style.css
│
│   ├── PainelStatus/
│   │   ├── index.jsx
│   │   └── style.css
│
├── test/
│   ├── FormularioPersonagem.test.jsx
│   ├── ListaPersonagens.test.jsx
│   ├── PainelStatus.test.jsx
│   ├── App.test.jsx
│
├── App.jsx
└── main.jsx
```

# 📑 REQUISITOS

## RF01 — Cadastro de Personagem

O sistema deve possuir um formulário contendo:

- Nome
- Classe

## RF02 — Inputs Controlados

Os campos devem utilizar:

```jsx
useState()
```

para controlar seus valores.

## RF03 — Botão de Cadastro

O formulário deve possuir um botão:

```
Cadastrar Personagem
```

## RF04 — Compartilhamento de Estado

A lista de personagens deverá ser armazenada no:

```
App.jsx
```

e compartilhada com os demais componentes através de props.

## RF05 — Lista de Personagens

O sistema deve exibir todos os personagens cadastrados utilizando:

```jsx
map()
```

## RF06 — Renderização Condicional

Quando não houver personagens cadastrados, exibir:

```
Nenhum personagem cadastrado.
```

Quando houver personagens cadastrados, exibir a lista normalmente.

## RF07 — Painel de Status

Criar um componente chamado:

```
PainelStatus
```

que mostre:

```
Total de Personagens: X
```

## RF08 — Utilizar useRef

Após cadastrar um personagem:

- limpar os campos
- colocar o cursor novamente no campo Nome

Utilizar:

```jsx
useRef()
```

para realizar o foco automático.

## RF09 — Utilizar useEffect

Sempre que um novo personagem for cadastrado:

```jsx
console.log("Lista atualizada")
```

deve ser executado.

Utilizar:

```jsx
useEffect()
```

# 🎨 REQUISITOS VISUAIS

O sistema deve possuir:

- Título principal
- Formulário centralizado
- Lista organizada
- Espaçamento adequado
- Bordas arredondadas
- Cores suaves
- CSS separado para cada componente

# 🖼️ TELAS DO PROJETO

A interface deverá possuir aproximadamente a seguinte estrutura:

```
------------------------------------------------
|      GERENCIADOR DE PERSONAGENS RPG          |
------------------------------------------------

Nome
[_____________________]

Classe
[_____________________]

[ CADASTRAR PERSONAGEM ]

------------------------------------------------

Total de Personagens: 0

------------------------------------------------

Nenhum personagem cadastrado.

------------------------------------------------
```

Após cadastros:

```
------------------------------------------------
|      GERENCIADOR DE PERSONAGENS RPG          |
------------------------------------------------

Nome
[_____________________]

Classe
[_____________________]

[ CADASTRAR PERSONAGEM ]

------------------------------------------------

Total de Personagens: 3

------------------------------------------------

• Arthur - Guerreiro
• Merlin - Mago
• Legolas - Arqueiro

------------------------------------------------
```
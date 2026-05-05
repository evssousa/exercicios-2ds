# 📘 PROJETO 5: PRIMEIRO SITE COM REACT - NÍVEL 2

# 🧩 PROBLEMA

Uma pequena empresa precisa de um **site institucional simples** para apresentar seus serviços.

Ela deseja uma página única contendo:

- Cabeçalho
- Página inicial
- Sobre a empresa
- Contato
- Rodapé

Seu trabalho será desenvolver esse site usando **React**.

# 📋 PROJETO

Crie um site simples com React contendo:

- **Header**
- **Home**
- **Sobre**
- **Contato**
- **Footer**

Tudo deve ser separado em componentes.

# 📁 ESTRUTURA DO PROJETO

```
src/
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Sobre.jsx
│   └── Contato.jsx
│
├── App.jsx
├── main.jsx
```

# 📑 REQUISITOS

## RF01 — Cabeçalho

Criar componente:

```
Header.jsx
```

Deve conter:

- Nome do site: `“Meu Primeiro Site”`
- Navegação com links:

```
Home
Sobre
Contato
```

## RF02 — Página Home

Criar componente:

```
Home.jsx
```

Deve conter:

- Subtítulo Home
- Texto de boas-vindas: `“Bem-vindo ao nosso site!”`

## RF03 — Página Sobre

Criar componente:

```
Sobre.jsx
```

Deve conter:

- Subtítulo Sobre
- Texto explicando empresa, pessoa ou serviço.
- Obrigatório ter um parágrafo com o texto:
    
    ```
    Somos uma empresa focada em tecnologia.
    ```
    

## RF04 — Página Contato

Criar componente:

```
Contato.jsx
```

Deve conter:

- Subtítulo Contato
- Email `contato@site.com` ou telefone qualquer

## RF05 — Rodapé

Criar componente:

```
Footer.jsx
```

Deve conter:

- Texto de direitos autorais: `“2026 Meu Site React”`

## RF06 — App Principal

O `App.jsx` deve importar todos os componentes e exibir:

```jsx
<Header />

<main>
	<Home />
	<Sobre />
	<Contato />
</main>

<Footer />
```

## **🎯 RELEMBRANDO PROJETO COM VITE**

1. Crie um novo projeto usando o Vite com React, como explicado acima.
2. Nome do projeto deve ser "react" (obs: NÃO utilize o . no final do comando!).
3. Vá até a pasta `extras`, copie e cole no seu projeto os arquivos que contém lá:
    - pasta `test` cole dentro da pasta `src`;
    - o arquivo `setupTests.js` cole também dentro da pasta `src`;
    - arquivos `package.json` e `vite.config.js` devem substituir pelo os que vem no projeto;

Boas práticas! 🤙
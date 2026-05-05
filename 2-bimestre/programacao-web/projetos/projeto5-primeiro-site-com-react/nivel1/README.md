# 📘 PROJETO 5: PRIMEIRO SITE COM REACT - NÍVEL 1

# 🧩 PROBLEMA

Uma pequena empresa precisa de um **site institucional simples** para apresentar seus serviços.

Ela deseja uma página única contendo:

- Cabeçalho
- Rodapé

Seu trabalho será desenvolver esse site usando **React**.

# 📋 PROJETO

Crie um site simples com React contendo:

- **Header**
- **Footer**

Tudo deve ser separado em componentes.

# 📁 ESTRUTURA DO PROJETO

```
src/
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
```

# 📑 REQUISITOS

## RF01 — Cabeçalho

Criar componente:

```
Header.jsx
```

Deve conter:

- Nome do site: `“Meu Primeiro Site”`

## RF02 — Rodapé

Criar componente:

```
Footer.jsx
```

Deve conter:

- Texto de direitos autorais: `“2026 Meu Site React”`

## RF03 — App Principal

O `App.jsx` deve importar todos os componentes e exibir:

```jsx
<Header />
<Footer />
```

Boas práticas! 🤙
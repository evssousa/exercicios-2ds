# 📘 AULA 41: INTRODUÇÃO AO REACT E AO VIRTUAL DOM

⏱️ **Duração:** 50 minutos

# 🎯 Objetivos da Aula

- Entender o que é o React.
- Compreender o conceito de **biblioteca vs framework**.
- Entender o que é o **Virtual DOM**.
- Comparar DOM tradicional vs React.

# 📚 O que é React?

O React é uma **biblioteca JavaScript** criada pelo Facebook para construir interfaces.

👉 Ele é usado para criar:

- Sites interativos
- Sistemas web
- Aplicações modernas

# ⚙️ Biblioteca vs Framework

- **Biblioteca (React):** você escolhe como usar
- **Framework (Angular):** já define estrutura completa

# 🌐 DOM Tradicional

Quando usamos JavaScript puro:

```jsx
const titulo = document.getElementById("titulo");
titulo.textContent = "Novo título";
```

👉 Problema:

- Atualizações são **mais lentas**
- Código fica **complexo em projetos grandes**

# ⚡ Virtual DOM

O React utiliza o **Virtual DOM**.

👉 Ele funciona assim:

1. Cria uma cópia do DOM na memória
2. Faz alterações nessa cópia
3. Atualiza **apenas o que mudou na tela**

# 📊 Comparação

| DOM Normal | Virtual DOM |
| --- | --- |
| Atualiza tudo | Atualiza só o necessário |
| Mais lento | Mais rápido |
| Mais complexo | Mais organizado |

# 🧠 Por que usar React?

- Organização em componentes
- Código reutilizável
- Melhor performance
- Muito usado no mercado
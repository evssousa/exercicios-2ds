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

Fim da aula!

_

# 📝 Atividade Rápida

## 📌 Introdução ao React

Tespondendo as perguntas abaixo:

---

Perguntas:

1. O que é React?
2. React é biblioteca ou framework?
3. O que é Virtual DOM?
4. Qual a vantagem do Virtual DOM?

Crie sua resposta abaixo:

1. React é uma biblioteca JavaScript usada para criar interfaces de usuário em aplicações web.
2. React é uma biblioteca.
3. Virtual DOM é uma cópia do DOM que fica na memória e é usada para fazer atualizações de forma mais eficiente.
4. A vantagem do Virtual DOM é que ele atualiza apenas as partes que mudaram na tela, deixando o sistema mais rápido e organizado.

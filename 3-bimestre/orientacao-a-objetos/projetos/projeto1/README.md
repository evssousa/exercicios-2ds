# 🚀 PROJETO 1 — SISTEMA DE BIBLIOTECA

# 🏢 PROBLEMA

Você foi contratado como desenvolvedor júnior pela empresa **CodeLibrary**, uma empresa que está desenvolvendo um sistema de gerenciamento de bibliotecas.

A equipe responsável pelo backend está trabalhando na primeira versão do sistema.

Durante a Sprint atual, o Product Owner passou o seguinte requisito:

> **"Precisamos de uma estrutura que permita cadastrar livros e controlar se eles estão disponíveis para empréstimo."**
> 

Atualmente, a equipe possui apenas a interface do sistema. O seu trabalho é desenvolver a primeira versão da lógica responsável pelos livros.

# 📋 PROJETO

O sistema deverá possuir uma classe chamada:

```jsx
Livro
```

Cada livro deverá possuir:

- título;
- autor;
- ano;
- disponibilidade.

Além disso, o livro deverá possuir ações que permitam:

- emprestar o livro;
- devolver o livro;
- consultar sua disponibilidade.

# 🧩 Requisito 1 — Classe `Livro`

Crie uma classe chamada:

```jsx
Livro
```

O `constructor` deverá receber:

```
titulo
autor
ano
```

A disponibilidade deverá começar automaticamente como:

```
true
```

Isso significa que todo livro novo começa disponível para empréstimo.

# 📌 Exemplo de utilização

Depois de implementada a classe, deverá ser possível fazer:

```jsx
const livro = new Livro(
    "O Hobbit",
    "J.R.R. Tolkien",
    1937
)
```

E consultar:

```jsx
livro.titulo
livro.autor
livro.ano
livro.disponivel
```

# 🧩 Requisito 2 — Action `emprestar()`

A classe deverá possuir uma action:

```jsx
emprestar()
```

Quando executada, deverá alterar a disponibilidade do livro para:

```jsx
false
```

Exemplo:

```jsx
livro.emprestar()
```

Depois disso:

```jsx
livro.disponivel
```

deverá retornar:

```
false
```

# ⚠️ Regra de negócio

Um livro que já está emprestado **não pode ser emprestado novamente**.

Exemplo:

```jsx
livro.emprestar()
livro.emprestar()
```

A segunda tentativa não deverá alterar o estado do livro.

# 🧩 Requisito 3 — Action `devolver()`

A classe deverá possuir:

```jsx
devolver()
```

Essa action deverá tornar o livro novamente disponível.

Exemplo:

```jsx
livro.emprestar()

livro.devolver()
```

Resultado:

```jsx
livro.disponivel === true
```

# ⚠️ Regra de negócio

Um livro que já está disponível não precisa ser devolvido novamente.

A execução de:

```jsx
livro.devolver()
```

em um livro disponível não deverá gerar erro nem alterar incorretamente seus dados.

# 🧩 Requisito 4 — Action `estaDisponivel()`

Crie uma action chamada:

```jsx
estaDisponivel()
```

Ela deverá retornar:

```
true
```

quando o livro estiver disponível.

E:

```
false
```

quando estiver emprestado.

Exemplo:

```jsx
const livro = new Livro(
    "O Hobbit",
    "J.R.R. Tolkien",
    1937
)

livro.estaDisponivel()
```

Resultado:

```
true
```

Depois:

```jsx
livro.emprestar()

livro.estaDisponivel()
```

Resultado:

```
false
```

# 🧩 Requisito 5 — Independência das instâncias

O sistema deverá permitir criar diversos livros.

Por exemplo:

```jsx
const livro1 = new Livro(
    "O Hobbit",
    "J.R.R. Tolkien",
    1937
)

const livro2 = new Livro(
    "1984",
    "George Orwell",
    1949
)
```

Os livros deverão funcionar de maneira independente.

Se:

```jsx
livro1.emprestar()
```

isso **não poderá alterar**:

```jsx
livro2.disponivel
```

# 📄 Arquivo `index.js`

Você deverá desenvolver toda a solução nesse arquivo.

O arquivo deverá exportar a classe:

```jsx
module.exports = Livro
```

Boas práticas! 🤙
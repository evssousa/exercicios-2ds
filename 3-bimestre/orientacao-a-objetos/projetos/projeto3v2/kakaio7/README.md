# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE TÍTULOS DE UM JOGO

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um jogo de RPG que concede títulos honorários aos personagens.

Atualmente o sistema precisa lidar com três situações diferentes:

- Título de cavaleiro concedido a;
- Título de mago concedido a;
- Título de campeão concedido a.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Título de cavaleiro concedido a

O sistema deve permitir criar título de cavaleiro concedido a.

O objeto deve possuir personagem e, quando a operação for executada, deve produzir:

```
Título de cavaleiro concedido a: PERSONAGEM
```

Exemplo:

```
Título de cavaleiro concedido a: Thorin
```

### RF02 — Título de mago concedido a

O sistema deve permitir criar título de mago concedido a.

Quando a operação for executada, deve produzir:

```
Título de mago concedido a: PERSONAGEM
```

Exemplo:

```
Título de mago concedido a: Merlin
```

### RF03 — Título de campeão concedido a

O sistema deve permitir criar título de campeão concedido a.

Quando a operação for executada, deve produzir:

```
Título de campeão concedido a: PERSONAGEM
```

Exemplo:

```
Título de campeão concedido a: Sylvas
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Titulo`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
cavaleiro
mago
campeao
```

Por exemplo, ao solicitar:

```
criar("cavaleiro", "Thorin")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const titulo = ...
titulo.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `personagem`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `aprendiz-sem-treino`, a criação deverá gerar um erro:

```
Tipo de título inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
kakaio7
┣ test
┃ ┗ titulo.test.js
┣ Titulo.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Titulo.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`kakaio7`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

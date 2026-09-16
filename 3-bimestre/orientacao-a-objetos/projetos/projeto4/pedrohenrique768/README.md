# 🚀 PROJETO 4 — SISTEMA DE RH

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma empresa que está informatizando o cadastro de colaboradores.

Hoje, o cadastro de cada colaborador é feito manualmente, o que já gerou cadastros com o vínculo errado.

Seu trabalho é criar o colaborador correto a partir do tipo informado.

# 💡 A ideia central

Pense em uma classe `Colaborador`, que serve de "molde" para os diferentes tipos que o sistema precisa representar.

Cada tipo herda o que é comum e tem seu próprio jeito de responder à mesma pergunta.

É como pessoas diferentes usando o mesmo crachá de entrada, mas cada uma indo para uma sala diferente.

# 📋 PROJETO

### RF01 — Colaborador (classe base)

O sistema deve possuir uma estrutura base `Colaborador`, com atributos privados `nome` e `idade`, acessíveis através de getters.

Toda instância de `Colaborador` deve possuir um método `resumo()`, que retorna:

```
Colaborador cadastrado no sistema
```

### RF02 — Estagiario

Deve existir uma estrutura específica `Estagiario`, que reaproveita as características comuns de `Colaborador`.

`Estagiario` deve sobrescrever `resumo()`, retornando:

```
Colaborador estagiário registrado
```

### RF03 — Efetivo

Deve existir uma estrutura específica `Efetivo`, que reaproveita as características comuns de `Colaborador`.

`Efetivo` deve sobrescrever `resumo()`, retornando:

```
Colaborador efetivo registrado
```

### RF04 — Terceirizado

Deve existir uma estrutura específica `Terceirizado`, que reaproveita as características comuns de `Colaborador`.

`Terceirizado` deve sobrescrever `resumo()`, retornando:

```
Colaborador terceirizado registrado
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
estagiario
efetivo
terceirizado
```

Por exemplo, ao solicitar:

```
criar("estagiario", "Leonardo Cunha", 29)
```

o sistema deverá retornar uma instância de `Estagiario` com `nome` `"Leonardo Cunha"` e `idade` `29`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de colaborador inválido
```

# 🪜 Por onde começar

1. Crie o arquivo `Colaborador.js` dentro da pasta `class/`.
2. Dentro dele, crie a classe `Colaborador`, com `nome` e `idade` privados e getters para os dois.
3. Adicione o método `resumo()`, retornando o texto do RF01.
4. Crie o arquivo `Estagiario.js`, com a classe `Estagiario` usando `extends Colaborador`.
5. Dentro de `Estagiario`, sobrescreva `resumo()` com o texto do RF02.
6. Repita os passos 4 e 5 para criar `Efetivo.js` (RF03) e `Terceirizado.js` (RF04).
7. Crie o arquivo `ColaboradorFactory.js`, com a classe `ColaboradorFactory` e o método estático `criar(tipo, nome, idade)`.
8. Dentro de `criar`, use `if` para verificar o `tipo` recebido e devolver a instância certa.
9. Se nenhum `tipo` bater, use `throw new Error("Tipo de colaborador inválido")`.

# 💡 Dicas

Dica: use `extends` para uma classe herdar de outra.
Dica: o `constructor` da classe filha pode chamar `super(nome, idade)` para aproveitar o `constructor` de `Colaborador`.
Dica: se a classe filha não precisa de um `constructor` próprio, ela pode simplesmente não ter um — ela já herda o de `Colaborador`.
Dica: para sobrescrever um método, basta criar um método com o mesmo nome na classe filha.
Dica: um método estático se declara com a palavra `static` antes do nome do método.
Dica: use `throw new Error("mensagem")` para gerar o erro do tipo inválido.

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-sistema-de-rh
┣ class
┃ ┣ Colaborador.js
┃ ┣ Estagiario.js
┃ ┣ Efetivo.js
┃ ┣ Terceirizado.js
┃ ┗ ColaboradorFactory.js
┣ test
┃ ┗ projeto.test.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

## ▶️ Como executar

```
npm install
node index.js
```

## 🧪 Como executar os testes

```
npm install
npm test
```

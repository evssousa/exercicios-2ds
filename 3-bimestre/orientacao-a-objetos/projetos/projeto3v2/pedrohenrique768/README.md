# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE SENHAS DE ATENDIMENTO

# 🎯 O QUE FAZER

Crie um sistema que emite senhas de atendimento de duas formas diferentes: normal e prioritária.

Cada senha emitida tem um nome (o nome da pessoa que vai ser chamada).

# 🧭 A IDEIA POR TRÁS DISSO

Existem dois tipos de senha: `normal` e `prioritaria`. Os dois fazem a mesma coisa (emitir uma senha), mas cada um escreve uma frase diferente.

Isso é feito com **duas classes parecidas**: uma classe principal (`Senha`) e uma classe para cada tipo (`Normal` e `Prioritaria`), que **herdam** da classe principal. Cada uma dessas duas classes tem seu próprio jeito de fazer o método `emitir()`.

Para não precisar escolher "na mão" qual classe usar toda vez, existe uma `Factory` (fábrica): você diz o tipo (`"normal"` ou `"prioritaria"`) e o nome, e ela devolve o objeto certo já pronto.

# 📋 REQUISITOS

### RF01 — Criar com normal

Ao criar com o tipo `normal`, o resultado deve ser:

```
Senha normal emitida para: Mário
```

### RF02 — Criar com prioritaria

Ao criar com o tipo `prioritaria`, o resultado deve ser:

```
Senha prioritária emitida para: Renata
```

### RF03 — Criar pelo tipo certo

Use:

```
criar("normal", "Mário")
criar("prioritaria", "Renata")
```

### RF04 — Tipo errado

Se o tipo não existir, mostre o erro:

```
Tipo inválido
```

# 🪜 PASSO A PASSO

1. Crie o arquivo `Senha.js`.
2. Dentro dele, crie uma classe chamada `Senha`, com um `constructor` que recebe e guarda o nome.
3. Ainda em `Senha.js`, crie a classe `Normal`, que usa `extends Senha` (ou seja, herda de `Senha`).
4. Dentro de `Normal`, crie o método `emitir()` que devolve o texto do RF01, usando o nome guardado.
5. Faça o mesmo para a classe `Prioritaria`: também usa `extends Senha`, e tem seu próprio `emitir()` com o texto do RF02.
6. No final de `Senha.js`, exporte as três classes (`Senha`, `Normal` e `Prioritaria`).
7. Crie o arquivo `Factory.js`. Dentro dele, crie uma classe `Factory` com um método estático `criar(tipo, nome)`.
8. Dentro de `criar`, decida qual classe usar de acordo com o `tipo` recebido (`"normal"` → `Normal`, `"prioritaria"` → `Prioritaria`) e devolva uma nova instância dela, passando o `nome`.
9. Se o `tipo` não for nenhum desses dois, use `throw new Error("Tipo inválido")`.
10. Rode `npm test` e veja quais testes ainda estão falhando, para saber o que ajustar.

# 💡 DICAS

- Dica: use `class NomeDaClasse extends OutraClasse { ... }` para herdar de outra classe.
- Dica: o `constructor(nome)` é o lugar de guardar o nome recebido, com `this.nome = nome`.
- Dica: cada classe filha (`Normal`, `Prioritaria`) só precisa ter o método `emitir()`, escrito de um jeito diferente em cada uma.
- Dica: `static criar(tipo, nome)` significa que você chama `Factory.criar(...)` diretamente, sem precisar criar um objeto `Factory` antes.
- Dica: para o tipo errado, o comando é `throw new Error("Tipo inválido")`.

# 📁 ARQUIVOS

```
pedrohenrique768
┣ test
┃ ┗ senha.test.js
┣ Senha.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

Você precisa criar os arquivos `Senha.js` e `Factory.js`.

# ▶️ COMO RODAR

```bash
npm install
npm test
```

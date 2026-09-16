# 🚀 PROJETO 4 — ESTÚDIO DE JOGOS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um estúdio de jogos que está organizando o cadastro de personagens.

Hoje, o cadastro de cada personagem é feito manualmente, o que já gerou personagens cadastrados com a classe errada. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o personagem correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Personagem (classe base)

O sistema deve possuir uma estrutura base `Personagem`, com atributos privados `nome` e `nivel`, acessíveis através de getters.

Toda instância de `Personagem` deve possuir um método `descricao()`, que retorna:

```
Personagem cadastrado no jogo
```

### RF02 — Guerreiro

Deve existir uma estrutura específica `Guerreiro`, que reaproveita as características comuns de `Personagem`.

`Guerreiro` deve sobrescrever `descricao()`, retornando:

```
Guerreiro pronto para a batalha
```

### RF03 — Mago

Deve existir uma estrutura específica `Mago`, que reaproveita as características comuns de `Personagem`.

`Mago` deve sobrescrever `descricao()`, retornando:

```
Mago pronto para a batalha
```

### RF04 — Arqueiro

Deve existir uma estrutura específica `Arqueiro`, que reaproveita as características comuns de `Personagem`.

`Arqueiro` deve sobrescrever `descricao()`, retornando:

```
Arqueiro pronto para a batalha
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
guerreiro
mago
arqueiro
```

Por exemplo, ao solicitar:

```
criar("guerreiro", "Thoran", 8)
```

o sistema deverá retornar uma instância de `Guerreiro` com `nome` `"Thoran"` e `nivel` `8`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de personagem inválido
```

### RF06 — Habilidade

O sistema deve permitir criar um(a) `Habilidade`, contendo `nome` e `poder`.

Exemplo:

```
const item = new Habilidade("Fúria", 50)

item.nome   // "Fúria"
item.poder // 50
```

### RF07 — Equipe

O sistema deve permitir criar um(a) `Equipe`, identificado por um `nome`.

Um(a) `Equipe` deve permitir adicionar membros (instâncias de `Guerreiro`) e categorias (instâncias de `Habilidade`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Equipe("Equipe Alfa")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Habilidade { nome: "Fúria", poder: 50 } ]
grupo.membros    // [ Guerreiro { nome: "Thoran", nivel: 8 } ]
```

### RF08 — Batalha

O sistema deve permitir criar um(a) `Batalha`, associando um `valor` (pontos) a um(a) `Habilidade`.

Uma instância de `Guerreiro` deve permitir receber vários registros do tipo `Batalha`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Batalha(120, item)

membro.adicionarRegistro(registro)

membro.registros // [ Batalha { valor: 120, habilidade: Habilidade { nome: "Fúria", poder: 50 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-estudio-de-jogos
┣ class
┃ ┣ Personagem.js
┃ ┣ Guerreiro.js
┃ ┣ Mago.js
┃ ┣ Arqueiro.js
┃ ┣ Habilidade.js
┃ ┣ Equipe.js
┃ ┣ Batalha.js
┃ ┗ PersonagemFactory.js
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

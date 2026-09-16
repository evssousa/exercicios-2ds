# 🚀 PROJETO 4 — ACADEMIA FITNESS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma academia que está automatizando o controle de planos.

Hoje, cada plano é registrado manualmente, o que já gerou contratações com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o plano correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Plano (classe base)

O sistema deve possuir uma estrutura base `Plano`, com atributos privados `nomeDoTitular` e `duracaoEmMeses`, acessíveis através de getters.

Toda instância de `Plano` deve possuir um método `resumo()`, que retorna:

```
Plano registrado no sistema
```

### RF02 — Mensal

Deve existir uma estrutura específica `Mensal`, que reaproveita as características comuns de `Plano`.

`Mensal` deve sobrescrever `resumo()`, retornando:

```
Plano mensal ativado
```

### RF03 — Trimestral

Deve existir uma estrutura específica `Trimestral`, que reaproveita as características comuns de `Plano`.

`Trimestral` deve sobrescrever `resumo()`, retornando:

```
Plano trimestral ativado
```

### RF04 — Anual

Deve existir uma estrutura específica `Anual`, que reaproveita as características comuns de `Plano`.

`Anual` deve sobrescrever `resumo()`, retornando:

```
Plano anual ativado
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
mensal
trimestral
anual
```

Por exemplo, ao solicitar:

```
criar("mensal", "Marcos Vinícius", 12)
```

o sistema deverá retornar uma instância de `Mensal` com `nomeDoTitular` `"Marcos Vinícius"` e `duracaoEmMeses` `12`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de plano inválido
```

### RF06 — Modalidade

O sistema deve permitir criar um(a) `Modalidade`, contendo `nome` e `intensidade`.

Exemplo:

```
const item = new Modalidade("Musculação", 3)

item.nome   // "Musculação"
item.intensidade // 3
```

### RF07 — Turma

O sistema deve permitir criar um(a) `Turma`, identificado por um `nome`.

Um(a) `Turma` deve permitir adicionar membros (instâncias de `Mensal`) e categorias (instâncias de `Modalidade`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Turma("Turma da manhã")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Modalidade { nome: "Musculação", intensidade: 3 } ]
grupo.membros    // [ Mensal { nomeDoTitular: "Marcos Vinícius", duracaoEmMeses: 12 } ]
```

### RF08 — Frequencia

O sistema deve permitir criar um(a) `Frequencia`, associando um `valor` (presenças) a um(a) `Modalidade`.

Uma instância de `Mensal` deve permitir receber vários registros do tipo `Frequencia`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Frequencia(4, item)

membro.adicionarRegistro(registro)

membro.registros // [ Frequencia { valor: 4, modalidade: Modalidade { nome: "Musculação", intensidade: 3 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-academia-fitness
┣ class
┃ ┣ Plano.js
┃ ┣ Mensal.js
┃ ┣ Trimestral.js
┃ ┣ Anual.js
┃ ┣ Modalidade.js
┃ ┣ Turma.js
┃ ┣ Frequencia.js
┃ ┗ PlanoFactory.js
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

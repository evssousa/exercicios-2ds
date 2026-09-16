# 🚀 PROJETO 4 — OFICINA MECÂNICA

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma oficina mecânica que está informatizando a abertura de ordens de serviço.

Hoje, cada ordem de serviço é aberta manualmente, o que já gerou ordens abertas com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar a ordem de serviço correta a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — OrdemServico (classe base)

O sistema deve possuir uma estrutura base `OrdemServico`, com atributos privados `nomeDoCliente` e `codigoDaOrdem`, acessíveis através de getters.

Toda instância de `OrdemServico` deve possuir um método `resumo()`, que retorna:

```
Ordem de serviço aberta no sistema
```

### RF02 — Revisao

Deve existir uma estrutura específica `Revisao`, que reaproveita as características comuns de `OrdemServico`.

`Revisao` deve sobrescrever `resumo()`, retornando:

```
Ordem de revisão em andamento
```

### RF03 — Funilaria

Deve existir uma estrutura específica `Funilaria`, que reaproveita as características comuns de `OrdemServico`.

`Funilaria` deve sobrescrever `resumo()`, retornando:

```
Ordem de funilaria em andamento
```

### RF04 — Eletrica

Deve existir uma estrutura específica `Eletrica`, que reaproveita as características comuns de `OrdemServico`.

`Eletrica` deve sobrescrever `resumo()`, retornando:

```
Ordem elétrica em andamento
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
revisao
funilaria
eletrica
```

Por exemplo, ao solicitar:

```
criar("revisao", "Vinícius Batista", 4471)
```

o sistema deverá retornar uma instância de `Revisao` com `nomeDoCliente` `"Vinícius Batista"` e `codigoDaOrdem` `4471`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de ordem inválido
```

### RF06 — PecaReposicao

O sistema deve permitir criar um(a) `PecaReposicao`, contendo `nome` e `custo`.

Exemplo:

```
const item = new PecaReposicao("Filtro de óleo", 45)

item.nome   // "Filtro de óleo"
item.custo // 45
```

### RF07 — Bancada

O sistema deve permitir criar um(a) `Bancada`, identificado por um `nome`.

Um(a) `Bancada` deve permitir adicionar membros (instâncias de `Revisao`) e categorias (instâncias de `PecaReposicao`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Bancada("Bancada 2")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ PecaReposicao { nome: "Filtro de óleo", custo: 45 } ]
grupo.membros    // [ Revisao { nomeDoCliente: "Vinícius Batista", codigoDaOrdem: 4471 } ]
```

### RF08 — Reparo

O sistema deve permitir criar um(a) `Reparo`, associando um `valor` (horas) a um(a) `PecaReposicao`.

Uma instância de `Revisao` deve permitir receber vários registros do tipo `Reparo`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Reparo(3, item)

membro.adicionarRegistro(registro)

membro.registros // [ Reparo { valor: 3, pecaReposicao: PecaReposicao { nome: "Filtro de óleo", custo: 45 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-oficina-mecanica
┣ class
┃ ┣ OrdemServico.js
┃ ┣ Revisao.js
┃ ┣ Funilaria.js
┃ ┣ Eletrica.js
┃ ┣ PecaReposicao.js
┃ ┣ Bancada.js
┃ ┣ Reparo.js
┃ ┗ OrdemServicoFactory.js
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

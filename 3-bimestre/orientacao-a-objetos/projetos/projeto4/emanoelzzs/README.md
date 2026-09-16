# 🚀 PROJETO 4 — SISTEMA DE HOTELARIA

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma rede de hotéis que está informatizando o controle de quartos.

Hoje, a reserva de cada quarto é registrada manualmente, o que já gerou reservas com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o quarto correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Quarto (classe base)

O sistema deve possuir uma estrutura base `Quarto`, com atributos privados `identificador` e `capacidadeDeHospedes`, acessíveis através de getters.

Toda instância de `Quarto` deve possuir um método `descricao()`, que retorna:

```
Quarto cadastrado no sistema
```

### RF02 — Standard

Deve existir uma estrutura específica `Standard`, que reaproveita as características comuns de `Quarto`.

`Standard` deve sobrescrever `descricao()`, retornando:

```
Quarto Standard disponível
```

### RF03 — Luxo

Deve existir uma estrutura específica `Luxo`, que reaproveita as características comuns de `Quarto`.

`Luxo` deve sobrescrever `descricao()`, retornando:

```
Quarto Luxo disponível
```

### RF04 — Suite

Deve existir uma estrutura específica `Suite`, que reaproveita as características comuns de `Quarto`.

`Suite` deve sobrescrever `descricao()`, retornando:

```
Suíte disponível
```

### RF05 — Presidencial

Deve existir uma estrutura específica `Presidencial`, que reaproveita as características comuns de `Quarto`.

`Presidencial` deve sobrescrever `descricao()`, retornando:

```
Quarto Presidencial disponível
```

### RF06 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
standard
luxo
suite
presidencial
```

Por exemplo, ao solicitar:

```
criar("standard", "301", 2)
```

o sistema deverá retornar uma instância de `Standard` com `identificador` `"301"` e `capacidadeDeHospedes` `2`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de quarto inválido
```

### RF07 — Servico

O sistema deve permitir criar um(a) `Servico`, contendo `nome` e `preco`.

Exemplo:

```
const item = new Servico("Frigobar", 35)

item.nome   // "Frigobar"
item.preco // 35
```

### RF08 — Andar

O sistema deve permitir criar um(a) `Andar`, identificado por um `nome`.

Um(a) `Andar` deve permitir adicionar membros (instâncias de `Standard`) e categorias (instâncias de `Servico`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Andar("Andar 3")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Servico { nome: "Frigobar", preco: 35 } ]
grupo.membros    // [ Standard { identificador: "301", capacidadeDeHospedes: 2 } ]
```

### RF09 — Consumo

O sistema deve permitir criar um(a) `Consumo`, associando um `valor` (valor) a um(a) `Servico`.

Uma instância de `Standard` deve permitir receber vários registros do tipo `Consumo`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Consumo(70, item)

membro.adicionarRegistro(registro)

membro.registros // [ Consumo { valor: 70, servico: Servico { nome: "Frigobar", preco: 35 } } ]
```

### RF10 — Presidencial

Além dos tipos anteriores, o sistema também deve reconhecer o tipo `Presidencial`, que reaproveita as características comuns de `Quarto`.

`Presidencial` deve sobrescrever `descricao()`, retornando:

```
Quarto Presidencial disponível
```

A criação centralizada (RF de Factory) também deve aceitar o tipo:

```
presidencial
```

### RF11 — Validação de valor

Um(a) `Consumo` não pode ter um `valor` negativo.

Ao tentar adicionar um registro com `valor` negativo, `adicionarRegistro` deve gerar um erro:

```
Valor inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-sistema-de-hotelaria
┣ class
┃ ┣ Quarto.js
┃ ┣ Standard.js
┃ ┣ Luxo.js
┃ ┣ Suite.js
┃ ┣ Presidencial.js
┃ ┣ Servico.js
┃ ┣ Andar.js
┃ ┣ Consumo.js
┃ ┗ QuartoFactory.js
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

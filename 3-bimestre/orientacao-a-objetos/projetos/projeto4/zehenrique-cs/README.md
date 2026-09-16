# 🚀 PROJETO 4 — CONDOMÍNIO INTELIGENTE

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma administradora de condomínios que está informatizando a abertura de chamados.

Hoje, cada chamado é aberto manualmente, o que já gerou chamados abertos com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o chamado correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — ChamadoCondominio (classe base)

O sistema deve possuir uma estrutura base `ChamadoCondominio`, com atributos privados `nomeDoMorador` e `numeroDaUnidade`, acessíveis através de getters.

Toda instância de `ChamadoCondominio` deve possuir um método `resumo()`, que retorna:

```
Chamado registrado no sistema
```

### RF02 — ManutencaoPredial

Deve existir uma estrutura específica `ManutencaoPredial`, que reaproveita as características comuns de `ChamadoCondominio`.

`ManutencaoPredial` deve sobrescrever `resumo()`, retornando:

```
Chamado de manutenção predial aberto
```

### RF03 — Seguranca

Deve existir uma estrutura específica `Seguranca`, que reaproveita as características comuns de `ChamadoCondominio`.

`Seguranca` deve sobrescrever `resumo()`, retornando:

```
Chamado de segurança aberto
```

### RF04 — Limpeza

Deve existir uma estrutura específica `Limpeza`, que reaproveita as características comuns de `ChamadoCondominio`.

`Limpeza` deve sobrescrever `resumo()`, retornando:

```
Chamado de limpeza aberto
```

### RF05 — Ruido

Deve existir uma estrutura específica `Ruido`, que reaproveita as características comuns de `ChamadoCondominio`.

`Ruido` deve sobrescrever `resumo()`, retornando:

```
Chamado de ruído aberto
```

### RF06 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
manutencao
seguranca
limpeza
ruido
```

Por exemplo, ao solicitar:

```
criar("manutencao", "Priscila Santana", 502)
```

o sistema deverá retornar uma instância de `ManutencaoPredial` com `nomeDoMorador` `"Priscila Santana"` e `numeroDaUnidade` `502`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de chamado inválido
```

### RF07 — Fornecedor

O sistema deve permitir criar um(a) `Fornecedor`, contendo `nome` e `valorDoContrato`.

Exemplo:

```
const item = new Fornecedor("Elétrica Rápida", 1800)

item.nome   // "Elétrica Rápida"
item.valorDoContrato // 1800
```

### RF08 — Bloco

O sistema deve permitir criar um(a) `Bloco`, identificado por um `nome`.

Um(a) `Bloco` deve permitir adicionar membros (instâncias de `ManutencaoPredial`) e categorias (instâncias de `Fornecedor`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Bloco("Bloco B")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Fornecedor { nome: "Elétrica Rápida", valorDoContrato: 1800 } ]
grupo.membros    // [ ManutencaoPredial { nomeDoMorador: "Priscila Santana", numeroDaUnidade: 502 } ]
```

### RF09 — ServicoExecutado

O sistema deve permitir criar um(a) `ServicoExecutado`, associando um `valor` (custo) a um(a) `Fornecedor`.

Uma instância de `ManutencaoPredial` deve permitir receber vários registros do tipo `ServicoExecutado`, mantendo-os em uma lista.

Exemplo:

```
const registro = new ServicoExecutado(220, item)

membro.adicionarRegistro(registro)

membro.registros // [ ServicoExecutado { valor: 220, fornecedor: Fornecedor { nome: "Elétrica Rápida", valorDoContrato: 1800 } } ]
```

### RF10 — Ruido

Além dos tipos anteriores, o sistema também deve reconhecer o tipo `Ruido`, que reaproveita as características comuns de `ChamadoCondominio`.

`Ruido` deve sobrescrever `resumo()`, retornando:

```
Chamado de ruído aberto
```

A criação centralizada (RF de Factory) também deve aceitar o tipo:

```
ruido
```

### RF11 — Validação de valor

Um(a) `ServicoExecutado` não pode ter um `valor` negativo.

Ao tentar adicionar um registro com `valor` negativo, `adicionarRegistro` deve gerar um erro:

```
Valor inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-condominio-inteligente
┣ class
┃ ┣ ChamadoCondominio.js
┃ ┣ ManutencaoPredial.js
┃ ┣ Seguranca.js
┃ ┣ Limpeza.js
┃ ┣ Ruido.js
┃ ┣ Fornecedor.js
┃ ┣ Bloco.js
┃ ┣ ServicoExecutado.js
┃ ┗ ChamadoCondominioFactory.js
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

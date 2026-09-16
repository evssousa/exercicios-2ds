# 🚀 PROJETO 4 — PLATAFORMA DE STREAMING

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um serviço de streaming que está reorganizando o catálogo.

Hoje, o cadastro de cada mídia é feito manualmente escolhendo a classe certa, o que já gerou títulos cadastrados com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar a mídia correta a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Midia (classe base)

O sistema deve possuir uma estrutura base `Midia`, com atributos privados `titulo` e `duracaoEmMinutos`, acessíveis através de getters.

Toda instância de `Midia` deve possuir um método `descricao()`, que retorna:

```
Mídia adicionada ao catálogo
```

### RF02 — Filme

Deve existir uma estrutura específica `Filme`, que reaproveita as características comuns de `Midia`.

`Filme` deve sobrescrever `descricao()`, retornando:

```
Filme disponível para reprodução
```

### RF03 — Serie

Deve existir uma estrutura específica `Serie`, que reaproveita as características comuns de `Midia`.

`Serie` deve sobrescrever `descricao()`, retornando:

```
Série disponível para reprodução
```

### RF04 — Documentario

Deve existir uma estrutura específica `Documentario`, que reaproveita as características comuns de `Midia`.

`Documentario` deve sobrescrever `descricao()`, retornando:

```
Documentário disponível para reprodução
```

### RF05 — CurtaMetragem

Deve existir uma estrutura específica `CurtaMetragem`, que reaproveita as características comuns de `Midia`.

`CurtaMetragem` deve sobrescrever `descricao()`, retornando:

```
Curta-metragem disponível para reprodução
```

### RF06 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
filme
serie
documentario
curtametragem
```

Por exemplo, ao solicitar:

```
criar("filme", "Além do Horizonte", 118)
```

o sistema deverá retornar uma instância de `Filme` com `titulo` `"Além do Horizonte"` e `duracaoEmMinutos` `118`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de mídia inválido
```

### RF07 — Genero

O sistema deve permitir criar um(a) `Genero`, contendo `nome` e `classificacaoEtaria`.

Exemplo:

```
const item = new Genero("Ficção Científica", 14)

item.nome   // "Ficção Científica"
item.classificacaoEtaria // 14
```

### RF08 — Catalogo

O sistema deve permitir criar um(a) `Catalogo`, identificado por um `nome`.

Um(a) `Catalogo` deve permitir adicionar membros (instâncias de `Filme`) e categorias (instâncias de `Genero`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Catalogo("Catálogo Nacional")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Genero { nome: "Ficção Científica", classificacaoEtaria: 14 } ]
grupo.membros    // [ Filme { titulo: "Além do Horizonte", duracaoEmMinutos: 118 } ]
```

### RF09 — Avaliacao

O sistema deve permitir criar um(a) `Avaliacao`, associando um `valor` (nota) a um(a) `Genero`.

Uma instância de `Filme` deve permitir receber vários registros do tipo `Avaliacao`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Avaliacao(8.7, item)

membro.adicionarRegistro(registro)

membro.registros // [ Avaliacao { valor: 8.7, genero: Genero { nome: "Ficção Científica", classificacaoEtaria: 14 } } ]
```

### RF10 — CurtaMetragem

Além dos tipos anteriores, o sistema também deve reconhecer o tipo `CurtaMetragem`, que reaproveita as características comuns de `Midia`.

`CurtaMetragem` deve sobrescrever `descricao()`, retornando:

```
Curta-metragem disponível para reprodução
```

A criação centralizada (RF de Factory) também deve aceitar o tipo:

```
curtametragem
```

### RF11 — Validação de valor

Um(a) `Avaliacao` não pode ter um `valor` negativo.

Ao tentar adicionar um registro com `valor` negativo, `adicionarRegistro` deve gerar um erro:

```
Valor inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-plataforma-de-streaming
┣ class
┃ ┣ Midia.js
┃ ┣ Filme.js
┃ ┣ Serie.js
┃ ┣ Documentario.js
┃ ┣ CurtaMetragem.js
┃ ┣ Genero.js
┃ ┣ Catalogo.js
┃ ┣ Avaliacao.js
┃ ┗ MidiaFactory.js
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

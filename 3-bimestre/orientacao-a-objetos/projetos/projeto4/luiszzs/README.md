# 🚀 PROJETO 4 — ESCRITÓRIO DE ADVOCACIA

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de um escritório de advocacia que está informatizando o controle de casos.

Hoje, a abertura de cada caso é feita manualmente, o que já gerou casos abertos com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o caso correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Caso (classe base)

O sistema deve possuir uma estrutura base `Caso`, com atributos privados `nomeDoCliente` e `numeroDoProcesso`, acessíveis através de getters.

Toda instância de `Caso` deve possuir um método `resumo()`, que retorna:

```
Caso registrado no sistema
```

### RF02 — Civil

Deve existir uma estrutura específica `Civil`, que reaproveita as características comuns de `Caso`.

`Civil` deve sobrescrever `resumo()`, retornando:

```
Caso cível em andamento
```

### RF03 — Trabalhista

Deve existir uma estrutura específica `Trabalhista`, que reaproveita as características comuns de `Caso`.

`Trabalhista` deve sobrescrever `resumo()`, retornando:

```
Caso trabalhista em andamento
```

### RF04 — Criminal

Deve existir uma estrutura específica `Criminal`, que reaproveita as características comuns de `Caso`.

`Criminal` deve sobrescrever `resumo()`, retornando:

```
Caso criminal em andamento
```

### RF05 — Tributario

Deve existir uma estrutura específica `Tributario`, que reaproveita as características comuns de `Caso`.

`Tributario` deve sobrescrever `resumo()`, retornando:

```
Caso tributário em andamento
```

### RF06 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
civil
trabalhista
criminal
tributario
```

Por exemplo, ao solicitar:

```
criar("civil", "Débora Azevedo", 88213)
```

o sistema deverá retornar uma instância de `Civil` com `nomeDoCliente` `"Débora Azevedo"` e `numeroDoProcesso` `88213`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de caso inválido
```

### RF07 — Instancia

O sistema deve permitir criar um(a) `Instancia`, contendo `nome` e `prazoEmDias`.

Exemplo:

```
const item = new Instancia("1ª Instância", 30)

item.nome   // "1ª Instância"
item.prazoEmDias // 30
```

### RF08 — CarteiraJuridica

O sistema deve permitir criar um(a) `CarteiraJuridica`, identificado por um `nome`.

Um(a) `CarteiraJuridica` deve permitir adicionar membros (instâncias de `Civil`) e categorias (instâncias de `Instancia`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new CarteiraJuridica("Carteira Cível")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Instancia { nome: "1ª Instância", prazoEmDias: 30 } ]
grupo.membros    // [ Civil { nomeDoCliente: "Débora Azevedo", numeroDoProcesso: 88213 } ]
```

### RF09 — Audiencia

O sistema deve permitir criar um(a) `Audiencia`, associando um `valor` (duração) a um(a) `Instancia`.

Uma instância de `Civil` deve permitir receber vários registros do tipo `Audiencia`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Audiencia(60, item)

membro.adicionarRegistro(registro)

membro.registros // [ Audiencia { valor: 60, instancia: Instancia { nome: "1ª Instância", prazoEmDias: 30 } } ]
```

### RF10 — Tributario

Além dos tipos anteriores, o sistema também deve reconhecer o tipo `Tributario`, que reaproveita as características comuns de `Caso`.

`Tributario` deve sobrescrever `resumo()`, retornando:

```
Caso tributário em andamento
```

A criação centralizada (RF de Factory) também deve aceitar o tipo:

```
tributario
```

### RF11 — Validação de valor

Um(a) `Audiencia` não pode ter um `valor` negativo.

Ao tentar adicionar um registro com `valor` negativo, `adicionarRegistro` deve gerar um erro:

```
Valor inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-escritorio-de-advocacia
┣ class
┃ ┣ Caso.js
┃ ┣ Civil.js
┃ ┣ Trabalhista.js
┃ ┣ Criminal.js
┃ ┣ Tributario.js
┃ ┣ Instancia.js
┃ ┣ CarteiraJuridica.js
┃ ┣ Audiencia.js
┃ ┗ CasoFactory.js
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

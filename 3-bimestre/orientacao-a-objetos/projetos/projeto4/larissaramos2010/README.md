# 🚀 PROJETO 4 — TRANSPORTE PÚBLICO

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma empresa de transporte público que está informatizando o controle da frota.

Hoje, o cadastro de cada veículo é feito manualmente, o que já gerou veículos cadastrados com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o veículo correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — VeiculoPublico (classe base)

O sistema deve possuir uma estrutura base `VeiculoPublico`, com atributos privados `identificador` e `capacidadeDePassageiros`, acessíveis através de getters.

Toda instância de `VeiculoPublico` deve possuir um método `descricao()`, que retorna:

```
Veículo cadastrado na frota
```

### RF02 — Onibus

Deve existir uma estrutura específica `Onibus`, que reaproveita as características comuns de `VeiculoPublico`.

`Onibus` deve sobrescrever `descricao()`, retornando:

```
Ônibus liberado para circulação
```

### RF03 — Metro

Deve existir uma estrutura específica `Metro`, que reaproveita as características comuns de `VeiculoPublico`.

`Metro` deve sobrescrever `descricao()`, retornando:

```
Trem de metrô liberado para circulação
```

### RF04 — VanEscolar

Deve existir uma estrutura específica `VanEscolar`, que reaproveita as características comuns de `VeiculoPublico`.

`VanEscolar` deve sobrescrever `descricao()`, retornando:

```
Van liberada para circulação
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
onibus
metro
van
```

Por exemplo, ao solicitar:

```
criar("onibus", "OB-2201", 44)
```

o sistema deverá retornar uma instância de `Onibus` com `identificador` `"OB-2201"` e `capacidadeDePassageiros` `44`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de veículo inválido
```

### RF06 — Linha

O sistema deve permitir criar um(a) `Linha`, contendo `nome` e `extensaoEmKm`.

Exemplo:

```
const item = new Linha("Linha 100", 12)

item.nome   // "Linha 100"
item.extensaoEmKm // 12
```

### RF07 — FrotaMunicipal

O sistema deve permitir criar um(a) `FrotaMunicipal`, identificado por um `nome`.

Um(a) `FrotaMunicipal` deve permitir adicionar membros (instâncias de `Onibus`) e categorias (instâncias de `Linha`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new FrotaMunicipal("Frota Zona Leste")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Linha { nome: "Linha 100", extensaoEmKm: 12 } ]
grupo.membros    // [ Onibus { identificador: "OB-2201", capacidadeDePassageiros: 44 } ]
```

### RF08 — Viagem

O sistema deve permitir criar um(a) `Viagem`, associando um `valor` (passageiros) a um(a) `Linha`.

Uma instância de `Onibus` deve permitir receber vários registros do tipo `Viagem`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Viagem(38, item)

membro.adicionarRegistro(registro)

membro.registros // [ Viagem { valor: 38, linha: Linha { nome: "Linha 100", extensaoEmKm: 12 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-transporte-publico
┣ class
┃ ┣ VeiculoPublico.js
┃ ┣ Onibus.js
┃ ┣ Metro.js
┃ ┣ VanEscolar.js
┃ ┣ Linha.js
┃ ┣ FrotaMunicipal.js
┃ ┣ Viagem.js
┃ ┗ VeiculoPublicoFactory.js
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

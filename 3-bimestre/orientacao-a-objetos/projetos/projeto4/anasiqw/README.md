# 🚀 PROJETO 4 — LOCADORA DE VEÍCULOS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma locadora de veículos que está informatizando o controle da frota.

Hoje, o cadastro de cada veículo é feito manualmente por quem atende o cliente, o que já gerou veículos cadastrados com o tipo errado. A equipe pediu uma forma organizada e centralizada de representar e criar cada tipo.

Seu trabalho será criar o veículo correto a partir do tipo informado, integrando essa funcionalidade ao restante da aplicação.

# 📋 PROJETO

### RF01 — Veiculo (classe base)

O sistema deve possuir uma estrutura base `Veiculo`, com atributos privados `modelo` e `anoDeFabricacao`, acessíveis através de getters.

Toda instância de `Veiculo` deve possuir um método `detalhes()`, que retorna:

```
Veículo cadastrado no sistema
```

### RF02 — Carro

Deve existir uma estrutura específica `Carro`, que reaproveita as características comuns de `Veiculo`.

`Carro` deve sobrescrever `detalhes()`, retornando:

```
Carro disponível para retirada
```

### RF03 — Moto

Deve existir uma estrutura específica `Moto`, que reaproveita as características comuns de `Veiculo`.

`Moto` deve sobrescrever `detalhes()`, retornando:

```
Moto disponível para retirada
```

### RF04 — Caminhao

Deve existir uma estrutura específica `Caminhao`, que reaproveita as características comuns de `Veiculo`.

`Caminhao` deve sobrescrever `detalhes()`, retornando:

```
Caminhão disponível para retirada
```

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar a instância correta de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
carro
moto
caminhao
```

Por exemplo, ao solicitar:

```
criar("carro", "Civic", 2022)
```

o sistema deverá retornar uma instância de `Carro` com `modelo` `"Civic"` e `anoDeFabricacao` `2022`.

Caso seja solicitado um tipo que o sistema não conhece, a criação deverá gerar um erro:

```
Tipo de veículo inválido
```

### RF06 — Versao

O sistema deve permitir criar um(a) `Versao`, contendo `nome` e `potencia`.

Exemplo:

```
const item = new Versao("Turbo", 180)

item.nome   // "Turbo"
item.potencia // 180
```

### RF07 — Frota

O sistema deve permitir criar um(a) `Frota`, identificado por um `nome`.

Um(a) `Frota` deve permitir adicionar membros (instâncias de `Carro`) e categorias (instâncias de `Versao`), mantendo essas associações em listas.

Exemplo:

```
const grupo = new Frota("Frota Centro")

grupo.adicionarCategoria(item)
grupo.adicionarMembro(membro)

grupo.categorias // [ Versao { nome: "Turbo", potencia: 180 } ]
grupo.membros    // [ Carro { modelo: "Civic", anoDeFabricacao: 2022 } ]
```

### RF08 — Manutencao

O sistema deve permitir criar um(a) `Manutencao`, associando um `valor` (custo) a um(a) `Versao`.

Uma instância de `Carro` deve permitir receber vários registros do tipo `Manutencao`, mantendo-os em uma lista.

Exemplo:

```
const registro = new Manutencao(850, item)

membro.adicionarRegistro(registro)

membro.registros // [ Manutencao { valor: 850, versao: Versao { nome: "Turbo", potencia: 180 } } ]
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-locadora-de-veiculos
┣ class
┃ ┣ Veiculo.js
┃ ┣ Carro.js
┃ ┣ Moto.js
┃ ┣ Caminhao.js
┃ ┣ Versao.js
┃ ┣ Frota.js
┃ ┣ Manutencao.js
┃ ┗ VeiculoFactory.js
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

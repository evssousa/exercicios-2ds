# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE ALVARÁS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma prefeitura que emite alvarás de funcionamento de tipos diferentes.

Atualmente o sistema precisa lidar com três situações diferentes:

- Alvará comercial emitido;
- Alvará sanitário emitido;
- Alvará do corpo de bombeiros emitido.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Alvará comercial emitido

O sistema deve permitir criar alvará comercial emitido.

O objeto deve possuir estabelecimento e, quando a operação for executada, deve produzir:

```
Alvará comercial emitido para: ESTABELECIMENTO
```

Exemplo:

```
Alvará comercial emitido para: Padaria Bloco A
```

### RF02 — Alvará sanitário emitido

O sistema deve permitir criar alvará sanitário emitido.

Quando a operação for executada, deve produzir:

```
Alvará sanitário emitido para: ESTABELECIMENTO
```

Exemplo:

```
Alvará sanitário emitido para: Restaurante Central
```

### RF03 — Alvará do corpo de bombeiros emitido

O sistema deve permitir criar alvará do corpo de bombeiros emitido.

Quando a operação for executada, deve produzir:

```
Alvará do corpo de bombeiros emitido para: ESTABELECIMENTO
```

Exemplo:

```
Alvará do corpo de bombeiros emitido para: Loja de Roupas
```

### RF04 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `Alvara`.

### RF05 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
comercial
sanitario
bombeiro
```

Por exemplo, ao solicitar:

```
criar("comercial", "Padaria Bloco A")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF06 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const alvara = ...
alvara.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `estabelecimento`.

### RF07 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `ambiental`, a criação deverá gerar um erro:

```
Tipo de alvará inválido
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
Aristides66
┣ test
┃ ┗ alvara.test.js
┣ Alvara.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `Alvara.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`Aristides66`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE CERTIFICADOS DE TRANSPORTE

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma transportadora que emite certificados de conformidade de cargas de tipos diferentes.

Atualmente o sistema precisa lidar com quatro situações diferentes:

- Certificado de carga seca emitido;
- Certificado de carga refrigerada emitido;
- Certificado de carga perigosa emitido;
- Certificado de carga viva emitido.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Certificado de carga seca emitido

O sistema deve permitir criar certificado de carga seca emitido.

O objeto deve possuir responsável e, quando a operação for executada, deve produzir:

```
Certificado de carga seca emitido para: RESPONSÁVEL
```

Exemplo:

```
Certificado de carga seca emitido para: Teresina
```

### RF02 — Certificado de carga refrigerada emitido

O sistema deve permitir criar certificado de carga refrigerada emitido.

Quando a operação for executada, deve produzir:

```
Certificado de carga refrigerada emitido para: RESPONSÁVEL
```

Exemplo:

```
Certificado de carga refrigerada emitido para: Fortaleza
```

### RF03 — Certificado de carga perigosa emitido

O sistema deve permitir criar certificado de carga perigosa emitido.

Quando a operação for executada, deve produzir:

```
Certificado de carga perigosa emitido para: RESPONSÁVEL
```

Exemplo:

```
Certificado de carga perigosa emitido para: Recife
```

### RF04 — Certificado de carga viva emitido

O sistema deve permitir criar certificado de carga viva emitido.

Quando a operação for executada, deve produzir:

```
Certificado de carga viva emitido para: RESPONSÁVEL
```

Exemplo:

```
Certificado de carga viva emitido para: Natal
```

### RF05 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `CertificadoCarga`.

### RF06 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
cargaSeca
cargaRefrigerada
cargaPerigosa
cargaViva
```

Por exemplo, ao solicitar:

```
criar("cargaSeca", "Teresina")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF07 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const certificadocarga = ...
certificadocarga.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `responsavel`.

### RF08 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `carga-fracionada-sem-inspecao`, a criação deverá gerar um erro:

```
Tipo de certificado inválido
```

### RF09 — Dado obrigatório

O sistema não deve permitir criar um objeto sem informar responsável.

Se o dado não for informado (string vazia), a criação deverá gerar um erro:

```
Responsável é obrigatório
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
KeissuFael
┣ test
┃ ┗ certificadocarga.test.js
┣ CertificadoCarga.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `CertificadoCarga.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`KeissuFael`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

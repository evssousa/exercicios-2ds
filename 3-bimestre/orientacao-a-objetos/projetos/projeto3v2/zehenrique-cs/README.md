# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE CERTIFICADOS DIGITAIS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma autoridade certificadora que emite certificados digitais de tipos diferentes.

Atualmente o sistema precisa lidar com quatro situações diferentes:

- Certificado digital e-CPF emitido;
- Certificado digital e-CNPJ emitido;
- Certificado digital para NF-e emitido;
- Certificado digital de assinatura emitido.

A equipe precisa de uma solução organizada para criar esses objetos e permitir que cada tipo tenha o seu próprio comportamento.

O sistema também deverá possuir uma forma centralizada de criar o tipo correto a partir de uma informação recebida pelo sistema.

Seu trabalho será implementar essa funcionalidade para que ela possa ser integrada posteriormente ao restante da aplicação.

# 📋 PROJETO

### RF01 — Certificado digital e-CPF emitido

O sistema deve permitir criar certificado digital e-cpf emitido.

O objeto deve possuir titular e, quando a operação for executada, deve produzir:

```
Certificado digital e-CPF emitido para: TITULAR
```

Exemplo:

```
Certificado digital e-CPF emitido para: Notebook-TI-01
```

### RF02 — Certificado digital e-CNPJ emitido

O sistema deve permitir criar certificado digital e-cnpj emitido.

Quando a operação for executada, deve produzir:

```
Certificado digital e-CNPJ emitido para: TITULAR
```

Exemplo:

```
Certificado digital e-CNPJ emitido para: Notebook-TI-02
```

### RF03 — Certificado digital para NF-e emitido

O sistema deve permitir criar certificado digital para nf-e emitido.

Quando a operação for executada, deve produzir:

```
Certificado digital para NF-e emitido para: TITULAR
```

Exemplo:

```
Certificado digital para NF-e emitido para: Celular-Visitante
```

### RF04 — Certificado digital de assinatura emitido

O sistema deve permitir criar certificado digital de assinatura emitido.

Quando a operação for executada, deve produzir:

```
Certificado digital de assinatura emitido para: TITULAR
```

Exemplo:

```
Certificado digital de assinatura emitido para: Servidor-Backup
```

### RF05 — Comportamentos diferentes

Embora os tipos possuam a operação `emitir()` em comum, cada tipo deve apresentar o seu próprio comportamento.

O sistema deve permitir trabalhar com os diferentes tipos sem que o código que os utiliza precise conhecer os detalhes internos de cada um.

Todos os tipos criados devem ser considerados um `CertificadoDigital`.

### RF06 — Criação centralizada

O sistema deverá possuir um mecanismo responsável por criar o objeto adequado de acordo com o tipo solicitado.

Os tipos recebidos pelo sistema serão:

```
ecpf
ecnpj
nfe
assinatura
```

Por exemplo, ao solicitar:

```
criar("ecpf", "Notebook-TI-01")
```

o sistema deverá retornar um objeto correspondente ao tipo solicitado.

### RF07 — Utilização do objeto criado

Depois que o objeto for criado, o sistema deverá permitir executar a operação utilizando sempre o mesmo nome, independentemente do tipo criado.

Exemplo:

```
const certificadodigital = ...
certificadodigital.emitir()
```

O resultado deverá depender do tipo criado.

O dado informado na criação deve ficar armazenado no objeto, na propriedade `titular`.

### RF08 — Tipo inválido

Caso seja solicitado um tipo que o sistema não conhece, como `certificado-autoassinado`, a criação deverá gerar um erro:

```
Tipo de certificado inválido
```

### RF09 — Dado obrigatório

O sistema não deve permitir criar um objeto sem informar titular.

Se o dado não for informado (string vazia), a criação deverá gerar um erro:

```
Titular é obrigatório
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
zehenrique-cs
┣ test
┃ ┗ certificadodigital.test.js
┣ CertificadoDigital.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

O estudante deverá decidir como organizar as classes e funções dentro dos arquivos.

# ⚠️ REGRAS IMPORTANTES

- Escreva o seu código nos arquivos `CertificadoDigital.js` e `Factory.js` (você precisa criá-los);
- os textos de saída devem ser exatamente iguais aos apresentados nos requisitos;
- não altere os arquivos da pasta `test`.

# ▶️ COMO EXECUTAR O PROJETO

Dentro da sua pasta (`zehenrique-cs`), instale as dependências:

```bash
npm install
```

# 🧪 COMO EXECUTAR OS TESTES

```bash
npm test
```

O projeto estará concluído quando todos os testes passarem.

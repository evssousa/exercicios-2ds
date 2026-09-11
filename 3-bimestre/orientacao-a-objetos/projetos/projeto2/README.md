# 🚀 PROJETO 2 — SISTEMA DE GESTÃO DE FUNCIONÁRIOS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma empresa de tecnologia.

Durante a Sprint atual, o setor de **Recursos Humanos (RH)** solicitou uma melhoria no sistema interno utilizado para controlar os funcionários da empresa.

Atualmente, os dados dos funcionários são tratados de maneira desorganizada. Além disso, algumas informações importantes podem ser modificadas diretamente, sem qualquer controle.

Durante a reunião de Sprint Planning, o responsável pelo RH apresentou o seguinte problema:

> "Precisamos de uma estrutura para representar nossos funcionários dentro do sistema. Cada funcionário deve possuir seus próprios dados, algumas informações precisam ser protegidas e o sistema também precisa acompanhar quantos funcionários estão cadastrados."
> 

O líder técnico transformou a solicitação nos requisitos abaixo.

# 📋 REQUISITOS DA SPRINT

## RF01 — Cadastro de funcionário

O sistema deve permitir cadastrar um funcionário informando:

- nome;
- cargo;
- salário.

Exemplo:

```
Nome: Ana
Cargo: Desenvolvedora
Salário: R$ 5.000
```

Cada funcionário cadastrado deve manter seus próprios dados.

## RF02 — Consulta de informações

O sistema deve permitir consultar as informações de um funcionário:

- nome;
- cargo;
- salário.

## RF03 — Proteção do salário

O salário é uma informação que precisa ser protegida.

O sistema não deve permitir que outras partes da aplicação alterem o salário de maneira direta, ignorando as regras de negócio.

A informação deve permanecer protegida internamente, mas ainda deve ser possível consultar seu valor.

## RF04 — Alteração salarial

O sistema deve permitir alterar o salário de um funcionário.

Existe, entretanto, uma regra de negócio:

> O salário não pode assumir um valor negativo.
> 

Exemplo:

```
Salário atual: R$ 5.000

Nova proposta: R$ 6.000
Resultado: alteração permitida.

Nova proposta: R$ -1.000
Resultado: alteração recusada.
```

Quando uma alteração inválida for realizada, o salário anterior deverá permanecer inalterado.

O valor `0` deve ser considerado válido.

## RF05 — Funcionários independentes

Cada funcionário deve possuir seus próprios dados.

Considere:

```
Funcionário 1
Nome: Ana
Cargo: Desenvolvedora
Salário: R$ 5.000

Funcionário 2
Nome: Carlos
Cargo: Analista
Salário: R$ 4.000
```

Uma alteração realizada no salário de Ana não pode alterar o salário de Carlos.

## RF06 — Controle do quadro de funcionários

O sistema precisa acompanhar automaticamente a quantidade de funcionários cadastrados.

Por exemplo:

```
0 funcionários
```

Após cadastrar um funcionário:

```
1 funcionário
```

Após cadastrar mais dois:

```
3 funcionários
```

Essa informação representa o quadro geral da empresa e não deve depender de um funcionário específico.

## RF07 — Consulta da quantidade

O sistema deverá permitir consultar a quantidade atual de funcionários cadastrados.

Por exemplo:

```
Funcionários cadastrados: 3
```

Essa consulta deverá ser possível sem que seja necessário possuir um funcionário específico para realizá-la.

## RF08 — Apresentação do funcionário

O sistema deverá permitir obter uma identificação textual do funcionário.

Para:

```
Nome: Carlos
Cargo: Analista
```

o resultado esperado deverá ser:

```
Carlos - Analista
```

# 📂 ESTRUTURA DO PROJETO

```
projeto-2
 ┣ test
 ┃ ┗ Funcionario.test.js
 ┣ Funcionario.js
 ┣ package.json
 ┣ package-lock.json
 ┗ README.md
```

O arquivo `Funcionario.js` deverá ser utilizado para desenvolver a solução.

Boas práticas! 🤙
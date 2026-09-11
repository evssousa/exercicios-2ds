# 🎯 AULA 16 - HERANÇA, PARTE 2

## 🎯 Objetivos da Aula

- Criar classes derivadas de outras classes.
- Reutilizar métodos herdados.
- Adicionar comportamentos específicos em classes filhas.
- Utilizar `super` para acessar funcionalidades da classe pai.
- Entender a diferença entre herdar e substituir um comportamento.
- Construir hierarquias simples de classes.

# 🔄 Relembrando `extends`

Considere:

```jsx
class Usuario {

    constructor(nome) {
        this.nome = nome
    }

    apresentar() {
        return `Usuário: ${this.nome}`
    }

}
```

Podemos criar:

```jsx
class Administrador extends Usuario {

}
```

Agora:

```jsx
const admin =
    new Administrador("Carlos")
```

O administrador possui acesso a:

```jsx
admin.nome
```

e:

```jsx
admin.apresentar()
```

Mesmo que esses elementos tenham sido definidos originalmente em `Usuario`.

# 📌 Adicionando novos comportamentos

A classe filha pode adicionar seus próprios métodos.

```jsx
class Administrador extends Usuario {

    excluirUsuario() {
        return "Usuário excluído"
    }

}
```

Agora temos:

```
Usuario
│
└── Administrador
       │
       ├── apresentar()
       └── excluirUsuario()
```

O administrador pode utilizar o comportamento herdado:

```jsx
admin.apresentar()
```

e seu comportamento específico:

```jsx
admin.excluirUsuario()
```

# 🧩 `super` em métodos

O `super` não serve apenas para o `constructor`.

Também podemos utilizar:

```jsx
super.metodo()
```

para acessar um método da classe pai.

Exemplo:

```jsx
class Funcionario {

    apresentar() {
        return "Funcionário"
    }

}

class Gerente extends Funcionario {

    apresentar() {

        return `${super.apresentar()} - Gerente`

    }

}
```

Agora:

```jsx
const gerente = new Gerente()

console.log(gerente.apresentar())
```

Resultado:

```
Funcionário - Gerente
```

# 🧠 O que aconteceu?

A classe `Gerente` possui seu próprio:

```jsx
apresentar()
```

Porém, dentro dele utilizamos:

```jsx
super.apresentar()
```

para aproveitar o comportamento existente na classe pai.

Depois adicionamos:

```
- Gerente
```

ao resultado.

# 🔄 Sobrescrita de métodos

Quando uma classe filha cria um método com o mesmo nome de um método da classe pai, podemos substituir o comportamento herdado.

Exemplo:

```jsx
class Animal {

    emitirSom() {
        return "Som do animal"
    }

}

class Cachorro extends Animal {

    emitirSom() {
        return "Au au!"
    }

}
```

Agora:

```jsx
const animal = new Animal()
const cachorro = new Cachorro()
```

Temos:

```jsx
animal.emitirSom()
```

Resultado:

```
Som do animal
```

Enquanto:

```jsx
cachorro.emitirSom()
```

resulta em:

```
Au au!
```

A classe `Cachorro` possui um comportamento próprio para o método.

# 📌 Exemplo mais próximo de um sistema

Imagine uma aplicação que possui diferentes tipos de usuários:

```
Usuario
│
├── Cliente
│
└── Administrador
```

A classe base pode possuir:

```jsx
class Usuario {

    constructor(nome, email) {
        this.nome = nome
        this.email = email
    }

    acessarSistema() {
        return `${this.nome} acessou o sistema`
    }

}
```

O administrador pode possuir uma funcionalidade adicional:

```jsx
class Administrador extends Usuario {

    excluirConta() {
        return `${this.nome} excluiu uma conta`
    }

}
```

Enquanto o cliente pode possuir:

```jsx
class Cliente extends Usuario {

    realizarCompra() {
        return `${this.nome} realizou uma compra`
    }

}
```

Temos:

```
Usuario
│
├── nome
├── email
└── acessarSistema()
      │
      ├───────────────┐
      ↓               ↓
  Cliente       Administrador
      │               │
      ↓               ↓
realizarCompra()  excluirConta()
```

Isso permite organizar o código de acordo com as responsabilidades de cada tipo de usuário.

# 🧠 Herança em vários níveis

JavaScript também permite criar uma cadeia de herança.

Por exemplo:

```
Pessoa
  ↓
Funcionario
  ↓
Gerente
```

Podemos ter:

```jsx
class Pessoa {

    constructor(nome) {
        this.nome = nome
    }

}
```

Depois:

```jsx
class Funcionario extends Pessoa {

    constructor(nome, salario) {

        super(nome)

        this.salario = salario

    }

}
```

E:

```jsx
class Gerente extends Funcionario {

    constructor(nome, salario, setor) {

        super(nome, salario)

        this.setor = setor

    }

}
```

Agora um gerente possui características provenientes das três classes:

```
Pessoa
 ↓
nome

Funcionario
 ↓
salario

Gerente
 ↓
setor
```

# ⚠️ Cuidado com hierarquias muito complexas

Herança é poderosa, mas não significa que devemos criar dezenas de níveis.

Uma estrutura como:

```
Pessoa
 ↓
Funcionario
 ↓
FuncionarioTecnologia
 ↓
FuncionarioDesenvolvimento
 ↓
DesenvolvedorFrontend
 ↓
DesenvolvedorReactSenior
```

pode se tornar difícil de entender e manter.

É importante utilizar herança quando existe uma relação clara entre os conceitos.

# 🧩 Herança e reutilização

Uma boa estrutura permite concentrar comportamentos comuns na classe pai.

Por exemplo:

```
Usuario
│
├── nome
├── email
├── login()
└── logout()
```

E deixar funcionalidades específicas nas classes derivadas:

```
Cliente
└── realizarCompra()

Administrador
└── excluirUsuario()
```

Dessa maneira:

```
Comum
  ↓
Classe pai

Específico
  ↓
Classe filha
```

# 🧠 Herança x Abstração

Esses conceitos podem aparecer juntos, mas não significam a mesma coisa.

### Abstração

Foca em:

> **Quais características e comportamentos são importantes para representar algo?**
> 

### Herança

Foca em:

> **Qual classe pode aproveitar características de outra classe?**
> 

Exemplo:

```
Funcionario
```

pode ser uma abstração para representar funcionários.

E:

```
Desenvolvedor extends Funcionario
```

representa uma relação de herança.

# 🧠 Herança x Encapsulamento

Também são conceitos diferentes.

### Encapsulamento

Protege e controla o acesso aos dados.

```
salário
↓
protegido
```

### Herança

Permite que uma classe derive de outra.

```
Funcionario
↓
Desenvolvedor
```

Podemos utilizar os dois conceitos na mesma aplicação.

# 📌 Exemplo completo

```jsx
class Funcionario {

    constructor(nome, salario) {

        this.nome = nome
        this.salario = salario

    }

    apresentar() {
        return `${this.nome} - R$ ${this.salario}`
    }

}

class Desenvolvedor extends Funcionario {

    constructor(nome, salario, linguagem) {

        super(nome, salario)

        this.linguagem = linguagem

    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}`
    }

}

class Gerente extends Funcionario {

    gerenciar() {
        return `${this.nome} está gerenciando a equipe`
    }

}
```

Temos:

```
Funcionario
│
├── nome
├── salario
└── apresentar()
       │
       ├──────────────┐
       ↓              ↓
Desenvolvedor       Gerente
       │              │
       ↓              ↓
 linguagem        gerenciar()
 programar()
```

Fim da aula!

_

# 🧪 Exercício Rápido

Uma empresa de logística está desenvolvendo um sistema para controlar os veículos utilizados em suas operações.

O sistema precisa representar diferentes tipos de veículos.

Todos os veículos possuem:

- marca;
- modelo.

Todo veículo também deve possuir uma forma de apresentar suas informações.

Entretanto, existem veículos com características específicas.

Um **Carro** possui uma quantidade de portas.

Uma **Moto** possui uma cilindrada.

O sistema deverá permitir criar veículos específicos e utilizar tanto os comportamentos comuns quanto os comportamentos específicos de cada tipo.

### Requisitos

1. Deve existir uma estrutura para representar um veículo.
2. O veículo deve armazenar marca e modelo.
3. Deve ser possível obter uma descrição do veículo.
4. Deve existir uma estrutura específica para carros.
5. O carro deve possuir a quantidade de portas.
6. Deve existir uma estrutura específica para motos.
7. A moto deve possuir a cilindrada.
8. Carros e motos devem aproveitar as características comuns dos veículos.
9. Carros e motos devem possuir seus próprios comportamentos específicos.
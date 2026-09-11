# 🎯 AULA 15 - HERANÇA, PARTE 1

# 🎯 Objetivos da Aula

- Compreender o conceito de **herança** em Programação Orientada a Objetos.
- Entender a relação entre uma classe base e uma classe derivada.
- Utilizar `extends` para criar uma classe baseada em outra.
- Compreender o reaproveitamento de atributos e métodos.
- Identificar situações em que a herança pode evitar repetição de código.
- Utilizar `super()` para inicializar a classe pai.

---

## 🧩 O que é Herança?

Imagine um sistema de uma empresa que possui diferentes tipos de funcionários.

Todos os funcionários possuem algumas características em comum:

```
Nome
Cargo
Salário
```

Porém, determinados funcionários possuem características específicas.

Por exemplo:

```
Funcionário
│
├── Desenvolvedor
│
├── Designer
│
└── Gerente
```

Um desenvolvedor continua sendo um funcionário.

Um gerente também continua sendo um funcionário.

Portanto, podemos aproveitar as características comuns de `Funcionario` e adicionar comportamentos específicos para cada tipo.

Esse conceito é chamado de **herança**.

# 🧠 A ideia da herança

A herança permite criar uma nova classe aproveitando características de outra classe.

Podemos imaginar:

```
Classe base
     ↓
  Funcionario
     ↓
Classe derivada
     ↓
 Desenvolvedor
```

A classe derivada pode utilizar características que já existem na classe base e também possuir características próprias.

# 🧱 `extends`

Em JavaScript, utilizamos:

```jsx
extends
```

para indicar que uma classe herda de outra.

Exemplo:

```jsx
class Funcionario {

    apresentar() {
        return "Sou um funcionário"
    }

}

class Desenvolvedor extends Funcionario {

}
```

Agora `Desenvolvedor` herda o método `apresentar()`.

Podemos criar:

```jsx
const desenvolvedor = new Desenvolvedor()

console.log(desenvolvedor.apresentar())
```

Resultado:

```
Sou um funcionário
```

# 🧩 O que foi reaproveitado?

A classe:

```jsx
class Funcionario
```

possui:

```jsx
apresentar()
```

A classe:

```jsx
class Desenvolvedor extends Funcionario
```

não precisou criar novamente esse método.

Ela recebeu o comportamento através da herança.

# 📌 Exemplo com atributos

Podemos trabalhar com atributos também.

```jsx
class Funcionario {

    constructor(nome) {
        this.nome = nome
    }

    apresentar() {
        return `Funcionário: ${this.nome}`
    }

}
```

Agora:

```jsx
class Desenvolvedor extends Funcionario {

}
```

Podemos criar:

```jsx
const desenvolvedor =
    new Desenvolvedor("Ana")
```

E utilizar:

```jsx
desenvolvedor.nome
```

Resultado:

```
Ana
```

Também podemos utilizar:

```jsx
desenvolvedor.apresentar()
```

Resultado:

```
Funcionário: Ana
```

# 🧠 O que acontece com a instância?

Embora tenhamos criado:

```jsx
new Desenvolvedor("Ana")
```

a instância possui acesso às características herdadas de `Funcionario`.

Podemos visualizar conceitualmente:

```
Desenvolvedor
      ↓
   herda de
      ↓
Funcionario
      ↓
nome
apresentar()
```

# 🧩 `super()`

Quando uma classe filha possui seu próprio `constructor`, precisamos inicializar a classe pai utilizando:

```jsx
super()
```

Exemplo:

```jsx
class Funcionario {

    constructor(nome) {
        this.nome = nome
    }

}

class Desenvolvedor extends Funcionario {

    constructor(nome, linguagem) {

        super(nome)

        this.linguagem = linguagem

    }

}
```

Agora podemos criar:

```jsx
const desenvolvedor =
    new Desenvolvedor("Ana", "JavaScript")
```

A instância terá:

```
nome → Ana
linguagem → JavaScript
```

# 🧠 O que `super(nome)` faz?

Quando escrevemos:

```jsx
super(nome)
```

estamos chamando o `constructor` da classe pai.

Neste caso:

```jsx
Funcionario
```

recebe:

```
Ana
```

e executa:

```jsx
this.nome = nome
```

Depois, a classe `Desenvolvedor` continua sua própria inicialização:

```jsx
this.linguagem = linguagem
```

# ⚠️ `super()` deve ser chamado antes de usar `this`

Em uma classe derivada, isto está incorreto:

```jsx
class Desenvolvedor extends Funcionario {

    constructor(nome, linguagem) {

        this.linguagem = linguagem

        super(nome)

    }

}
```

O `super()` deve acontecer antes de utilizar `this`.

O correto é:

```jsx
class Desenvolvedor extends Funcionario {

    constructor(nome, linguagem) {

        super(nome)

        this.linguagem = linguagem

    }

}
```

# 📌 Exemplo completo

```jsx
class Funcionario {

    constructor(nome, cargo) {
        this.nome = nome
        this.cargo = cargo
    }

    apresentar() {
        return `${this.nome} - ${this.cargo}`
    }

}

class Desenvolvedor extends Funcionario {

    constructor(nome, cargo, linguagem) {

        super(nome, cargo)

        this.linguagem = linguagem

    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}`
    }

}
```

Uso:

```jsx
const desenvolvedor =
    new Desenvolvedor(
        "Ana",
        "Desenvolvedora",
        "JavaScript"
    )
```

Podemos utilizar:

```jsx
desenvolvedor.apresentar()
```

Resultado:

```
Ana - Desenvolvedora
```

E:

```jsx
desenvolvedor.programar()
```

Resultado:

```
Ana está programando em JavaScript
```

A classe `Desenvolvedor` possui:

```
Características herdadas
        ↓
nome
cargo
apresentar()

Características próprias
        ↓
linguagem
programar()
```

# 🧩 Herança não significa copiar código

Um dos principais objetivos da herança é evitar a repetição de comportamentos que são comuns.

Sem herança:

```jsx
class Desenvolvedor {

    constructor(nome, cargo) {
        this.nome = nome
        this.cargo = cargo
    }

    apresentar() {
        return `${this.nome} - ${this.cargo}`
    }

}
```

E:

```jsx
class Designer {

    constructor(nome, cargo) {
        this.nome = nome
        this.cargo = cargo
    }

    apresentar() {
        return `${this.nome} - ${this.cargo}`
    }

}
```

Existe repetição.

Com herança:

```jsx
class Desenvolvedor extends Funcionario {

}
```

e:

```jsx
class Designer extends Funcionario {

}
```

As duas classes podem reaproveitar a estrutura comum.

# 🧠 Relação "é um"

Uma maneira simples de identificar possíveis casos de herança é perguntar:

> **"X é um Y?"**
> 

Por exemplo:

```
Desenvolvedor é um Funcionário?
SIM
```

```
Gerente é um Funcionário?
SIM
```

```
Cliente é um Funcionário?
NÃO necessariamente
```

Essa relação ajuda a identificar quando a herança pode fazer sentido.

# ⚠️ Herança não deve ser utilizada apenas para evitar código repetido

O fato de duas classes possuírem características parecidas não significa automaticamente que uma deve herdar da outra.

A herança representa uma relação conceitual entre as classes.

Por exemplo:

```
Animal
 ├── Cachorro
 └── Gato
```

Faz sentido porque:

```
Cachorro é um Animal.
Gato é um Animal.
```

Já:

```
Carro
 └── Motor
```

normalmente representa outra relação:

```
Carro possui um Motor.
```

Nesse caso, estamos falando de **composição**, e não de herança.
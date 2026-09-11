# 🎯 AULA 18 - FACTORY

## 🎯 Objetivos da Aula

- Compreender o conceito de **Factory**.
- Entender o problema de criar objetos diretamente em diferentes partes de uma aplicação.
- Criar uma estrutura responsável pela criação de objetos.
- Utilizar métodos estáticos como Factory.
- Relacionar Factory com classes e instâncias.
- Compreender como Factory pode trabalhar junto com herança e polimorfismo.

# 🧩 O que é Factory?

**Factory** significa "fábrica".

Na Programação Orientada a Objetos, uma Factory é uma estrutura responsável por **criar objetos**.

Em vez de espalhar pelo sistema vários:

```jsx
new AlgumaClasse()
```

podemos concentrar a lógica de criação em um único lugar.

# 🏭 A ideia da Factory

Imagine uma fábrica real.

O cliente não precisa saber todos os detalhes de fabricação.

Ele solicita:

```
"Quero um carro vermelho."
```

A fábrica cuida do processo de produção.

Na programação, podemos fazer algo semelhante:

```
Sistema
   ↓
Factory
   ↓
Criação do objeto
   ↓
Instância
```

# 📌 Exemplo simples

Imagine três tipos de usuários:

```
Cliente
Administrador
Funcionario
```

Sem Factory, uma parte do sistema precisaria conhecer diretamente cada classe:

```jsx
new Cliente(...)
new Administrador(...)
new Funcionario(...)
```

Podemos criar uma Factory responsável por isso.

```jsx
class Cliente {
    constructor(nome) {
        this.nome = nome
        this.tipo = "Cliente"
    }
}

class Administrador {
    constructor(nome) {
        this.nome = nome
        this.tipo = "Administrador"
    }
}

class Funcionario {
    constructor(nome) {
        this.nome = nome
        this.tipo = "Funcionário"
    }
}

class UsuarioFactory {

    static criar(tipo, nome) {

        if (tipo === "cliente") {
            return new Cliente(nome)
        }

        if (tipo === "administrador") {
            return new Administrador(nome)
        }

        if (tipo === "funcionario") {
            return new Funcionario(nome)
        }
    }
}
```

Agora:

```jsx
const usuario = UsuarioFactory.criar("cliente", "Ana")

console.log(usuario)
```

A aplicação não precisa conhecer diretamente o processo de criação.

# 🧠 O que a Factory resolve?

Imagine uma aplicação grande.

Em vários arquivos podemos encontrar:

```jsx
new Cliente(...)
```

```jsx
new Cliente(...)
```

```jsx
new Cliente(...)
```

E depois surgem novas regras para criar um cliente.

Por exemplo:

- definir valores padrão;
- validar dados;
- gerar identificadores;
- escolher uma classe específica;
- configurar propriedades;
- executar alguma preparação.

Se toda essa lógica estiver espalhada pelo sistema, a manutenção se torna mais difícil.

Uma Factory permite centralizar esse processo.

# 📌 Exemplo 1 — Factory de veículos

Temos:

```jsx
class Carro {

    constructor(modelo) {
        this.modelo = modelo
    }

}
```

e:

```jsx
class Moto {

    constructor(modelo) {
        this.modelo = modelo
    }

}
```

Podemos criar:

```jsx
class VeiculoFactory {

    static criar(tipo, modelo) {

        if (tipo === "carro") {
            return new Carro(modelo)
        }

        if (tipo === "moto") {
            return new Moto(modelo)
        }

    }

}
```

Agora:

```jsx
const carro =
    VeiculoFactory.criar(
        "carro",
        "Civic"
    )
```

E:

```jsx
const moto =
    VeiculoFactory.criar(
        "moto",
        "CB 500"
    )
```

# 🧩 Factory não precisa ser uma classe

Uma Factory também pode ser uma função.

Por exemplo:

```jsx
function criarUsuario(tipo, nome) {

    if (tipo === "cliente") {
        return new Cliente(nome)
    }

    if (tipo === "administrador") {
        return new Administrador(nome)
    }

}
```

A ideia principal não é a palavra `Factory`.

O conceito é:

> **Centralizar a criação de objetos.**
> 

# 🧠 Factory e `new`

Normalmente, quem utiliza uma Factory não precisa conhecer todos os detalhes da criação.

Sem Factory:

```jsx
const usuario =
    new Administrador("Carlos")
```

Com Factory:

```jsx
const usuario =
    UsuarioFactory.criar(
        "administrador",
        "Carlos"
    )
```

A Factory pode decidir qual classe deve ser utilizada.

# 📌 Exemplo 2 — Factory + Herança

Esse é um cenário bastante comum.

Temos uma classe base:

```jsx
class Funcionario {

    constructor(nome) {
        this.nome = nome
    }

}
```

E classes especializadas:

```jsx
class Desenvolvedor extends Funcionario {

    programar() {
        return `${this.nome} está programando`
    }

}
```

```jsx
class Designer extends Funcionario {

    criarLayout() {
        return `${this.nome} está criando um layout`
    }

}
```

Agora podemos criar:

```jsx
class FuncionarioFactory {

    static criar(tipo, nome) {

        if (tipo === "desenvolvedor") {
            return new Desenvolvedor(nome)
        }

        if (tipo === "designer") {
            return new Designer(nome)
        }

    }

}
```

Uso:

```jsx
const funcionario =
    FuncionarioFactory.criar(
        "desenvolvedor",
        "Ana"
    )
```

O objeto criado será uma instância de `Desenvolvedor`.

# 🧠 Factory + Polimorfismo

Agora podemos combinar os conceitos.

Imagine:

```
Funcionario
│
├── Desenvolvedor
└── Designer
```

A Factory decide qual objeto criar:

```
              Factory
                 ↓
       ┌─────────┴─────────┐
       ↓                   ↓
Desenvolvedor           Designer
       ↓                   ↓
   programar()         criarLayout()
```

Depois, o restante do sistema pode trabalhar com o objeto criado sem precisar conhecer todo o processo de criação.

# 📌 Exemplo 3 — Factory de notificações

Imagine que a aplicação permita:

```
Email
SMS
Push
```

Podemos criar:

```jsx
class Email {

    enviar(mensagem) {
        return `Email: ${mensagem}`
    }

}
```

```jsx
class SMS {

    enviar(mensagem) {
        return `SMS: ${mensagem}`
    }

}
```

```jsx
class Push {

    enviar(mensagem) {
        return `Push: ${mensagem}`
    }

}
```

A Factory:

```jsx
class NotificacaoFactory {

    static criar(tipo) {

        if (tipo === "email") {
            return new Email()
        }

        if (tipo === "sms") {
            return new SMS()
        }

        if (tipo === "push") {
            return new Push()
        }

    }

}
```

Agora:

```jsx
const notificacao =
    NotificacaoFactory.criar("email")
```

E podemos utilizar:

```jsx
notificacao.enviar("Olá!")
```

# 🧠 Factory como ponto central de criação

Podemos visualizar:

```
                    Sistema
                       │
                       ↓
                 NotificationFactory
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
        Email         SMS          Push
```

O sistema solicita um tipo.

A Factory decide qual objeto criar.

# ⚠️ Erros comuns

### ❌ Factory simplesmente devolver qualquer objeto

Uma Factory deve possuir algum propósito relacionado à criação.

Se temos:

```jsx
class Factory {

    static criar() {
        return {}
    }

}
```

sem qualquer regra ou responsabilidade de criação, provavelmente não existe uma vantagem real.

### ❌ Colocar toda a lógica da aplicação dentro da Factory

A Factory deve cuidar principalmente da **criação**.

Não deve se transformar em uma classe responsável por:

- pagamentos;
- autenticação;
- relatórios;
- banco de dados;
- envio de emails;
- cadastro;
- etc.

É importante manter responsabilidades bem definidas.

# 🧠 Factory x Constructor

O `constructor` define **como uma classe inicializa uma instância**.

Por exemplo:

```jsx
new Usuario("Ana")
```

A Factory define **qual objeto deve ser criado e como essa criação será organizada**.

Exemplo:

```jsx
UsuarioFactory.criar("cliente", "Ana")
```

Podemos ter:

```
Factory
   ↓
escolhe o tipo
   ↓
cria a instância
   ↓
constructor
   ↓
objeto pronto
```

# 🧩 Factory e Método Estático

Como vimos na aula anterior, métodos estáticos pertencem à classe.

Por isso, uma forma comum de implementar uma Factory é:

```jsx
class UsuarioFactory {

    static criar(...) {

    }

}
```

Assim podemos chamar:

```jsx
UsuarioFactory.criar(...)
```

sem precisar criar uma instância da própria Factory.

# 📌 Exemplo 4 — Factory com validação

A Factory também pode verificar se o tipo solicitado existe.

```jsx
class UsuarioFactory {

    static criar(tipo, nome) {

        if (tipo === "cliente") {
            return new Cliente(nome)
        }

        if (tipo === "administrador") {
            return new Administrador(nome)
        }

        throw new Error("Tipo de usuário inválido")

    }

}
```

Agora:

```jsx
UsuarioFactory.criar(
    "desconhecido",
    "João"
)
```

gera um erro.

Isso evita que o sistema crie um objeto inválido ou desconhecido.

# 🧠 Quando utilizar Factory?

Factory pode ser útil quando:

- existem diferentes tipos de objetos;
- a criação possui regras;
- precisamos escolher qual classe instanciar;
- a lógica de criação está sendo repetida;
- queremos centralizar a criação;
- a aplicação possui diferentes implementações de uma mesma ideia.
# 🎯 AULA 17 - POLIMORFISMO

## 🎯 Objetivos da Aula

- Compreender o conceito de **polimorfismo** na Programação Orientada a Objetos.
- Entender como diferentes classes podem responder de maneiras diferentes à mesma chamada.
- Relacionar polimorfismo com **herança**.
- Sobrescrever métodos herdados para criar comportamentos específicos.
- Utilizar uma mesma interface de chamada para trabalhar com objetos diferentes.
- Identificar situações reais em que o polimorfismo simplifica o desenvolvimento de sistemas.

## 🧩 O que é Polimorfismo?

A palavra **polimorfismo** pode ser entendida como:

> **"muitas formas"**
> 

Na Programação Orientada a Objetos, significa que objetos diferentes podem responder de maneiras diferentes ao **mesmo comportamento**.

Imagine um sistema que trabalha com diferentes tipos de funcionários.

Todos possuem uma ação chamada:

```
calcularPagamento()
```

Mas cada tipo de funcionário pode calcular seu pagamento de uma maneira diferente.

```
Funcionario
     │
     ├── Desenvolvedor
     │      └── calcularPagamento()
     │
     └── Gerente
            └── calcularPagamento()
```

O código que utiliza os objetos pode simplesmente solicitar:

```jsx
funcionario.calcularPagamento()
```

Cada objeto executará sua própria implementação.

# 📌 Exemplo simples

Considere uma classe base:

```jsx
class Animal {

    emitirSom() {
        return "Som do animal"
    }

}
```

Agora temos dois tipos de animais:

```jsx
class Cachorro extends Animal {

    emitirSom() {
        return "Au au!"
    }

}
```

e:

```jsx
class Gato extends Animal {

    emitirSom() {
        return "Miau!"
    }

}
```

Temos três classes:

```
Animal
  │
  ├── Cachorro
  └── Gato
```

Todas possuem o comportamento:

```
emitirSom()
```

Porém, cada uma responde de uma maneira diferente.

# 🧠 O mesmo método, diferentes comportamentos

Podemos criar:

```jsx
const cachorro = new Cachorro()
const gato = new Gato()
```

E chamar:

```jsx
cachorro.emitirSom()
```

Resultado:

```
Au au!
```

Enquanto:

```jsx
gato.emitirSom()
```

Resultado:

```
Miau!
```

A chamada é conceitualmente a mesma:

```
emitirSom()
```

Mas o resultado depende do objeto.

Isso é polimorfismo.

# 🔄 Sobrescrita de métodos

O polimorfismo normalmente aparece quando uma classe filha **sobrescreve** um método herdado.

Classe pai:

```jsx
class Animal {

    emitirSom() {
        return "Som do animal"
    }

}
```

Classe filha:

```jsx
class Cachorro extends Animal {

    emitirSom() {
        return "Au au!"
    }

}
```

A classe `Cachorro` possui sua própria versão de:

```jsx
emitirSom()
```

# 🧩 Exemplo 2 — Sistema de pagamentos

Imagine uma empresa que aceita diferentes formas de pagamento.

Podemos ter:

```
Pagamento
│
├── Pix
├── Cartao
└── Boleto
```

Todas as formas precisam realizar:

```
pagar()
```

Porém, cada uma possui um comportamento diferente.

```jsx
class Pix {

    pagar(valor) {
        return `Pagamento de ${valor} realizado via Pix`
    }

}
```

```jsx
class Cartao {

    pagar(valor) {
        return `Pagamento de ${valor} realizado via cartão`
    }

}
```

```jsx
class Boleto {

    pagar(valor) {
        return `Pagamento de ${valor} realizado via boleto`
    }

}
```

O sistema pode trabalhar com todos eles utilizando a mesma chamada:

```jsx
pagamento.pagar(100)
```

O resultado dependerá do objeto recebido.

# 🧠 O benefício do polimorfismo

Imagine que um sistema precise processar vários pagamentos.

Sem polimorfismo, poderíamos acabar criando várias verificações:

```jsx
if (tipo === "pix") {
    // pagamento Pix
}

if (tipo === "cartao") {
    // pagamento Cartão
}

if (tipo === "boleto") {
    // pagamento Boleto
}
```

Conforme o sistema cresce, essas condições podem aumentar.

Com polimorfismo, podemos trabalhar com um comportamento comum:

```jsx
pagamento.pagar(valor)
```

Cada classe sabe como realizar sua própria operação.

# 📌 Exemplo 3 — Lista de objetos

Podemos armazenar objetos diferentes em uma mesma lista:

```jsx
const animais = [
    new Cachorro(),
    new Gato()
]
```

Depois:

```jsx
animais.forEach(animal => {
    console.log(animal.emitirSom())
})
```

Resultado:

```
Au au!
Miau!
```

Observe que o código não precisou perguntar:

```
"Você é cachorro?"

"Você é gato?"
```

Ele simplesmente solicitou:

```jsx
animal.emitirSom()
```

Cada objeto respondeu de acordo com sua própria implementação.

# 🧠 Polimorfismo e herança

Os conceitos estão bastante relacionados.

### Herança

Permite que classes compartilhem uma estrutura:

```
Animal
 ↓
Cachorro
```

### Polimorfismo

Permite que diferentes classes apresentem comportamentos diferentes para uma mesma operação:

```
Cachorro.emitirSom()
Gato.emitirSom()
```

Podemos visualizar:

```
          Animal
             │
        emitirSom()
             │
       ┌─────┴─────┐
       ↓           ↓
   Cachorro       Gato
       ↓           ↓
    "Au au!"     "Miau!"
```

# 📌 Exemplo 4 — Funcionários

Imagine:

```jsx
class Funcionario {

    calcularBonus() {
        return 0
    }

}
```

Um desenvolvedor:

```jsx
class Desenvolvedor extends Funcionario {

    calcularBonus() {
        return 1000
    }

}
```

Um gerente:

```jsx
class Gerente extends Funcionario {

    calcularBonus() {
        return 2000
    }

}
```

Agora:

```jsx
const funcionarios = [
    new Desenvolvedor(),
    new Gerente()
]
```

Podemos fazer:

```jsx
funcionarios.forEach(funcionario => {
    console.log(funcionario.calcularBonus())
})
```

Resultado:

```
1000
2000
```

A chamada foi sempre:

```jsx
funcionario.calcularBonus()
```

Mas o comportamento mudou de acordo com o objeto.

# 🧩 Polimorfismo não significa necessariamente usar `if`

Um código como:

```jsx
if (funcionario instanceof Gerente) {
    return 2000
}

if (funcionario instanceof Desenvolvedor) {
    return 1000
}
```

pode funcionar, mas perde parte da vantagem do polimorfismo.

Uma abordagem polimórfica permite que o próprio objeto determine seu comportamento:

```jsx
funcionario.calcularBonus()
```

# 🧠 Uma forma simples de identificar polimorfismo

Pergunte:

> **"Tenho objetos diferentes que precisam realizar uma mesma ação, mas cada um precisa executá-la de uma maneira diferente?"**
> 

Se a resposta for sim, existe uma boa possibilidade de o polimorfismo ser útil.

# 📌 Exemplo 5 — Notificações

Um sistema pode enviar notificações por diferentes canais:

```
Notificacao
│
├── Email
├── SMS
└── Push
```

Todos possuem:

```
enviar()
```

Mas:

```jsx
email.enviar()
```

pode enviar um email.

```jsx
sms.enviar()
```

pode enviar uma mensagem SMS.

```jsx
push.enviar()
```

pode enviar uma notificação para o aplicativo.

O sistema pode simplesmente executar:

```jsx
notificacao.enviar()
```

sem precisar conhecer todos os detalhes da implementação.

# ⚠️ Erro comum

### ❌ Confundir herança com polimorfismo

Herança:

```
Desenvolvedor é um Funcionário
```

Polimorfismo:

```
Desenvolvedor.calcularBonus()
Gerente.calcularBonus()
```

A herança estabelece uma relação.

O polimorfismo permite diferentes comportamentos através de uma mesma operação.
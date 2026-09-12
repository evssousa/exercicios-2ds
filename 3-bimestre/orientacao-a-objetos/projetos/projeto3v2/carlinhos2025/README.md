# 🚀 PROJETO 3V2 — SISTEMA DE EMISSÃO DE INGRESSOS

# 🎯 O QUE FAZER

Crie ingressos de dois tipos: `inteira` e `meia`.

Cada ingresso tem um nome.

# 📋 REQUISITOS

### RF01 — inteira

```
criar("inteira", "Ana")
```

Resultado:

```
Ingresso inteira emitido para: Ana
```

### RF02 — meia

```
criar("meia", "Pedro")
```

Resultado:

```
Ingresso meia-entrada emitido para: Pedro
```

### RF03 — tipo errado

Se o tipo não for `inteira` nem `meia`:

```
Tipo inválido
```

# 🧩 EXEMPLO DE FORMATO

Este exemplo é de outro assunto. Só para mostrar o formato. Não é a resposta do seu projeto.

```js
// Arquivo.js
class Animal {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        // cada tipo faz diferente
    }
}

class Cachorro extends Animal {
    falar() {
        return `Au au: ${this.nome}`
    }
}

class Gato extends Animal {
    falar() {
        return `Miau: ${this.nome}`
    }
}

module.exports = Animal
module.exports.Cachorro = Cachorro
module.exports.Gato = Gato
```

```js
// Factory.js
const Animal = require("./Arquivo")

class Factory {
    static criar(tipo, nome) {
        if (tipo === "cachorro") return new Animal.Cachorro(nome)
        if (tipo === "gato") return new Animal.Gato(nome)
        throw new Error("Tipo inválido")
    }
}

module.exports = Factory
```

Faça igual, mas com `Ingresso`, `Inteira` e `Meia`.

# 📁 ARQUIVOS

```
carlinhos2025
┣ test
┃ ┗ ingresso.test.js
┣ Ingresso.js
┣ Factory.js
┣ package.json
┣ package-lock.json
┗ README.md
```

# ▶️ COMO RODAR

```bash
npm install
npm test
```

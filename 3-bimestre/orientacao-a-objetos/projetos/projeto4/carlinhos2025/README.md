# 🚀 PROJETO 4 — BIBLIOTECA DIGITAL

# 📋 O QUE FAZER

Crie estas classes:

- `ItemAcervo` — tem `titulo` e `anoDePublicacao` (privados, com getter). Tem o método `descricao()`, que devolve:

```
Item cadastrado no acervo
```

- `Livro` — herda de `ItemAcervo`. Sobrescreve `descricao()`, devolvendo:

```
Livro disponível para empréstimo
```

- `Revista` — herda de `ItemAcervo`. Sobrescreve `descricao()`, devolvendo:

```
Revista disponível para empréstimo
```

- `ItemAcervoFactory` — cria a instância certa a partir de um tipo:

```
ItemAcervoFactory.criar("livro", "O Guarani", 1857)
ItemAcervoFactory.criar("revista", "Romance", 250)
```

Se o tipo não existir, gera erro:

```
Tipo de item inválido
```

# 🧩 EXEMPLO (outro domínio, só pra mostrar o padrão)

```jsx
class Veiculo {

    constructor(modelo) {
        this.modelo = modelo
    }

    descricao() {
        return "Veículo genérico"
    }

}

class Carro extends Veiculo {

    descricao() {
        return "Sou um carro"
    }

}

class VeiculoFactory {

    static criar(tipo, modelo) {

        if (tipo === "carro") {
            return new Carro(modelo)
        }

        throw new Error("Tipo inválido")

    }

}
```

# 📁 ESTRUTURA DO PROJETO

O projeto deverá possuir, no mínimo:

```
projeto-biblioteca-digital
┣ class
┃ ┣ ItemAcervo.js
┃ ┣ Livro.js
┃ ┣ Revista.js
┃ ┗ ItemAcervoFactory.js
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

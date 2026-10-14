# 🎯 Aula 1 — Node Package Manager e Scripts Personalizados

## 🎯 Objetivos da Aula

- Entender o que é o **npm** e para que ele serve.
- Criar e ler um arquivo `package.json`.
- Diferenciar **dependências** de **dependências de desenvolvimento**.
- Criar **scripts personalizados** e executá-los com `npm run`.

# 🧩 O que é o npm?

**npm** significa *Node Package Manager* — o gerenciador de pacotes do Node.js.

Ele faz três coisas:

1. **instala** código que outras pessoas escreveram (pacotes);
2. **registra** quais pacotes o seu projeto usa;
3. **executa** comandos que você mesmo define.

Vocês já usaram o npm em todos os exercícios do bimestre passado, quando rodaram:

```bash
npm install
npm test
```

Agora vamos entender o que acontece por trás desses dois comandos.

# 📦 O package.json

O `package.json` é a **identidade do projeto**. Ele fica na raiz e descreve tudo que o projeto é e precisa.

Para criar um do zero:

```bash
npm init -y
```

A opção `-y` aceita todas as respostas padrão (sem ela, o npm faz várias perguntas).

## 📌 Exemplo 1 — Um package.json completo

```json
{
  "name": "loja-api",
  "version": "1.0.0",
  "description": "API da loja da turma",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "license": "ISC",
  "type": "commonjs",
  "devDependencies": {
    "jest": "^30.4.2"
  }
}
```

Campo por campo:

| Campo | Para que serve |
| --- | --- |
| `name` | nome do projeto (sem espaços, em minúsculas) |
| `version` | versão atual, no formato `maior.menor.correção` |
| `description` | o que o projeto é, em uma frase |
| `main` | arquivo que é o ponto de entrada |
| `scripts` | comandos que você pode rodar com `npm run` |
| `type` | `commonjs` (usa `require`) ou `module` (usa `import`) |
| `devDependencies` | pacotes usados só durante o desenvolvimento |

# 🧠 Dependências x devDependencies

A diferença é **quando o pacote é necessário**.

| | `dependencies` | `devDependencies` |
| --- | --- | --- |
| Necessário para | o programa **funcionar** | **desenvolver** o programa |
| Exemplo | `express` | `jest` |
| Vai para o servidor? | sim | não |
| Como instalar | `npm install express` | `npm install jest --save-dev` |

## 📌 Exemplo 2 — Instalando os dois tipos

```bash
npm install express
npm install jest --save-dev
```

O `package.json` fica assim:

```json
{
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "jest": "^30.4.2"
  }
}
```

O raciocínio é simples: o **Express** precisa estar no servidor, senão a API não responde. O **Jest** só roda na sua máquina e no CI — o usuário final nunca executa um teste.

## 🔒 E o package-lock.json?

Repare no `^` antes da versão: `^30.4.2` significa "30.4.2 **ou** uma versão mais nova compatível".

Isso é prático, mas perigoso: duas pessoas rodando `npm install` no mesmo dia poderiam receber versões diferentes. O **`package-lock.json`** resolve isso, gravando a versão **exata** instalada.

📌 Ele é gerado automaticamente. Você nunca escreve o `package-lock.json` à mão — mas ele deve ir para o Git, para que todo mundo e o CI tenham exatamente o mesmo ambiente.

## 📁 E a pasta node_modules?

É onde o npm coloca o código dos pacotes baixados. Ela é **enorme** e **nunca** vai para o Git — por isso todo projeto Node tem um `.gitignore` com:

```
node_modules/
```

Perdeu a pasta? `npm install` reconstrói ela a partir do `package.json` e do `package-lock.json`.

# 🏗️ Scripts personalizados

A parte mais útil da aula. Em `scripts` você dá **nomes curtos** para comandos longos.

## 📌 Exemplo 3 — Criando seus próprios scripts

```json
{
  "scripts": {
    "test": "jest",
    "start": "node index.js",
    "dev": "node --watch index.js",
    "saudacao": "echo Bem-vindo ao projeto!"
  }
}
```

Para executar:

```bash
npm run dev
npm run saudacao
```

### ⚡ Os scripts com atalho

Três nomes são especiais e dispensam o `run`:

| Script | Forma completa | Atalho |
| --- | --- | --- |
| `test` | `npm run test` | `npm test` |
| `start` | `npm run start` | `npm start` |
| `stop` | `npm run stop` | `npm stop` |

Qualquer outro nome **exige** o `run`. Por isso `npm run dev` funciona e `npm dev` não.

## 📌 Exemplo 4 — Encadeando comandos

O `&&` executa o segundo comando só se o primeiro der certo:

```json
{
  "scripts": {
    "verificar": "npm test && echo Tudo certo!"
  }
}
```

Se o teste falhar, a mensagem não aparece.

## 🔍 Lendo o próprio package.json pelo código

O `package.json` é um arquivo JSON comum — então o Node consegue carregá-lo como qualquer módulo:

```jsx
const pacote = require("./package.json")

console.log(pacote.name)              // "loja-api"
console.log(pacote.scripts.test)      // "jest"
```

📌 Isso vai ser útil no exercício desta aula.

# 📖 Conceitos importantes

| Conceito | Significado |
| --- | --- |
| npm | gerenciador de pacotes do Node.js |
| `package.json` | arquivo que descreve o projeto e suas dependências |
| `package-lock.json` | registro das versões exatas instaladas |
| `node_modules` | pasta com o código dos pacotes baixados |
| `dependencies` | pacotes necessários para o programa funcionar |
| `devDependencies` | pacotes necessários apenas para desenvolver |
| `scripts` | apelidos para comandos de terminal |
| `npm run <nome>` | executa um script personalizado |

# ⚠️ Erros comuns

### ❌ Esquecer o `run` em script personalizado

```bash
npm dev          # erro: comando desconhecido
```

Correto:

```bash
npm run dev
```

### ❌ Colocar vírgula depois do último item do JSON

```json
{
  "scripts": {
    "test": "jest",
  }
}
```

JSON não aceita vírgula sobrando. O `npm` quebra com erro de leitura.

Correto:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

### ❌ Enviar `node_modules` para o Git

Milhares de arquivos que o `npm install` recria em segundos. Sempre no `.gitignore`.

### ❌ Instalar tudo como dependência normal

```bash
npm install jest
```

O Jest é ferramenta de desenvolvimento. Correto:

```bash
npm install jest --save-dev
```

Fim da aula!

_

# 🧩 Exercício Rápido

### 💬 Scripts e informações do projeto

Nesta aula você vai mexer em **dois** arquivos.

**1. No `package.json` desta pasta**, acrescente dois scripts personalizados dentro de `scripts` (sem apagar o `test`):

- `start`, com o valor `node index.js`
- `dev`, com o valor `node --watch index.js`

**2. Crie um arquivo chamado `index.js`** que exporte um objeto chamado `projeto` com:

- a propriedade `nome`, com o valor `"aula01"`
- a propriedade `scripts`, que deve ser um **array** com os nomes dos três scripts do `package.json`, nesta ordem: `"test"`, `"start"`, `"dev"`
- um método `rodar(script)` que receba o nome de um script e retorne:

```
Executando: npm run <script>
```

- um método `temScript(script)` que retorne `true` se o script estiver no array e `false` se não estiver

No final, exporte o objeto com `module.exports = projeto`.

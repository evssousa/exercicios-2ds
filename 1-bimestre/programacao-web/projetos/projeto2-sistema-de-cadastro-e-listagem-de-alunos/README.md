# 📘 PROJETO 2: Sistema de Cadastro e Listagem de Alunos

# 🧩 PROBLEMA

Uma escola de tecnologia chamada **Tech Academy** precisa de uma página interna simples para:

- Cadastrar alunos.
- Exibir uma lista fixa de alunos já matriculados.

Você foi contratado para desenvolver essa primeira versão usando **apenas HTML**.

⚠️ Importante:

O formulário **não precisa funcionar** (ainda não usamos JavaScript).

O objetivo é apenas criar a estrutura corretamente.

---

# 📋 REQUISITOS FUNCIONAIS

Crie um arquivo chamado **`index.html`** contendo:

---

## 🔹 1. Estrutura Obrigatória

O documento deve conter:

- `<!DOCTYPE html>`
- `<html>`
- `<head>`
- `<title>`
- `<body>`

O título da aba deve ser:

```
Tech Academy
```

---

# 🔹 2. Título Principal

Dentro do `<body>` deve existir:

```html
<h1>Sistema de Cadastro de Alunos</h1>
```

---

# 🔹 3. Seção: Cadastro de Aluno

Deve conter um:

```html
<h2>Cadastro</h2>
```

E um `<form>` contendo:

### Campos obrigatórios:

1. Nome → `type="text"`
2. Email → `type="email"`
3. Idade → `type="number"`
4. Curso → `<select>` com opções:
    - HTML
    - CSS
    - JavaScript
5. Observações → `<textarea>`
6. Botão de envio:
    - `type="submit"`
    - `value="Cadastrar"`

Use `<br>` para organizar visualmente.

---

# 🔹 4. Separação de Seções

Deve existir um `<hr>` separando:

- Seção Cadastro
- Seção Lista de Alunos

---

# 🔹 5. Seção: Lista de Alunos

Deve conter:

```html
<h2>Alunos Matriculados</h2>
```

E uma `<table>` com:

## 🔸 `<caption>` obrigatório:

```
Lista de Alunos
```

## 🔸 Cabeçalho (th):

- Nome
- Email
- Curso

## 🔸 Dados fixos:

| Nome | Email | Curso |
| --- | --- | --- |
| Ana | [ana@email.com](mailto:ana@email.com) | HTML |
| Bruno | [bruno@email.com](mailto:bruno@email.com) | CSS |
| Carla | [carla@email.com](mailto:carla@email.com) | JavaScript |

---

# 🕒 Organização do Tempo

### 🔹 15 min — Apresentação do problema

Leitura e interpretação dos requisitos.

### 🔹 15 min — Planejamento

- Estrutura da página
- Organização das seções
- Hierarquia das tags

### 🔹 50 min — Desenvolvimento

Construção completa do projeto.

### 🔹 10 min — Testes automatizados

Correção de erros.

### 🔹 10 min — Commit e envio para GitHub

⚠️ Utilize um Kanbam como o Trello para organizar sua sprint de 100 minutos!

Boas práticas!
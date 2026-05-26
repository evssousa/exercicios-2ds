# 📘 AULA 36: CRIAÇÃO DE ARQUITETURA BASICA PARA SISTEMAS PEQUENOS

## 🎯 Objetivos da aula

- Aplicar conceitos de arquitetura.
- Criar estrutura simples para pequenos sistemas.
- Organizar componentes principais.
- Pensar como analista de sistemas.

# 🧠 O que um sistema pequeno precisa?

Mesmo simples, um sistema precisa de:

- Usuário
- Interface
- Regras de negócio
- Banco de dados

# 🖊️ Quadro

```
USUÁRIO
   ↓
TELA
   ↓
LÓGICA
   ↓
BANCO
```

# 🏫 Exemplo 1 — Sistema de Biblioteca

```
Aluno
 ↓
Tela de empréstimo
 ↓
Verificar livro
 ↓
Banco de livros
```

# 🛒 Exemplo 2 — Sistema de Loja

```
Cliente
 ↓
Carrinho
 ↓
Calcular total
 ↓
Banco de produtos
```

# 📌 Como pensar na arquitetura básica

Se pergunte:

1. Quem usa?
2. O que faz?
3. Onde salva?
4. Quem processa?

# 🖊️ Modelo simples

```
[ Usuário ]
     ↓
[ Página / Sistema ]
     ↓
[ Banco de Dados ]
```

Fim da aula!

_

# 📝 Atividade Rápida

Crie uma arquitetura simples para:

### Sistema de chamada escolar

Desenhe:

- Quem usa
- Tela principal
- Banco de dados

Você pode utilizar as ferramentas da aula anterior.

Coloque o print da arquitetura nessa pasta com nome "sistema-de-chamada-escolar.jpg".
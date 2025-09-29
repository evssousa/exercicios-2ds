PROFESSOR: EVERSON SOUSA | TURMA: 1º EM DESENVOLVIMENTO DE SISTEMAS

DATA DE ENTREGA: 21/ago | Prazo Máximo: 27/ago <br>
DATA DA 2º CORREÇÃO: até 03/set

# PROJETO 2 - SISTEMA DE CADASTRO E VERIFICAÇÃO DE USUÁRIOS

### 🎯 Objetivo

Criar um programa em **JavaScript** que simule um pequeno sistema de cadastro e login de usuários, utilizando **variáveis, operadores, expressões e condicionais**. O aluno deverá praticar a lógica e estruturar o código de forma clara, bem comentada e organizada.

---

### 📝 Projeto

Você foi contratado para desenvolver um **mini-sistema de cadastro de usuários** para uma plataforma fictícia chamada **TechSchool**. O sistema precisa funcionar em etapas:

1. **Cadastro de Usuário:**
    - O programa deve solicitar o **nome**, **idade** e **senha** do usuário.
    - O sistema deve verificar se a idade é **maior ou igual a 13** para permitir o cadastro (caso contrário, exibir uma mensagem dizendo que não é possível se cadastrar).
2. **Login:**
    - Após o cadastro, o programa deve solicitar novamente o **nome** e a **senha**.
    - O sistema deve verificar se o nome e a senha digitados são **iguais** aos cadastrados.
    - Caso estejam corretos, exibir a mensagem:
        
        `"Login realizado com sucesso! Bem-vindo, [nome]."`
        
    - Caso contrário, exibir:
        
        `"Nome ou senha incorretos. Tente novamente."`
        
3. **Regras extras:**
    - O sistema deve utilizar **if/else** para todas as verificações.
    - Utilizar **== ou ===** para verificar igualdade.
    - O código deve conter **comentários** explicando cada parte.
    - O aluno deve organizar o código em **etapas (cadastro e login)**.

---

### 💡 Exemplo de Execução Esperada

```
--- Cadastro de Usuário ---
Digite seu nome: Maria
Digite sua idade: 15
Digite uma senha: 1234

Cadastro realizado com sucesso!

--- Login ---
Digite seu nome: Maria
Digite sua senha: 1234

Login realizado com sucesso! Bem-vindo, Maria.

```

Outro exemplo, se a idade for inválida:

```
--- Cadastro de Usuário ---
Digite seu nome: João
Digite sua idade: 10
Digite uma senha: 4321

Você não pode se cadastrar. Idade mínima: 13 anos.

```

Boas práticas! 🤙

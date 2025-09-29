PROFESSOR: Everson Sousa | TURMA: 1º EM DESENVOLVIMENTO DE SISTEMAS

DATA DE ENTREGA: 28/ago | Prazo Máximo: 03/set<br>
PRÓXIMA CORREÇÃO: 15/set

---

# **PROJETO 3 - SISTEMA DE VERIFICAÇÃO DE ACESSO COM MÚLTIPLAS CONDIÇÕES**

### 🎯 **Objetivo**

Este projeto tem o objetivo de aprofundar a sua prática com estruturas condicionais e operadores lógicos (`&&`, `||`). Você deverá criar um sistema mais robusto de verificação de acesso, que leva em conta diferentes perfis de usuário, cada um com suas próprias regras. Ao final, você usará os testes com Jest para garantir que toda a sua lógica está funcionando corretamente.

---

### 📝 **Projeto**

Você está desenvolvendo um sistema de acesso para uma plataforma de conteúdo. A plataforma tem diferentes níveis de acesso baseados na idade e no cargo do usuário. O seu programa deve seguir as seguintes regras, em ordem de prioridade:

1. O programa deve pedir o **nome completo** e a **idade** do usuário.
2. **Acesso Geral:** Se a idade do usuário for igual ou superior a 18 anos, ele tem acesso total. A mensagem deve ser: `"Olá, [Nome do Usuário]! Você tem acesso completo. Boas-vindas à plataforma!"`.
3. **Acesso de Administrador:** Se o nome do usuário for **"admin"** (não se preocupe com letras maiúsculas ou minúsculas), o acesso é liberado, independentemente da idade. A mensagem deve ser: `"Bem-vindo, Admin! Acesso total liberado."`.
4. **Acesso de Moderador:** Se o nome do usuário for **"moderador"** (não se preocupe com letras maiúsculas ou minúsculas) **E** sua idade for igual ou superior a 16 anos, ele tem acesso especial. A mensagem deve ser: `"Olá, Moderador! Acesso liberado para a área de moderação."`.
5. **Acesso de Jovem Aprendiz:** Se a idade do usuário for **entre 13 e 17 anos** (inclusive), ele não tem acesso ao conteúdo principal, mas é convidado para um programa de aprendizado. A mensagem deve ser: `"Acesso negado. Você pode participar do nosso programa Jovem Aprendiz!"`.
6. **Acesso Negado:** Para qualquer outro caso (por exemplo, um usuário com menos de 13 anos ou um moderador com menos de 16 anos), o acesso deve ser negado com a mensagem: `"Acesso negado. O conteúdo é exclusivo para maiores de 18 anos."`.
7. Use a função `alert()` para exibir todas as mensagens.

---

### 💡 **Exemplo de Execução Esperada**

- **Usuário +18:** `alert("Olá, Carlos Silva! Você tem acesso completo. Boas-vindas à plataforma!")`
- **Usuário Administrador:** `alert("Bem-vindo, Admin! Acesso total liberado.")`
- **Usuário Moderador com 16 anos:** `alert("Olá, Moderador! Acesso liberado para a área de moderação.")`
- **Usuário Jovem Aprendiz:** `alert("Acesso negado. Você pode participar do nosso programa Jovem Aprendiz!")`
- **Usuário menor de 13 anos:** `alert("Acesso negado. O conteúdo é exclusivo para maiores de 18 anos.")`

---

Boas práticas! 🤙

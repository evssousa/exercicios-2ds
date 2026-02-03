PROFESSOR: Everson Sousa | TURMA: 1º EM DESENVOLVIMENTO DE SISTEMAS

DATA DE ENTREGA: 04/nov (não haverá uma outra correção)

# 💼 PROJETO 6 – CONTROLE DE PRODUÇÃO REFATORADO

## 🏢 Projeto

A empresa **TechFactory** gostou do seu trabalho no **Projeto 5** e agora quer melhorar o sistema.

O novo desafio é criar um **relatório completo da produção diária**, registrando os valores em um **array** e exibindo estatísticas detalhadas.

---

## 🎯 **Objetivos**

Seu programa deve:

1. Perguntar **quantos dias** serão registrados.
2. Pedir **quantas peças foram produzidas** em cada dia.
3. Exibir:
    - Todas as produções armazenadas no array.
    - O total de peças produzidas.
    - A média diária.
    - O dia de maior e menor produção.
    - Os valores **em ordem crescente e decrescente**.
    - Uma mensagem final:
        - `"Produção estável!"` se a média for maior ou igual à metade da maior produção.
        - `"Produção abaixo do ideal."` caso contrário.

---

## 🧠 **Regras Técnicas**

- Use **prompt-sync** para entrada de dados (`npm i prompt-sync`).
- O programa será executado no arquivo `index.js`.

---

## 🧩 **Exemplo de Execução**

```
=== Sistema de Controle de Produção ===

Quantos dias deseja registrar? 4
Digite a quantidade produzida no dia 1: 10
Digite a quantidade produzida no dia 2: 15
Digite a quantidade produzida no dia 3: 8
Digite a quantidade produzida no dia 4: 20

--- RELATÓRIO DE PRODUÇÃO ---
Produções registradas: [10,15,8,20]
Total produzido: 53 peças
Média diária: 13.25
Maior produção: 20 (dia 4)
Menor produção: 8 (dia 3)
Ordem crescente: [8,10,15,20]
Ordem decrescente: [20,15,10,8]
Produção estável!

```

Boas práticas! 🤙

---

### 📌 ATENÇÃO!!!
- Não haverá uma segunda correção, já que o Github irá corrigir por conta própria!
- Sempre confira o Action no Github, sempre teste antes, cuidado com os falsos testes e tente não fazer gambiarras!
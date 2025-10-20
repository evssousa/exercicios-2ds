PROFESSOR: Everson Sousa | TURMA: 1º EM DESENVOLVIMENTO DE SISTEMAS

DATA DE ENTREGA: 22/out (não haverá uma outra correção)

# 💼 PROJETO 5 – SISTEMA DE CONTROLE DE PRODUÇÃO

## 🏢 Projeto

Você foi contratado pela **TechFactory**, uma empresa de tecnologia que automatiza fábricas. O setor de **controle de produção** precisa de um **sistema simples de monitoramento** de peças produzidas diariamente.

Seu papel será **criar um programa em JavaScript** que simule o acompanhamento da produção de uma máquina durante um turno de trabalho, usando **loops (`while`, `do...while` e `for`)** para calcular e exibir relatórios automáticos.

---

## 🎯 Objetivo

Desenvolver um programa que:

1. Solicite ao operador:
    - Quantas **peças a máquina deve produzir** no turno.
2. Acompanhe o processo de produção **de forma incremental**, exibindo:
    - “Peça X produzida com sucesso.”
3. No final, mostre:
    - Quantas peças foram produzidas.
    - Uma mensagem de status:
        - “Meta alcançada!” se atingiu a quantidade planejada.
        - “Meta não alcançada.” caso contrário.

O programa deve usar:

- **`while`** para o controle de produção.
- **`do...while`** para confirmar se o usuário quer continuar simulando outro turno.
- **`for`** para exibir um resumo dos dias de produção anteriores (simulado com contador interno).

---

## 🧠 Regras Técnicas

- Use **prompt-sync** para ler entradas do usuário.
- Não use **funções** ou **arrays** (ainda não estudados).
- Utilize **console.log()** para as saídas.
- O sistema deve parar quando o usuário responder `"N"` para continuar.

---

## 🧩 Exemplo de Execução

```
=== Sistema de Controle de Produção ===

--- Novo Turno ---
Quantas peças devem ser produzidas no turno? 5
Peça 1 produzida com sucesso.
Peça 2 produzida com sucesso.
Peça 3 produzida com sucesso.
Peça 4 produzida com sucesso.
Peça 5 produzida com sucesso.
Meta alcançada!

Deseja simular outro turno? (S/N) s

--- Novo Turno ---
Quantas peças devem ser produzidas no turno? 3
Peça 1 produzida com sucesso.
Peça 2 produzida com sucesso.
Peça 3 produzida com sucesso.
Meta alcançada!

Deseja simular outro turno? (S/N) n

Resumo dos dias anteriores:
Dia 1: 5 peças produzidas
Dia 2: 3 peças produzidas
Total geral: 8 peças

Encerrando sistema de produção...

```
Boas práticas! 🤙

---

### 📌 ATENÇÃO!!!
- Não haverá uma segunda correção, já que o Github irá corrigir por conta própria!
- Sempre confira o Action no Github, sempre teste antes, cuidado com os falsos testes e tente não fazer gambiarras!
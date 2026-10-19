# 📘 Aula 2: Métricas de Crescimento e Decisões Coletivas

## 🎯 Objetivos da aula

- Compreender as métricas de **crescimento** de uma startup.
- Conhecer o funil **AARRR** e saber em que etapa cada métrica entra.
- Calcular **churn** e entender sua relação com a retenção.
- Participar de uma **decisão coletiva** baseada em números, e não em opinião.

> Na aula anterior vimos como medir o produto e o código. Agora vamos olhar o caminho que a pessoa faz **até** virar usuária — e o que a equipe faz com esses números na mão.

# 🪣 O funil AARRR

O crescimento de uma startup costuma ser desenhado como um **funil** de cinco etapas. O nome vem das iniciais em inglês, e o apelido é "funil dos piratas" (AARRR!).

```
   Aquisição      ← a pessoa descobre o produto
       ↓
   Ativação       ← a pessoa tem a primeira experiência boa
       ↓
   Retenção       ← a pessoa volta
       ↓
   Receita        ← a pessoa gera valor
       ↓
   Recomendação   ← a pessoa traz outras pessoas
```

Chama-se funil porque **afunila**: muita gente entra em cima, pouca chega embaixo.

| Etapa | Pergunta que responde | Métrica típica |
| --- | --- | --- |
| **A**quisição | Como as pessoas nos encontram? | visitantes, cliques, novos cadastros |
| **A**tivação | A pessoa entendeu o valor na primeira vez? | % que concluiu a primeira ação importante |
| **R**etenção | Ela volta? | retenção semanal, churn |
| **R**eceita | Isso se sustenta? | receita por usuário, conversão para pago |
| **R**ecomendação | Ela indica? | NPS, convites enviados, indicações |

## 🔍 Lendo um funil

Uma equipe mediu o próprio app de tarefas em um mês:

```
Aquisição      500 visitantes
Ativação       180 criaram a primeira tarefa      (36%)
Retenção        54 voltaram na semana seguinte    (30% dos ativados)
Receita          6 assinaram o plano pago         (11% dos retidos)
Recomendação    NPS 22
```

Onde está o problema maior?

Entre **aquisição e ativação**: de 500 pessoas que chegaram, 320 foram embora sem nem criar uma tarefa. Trazer mais 500 visitantes só repetiria a perda.

> **A etapa a consertar é sempre a de maior queda, não a última.**

# 📉 Churn

**Churn** é o oposto da retenção: a porcentagem de usuários que **abandonam** o produto num período.

```
Churn = (usuários que saíram ÷ usuários no início do período) × 100
```

Exemplo: o mês começou com 240 usuários ativos e 36 pararam de usar.

```
Churn = (36 ÷ 240) × 100 = 15%
```

E a relação com a retenção é direta:

```
Retenção = 100% − Churn
Retenção = 100 − 15 = 85%
```

## 🧮 Por que churn alto é tão grave

Um churn de 15% ao mês parece pequeno. Veja o efeito em 6 meses, começando com 1.000 usuários e **sem** ninguém novo entrando:

| Mês | Usuários |
| --- | --- |
| 0 | 1.000 |
| 1 | 850 |
| 2 | 723 |
| 3 | 614 |
| 4 | 522 |
| 5 | 444 |
| 6 | 377 |

A equipe perdeu **62% da base** sem perceber nada de dramático em nenhum mês isolado.

📌 É por isso que uma startup com churn alto precisa correr só para ficar parada: toda a aquisição do mês serve apenas para repor quem saiu.

# 🧩 Outras métricas de crescimento

| Métrica | O que é | Como ler |
| --- | --- | --- |
| **Taxa de conversão** | % que avança de uma etapa para a próxima | aponta onde o funil vaza |
| **Taxa de crescimento** | quanto a base cresceu em relação ao período anterior | `((atual − anterior) ÷ anterior) × 100` |
| **Ticket médio** | receita total ÷ número de clientes pagantes | diz quanto vale cada cliente |
| **CAC** | custo para conquistar um cliente | se o CAC é maior que o que o cliente paga, cada venda dá prejuízo |

Exemplo de taxa de crescimento: a base foi de 240 para 288 usuários.

```
((288 − 240) ÷ 240) × 100 = 20% de crescimento
```

# 🗳️ Participação em decisões coletivas

Números servem para decidir **junto**. Sem método, a reunião vira disputa de opinião — e geralmente ganha quem fala mais alto, não quem tem razão.

## 📅 A reunião de métricas

Um formato simples, de 20 a 30 minutos, com periodicidade fixa:

```
1. Alguém apresenta os números da semana       (5 min)
2. O time aponta o que mudou e por quê        (5 min)
3. O time escolhe UM problema para atacar     (5 min)
4. Decide a ação e quem faz                   (5 min)
5. Registra a decisão por escrito             (2 min)
```

📌 O passo 5 é o que mais se esquece e o que mais importa: decisão não registrada volta a ser discutida na semana seguinte.

## 💡 Voto informado

**Voto informado** é quando cada integrante vota depois de ver o mesmo dado que os outros.

A regra é simples: **ninguém vota antes de os números estarem na tela.** Primeiro o dado, depois a opinião — nunca o contrário.

## ⚖️ Trade-off

**Trade-off** é a troca que toda decisão exige: escolher uma coisa é abrir mão de outra.

A equipe do app de tarefas, com ativação em 36%, discutiu duas opções:

| Opção | Ganho esperado | O que se perde |
| --- | --- | --- |
| Melhorar a tela inicial | ativação deve subir | duas semanas sem feature nova |
| Lançar a funcionalidade de grupos | usuários atuais ficam mais satisfeitos | ativação continua em 36% |

Não existe resposta certa das duas. Existe **decisão explícita**: o time escolheu a primeira, registrou o motivo ("o funil vaza mais na ativação") e combinou de revisar em duas semanas.

> **Decisão coletiva boa não é a que agrada todos. É a que todos entendem — inclusive quem votou contra.**

## 🤝 Discordar e seguir junto

Técnica útil: **discordar e se comprometer**. Quem foi voto minoritário registra a discordância na ata e, ainda assim, apoia a execução. Assim o time não fica travado, e se o número não melhorar, a discordância registrada vira aprendizado — não "eu avisei".

# 📖 Conceitos importantes

| Conceito | Significado |
| --- | --- |
| AARRR | Aquisição, Ativação, Retenção, Receita, Recomendação |
| Ativação | primeira experiência de valor do usuário |
| Churn | % de usuários que abandonam no período |
| Taxa de conversão | % que passa de uma etapa do funil para a próxima |
| CAC | custo de aquisição de um cliente |
| Voto informado | voto dado após todos verem o mesmo dado |
| Trade-off | o que se abre mão ao escolher algo |

# ⚠️ Erros comuns

### ❌ Atacar o topo do funil quando o vazamento está no meio

Mais visitantes num produto que não ativa ninguém é dinheiro e tempo jogados fora.

### ❌ Confundir churn com retenção

São complementares: churn de 15% é retenção de 85%. Dizer "temos churn de 85%" é anunciar um desastre.

### ❌ Levar opinião para a reunião de métricas

"Acho que o pessoal não gosta da tela" não é dado. "72% abandonam na tela de cadastro" é.

### ❌ Decidir sem registrar

Se a decisão não está escrita com data, motivo e responsável, ela não existe.

Fim da aula!

_

# 🧩 Atividade Rápida

Individual ou em dupla, **usando o GitHub Copilot**, transforme a página da aula 1 num **funil AARRR** e descubra onde o app perde gente.

> ⏱️ 15 minutos — 5 para construir, 10 para coletar.
>
> Se não fez a aula 1, comece uma página nova com uma ideia de app.

**1. Construa (5 min)**

Exemplo de prompt:

```
Adicione a esta página um funil AARRR salvo no localStorage: abrir a
página (aquisição), clicar em "Experimentar" (ativação), clicar em
"Quero usar de novo" (retenção), clicar em "Eu pagaria por isso"
(receita) e dar nota 9 ou 10 no NPS (recomendação). Mostre a quantidade
de cada etapa, a taxa de conversão entre elas e destaque em vermelho a
etapa com a maior queda percentual.
```

**2. Colete (10 min)**

Troque de computador com os colegas ao lado. Cada um segue o funil do outro **só até onde realmente tiver interesse** — clicar em tudo por educação estraga o dado.

**3. Decida**

- **Decisão:** o que você mudaria no app.
- **Motivo:** a maior queda, com o número (ex.: *"só 2 de 6 pessoas clicaram em Experimentar"*).

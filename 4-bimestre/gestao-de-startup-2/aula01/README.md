# 📘 Aula 1: Métricas Importantes e de Código

## 🎯 Objetivos da aula

- Compreender **por que uma startup precisa medir** o que faz.
- Conhecer as principais **métricas de produto**: retenção, engajamento e NPS.
- Conhecer as principais **métricas de código**: quantidade, performance e qualidade.
- Diferenciar **métrica de vaidade** de **métrica acionável**.
- Calcular o **NPS** passo a passo.

# 🤔 Por que medir?

Imagine duas equipes apresentando o mesmo aplicativo.

A primeira diz:

> "Nosso app está indo bem, o pessoal gostou."

A segunda diz:

> "Temos 120 usuários cadastrados. Destes, 38 voltaram a usar na segunda semana. Nosso NPS é 42."

As duas podem estar certas. Mas só a segunda consegue **tomar decisão**.

Sem número, a equipe discute opinião. Com número, a equipe discute fato.

> **Medir não é burocracia. É o que permite saber se o trabalho da semana passada funcionou.**

# 📊 Métricas de produto

São os números que falam sobre **como as pessoas usam** o que você construiu.

## 🔁 Retenção

**Retenção** é a porcentagem de usuários que **voltam** a usar o produto depois de um tempo.

```
Retenção = (usuários que voltaram ÷ usuários que começaram) × 100
```

Exemplo: 120 pessoas se cadastraram na semana 1. Na semana 2, 38 voltaram.

```
Retenção = (38 ÷ 120) × 100 = 31,6%
```

📌 Retenção baixa é o sinal mais grave que existe. Significa que as pessoas entram, olham e não voltam — então não vale a pena trazer mais gente para dentro de um produto que não segura ninguém.

## ⚡ Engajamento

**Engajamento** mede **o quanto** a pessoa usa, não só se ela voltou.

Formas comuns de medir:

| Medida | O que responde |
| --- | --- |
| Sessões por usuário | quantas vezes a pessoa abriu o produto |
| Tempo médio de uso | quanto tempo ela ficou |
| Ações por sessão | quantas coisas ela fez em cada visita |
| Usuários ativos por dia (DAU) | quantas pessoas usaram hoje |
| Usuários ativos por mês (MAU) | quantas pessoas usaram no mês |

Exemplo: um app de tarefas com 50 usuários ativos no mês, em que cada um cria em média 7 tarefas, está mais engajado que um com 200 usuários criando 1 tarefa cada.

## 💬 NPS (Net Promoter Score)

O **NPS** mede o quanto as pessoas **recomendariam** seu produto. É uma pergunta só:

> "De 0 a 10, quanto você recomendaria este produto para um amigo?"

As respostas se dividem em três grupos:

| Nota | Grupo | Significado |
| --- | --- | --- |
| 9 – 10 | **Promotores** | gostam e recomendam |
| 7 – 8 | **Neutros** | usam, mas não recomendam |
| 0 – 6 | **Detratores** | insatisfeitos, podem falar mal |

A fórmula ignora os neutros:

```
NPS = % de promotores − % de detratores
```

### 🧮 Cálculo passo a passo

Uma equipe entrevistou **20 usuários** e recebeu estas notas:

```
10, 9, 10, 8, 7, 6, 9, 10, 5, 8,
9, 10, 3, 7, 9, 10, 8, 6, 9, 10
```

**Passo 1 — separar os grupos**

- Promotores (9 e 10): 10, 9, 10, 9, 10, 9, 10, 9, 10, 9, 10 → **11 pessoas**
- Neutros (7 e 8): 8, 7, 8, 7, 8 → **5 pessoas**
- Detratores (0 a 6): 6, 5, 3, 6 → **4 pessoas**

**Passo 2 — virar porcentagem**

```
Promotores = (11 ÷ 20) × 100 = 55%
Detratores = ( 4 ÷ 20) × 100 = 20%
```

**Passo 3 — subtrair**

```
NPS = 55 − 20 = 35
```

O NPS vai de **−100** (todos detratores) a **+100** (todos promotores). Leitura comum:

| Faixa | Interpretação |
| --- | --- |
| acima de 50 | excelente |
| 0 a 50 | bom, com espaço para melhorar |
| abaixo de 0 | mais gente insatisfeita que satisfeita |

# 💻 Métricas de código

O produto é metade da história. A outra metade é **como a equipe produz**.

## 🔢 Métricas de quantidade

Mostram o **volume** de trabalho:

- commits por semana;
- pull requests abertos e fechados;
- issues resolvidas;
- linhas de código alteradas.

⚠️ Volume não é qualidade. Mil linhas de código podem resolver menos que dez.

## ⏱️ Métricas de performance da equipe

Mostram a **velocidade e a saúde** do processo:

| Métrica | O que responde |
| --- | --- |
| Lead time | quanto tempo entre começar uma tarefa e ela estar pronta |
| Frequência de entrega | com que frequência o time coloca algo no ar |
| Taxa de bugs | quantos problemas aparecem depois da entrega |
| Tempo de correção | quanto tempo o time leva para consertar um bug |

## 🚀 Métricas de performance do sistema

Mostram se o produto **aguenta o uso**:

- tempo de resposta de uma rota da API (em milissegundos);
- quantidade de erros por total de requisições;
- tempo que o sistema ficou no ar (uptime).

📌 Vocês vão medir exatamente isso nas aulas de Orientação a Objetos, quando as rotas da API começarem a responder.

# 🎭 Métrica de vaidade x métrica acionável

Esta é a distinção mais importante da aula.

| | Métrica de vaidade | Métrica acionável |
| --- | --- | --- |
| Exemplo | "temos 5.000 cadastros" | "31% dos cadastrados voltam na semana 2" |
| O que faz | deixa a equipe orgulhosa | faz a equipe mudar algo |
| Só sobe | sim, nunca desce | pode cair e avisar o problema |
| Responde "e agora?" | não | sim |

Um número é **acionável** quando você consegue completar a frase:

> "Se este número piorar, nós vamos ______."

Se não dá para completar, é vaidade.

# 📖 Conceitos importantes

| Conceito | Significado |
| --- | --- |
| Retenção | % de usuários que voltam a usar |
| Engajamento | intensidade de uso de quem está dentro |
| NPS | % promotores − % detratores |
| Promotor | deu nota 9 ou 10 |
| Detrator | deu nota de 0 a 6 |
| Lead time | tempo entre iniciar e concluir uma tarefa |
| Métrica de vaidade | número que só sobe e não gera decisão |
| Métrica acionável | número que aponta o que fazer |

# ⚠️ Erros comuns

### ❌ Contar neutros no NPS

O NPS usa só promotores e detratores. Os neutros entram apenas no **total** de respostas, para calcular a porcentagem.

### ❌ Confundir cadastro com usuário ativo

5.000 cadastros com 12 pessoas usando é um produto com 12 usuários.

### ❌ Medir tudo

Uma equipe que acompanha 30 métricas não acompanha nenhuma. Escolham de 3 a 5 e olhem toda semana.

### ❌ Medir uma vez

Métrica isolada não diz nada. `NPS = 35` sozinho é um número; `NPS caiu de 48 para 35 depois da última atualização` é uma informação.

Fim da aula!

_

# 🧩 Atividade Rápida

Individual ou em dupla, **usando o GitHub Copilot**, crie uma página de NPS para uma ideia de app e colete notas de verdade dos colegas.

> ⏱️ 15 minutos — 5 para construir, 10 para coletar.

**1. Construa (5 min)**

Escolha uma ideia de app (troca de livros, cardápio da cantina, agenda de estudos...).

Exemplo de prompt:

```
Crie uma página HTML com JavaScript puro que apresenta o app
[NOME DO APP] em uma frase e pergunta: "De 0 a 10, quanto você
recomendaria este app para um amigo?". Salve as respostas no
localStorage e mostre a quantidade de promotores, neutros, detratores
e o NPS final.
```

Confira: digite as 20 notas do exemplo da aula. O resultado precisa ser **NPS 35**. Depois, limpe as notas de teste.

**2. Colete (10 min)**

Deixe a página aberta no seu computador. Visite os colegas ao lado e dê nota nos apps deles; peça que eles deem nota no seu. Tente conseguir **pelo menos 5 respostas**.

**3. Responda**

- Quantas respostas e qual o NPS?
- Complete: *"Se este NPS cair, eu vou ______."*

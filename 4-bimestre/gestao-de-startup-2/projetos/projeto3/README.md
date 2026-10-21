# 📊 PROJETO 3 — PAINEL DE MÉTRICAS DO PRODUTO

## 🎯 PROBLEMA

A equipe de vocês desenvolveu um produto nos bimestres anteriores. Ele existe, tem uma proposta, tem um público.

Mas se alguém perguntar hoje:

> "Está dando certo?"

a resposta provavelmente será uma opinião.

Nas aulas 1 e 2 vimos que opinião não sustenta decisão. Uma equipe que não mede não sabe se o trabalho da semana passada melhorou ou piorou o produto — ela só acha.

### O desafio da equipe

Vocês vão montar o **painel de métricas** do produto da equipe e, com os números na mão, **tomar uma decisão coletiva** e registrá-la.

No final, a equipe sai com:

- as métricas que fazem sentido para o produto (de produto **e** de código);
- um painel com os números organizados;
- o cálculo de NPS, retenção e churn;
- o funil AARRR do produto, com a maior queda identificada;
- uma decisão coletiva registrada, baseada em um número específico.

> ⏱️ **Tempo:** este projeto é feito em **um dia de aula (60 minutos)**. O prazo de entrega é estendido, mas o trabalho foi dimensionado para caber em 60 a 100 minutos no total. Não é um dossiê — é um painel enxuto e uma decisão bem fundamentada.

# 🧰 QUAL PRODUTO USAR

### Caminho principal

O produto que a sua equipe já desenvolveu nos bimestres anteriores.

### 🅱️ Caminho alternativo

Se a equipe **não tem** um produto anterior — ou se o grupo foi formado neste bimestre — use um **produto de mercado que todos do grupo conheçam** (um app de música, uma rede social, um jogo, o app da escola).

Nesse caso, os números serão **estimados**, e isso não é problema: o objetivo do projeto é vocês saberem escolher, calcular e interpretar métricas. Deixem claro no painel que os dados são simulados.

📌 Os entregáveis e os critérios de avaliação são **exatamente os mesmos** nos dois caminhos.

# 👥 ORGANIZAÇÃO DA EQUIPE

Mantenham as equipes dos projetos anteriores. Sugestão de divisão para caber no tempo:

| Função | Responsabilidade |
| --- | --- |
| Métricas de produto | retenção, engajamento e NPS |
| Métricas de código | commits, PRs, bugs, performance |
| Painel | monta a planilha ou o quadro com os números |
| Documentação | registra o funil e a ata da decisão |

> As funções servem para o trabalho acontecer em paralelo. A **decisão da Etapa 5 é de todos**.

# 📏 ETAPA 1 — ESCOLHER AS MÉTRICAS

A equipe deve escolher **de 4 a 6 métricas** no total, sendo no mínimo:

- **3 métricas de produto** (ex.: retenção semanal, usuários ativos, NPS, ações por sessão);
- **2 métricas de código** (ex.: commits por semana, PRs fechados, bugs abertos, tempo de resposta de uma rota).

Para **cada** métrica escolhida, a equipe precisa completar esta frase (aula 1):

```
Se este número piorar, a nossa equipe vai ____________.
```

⚠️ Se não for possível completar a frase, a métrica é de **vaidade** — troquem por outra.

### Exemplo

| Métrica | Tipo | Se piorar, vamos... |
| --- | --- | --- |
| Retenção semanal | produto | revisar a tela de primeiro acesso |
| NPS | produto | entrevistar os detratores |
| Ações por sessão | produto | checar se a função principal está escondida |
| Bugs abertos | código | parar features e entrar em semana de correção |
| Commits por semana | código | investigar se alguém está travado |

# 🧮 ETAPA 2 — CALCULAR OS NÚMEROS

A equipe deve calcular, **mostrando a conta**, pelo menos estes três:

### 1. NPS

Colete **no mínimo 10 respostas** reais à pergunta "de 0 a 10, quanto você recomendaria este produto?". Pode ser com colegas da turma.

```
Promotores (9–10) = ___ pessoas → ___%
Neutros (7–8)     = ___ pessoas
Detratores (0–6)  = ___ pessoas → ___%

NPS = ___% − ___% = ___
```

### 2. Retenção

```
Retenção = (usuários que voltaram ÷ usuários que começaram) × 100
Retenção = (___ ÷ ___) × 100 = ___%
```

### 3. Churn

```
Churn = (usuários que saíram ÷ usuários no início) × 100
Churn = (___ ÷ ___) × 100 = ___%
```

E confiram a relação da aula 2:

```
Retenção + Churn = 100%
```

📌 A conta tem que aparecer no painel. Resultado sem conta não dá para conferir nem para refazer no mês seguinte.

# 🪣 ETAPA 3 — MONTAR O FUNIL AARRR

Desenhem o funil do produto com **um número em cada etapa** (real ou estimado):

```
Aquisição      ____ pessoas
Ativação       ____ pessoas   (___%)
Retenção       ____ pessoas   (___%)
Receita        ____ pessoas   (___%)
Recomendação   NPS ____
```

Depois, respondam:

### Onde está a maior queda do funil?

> Entre ____________ e ____________, perdemos ____%.

Essa resposta é o que vai alimentar a decisão da Etapa 5.

⚠️ Lembrem da aula 2: a etapa a consertar é a de **maior queda**, não a última.

# 📋 ETAPA 4 — MONTAR O PAINEL

O painel pode ser feito em **planilha** (Google Sheets, Excel), em ferramenta **no-code**, ou mesmo em uma **tabela no README** do repositório. O que importa é ele ser legível por alguém de fora.

### Estrutura mínima do painel

| Métrica | Tipo | Valor atual | Período | Se piorar, vamos... |
| --- | --- | --- | --- | --- |
| Retenção semanal | produto | 31% | semana 2 | revisar o primeiro acesso |
| NPS | produto | 35 | outubro | entrevistar detratores |
| ... | ... | ... | ... | ... |

Abaixo da tabela, incluam:

- as **contas** da Etapa 2;
- o **funil** da Etapa 3;
- uma linha dizendo se os dados são **reais ou simulados**.

📌 Coluna "Período" é obrigatória. Como vimos na aula 1, métrica sem período não permite comparação — e métrica que não se compara não serve para nada.

# 🗳️ ETAPA 5 — A DECISÃO COLETIVA

Esta é a etapa mais importante do projeto. Reservem **15 minutos** para ela.

Sigam o formato da reunião de métricas (aula 2):

```
1. Alguém apresenta o painel                      (3 min)
2. O time olha a maior queda do funil             (2 min)
3. O time lista 2 opções de ação                  (4 min)
4. Voto informado e escolha de UMA opção          (3 min)
5. Registro da decisão                            (3 min)
```

### Regra do voto informado

**Ninguém vota antes de o painel estar na mesa.** Primeiro o número, depois a opinião.

### O trade-off

Para as **duas** opções levantadas, preencham:

| Opção | O que ganhamos | O que abrimos mão |
| --- | --- | --- |
| A | | |
| B | | |

### A ata da decisão

O registro final precisa ter exatamente estes quatro campos:

```markdown
## Decisão — <data>

DECISÃO: o que vamos fazer

MOTIVO: o número que levou a isso
        (ex.: "a ativação é de 36%, a maior queda do funil")

RESPONSÁVEL: quem conduz

REVISÃO: quando vamos olhar esse número de novo
```

E se alguém votou contra, registre também:

```
DISCORDÂNCIA: <nome> acha que deveríamos ter escolhido B, porque ___.
```

📌 Isso não é formalidade. Como vimos na aula 2, decisão não registrada volta a ser discutida na semana seguinte — e discordância registrada vira aprendizado quando o número não melhora.

# 🐙 ETAPA 6 — ENTREGA NO GITHUB

No **mesmo repositório do produto** usado nos projetos anteriores (ou um novo, se a equipe estiver usando o caminho alternativo), criem:

```
nome-do-produto/
├── README.md
└── metricas/
    ├── painel.md          ← ou o link para a planilha
    └── decisao.md         ← a ata da Etapa 5
```

E abram **uma Issue** para a ação decidida na Etapa 5, com:

- o título sendo a ação;
- no corpo, o número que motivou a decisão;
- o responsável marcado.

# 🎯 ENTREGA DO PROJETO 3

Ao final, cada equipe deverá entregar:

| # | Entregável | Onde |
| --- | --- | --- |
| 1 | 4 a 6 métricas escolhidas, com a frase "se piorar, vamos..." | `painel.md` |
| 2 | NPS calculado, com no mínimo 10 respostas e a conta à mostra | `painel.md` |
| 3 | Retenção e churn calculados, com as contas | `painel.md` |
| 4 | Funil AARRR com números e a maior queda identificada | `painel.md` |
| 5 | Painel organizado e legível (tabela ou planilha linkada) | `painel.md` |
| 6 | Ata da decisão com os 4 campos | `decisao.md` |
| 7 | Issue criada para a ação decidida | GitHub |

# ✅ CRITÉRIOS DE AVALIAÇÃO

| Critério | O que é observado |
| --- | --- |
| Escolha das métricas | são acionáveis? têm produto **e** código? |
| Cálculos | as contas estão corretas e visíveis? |
| Funil | a maior queda foi identificada corretamente? |
| Decisão | está ligada a um **número específico** do painel? |
| Registro | a ata tem decisão, motivo, responsável e revisão? |
| Participação | todos participaram da decisão da Etapa 5? |

⚠️ O erro que mais custa nota: uma decisão que não aponta nenhum número do painel. Se a justificativa for "achamos melhor", o projeto não cumpriu o objetivo — mesmo com o painel bonito.

Boas métricas! 📈

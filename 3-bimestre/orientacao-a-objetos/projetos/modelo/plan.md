# PLAN — CRIAÇÃO DOS PROJETOS DOS ALUNOS

## 1. Objetivo

Este documento define como devem ser criados os projetos individuais dos alunos a partir de um projeto modelo.

A estrutura foi criada para que:

* exista um único modelo oficial por projeto, compartilhado entre todos os projetos (`projeto1`, `projeto2`, `projeto3`, `projeto4`, ...);
* exista uma única lista de alunos, compartilhada entre todos os projetos;
* cada aluno tenha sua própria pasta dentro do projeto em execução;
* cada aluno receba uma versão personalizada do projeto;
* todos os alunos possam visualizar as demais pastas;
* o GitHub Actions possa testar somente a pasta do aluno que realizou o commit.

Este plano é genérico: ele é executado informando **qual projeto** deve ser gerado (ex.: "rode o plan.md do projeto4"). O nome do projeto é chamado aqui de `<projetoN>` (ex.: `projeto1`, `projeto2`, `projeto3`, `projeto4`...).

Este plano pressupõe que `modelo/<projetoN>/` já existe. Se ainda não existir, o modelo do projeto (README, esqueleto de código, testes e workflow de correção) deve ser criado primeiro com [`plan-projeto.md`](./plan-projeto.md).

---

# 2. Estrutura de pastas

```text
projetos/
│
├── modelo/
│   ├── plan.md              ← este arquivo
│   ├── alunos.md             ← lista única de alunos, usada por todos os projetos
│   ├── projeto1/              ← fonte oficial do projeto 1
│   ├── projeto2/              ← fonte oficial do projeto 2
│   ├── projeto3/              ← fonte oficial do projeto 3
│   └── projeto4/              ← fonte oficial do projeto 4 (quando existir)
│
├── projeto1/                  ← saída: pastas dos alunos para o projeto 1
│   ├── aluno-1/
│   ├── aluno-2/
│   └── aluno-3/
│
├── projeto2/                  ← saída: pastas dos alunos para o projeto 2
│   └── ...
│
└── projeto3/                  ← saída: pastas dos alunos para o projeto 3
    └── ...
```

* `projetos/modelo/<projetoN>/` é a **fonte oficial** daquele projeto (README, package.json, test/, etc.).
* `projetos/modelo/alunos.md` é a **lista única** de alunos, válida para qualquer projeto.
* `projetos/<projetoN>/` é a pasta de **saída**: contém uma pasta por aluno, cada uma com uma versão personalizada do projeto `<projetoN>`.
* A pasta de saída `projetos/<projetoN>/` **não** contém uma cópia do modelo dentro dela (não recriar algo como `0-modelo`) — o modelo mora exclusivamente em `modelo/<projetoN>/`.

**Exceção conhecida:** `projetos/projeto1/`, `projetos/projeto2/` e `projetos/projeto3/` existem hoje como pastas soltas no nível de `projetos/` (sem pastas de alunos dentro), mantidas apenas para que `.github/workflows/testes-projetos.yml` continue funcionando sem alteração. `projetos/projeto3/` é uma cópia idêntica de `modelo/projeto3/` — quando alunos forem gerados para o projeto 3, eles devem ir para `projetos/projeto3v2/` (ou outra pasta de saída específica), sem apagar ou converter `projetos/projeto3/`. O Claude Code não deve presumir que `projetos/<projetoN>/` solto é sempre a pasta de saída de alunos — antes de gerar, verificar se já existe uma convenção de nome de saída em uso (ex.: `projeto3v2`) e perguntar ao usuário em caso de dúvida.

---

# 3. Arquivo alunos.md

O arquivo `projetos/modelo/alunos.md` contém a lista dos alunos que devem receber uma pasta, um por linha.

Exemplo:

```text
john-wick
fco-anderson
ant-jose
joao-silva-(low)
maria-santos-(high)
pedro-costa-(very-low)
```

Os nomes devem ser exatamente os nomes de usuário utilizados pelos alunos no GitHub.

Essa lista é **compartilhada** por todos os projetos — não deve existir um `alunos.md` diferente dentro de cada pasta de projeto.

O Claude Code deve utilizar esses nomes para criar as pastas em `projetos/<projetoN>/`.

## 3.1 Marcação de nível — sufixos `-(low)`, `-(very-low)` e `-(high)`

Um nome de aluno pode vir com um sufixo colado no final da linha, indicando um nível de dificuldade diferente do padrão da turma:

* **`-(low)`** (ex.: `joao-silva-(low)`) — aluno com necessidade de **adaptação de acessibilidade/cognitiva** (ex.: autismo com maior grau de suporte, dificuldade de entender o conteúdo das aulas). O projeto deve ter escopo reduzido e vir **mais guiado** (mais explicação de como fazer, passo a passo, dicas) — ver seção 6.1.
* **`-(very-low)`** (ex.: `pedro-costa-(very-low)`) — aluno com a mesma necessidade da `-(low)`, **mais** dificuldade real de ler textos extensos (comum em autismo com necessidade de suporte mais alta). Aqui a prioridade é a oposta da `-(low)`: o volume de texto precisa ser **mínimo**, mesmo que isso signifique menos explicação em palavras — a orientação vem de forma visual/estrutural, não de parágrafos (ver seção 6.4).
* **`-(high)`** (ex.: `maria-santos-(high)`) — aluno que já demonstra domínio acima da média. O projeto deve ser um pouco mais desafiador que o padrão (ver seção 6.3).
* Sem sufixo — nível padrão/mediano da turma, como descrito na seção 6 (fora das subseções 6.1/6.3/6.4).

Regras de leitura do sufixo:

* O sufixo é sempre `-(low)`, `-(very-low)` ou `-(high)`, no final da linha. Extrair com uma regra simples: se a linha terminar em um desses três sufixos exatos, removê-lo para obter o nome de usuário real. (`-(very-low)` e `-(low)` são sufixos distintos — uma linha terminada em `-(very-low)` não deve ser confundida com `-(low)`.)
* **O nome da pasta criada é sempre o nome de usuário sem o sufixo.** Ex.: `joao-silva-(low)` → pasta `joao-silva/`, `pedro-costa-(very-low)` → pasta `pedro-costa/`, `maria-santos-(high)` → pasta `maria-santos/` — nunca com o sufixo no nome da pasta. Isso é essencial: o workflow de correção usa `github.actor` (o username real do GitHub) para encontrar a pasta, e esse nome nunca inclui sufixo.
* Nenhum dos sufixos **nunca** deve aparecer em nenhum arquivo gerado para o aluno (README, código, testes, nome de pasta, commits). Eles existem só como metadado de leitura interna do Claude Code neste arquivo — repassar essa marcação para dentro da pasta do aluno exporia o nível dele a quem tiver acesso ao fork.
* Outros sufixos no mesmo padrão (`-(...)`) podem ser adicionados no futuro para outros níveis/adaptações; ao encontrar um sufixo não documentado aqui, o Claude Code deve perguntar ao usuário o que ele significa em vez de ignorá-lo ou supor.
* **Se a marcação de um aluno mudar depois que a pasta dele já foi criada** (ex.: trocar `-(low)` por `-(very-low)`, ou adicionar `-(high)` a alguém que já tem pasta no nível padrão), isso **não** atualiza a pasta existente sozinho — vale a regra da seção 11 (pasta já existente não é substituída automaticamente). O Claude Code deve avisar que a marcação mudou mas o projeto já gerado não reflete isso, e perguntar se o usuário quer que a pasta seja recriada.

---

# 4. Regra principal

Ao ser solicitado para rodar este plano para um projeto `<projetoN>` (ex.: "rode o plan.md do projeto4"), o Claude Code deve:

1. Confirmar que existe a pasta `projetos/modelo/<projetoN>/`. Se não existir, avisar e parar — o modelo daquele projeto precisa ser criado primeiro dentro de `modelo/`.
2. Ler o conteúdo de `projetos/modelo/<projetoN>/` (que contém só README.md, package.json, package-lock.json e test/ — ver seção 6.2).
3. Ler a lista de alunos em `projetos/modelo/alunos.md`, separando o nome de usuário real de qualquer sufixo de nível (ver seção 3.1).
4. Criar a pasta `projetos/<projetoN>/`, caso ainda não exista.
5. Para cada aluno listado, criar uma pasta `projetos/<projetoN>/<aluno>/` (nome sem sufixo) com uma versão personalizada de **apenas** os quatro arquivos do modelo — sem criar nenhum arquivo de código-fonte (ver seção 6.2).
6. Personalizar o projeto de cada aluno conforme as regras deste documento — usando a versão adaptada (seção 6.1) para quem tiver `-(low)`, a versão de leitura mínima (seção 6.4) para quem tiver `-(very-low)`, e a versão com desafio extra (seção 6.3) para quem tiver `-(high)`.
7. Garantir que os testes existam e estejam corretos (eles vão falhar até o aluno criar o próprio código — isso é esperado, ver seção 6.2).
8. Não modificar a pasta `modelo/<projetoN>/` nem `modelo/alunos.md`.

---

# 5. Criação das pastas

Se `modelo/alunos.md` possuir:

```text
john-wick
fco-anderson
ant-jose
```

Ao rodar o plano para `projeto4`, o resultado deverá ser:

```text
projetos/
├── modelo/
│   └── projeto4/
├── projeto4/
│   ├── john-wick/
│   ├── fco-anderson/
│   └── ant-jose/
```

Cada pasta de aluno deve possuir uma cópia completa do projeto existente em `modelo/projeto4/`.

---

# 6. Personalização dos projetos

Os projetos dos alunos não devem ser necessariamente idênticos entre si.

O Claude Code deve utilizar o projeto existente em `modelo/<projetoN>/` como estrutura base e criar pequenas variações para cada aluno.

As variações podem incluir:

* nomes;
* valores;
* quantidades;
* produtos;
* personagens;
* funcionários;
* categorias;
* preços;
* situações-problema;
* dados utilizados nos testes;
* exemplos apresentados no README.

A lógica e o objetivo pedagógico do projeto devem permanecer equivalentes.

A dificuldade deve ser aproximadamente a mesma para todos os alunos — **exceto** para quem estiver marcado com `-(low)` (seção 6.1), `-(very-low)` (seção 6.4) ou `-(high)` (seção 6.3) em `alunos.md`.

## 6.1 Alunos com adaptação (marcados com `-(low)`)

Alguns alunos podem ter necessidades específicas — por exemplo, alunos autistas com maior grau de suporte, ou com muita dificuldade de entender o conteúdo das aulas — que tornam o projeto padrão inacessível não pelo conceito em si, mas pelo **volume de coisas para decidir sozinho ao mesmo tempo**: quantos requisitos atender, como estruturar os arquivos, por onde começar. Para esses alunos, o projeto reduz o **escopo** (menos requisitos), mas aumenta a **orientação** (mais explicação de como fazer, passo a passo, com dicas). "Mais fácil" aqui significa **mais guiado**, não mais raso ou mais seco — um README curto demais e sem direção é tão ruim quanto um longo demais para quem tem dificuldade de organizar sozinho o que fazer.

Ao gerar o projeto de um aluno marcado com `-(low)`, o Claude Code deve:

1. **Reduzir a quantidade de requisitos** — usar o menor número de RFs que ainda representem o conceito central do projeto (ex.: se o modelo tem 3 variações/subtipos, usar 2; se tem 7 RFs, cortar para os 3-4 essenciais). Nunca aumentar a quantidade de casos em relação ao modelo, só reduzir.
2. **Adicionar uma seção de explicação do conceito, em linguagem simples**, antes dos requisitos — o que é a ideia central do projeto (ex.: "cada tipo tem seu jeito próprio de fazer a mesma coisa"), usando uma analogia concreta e cotidiana se ajudar, sem depender de jargão técnico não explicado.
3. **Adicionar uma seção de passo a passo ("Por onde começar" / "Passo a passo")**, com os passos na ordem em que devem ser feitos (ex.: "1. Crie o arquivo X.js. 2. Dentro dele, crie uma classe chamada Y. 3. Essa classe deve guardar o nome recebido. 4. Crie mais uma classe para cada tipo, que herda de Y. ..."). Os passos guiam a estrutura e a ordem, mas **não** entregam o código pronto nem a implementação exata — o aluno ainda escreve o código, só não precisa descobrir sozinho por onde começar ou o que vem primeiro.
4. **Adicionar uma seção de dicas objetivas**, uma por linha, apontando o mecanismo certo sem escrever a solução (ex.: "Dica: use `extends` para a classe do tipo herdar da classe principal.", "Dica: o `constructor` é o lugar de guardar o dado recebido.", "Dica: use `throw new Error(...)` para gerar o erro do tipo inválido."). É aceitável citar palavras-chave da linguagem (`class`, `extends`, `constructor`, `throw`) mesmo que isso pareça técnico — o que se evita é jargão de negócio/abstrato, não o vocabulário da própria linguagem que o aluno precisa usar.
5. **Usar vocabulário simples e concreto no restante do texto** — frases curtas, evitar metáforas confusas, ironia ou termos abstratos fora de contexto; nomear as coisas de forma direta e literal. Isso vale para a prosa, não para as seções de passo a passo/dicas, que podem (e devem) ser mais detalhadas que no projeto padrão.
6. **Manter o mesmo objetivo pedagógico central** do projeto (o mesmo conceito de POO que está sendo avaliado), só que em escopo reduzido e mais guiado — não trocar por um exercício de outro assunto, e não entregar a solução pronta via passo a passo/dicas.
7. **Manter exatamente a mesma estrutura de arquivos e o mesmo contrato de testes** do restante da turma (README, package.json, package-lock.json, `test/`, mesmos `require(...)` e mesmo formato de dados esperado) — a adaptação é de conteúdo/orientação, nunca de formato, para que o mesmo workflow de correção funcione sem alterações.
8. **Nunca mencionar a adaptação em nenhum arquivo** — o README desse aluno deve parecer, na aparência, um projeto normal como o de qualquer colega (mesmos títulos, mesmo estilo visual, só com seções a mais de explicação/passo a passo/dicas — o que por si só não denuncia nada, já que são seções que fariam sentido em qualquer README bem escrito). Não escrever nada como "versão simplificada", "adaptado para..." ou qualquer referência à condição do aluno em README, testes, nomes de arquivo ou commits.
9. Se não estiver claro o quanto simplificar ou detalhar, errar para o lado de **mais orientação** — é sempre possível o professor complementar depois; um projeto que o aluno não consegue nem começar não serve para nada.

## 6.2 Arquivos que são (e que NÃO são) gerados por aluno

**Regra central, para qualquer disciplina:** o Claude Code só cria, na pasta de cada aluno, estes quatro arquivos/pastas:

```text
projetos/<projetoN>/<aluno>/
├── README.md
├── package.json
├── package-lock.json
└── test/
    └── <nome>.test.js
```

**Nenhum arquivo de código-fonte é criado** — nem vazio, nem com esqueleto, nem implementado. Isso inclui, dependendo da disciplina: classes de POO (`Factory.js`, `Pessoa.js`, `ControleAcesso.js`...), o `index.js` de um exercício de lógica de programação, ou os `index.html`/`style.css`/`script.js` de um exercício de programação web. O aluno sempre cria esses arquivos do zero — essa é uma parte do que está sendo avaliado, não só o conteúdo interno deles.

Consequências práticas:

* Os testes em `test/<nome>.test.js` fazem `require(...)` (ou equivalente) apontando para um arquivo que ainda não existe na pasta do aluno recém-criada. Isso é esperado: o teste começa **falhando** com erro de módulo/arquivo não encontrado, e só passa quando o aluno cria o arquivo certo com o conteúdo certo. Não é um bug a ser corrigido.
* A seção "Estrutura do projeto" do README do aluno (seção 7 abaixo) continua informando o nome exato do(s) arquivo(s) que ele precisa criar — isso é a instrução para o aluno, não uma promessa de que o arquivo já existe.
* Isso vale igualmente para alunos com marcação `-(low)` ou `-(high)`: nenhuma das duas versões vem com arquivo de código pronto.
* **O nome do arquivo referenciado no `require(...)` dos testes deve ser sempre exatamente o mesmo citado na seção "Estrutura do projeto" do README daquele aluno.** Como a personalização (seção 6) muda nomes de classes/arquivos de aluno para aluno, é fácil gerar um teste que aponta para um nome e um README que descreve outro — ao validar (seção 14), conferir explicitamente que os dois batem.

## 6.3 Alunos com desafio extra (marcados com `-(high)`)

Alguns alunos já demonstram domínio acima da média e se beneficiam de um projeto um pouco mais desafiador — para não terminarem cedo demais sem serem exercitados de verdade. A régua aqui é o oposto da seção 6.1: em vez de reduzir, amplia-se **moderadamente**.

Ao gerar o projeto de um aluno marcado com `-(high)`, o Claude Code deve:

1. **Aumentar um pouco a quantidade de requisitos/variações** em relação ao modelo — ex.: se o modelo tem 3 subtipos, usar 4 ou 5; se tem 7 RFs, acrescentar 1-2 RFs plausíveis dentro do mesmo domínio. O aumento é um degrau, não o dobro.
2. **Acrescentar uma regra de negócio ou caso de borda a mais** do que os demais colegas têm (ex.: uma validação extra, uma combinação entre dois tipos, um caso de conflito) — mas resolúvel **só com os conceitos já ensinados** até a aula usada como base para esse projeto (a mesma restrição de conteúdo da seção 3 do `plan-projeto.md`); nunca introduzir sintaxe ou conceito que os demais colegas não têm disponível.
3. Pode detalhar um pouco mais o texto do README (mais contexto, mais precisão nas regras), mas sem perder clareza — continua um README direto de se ler, só mais completo.
4. **Manter o mesmo objetivo pedagógico central** do projeto — o mesmo conceito de POO (ou o que a disciplina estiver ensinando) continua sendo o foco; o que muda é o escopo, nunca o assunto.
5. **Manter a mesma estrutura de arquivos e o mesmo contrato de testes** da seção 6.2 — nenhum arquivo de código-fonte é criado para esse aluno também.
6. **Nunca mencionar a marcação em nenhum arquivo** — mesma regra de discrição da seção 6.1, item 8. O README deve parecer um projeto normal, só um pouco mais robusto; não escrever "versão avançada", "desafio extra" ou qualquer referência ao nível do aluno.
7. Na dúvida entre manter no nível padrão ou aumentar mais, escolher o aumento **mais modesto** — o objetivo é desafiar um pouco, não sobrecarregar ou tomar tempo desproporcional do aluno.

## 6.4 Alunos com necessidade de leitura mínima (marcados com `-(very-low)`)

Alguns alunos, além da dificuldade de conteúdo, têm dificuldade real de **ler textos extensos** — mesmo o formato guiado da seção 6.1 (com explicação do conceito, passo a passo e dicas em texto corrido) já é longo demais para eles. Aqui a prioridade se inverte: **cortar o volume de texto ao máximo**, mesmo que isso signifique dar menos explicação em palavras. A orientação que ainda for necessária deve vir de forma visual/estrutural — um exemplo de código **genérico** (esqueleto, com nomes de exemplo, nunca a solução do projeto em si) — em vez de frases descrevendo a mesma coisa.

Ao gerar o projeto de um aluno marcado com `-(very-low)`, o Claude Code deve:

1. **Manter o mínimo de RFs que ainda demonstrem o conceito** — normalmente 2 tipos (o mínimo para mostrar que "cada tipo se comporta diferente"); não reduzir para 1 tipo só, isso descaracteriza o exercício de Factory/polimorfismo.
2. **Cortar toda prosa que não for estritamente necessária** — sem seção de "a ideia por trás disso" em texto corrido, sem parágrafo de contexto/situação profissional, sem ambientação. Ir direto ao que precisa ser feito.
3. **Preferir um exemplo de código genérico a uma explicação em palavras.** Em vez de descrever em texto o passo a passo (como na seção 6.1), mostrar um bloco de código de exemplo com uma classe/estrutura fictícia e diferente do domínio do projeto (para não entregar a solução), ilustrando o padrão esperado (uma classe base, uma classe que herda dela, a `Factory`). Uma estrutura vista de relance costuma exigir menos leitura do que a mesma ideia em frases.
4. **Frases, quando usadas, devem ter uma única ideia cada, curtas, sem oração subordinada** (nada de "quando X, então Y, a não ser que Z"). Preferir listas de uma linha a parágrafos.
5. **Manter o mesmo objetivo pedagógico central** do projeto, só que no menor escopo possível dentro do que ainda faz sentido pedagogicamente.
6. **Manter a mesma estrutura de arquivos e o mesmo contrato de testes** da seção 6.2 — nenhum arquivo de código-fonte real é criado para esse aluno; o bloco de exemplo do item 3 é só ilustração dentro do README, não um arquivo do projeto.
7. **Nunca mencionar a marcação em nenhum arquivo** — mesma regra de discrição da seção 6.1, item 8.
8. Na dúvida entre manter um trecho de texto ou cortar, **cortar** — o risco aqui é o oposto do padrão: excesso de texto atrapalha mais do que falta de detalhe.

---

# 7. README.md

Cada pasta de aluno deve possuir seu próprio `README.md`.

O README deve apresentar:

1. O problema que o aluno precisa resolver.
2. Os requisitos do projeto.
3. As funcionalidades esperadas.
4. As regras importantes.
5. Como executar o projeto.
6. Como executar os testes.

O README de cada aluno deve conter os dados personalizados daquele aluno.

Exemplo:

```text
projetos/projeto4/john-wick/

├── README.md
├── package.json
├── package-lock.json
└── test/
```

O README de `john-wick` deve apresentar a versão de `projeto4` destinada a `john-wick`, incluindo o nome exato do(s) arquivo(s) de código que ele mesmo precisa criar (ver seção 6.2) — esses arquivos não existem ainda na pasta.

---

# 8. Testes

Os testes devem ser derivados dos testes existentes em `modelo/<projetoN>/`.

O Claude Code deve:

* manter os testes necessários;
* adaptar os dados dos testes quando necessário;
* garantir que os testes correspondam ao problema apresentado no README;
* evitar testes que dependam exclusivamente de valores aleatórios;
* garantir que **a solução correta** (escrita pelo aluno, no arquivo que ele criar) passe nos testes — isso é verificado escrevendo uma solução de referência numa cópia temporária, nunca dentro da pasta do aluno (ver seção 6.2: o teste roda e falha normalmente até lá, porque o arquivo de código do aluno ainda não existe).

Os testes devem avaliar o comportamento esperado do projeto, e não simplesmente verificar se determinados textos existem.

---

# 9. package.json

O `package.json` deve ser copiado do modelo (`modelo/<projetoN>/package.json`).

Quando necessário, podem ser alterados:

* nome do projeto;
* descrição;
* scripts.

As dependências utilizadas pelo projeto devem permanecer compatíveis com o modelo.

Não adicionar dependências desnecessárias.

---

# 10. Não alterar o modelo

As pastas:

```text
modelo/<projetoN>/
modelo/alunos.md
```

são somente referência.

O Claude Code NÃO deve:

* alterar arquivos dentro de `modelo/<projetoN>/`;
* remover arquivos do modelo;
* adicionar arquivos ao modelo;
* personalizar o modelo para um aluno específico;
* alterar `modelo/alunos.md` (a não ser que o próprio usuário peça para atualizar a lista de alunos).

Toda personalização deve ser realizada nas pastas de saída, em `projetos/<projetoN>/<aluno>/`.

---

# 11. Alunos já existentes

Antes de criar uma pasta, o Claude Code deve verificar se ela já existe em `projetos/<projetoN>/<aluno>/`.

Se a pasta do aluno já existir:

* não apagar a pasta;
* não substituir automaticamente os arquivos;
* não perder alterações realizadas anteriormente.

Nesse caso, o Claude Code deve informar que a pasta já existe.

---

# 12. Alunos novos

Se um novo aluno for adicionado a `modelo/alunos.md`, o Claude Code deve criar somente a pasta desse novo aluno, no projeto `<projetoN>` solicitado.

Exemplo:

Antes:

```text
modelo/alunos.md

- john-wick
- fco-anderson
- ant-jose
```

Depois:

```text
modelo/alunos.md

- john-wick
- fco-anderson
- ant-jose
- novo-aluno
```

Ao rodar novamente o plano para `projeto4`, o Claude Code deve criar:

```text
projetos/projeto4/novo-aluno/
```

Sem recriar as pastas dos alunos anteriores, e sem afetar outros projetos (`projeto1`, `projeto2`, `projeto3`, ...) que já tenham sido gerados.

---

# 13. Múltiplos projetos

Como o modelo e a lista de alunos são compartilhados, o mesmo `alunos.md` serve de base para vários projetos ao mesmo tempo (`projeto1`, `projeto2`, `projeto3`, `projeto4`, ...), cada um com seu próprio modelo em `modelo/<projetoN>/` e sua própria pasta de saída `projetos/<projetoN>/`.

Gerar (ou adicionar um aluno a) um projeto não deve alterar, mover ou apagar nada dentro de outro `projetos/<projetoN>/` já existente.

---

# 14. Validação

Depois de criar os projetos de um `<projetoN>`, o Claude Code deve verificar:

* se todos os alunos do `modelo/alunos.md` possuem uma pasta em `projetos/<projetoN>/`;
* se cada pasta possui exatamente os quatro arquivos da seção 6.2 (README.md, package.json, package-lock.json, test/) e **nenhum arquivo de código-fonte**;
* se os testes existem e estão de acordo com o README de cada aluno;
* se não houve alteração em `modelo/<projetoN>/` nem em `modelo/alunos.md`;
* se nenhum arquivo gerado para um aluno marcado (`-(low)`, `-(very-low)` ou `-(high)`) menciona a marcação ou o nível.

Como o arquivo de código do aluno não existe (seção 6.2), os testes **não podem** ser validados rodando `npm test` direto na pasta do aluno — isso sempre falharia por módulo não encontrado, o que não indica um problema no teste em si. Para confirmar que os testes de cada aluno estão corretos e batem com o README, o Claude Code deve:

1. Copiar a pasta de cada aluno para um local temporário fora do repositório.
2. Escrever ali uma solução de referência (o arquivo de código que o README daquele aluno pede), implementando exatamente o que os RFs descrevem.
3. Rodar `npm install && npm test` e confirmar que todos os testes passam.
4. Apagar a cópia temporária — a pasta do aluno em `projetos/<projetoN>/<aluno>/` nunca recebe esse arquivo de código.

Ao final, apresentar um resumo (apenas na conversa com o professor — este resumo não é salvo em nenhum arquivo do repositório):

```text
PROJETOS CRIADOS — <projetoN>

✅ john-wick
✅ fco-anderson (adaptado — -(low))
✅ ant-jose
✅ maria-santos (desafio extra — -(high))
✅ pedro-costa (leitura mínima — -(very-low))

Total: 5 alunos (1 adaptado, 1 de leitura mínima, 1 com desafio extra)

Modelo: modelo/<projetoN>
Status: criação concluída
```

---

# 15. Regras importantes

O Claude Code deve seguir estas regras:

1. `modelo/<projetoN>` é sempre a referência daquele projeto.
2. `modelo/alunos.md` é sempre a lista de referência, compartilhada por todos os projetos.
3. Nunca modificar arquivos dentro de `modelo/`.
4. Usar os nomes presentes em `modelo/alunos.md`, sempre sem sufixo (`-(low)`/`-(very-low)`/`-(high)`) no nome da pasta.
5. Criar uma pasta por aluno, dentro de `projetos/<projetoN>/`.
6. Não excluir projetos existentes.
7. Não substituir projetos existentes sem autorização.
8. Manter o mesmo nível de dificuldade entre os alunos, exceto os marcados com `-(low)` (seção 6.1, mais fácil e mais guiado), `-(very-low)` (seção 6.4, escopo mínimo e texto mínimo) ou `-(high)` (seção 6.3, mais desafiador).
9. Criar variações suficientes para evitar que todos os projetos sejam idênticos.
10. Manter os testes compatíveis com cada versão.
11. Garantir que cada projeto possa ser executado individualmente.
12. Não criar pastas para alunos que não estejam em `modelo/alunos.md`.
13. Não remover arquivos existentes das pastas dos alunos sem autorização.
14. Não afetar outros projetos (`projetos/<outroProjetoN>/`) ao gerar ou atualizar um projeto específico.
15. Nunca expor a marcação `-(low)`/`-(very-low)`/`-(high)` (ou o fato de o projeto ser adaptado/mais desafiador) em qualquer arquivo dentro da pasta do aluno.
16. Nunca criar arquivo de código-fonte na pasta de um aluno (seção 6.2) — só README.md, package.json, package-lock.json e test/.

---

# 16. Resultado esperado

Ao finalizar a execução do plano para `projeto4`, a estrutura deverá ser semelhante a:

```text
projetos/
│
├── modelo/
│   ├── plan.md
│   ├── alunos.md
│   ├── projeto1/
│   ├── projeto2/
│   ├── projeto3/
│   └── projeto4/
│
├── projeto1/
│   └── ...
│
├── projeto2/
│   └── ...
│
├── projeto3/
│   └── ...
│
└── projeto4/
    ├── john-wick/
    │   ├── README.md
    │   ├── package.json
    │   ├── package-lock.json
    │   └── test/
    │
    ├── fco-anderson/
    │   ├── README.md
    │   ├── package.json
    │   ├── package-lock.json
    │   └── test/
    │
    └── ant-jose/
        ├── README.md
        ├── package.json
        ├── package-lock.json
        └── test/
```

Nenhuma dessas pastas contém arquivo de código-fonte — cada aluno cria o seu próprio, com o nome indicado no respectivo README (seção 6.2).

Cada aluno terá uma versão própria do projeto `<projetoN>` solicitado.

O GitHub Actions posteriormente utilizará o nome do usuário que realizou o commit para identificar qual pasta, dentro de qual `projetos/<projetoN>/`, deverá ser testada.

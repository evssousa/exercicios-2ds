# PLAN-PROJETO — CRIAÇÃO DE UM NOVO PROJETO MODELO

## 1. Objetivo

Este documento define como criar um **novo projeto modelo** (ex.: `projeto4`) dentro de `projetos/modelo/`, seguindo a mesma base estrutural dos projetos já existentes (`projeto1`, `projeto2`, `projeto3`).

Este arquivo foi escrito para ser **reutilizável**: a mesma cópia de `modelo/` (com este `plan-projeto.md`, o `plan.md` e o `alunos.md`) pode ser usada em outra turma da mesma disciplina, ou copiada para uma disciplina totalmente diferente (ex.: `programacao-web`). Por isso, nenhuma instrução aqui usa um caminho fixo — tudo é calculado a partir de onde a pasta `modelo/` realmente está:

* **`<raiz-da-disciplina>`** = a pasta que é mãe de `projetos/` (ou seja, sobe um nível a partir de `projetos/modelo/`). É dentro dela que ficam as pastas de aula (`aula01/`, `aula02/`, ...).
* **`<caminho-do-projeto>`** = o caminho completo, a partir da raiz do repositório git, até `<raiz-da-disciplina>/projetos/<projetoN>/` (ex.: `3-bimestre/orientacao-a-objetos/projetos/projeto4`). Usado nos `paths` e `working-directory` do workflow.

Ao rodar este plano, o Claude Code deve primeiro localizar esses dois caminhos observando onde este próprio arquivo está, e só então seguir o restante das instruções.

Nada neste documento assume um currículo específico: tanto o conteúdo permitido (seção 3) quanto o tamanho/dificuldade do projeto (seção 4) são sempre **descobertos na hora**, lendo as aulas e os projetos que já existem nesta disciplina — nunca a partir de exemplos fixos de POO. Isso é o que torna o mesmo `modelo/` reutilizável em qualquer disciplina, sem editar nada além dos dois caminhos acima.

Este plano é diferente do [`plan.md`](./plan.md):

* `plan-projeto.md` (este arquivo) cria o **modelo** de um novo projeto — a fonte oficial, ainda sem alunos.
* [`plan.md`](./plan.md) usa um modelo já existente em `modelo/<projetoN>/` para gerar as pastas personalizadas de cada aluno.

O fluxo normal é sempre:

1. Rodar `plan-projeto.md` para criar `modelo/<projetoN>/` (e o workflow de correção).
2. Só depois rodar `plan.md` para gerar `projetos/<projetoN>/<aluno>/` a partir desse modelo.

---

# 2. Como invocar

Ao ser pedido para "rodar o plan-projeto.md", o Claude Code deve identificar:

* **Qual projeto criar** — se não for informado explicitamente, assumir o próximo número disponível (maior `projetoN` já existente em `modelo/` ou em `projetos/`, +1).
* **Até qual aula o conteúdo pode ir** — se o usuário informar um limite explícito (ex.: "até a aula 20"), respeitar esse limite. Se nada for dito, usar **todas as aulas existentes no repositório no momento da criação** (a mais recente pasta `aulaNN` encontrada em `<raiz-da-disciplina>/`).

Antes de começar, o Claude Code deve confirmar com o usuário (ou deixar explícito no resumo final) qual foi o intervalo de aulas considerado, para que fique registrado.

---

# 3. Fonte de conhecimento permitida

O conteúdo do novo projeto deve ser construído **somente** com o que já foi ensinado — e isso é sempre descoberto na hora, lendo as aulas reais, nunca assumido de antemão. O que diferencia um projeto de OO de um projeto de outra disciplina qualquer é exclusivamente o conteúdo das pastas `aulaNN/` — o processo é o mesmo.

O Claude Code deve:

1. Ler o `README.md` de cada pasta `<raiz-da-disciplina>/aulaNN/` (de `aula01` até o limite definido no passo 2), na ordem.
2. A partir dessa leitura, listar os conceitos/temas efetivamente ensinados — sejam quais forem (podem ser conceitos de POO, de programação web, de banco de dados, etc.; o plano não assume nenhum currículo específico).
3. Nunca usar no novo projeto um conceito, ferramenta ou sintaxe que não apareça em nenhuma dessas aulas — mesmo que pareça "básico" ou óbvio para quem já programa. Se o RF que você quer escrever depende de algo não coberto, simplifique o RF em vez de introduzir o conceito por conta própria.
4. Identificar o que foi ensinado **nas aulas mais recentes** dentro do intervalo permitido (as últimas antes do limite) e usar isso como foco central do novo projeto — o conteúdo mais novo é sempre o que está sendo avaliado; o conteúdo das aulas mais antigas normalmente já é pré-requisito coberto por projetos anteriores.
5. Se o novo projeto depender de conceitos de projetos anteriores (ex.: um projeto de herança pressupõe que os alunos já sabem criar classes e métodos), isso é esperado e não precisa ser reensinado no README — só o conceito novo da aula mais recente precisa de explicação detalhada.

Ao apresentar o resumo final (seção 10), listar explicitamente quais aulas foram lidas e quais conceitos delas foram identificados como permitidos — isso serve de registro para conferência, já que o conteúdo não é fixo neste documento.

---

# 4. Calibração de tempo e complexidade

O projeto é feito em sala em algumas aulas (tipicamente **3 aulas de 50 minutos**, 2h30 no total), mas na prática o prazo é estendido para cerca de **1 semana**. Se o usuário informar uma janela diferente para esta disciplina/turma ao pedir para rodar o plano, usar a janela informada. Isso define uma faixa de dificuldade, não um único ponto:

* precisa ser resolvível por um aluno mediano dentro do prazo estendido;
* precisa permitir que os alunos mais rápidos terminem já dentro das aulas em sala;
* não pode exigir tanta coisa nova que um aluno de nível básico não consiga nem começar sem ajuda constante;
* mas também não pode ser tão simples que qualquer aluno termine em poucos minutos — sempre deve sobrar desafio para quem já entendeu o conteúdo.

**A régua de calibração não é um número fixo — ela vem dos projetos que já existem nesta mesma disciplina.** Antes de definir o tamanho do novo projeto, o Claude Code deve:

1. Olhar os projetos já existentes em `modelo/` (ou, na ausência de modelo antigo, em `projetos/`) desta disciplina.
2. Para cada um, contar: quantidade de RFs/requisitos, quantidade de classes/arquivos de código envolvidos, tamanho aproximado do README.
3. Usar essa mesma faixa (não abaixo do menor projeto existente, não muito acima do maior) para o novo projeto.
4. Se este for o **primeiro projeto** de uma disciplina nova (sem nenhum projeto anterior para calibrar), perguntar ao usuário qual faixa de tamanho/tempo usar, em vez de inventar um valor.

Isso mantém a dificuldade consistente entre os projetos da mesma disciplina, sem depender de um número fixo que só faça sentido para o curso onde ele foi definido pela primeira vez.

Na dúvida entre um projeto mais simples ou mais complexo dentro da faixa observada, escolher o mais simples — é mais fácil o professor complementar em sala do que um aluno travar sozinho em casa.

---

# 5. Estrutura obrigatória do README.md

Todo projeto modelo deve ter um `README.md` com estas seções, na mesma ordem usada pelos projetos existentes:

1. **Título** — `# 🚀 PROJETO <N> — <NOME DO PROJETO>`
2. **Problema** — contexto/situação profissional fictícia que motiva o projeto (equipe, empresa, sprint, etc.), terminando no pedido concreto que o aluno deve resolver.
3. **Projeto / Requisitos** — lista de requisitos funcionais numerados (`RF01`, `RF02`, ...), cada um com uma descrição objetiva e, quando fizer sentido, um exemplo de entrada/saída.
4. **Estrutura do projeto** — bloco de código mostrando a árvore mínima de arquivos esperada (classes, `test/`, `package.json`, `package-lock.json`, `README.md`).

Usar `projetos/modelo/projeto3/README.md` como referência de tom e formatação (emojis nos títulos, blocos de código para exemplos, linguagem direta).

---

# 6. Estrutura obrigatória de arquivos

O projeto modelo deve conter **apenas** estes quatro arquivos/pastas — e são os únicos que este plano gera:

```text
modelo/<projetoN>/
├── README.md
├── package.json
├── package-lock.json
└── test/
    └── <nome>.test.js           ← testes reais, cobrindo todos os RFs
```

**Regra central: o Claude Code nunca cria nenhum arquivo de código-fonte do projeto** — nem aqui no modelo, nem depois nas pastas dos alunos (isso é papel do `plan.md`, na mesma regra). Isso vale para qualquer disciplina: um `Factory.js`/`ControleAcesso.js` de POO, um `index.js` de lógica de programação, ou um `index.html`/`style.css`/`script.js` de programação web — o(s) arquivo(s) de código são sempre criados pelo próprio aluno, do zero, nunca entregues como esqueleto pronto.

Outras regras:

* A seção "Estrutura do projeto" do README (seção 5) continua descrevendo, em texto, quais arquivos de código o aluno deve criar e como devem se chamar (ex.: `Factory.js`, `index.js`) — isso é documentação, não um arquivo de fato criado no disco.
* Os testes em `test/` fazem `require(...)` apontando para o arquivo que o aluno ainda vai criar (ex.: `require("../Factory")`, `require("../index")`). Antes de o aluno criar esse arquivo, os testes falham com erro de módulo não encontrado — isso é esperado e correto, é o mesmo "vermelho até resolver" de qualquer projeto ainda não feito.
* O `package.json` deve ter `name` único para o projeto (ex.: `"projeto4"`), `scripts.test = "jest"` e `devDependencies.jest`.
* O `package-lock.json` deve ser gerado de verdade (rodando `npm install` dentro da pasta do modelo), nunca copiado e editado manualmente — isso garante que a versão do jest resolvida seja consistente com o ambiente atual.
* Os testes em `test/` devem cobrir todos os RFs do README, avaliando **comportamento** (valores retornados, tipos criados, erros lançados, elementos renderizados, etc. — conforme a disciplina), nunca apenas a existência de textos.

---

# 7. Validação do modelo antes de finalizar

Como o modelo nunca contém código-fonte, ele precisa ser validado escrevendo a solução **fora** dele. Antes de considerar o projeto modelo pronto, o Claude Code deve:

1. Copiar os quatro arquivos/pastas do modelo (README, package.json, package-lock.json, test/) para uma pasta temporária fora do repositório.
2. Escrever ali, do zero, o(s) arquivo(s) de código que a solução de referência precisa — os mesmos nomes citados na seção "Estrutura do projeto" do README — implementando exatamente o que o README pede.
3. Rodar `npm install && npm test` e confirmar que todos os testes passam.
4. Apagar a cópia temporária inteira. O modelo em `modelo/<projetoN>/` nunca teve, e continua sem ter, nenhum arquivo de código — só os quatro da seção 6.

Isso garante que os testes gerados realmente correspondem ao que o README pede, e que o projeto é solucionável com os conceitos definidos no passo 3, sem que isso exija guardar nenhum código dentro do modelo.

---

# 8. Workflow de correção (GitHub Actions)

Junto com o modelo, deve ser criado o workflow que corrige os alunos daquele projeto, no mesmo padrão usado pelos workflows `teste-projetoN.yml` já existentes no repositório (ex.: `.github/workflows/teste-projeto3.yml`, se existir):

```yaml
name: Correção do Projeto <N>

on:
  push:
    paths:
      - "<caminho-do-projeto>/**"

jobs:
  correcao:
    runs-on: ubuntu-latest

    steps:
      - name: Baixar código
        uses: actions/checkout@v4

      - name: Identificar aluno
        run: |
          ALUNO="${{ github.actor }}"

          echo "Aluno identificado: $ALUNO"
          echo "Pasta que será testada:"
          echo "<caminho-do-projeto>/$ALUNO"

      - name: Verificar pasta do aluno
        run: |
          ALUNO="${{ github.actor }}"
          PASTA="<caminho-do-projeto>/$ALUNO"

          if [ -d "$PASTA" ]; then
            echo "✅ Pasta encontrada!"
            echo "Testando: $PASTA"
          else
            echo "❌ Pasta do aluno não encontrada!"
            echo "Esperado: $PASTA"
            exit 1
          fi

      - name: Configurar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Instalar dependências
        working-directory: <caminho-do-projeto>/${{ github.actor }}
        run: npm install

      - name: Rodar testes
        working-directory: <caminho-do-projeto>/${{ github.actor }}
        run: npm test
```

Substituir `<N>` pelo número do projeto (ex.: `4`), `<projetoN>` (no nome do arquivo) pelo nome da pasta de saída (ex.: `projeto4` — ou outro nome, caso o usuário peça um esquema de nomes diferente, como aconteceu com `projeto3v2`), e `<caminho-do-projeto>` pelo caminho real definido na seção 1 (ex.: `3-bimestre/orientacao-a-objetos/projetos/projeto4`, ou, em outra disciplina, algo como `4-bimestre/programacao-web/projetos/projeto1`).

O arquivo deve ser salvo em `.github/workflows/teste-<projetoN>.yml` (ex.: `.github/workflows/teste-projeto4.yml`).

**Atenção:** este workflow assume que `projetos/<projetoN>/<aluno>/` já existe (ou seja, que o `plan.md` já rodou para esse projeto). Antes desse passo, ele sempre vai falhar com "Pasta do aluno não encontrada" — o que é esperado até a etapa de geração dos alunos ser executada.

---

# 9. O que NÃO fazer neste passo

* Não gerar pastas de alunos — isso é responsabilidade exclusiva do [`plan.md`](./plan.md), rodado depois, separadamente.
* Não sobrescrever um `modelo/<projetoN>/` já existente sem confirmação explícita do usuário.
* Não alterar `modelo/alunos.md` nem os modelos de outros projetos.
* Não criar nenhum arquivo de código-fonte dentro de `modelo/<projetoN>/` — nem esqueleto, nem implementado. Só os quatro arquivos da seção 6 (`README.md`, `package.json`, `package-lock.json`, `test/`).

---

# 10. Resumo final

Ao terminar, apresentar um resumo:

```text
PROJETO MODELO CRIADO

Projeto: projeto4
Tema: <nome do projeto>
Conteúdo considerado: aula01 até aula<N>
Foco principal: <conceito central, ex.: Herança>

Arquivos:
✅ modelo/projeto4/README.md
✅ modelo/projeto4/package.json
✅ modelo/projeto4/package-lock.json
✅ modelo/projeto4/test/<arquivo>.test.js
✅ .github/workflows/teste-projeto4.yml

(nenhum arquivo de código-fonte foi criado — cabe ao aluno criar <Arquivo>.js)

Validação com solução de referência: testes passando (X/X)
Próximo passo: rodar plan.md para gerar as pastas dos alunos em projetos/projeto4/
```

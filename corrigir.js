const axios = require('axios');
const fs = require('fs');
const alunos = require('./alunos.json');

<<<<<<< HEAD
=======
// 🔐 Token pessoal do GitHub
const token = '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';

>>>>>>> b6525152629acb3c979eb1610c7c273ed5613331
// 🧪 Lista de exercícios (nomes dos jobs no GitHub Actions)
const exercicios = ['ex01-ola-mundo', 'ex02-variaveis'];

async function verificar(repo, exercicio) {
  try {
    const res = await axios.get(`https://api.github.com/repos/${repo}/actions/runs?per_page=50`, {
      headers: { 'User-Agent': 'Node.js' }
    });

    const execucoes = res.data.workflow_runs.filter(run =>
      run.name.toLowerCase().includes(exercicio.toLowerCase())
    );

    if (execucoes.length === 0) {
      console.log(`⚠️ Nenhuma execução encontrada para ${repo} - ${exercicio}`);
      return '⚠️';
    }

    const ultima = execucoes[0];
    console.log(`🔍 ${repo} - ${exercicio} → ${ultima.conclusion}`);
    return ultima.conclusion === 'success' ? '✅' : '❌';
  } catch (err) {
    console.error(`❌ Erro ao verificar ${repo} - ${exercicio}:`, err.message);
    return '⚠️';
  }
}

(async () => {
  const linhas = ['#alunos,' + exercicios.join(',')];

  for (const aluno of alunos) {
    const status = await Promise.all(
      exercicios.map(ex => verificar(aluno.repo, ex))
    );
    linhas.push(`${aluno.nome},${status.join(',')}`);
  }

  fs.writeFileSync('planilha.csv', linhas.join('\n'));
  console.log('\n✅ Planilha gerada: planilha.csv');
})();

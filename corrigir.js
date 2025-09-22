const axios = require('axios');
const fs = require('fs');
const alunos = require('./alunos.json');

// 🔐 Token pessoal do GitHub (mantido privado e seguro)
const token = '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';

// 🧪 Lista de exercícios (nomes dos jobs no GitHub Actions)
const exercicios = ['ex01-ola-mundo', 'ex02-variaveis']; // adicione mais conforme necessário

async function verificar(repo, exercicio) {
  try {
    const res = await axios.get(`https://api.github.com/repos/${repo}/actions/runs`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    const execucoes = res.data.workflow_runs.filter(run =>
      run.name.toLowerCase() === exercicio.toLowerCase() &&
      run.head_branch === 'main'
    );

    const ultima = execucoes[0];
    if (!ultima) return '⚠️';
    return ultima.conclusion === 'success' ? '✅' : '❌';
  } catch (err) {
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
  console.log('✅ Planilha gerada: planilha.csv');
})();

const axios = require('axios');
const fs = require('fs');
const alunos = require('./alunos.json');

const token = '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'; // gere em https://github.com/settings/tokens
const exercicios = [
  'ex01-ola-mundo',
  'ex02-variaveis'
]; // adicione mais conforme necessário

async function verificar(repo, pasta) {
  try {
    const res = await axios.get(`https://api.github.com/repos/${repo}/actions/runs`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const execucoes = res.data.workflow_runs.filter(run =>
      run.name.toLowerCase().includes(pasta.toLowerCase())
    );
    const ultima = execucoes[0];
    return ultima?.conclusion === 'success' ? '✅' : '❌';
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
  fs.writeFileSync('planilha-1ds.csv', linhas.join('\n'));
  console.log('✅ Planilha gerada: planilha-1ds.csv');
})();

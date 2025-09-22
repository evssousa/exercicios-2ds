const https = require('https');

const token = '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';
const options = {
  hostname: 'api.github.com',
  path: '/repos/epdrm/exercicios-1ds/actions/runs',
  method: 'GET',
  headers: {
    'User-Agent': 'Node.js',
    'Authorization': `Bearer ${token}`
  }
};

const req = https.request(options, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Resposta:', data);
  });
});

req.on('error', error => console.error('Erro:', error));
req.end();

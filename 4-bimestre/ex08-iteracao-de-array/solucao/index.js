// CRIE UMA LÓGICA AQUI
let notas = [8, 5, 7, 10, 6]
let soma = 0
let aprovadas = []

for (let i = 0; i < notas.length; i++) {
  soma = soma + notas[i]
}

let media = soma / notas.length

for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= 7) {
    aprovadas.push(notas[i])
  }
}

console.log("Notas:", notas)
console.log("Soma:", soma)
console.log("Média:", media)
console.log("Aprovadas:", aprovadas)

// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { notas, soma, media, aprovadas }
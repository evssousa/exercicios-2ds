// CRIE UMA LÓGICA AQUI
let nomes = ["Carlos", "Amanda", "Beatriz", "Eduardo", "Ana"]
let numeros = [15, 2, 9, 30, 4]

// Ordenação
nomes.sort()
numeros.sort((a, b) => a - b)

console.log("Nomes em ordem alfabética:", nomes)
console.log("Números em ordem crescente:", numeros)

// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { nomes, numeros }
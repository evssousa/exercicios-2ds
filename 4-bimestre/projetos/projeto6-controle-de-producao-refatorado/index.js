// CRIE UMA LÓGICA ABAIXO
const prompt = require('prompt-sync')()

console.log("=== Sistema de Controle de Produção ===")

let dias = parseInt(prompt("Quantos dias deseja registrar? "))
let producao = []

for (let i = 0; i < dias; i++) {
    let valor = parseInt(prompt("Digite a quantidade produzida no dia " + (i + 1) + ": "))
    producao.push(valor)
}

let total = 0
for (let i = 0; i < dias; i++) {
    total = total + producao[i]
}

let media = total / dias

let maior = producao[0]
let menor = producao[0]
let diaMaior = 1
let diaMenor = 1

for (let i = 1; i < dias; i++) {
    if (producao[i] > maior) {
        maior = producao[i]
        diaMaior = i + 1
    }
    if (producao[i] < menor) {
        menor = producao[i]
        diaMenor = i + 1
    }
}

let crescente = []
for (let i = 0; i < dias; i++) {
    crescente.push(producao[i])
}

for (let i = 0; i < dias - 1; i++) {
    for (let j = i + 1; j < dias; j++) {
        if (crescente[i] > crescente[j]) {
            let temp = crescente[i]
            crescente[i] = crescente[j]
            crescente[j] = temp
        }
    }
}

let decrescente = []
for (let i = 0; i < dias; i++) {
    decrescente.push(producao[i])
}

for (let i = 0; i < dias - 1; i++) {
    for (let j = i + 1; j < dias; j++) {
        if (decrescente[i] < decrescente[j]) {
            let temp = decrescente[i]
            decrescente[i] = decrescente[j]
            decrescente[j] = temp
        }
    }
}

console.log("\n--- RELATÓRIO DE PRODUÇÃO ---")
console.log("Produções registradas:", producao)
console.log("Total produzido:", total + " peças")
console.log("Média diária:", media)
console.log("Maior produção:", maior + " (dia " + diaMaior + ")")
console.log("Menor produção:", menor + " (dia " + diaMenor + ")")
console.log("Ordem crescente:", crescente)
console.log("Ordem decrescente:", decrescente)

if (media >= (maior / 2)) {
    console.log("Produção estável!")
} else {
    console.log("Produção abaixo do ideal.")
}
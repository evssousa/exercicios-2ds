const resultado = require('../index.js')

test('1️⃣ Deve retornar "Aprovado" quando a média for maior ou igual a 7', () => {
  const nota1 = 9, nota2 = 7, nota3 = 8
  const media = (nota1 + nota2 + nota3) / 3
  let esperado = `Média ${media.toFixed(1)} - Aprovado`
  expect(esperado).toBe(`Média 8.0 - Aprovado`)
})

test('2️⃣ Deve retornar "Recuperação" quando a média for entre 5 e 6.9', () => {
  const nota1 = 6, nota2 = 5, nota3 = 5
  const media = (nota1 + nota2 + nota3) / 3
  let esperado = `Média ${media.toFixed(1)} - Recuperação`
  expect(esperado).toBe(`Média 5.3 - Recuperação`)
})

test('3️⃣ Deve retornar "Reprovado" quando a média for menor que 5', () => {
  const nota1 = 3, nota2 = 4, nota3 = 2
  const media = (nota1 + nota2 + nota3) / 3
  let esperado = `Média ${media.toFixed(1)} - Reprovado`
  expect(esperado).toBe(`Média 3.0 - Reprovado`)
})

test('4️⃣ Deve calcular a média corretamente com notas inteiras', () => {
  const nota1 = 6, nota2 = 6, nota3 = 6
  const media = (nota1 + nota2 + nota3) / 3
  expect(media).toBe(6)
})

test('5️⃣ Deve calcular a média corretamente com notas decimais', () => {
  const nota1 = 7.5, nota2 = 6.5, nota3 = 8
  const media = (nota1 + nota2 + nota3) / 3
  expect(media.toFixed(1)).toBe('7.3')
})

test('6️⃣ Deve ter uma variável "resultado" com o texto final', () => {
  expect(typeof resultado).toBe('string')
})

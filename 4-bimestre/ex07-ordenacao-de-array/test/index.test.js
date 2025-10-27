const { nomes, numeros } = require('../index')

test('Nomes devem estar em ordem alfabética', () => {
  expect(nomes).toEqual(["Amanda", "Ana", "Beatriz", "Carlos", "Eduardo"])
})

test('Números devem estar em ordem crescente', () => {
  expect(numeros).toEqual([2, 4, 9, 15, 30])
})
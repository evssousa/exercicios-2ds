const { notas, soma, media, aprovadas } = require('../index')

test('Notas corretas', () => {
  expect(notas).toEqual([8, 5, 7, 10, 6])
})

test('Soma correta', () => {
  expect(soma).toBe(36)
})

test('Média correta', () => {
  expect(media).toBeCloseTo(7.2)
})

test('Filtrar notas aprovadas', () => {
  expect(aprovadas).toEqual([8, 7, 10])
})
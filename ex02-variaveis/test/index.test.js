const olaMundo = require("../index")

test('Deve retornar Olá mundo', () => {
  expect(olaMundo()).toBe('Olá mundo');
});

const code = require("../index.js");

describe("Aula 25 - Como Usar uma Função", () => {
  test("Deve existir uma função multiplicar", () => {
    expect(typeof code.multiplicar).toBe("function");
  });

  test("A função multiplicar deve retornar o resultado correto", () => {
    expect(code.multiplicar(3, 4)).toBe(12);
  });

  test("Deve existir uma função mostrarResultado", () => {
    expect(typeof code.mostrarResultado).toBe("function");
  });
});
const code = require("../index.js");

describe("Aula 11 - Introdução a Arrays", () => {
  test("Deve conter um array chamado materias", () => {
    expect(Array.isArray(code.materias)).toBe(true);
  });

  test("O array deve conter pelo menos 4 matérias", () => {
    expect(code.materias.length).toBeGreaterThanOrEqual(4);
  });

  test("Deve exibir a primeira e última matéria corretamente", () => {
    expect(code.materias[0]).toBeDefined();
    expect(code.materias[code.materias.length - 1]).toBeDefined();
  });
});
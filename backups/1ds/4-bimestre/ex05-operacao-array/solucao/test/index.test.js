const code = require("../index.js");

describe("Aula 12 - Operações Básicas com Arrays", () => {
  test("Deve existir o array compras", () => {
    expect(Array.isArray(code.compras)).toBe(true);
  });

  test("O array deve ter pelo menos 3 elementos após as operações", () => {
    expect(code.compras.length).toBeGreaterThanOrEqual(3);
  });

  test("O primeiro item deve ser 'Farinha'", () => {
    expect(code.compras[0]).toBe("Farinha");
  });
});
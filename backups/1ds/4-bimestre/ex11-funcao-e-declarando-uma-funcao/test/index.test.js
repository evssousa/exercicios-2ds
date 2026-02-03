const code = require("../index.js");

describe("Aula 24 - Introdução a Funções", () => {
  test("Deve existir uma função chamada boasVindas", () => {
    expect(typeof code.boasVindas).toBe("function");
  });

  test("Deve existir uma função chamada soma", () => {
    expect(typeof code.soma).toBe("function");
  });

  test("A função soma deve retornar o valor correto", () => {
    const logSpy = jest.spyOn(console, "log");
    code.soma(5, 3);
    expect(logSpy).toHaveBeenCalledWith("Resultado da soma:", 8);
    logSpy.mockRestore();
  });
});


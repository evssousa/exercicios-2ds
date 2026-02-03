const code = require("../index.js");

describe("Projeto 7 - Catálogo de Filmes", () => {
  test("Deve conter dez objetos de filmes", () => {
    expect(code.filme1).toBeDefined();
    expect(code.filme2).toBeDefined();
    expect(code.filme3).toBeDefined();
    expect(code.filme4).toBeDefined();
    expect(code.filme5).toBeDefined();
    expect(code.filme6).toBeDefined();
    expect(code.filme7).toBeDefined();
    expect(code.filme8).toBeDefined();
    expect(code.filme9).toBeDefined();
    expect(code.filme10).toBeDefined();
  });

  test("Cada filme deve ter título, gênero, ano e avaliação", () => {
    for (let filme of [code.filme1, code.filme2, code.filme3, code.filme4, code.filme5, code.filme6, code.filme7, code.filme8, code.filme9, code.filme10]) {
      expect(filme.titulo).toBeDefined();
      expect(filme.genero).toBeDefined();
      expect(filme.ano).toBeDefined();
      expect(filme.avaliacao).toBeDefined();
    }
  });

  test("As avaliações devem ser números entre 0 e 10", () => {
    for (let filme of [code.filme1, code.filme2, code.filme3, code.filme4, code.filme5, code.filme6, code.filme7, code.filme8, code.filme9, code.filme10]) {
      expect(filme.avaliacao).toBeGreaterThanOrEqual(0);
      expect(filme.avaliacao).toBeLessThanOrEqual(10);
    }
  });
});
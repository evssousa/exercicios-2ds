const { carro } = require("../index.js");

describe("Aula 20 - Acessando e Alterando Objetos", () => {
  test("Deve existir um objeto chamado carro", () => {
    expect(typeof carro).toBe("object");
  });

  test("O carro deve conter as chaves marca, modelo, ano, cor e preco", () => {
    expect(carro).toHaveProperty("marca");
    expect(carro).toHaveProperty("modelo");
    expect(carro).toHaveProperty("ano");
    expect(carro).toHaveProperty("cor");
    expect(carro).toHaveProperty("preco");
  });

  test("A cor deve ser Preto", () => {
    expect(carro.cor).toBe("Preto");
  });

  test("O preço deve ser 120000", () => {
    expect(carro.preco).toBe(120000);
  });
});
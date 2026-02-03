const { produto } = require("../index.js");

describe("Aula 19 - O que são Objetos", () => {
  test("Deve existir um objeto chamado produto", () => {
    expect(typeof produto).toBe("object");
  });

  test("O produto deve conter as chaves nome, preco, estoque e categoria", () => {
    expect(produto).toHaveProperty("nome");
    expect(produto).toHaveProperty("preco");
    expect(produto).toHaveProperty("estoque");
    expect(produto).toHaveProperty("categoria");
  });

  test("O nome do produto deve ser 'Teclado'", () => {
    expect(produto.nome).toBe("Teclado");
  });
});
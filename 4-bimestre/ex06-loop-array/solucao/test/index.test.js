const code = require("../index.js");

describe("Aula 13 - Dando Loop em Arrays", () => {
  test("Deve conter um array chamado filmes", () => {
    expect(Array.isArray(code.filmes)).toBe(true);
  });

  test("O array deve conter pelo menos 4 filmes", () => {
    expect(code.filmes.length).toBeGreaterThanOrEqual(4);
  });

  test("O código deve conter um loop for", () => {
    const file = require("fs").readFileSync("index.js", "utf8");
    expect(file.includes("for")).toBe(true);
  });
});
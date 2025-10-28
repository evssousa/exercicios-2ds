const fs = require("fs");

describe("Projeto 6 - Controle de Produção (com Arrays, sem funções)", () => {
  const code = fs.readFileSync("index.js", "utf8");

  test("1 - Deve conter um array chamado 'producao'", () => {
    expect(code.includes("producao")).toBe(true);
    expect(code.includes("[")).toBe(true);
  });

  test("2 - Deve calcular total e média de produção", () => {
    expect(code.includes("total")).toBe(true);
    expect(code.includes("media")).toBe(true);
  });

  test("3 - Deve identificar maior e menor produção", () => {
    expect(code.includes("maior")).toBe(true);
    expect(code.includes("menor")).toBe(true);
  });

  test("4 - Deve realizar ordenação crescente e decrescente manualmente", () => {
    const hasNestedLoops = code.includes("for") && code.match(/for/g).length >= 3;
    expect(hasNestedLoops).toBe(true);
  });

  test("5 - Deve exibir a mensagem de status final", () => {
    const hasMessage =
      code.includes("Produção estável") || code.includes("Produção abaixo");
    expect(hasMessage).toBe(true);
  });
});
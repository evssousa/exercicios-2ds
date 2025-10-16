const fs = require("fs");

describe("Projeto 5 - Sistema de Controle de Produção", () => {
  const code = fs.readFileSync("index.js", "utf8");

  test("1 - Deve exibir mensagens indicando que as peças estão sendo produzidas com sucesso", () => {
    expect(code.includes("Peça")).toBe(true);
    expect(code.includes("produzida com sucesso")).toBe(true);
  });

  test("2 - Deve exibir a mensagem 'Meta alcançada!' ao final da produção", () => {
    expect(code.includes("Meta alcançada!")).toBe(true);
  });

  test("3 - Deve permitir simular outro turno (mensagem 'Deseja simular outro turno?')", () => {
    expect(code.includes("Deseja simular outro turno?")).toBe(true);
  });

  test("4 - Deve exibir o resumo de dias anteriores e somar corretamente as peças", () => {
    expect(code.includes("Resumo dos dias anteriores")).toBe(true);
    expect(code.includes("Dia")).toBe(true);
    expect(code.includes("Total geral")).toBe(true);
  });

  test("5 - Deve encerrar o sistema com a mensagem final 'Encerrando sistema de produção...'", () => {
    expect(code.includes("Encerrando sistema de produção")).toBe(true);
  });
});

const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");

test("Existe parágrafo com id mensagem", () => {
  expect(html).toContain('id="mensagem"');
});

test("Existe botão alterar", () => {
  expect(html).toContain('id="alterar"');
});

test("Script conectado corretamente", () => {
  expect(html).toContain("./src/js/script.js");
});
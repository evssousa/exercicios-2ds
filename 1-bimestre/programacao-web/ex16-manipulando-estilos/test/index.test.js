const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");

test("Parágrafo texto existe", () => {
  expect(html).toContain('id="texto"');
});

test("Botão mudarEstilo existe", () => {
  expect(html).toContain('id="mudarEstilo"');
});

test("Script conectado", () => {
  expect(html).toContain("./src/js/script.js");
});
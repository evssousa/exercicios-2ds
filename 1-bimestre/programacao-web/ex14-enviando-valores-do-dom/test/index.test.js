const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");

test("Input nome presente", () => {
  expect(html).toContain('id="nome"');
});

test("Botão mostrar presente", () => {
  expect(html).toContain('id="mostrar"');
});

test("Resultado presente", () => {
  expect(html).toContain('id="resultado"');
});

test("Script conectado", () => {
  expect(html).toContain("./src/js/script.js");
});
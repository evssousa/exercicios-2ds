const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");

test("Formulário existe", () => {
  expect(html).toContain('id="formulario"');
});

test("Input nome presente", () => {
  expect(html).toContain('id="nome"');
});

test("Input idade presente", () => {
  expect(html).toContain('id="idade"');
});

test("Resultado presente", () => {
  expect(html).toContain('id="resultado"');
});

test("Script conectado", () => {
  expect(html).toContain("./src/js/script.js");
});
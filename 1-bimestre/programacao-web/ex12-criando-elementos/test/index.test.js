const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");

test("Lista presente", () => {
  expect(html).toContain('id="lista"');
});

test("Botão adicionar presente", () => {
  expect(html).toContain('id="adicionar"');
});

test("Script conectado", () => {
  expect(html).toContain("./src/js/script.js");
});
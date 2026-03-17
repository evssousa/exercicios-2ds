const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");

test("HTML possui titulo", () => {
  expect(html).toContain('id="titulo"');
});

test("HTML possui botão", () => {
  expect(html).toContain('id="botao"');
});

test("HTML conecta script.js", () => {
  expect(html).toContain("./src/js/script.js");
});
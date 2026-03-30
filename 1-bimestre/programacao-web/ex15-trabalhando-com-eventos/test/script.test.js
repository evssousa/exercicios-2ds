const fs = require("fs");
const js = fs.readFileSync("src/js/script.js", "utf8");

test("Evento submit utilizado", () => {
  expect(js).toContain("submit");
});

test("preventDefault utilizado", () => {
  expect(js).toContain("preventDefault");
});

test("Propriedade value utilizada", () => {
  expect(js).toContain(".value");
});

test("Mensagem Olá presente", () => {
  expect(js).toContain("Olá");
});
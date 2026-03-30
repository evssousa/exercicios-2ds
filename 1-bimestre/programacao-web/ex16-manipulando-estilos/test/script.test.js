const fs = require("fs");
const js = fs.readFileSync("src/js/script.js", "utf8");

test("Evento click utilizado", () => {
  expect(js).toContain("click");
});

test("Manipulação de style presente", () => {
  expect(js).toContain("style");
});

test("classList utilizada", () => {
  expect(js).toContain("classList");
});

test("Classe destaque utilizada", () => {
  expect(js).toContain("destaque");
});
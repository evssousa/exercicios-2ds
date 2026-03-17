const fs = require("fs");
const js = fs.readFileSync("src/js/script.js", "utf8");

test("Utiliza propriedade value", () => {
  expect(js).toContain(".value");
});

test("Evento click presente", () => {
  expect(js).toContain("click");
});

test("Utiliza textContent", () => {
  expect(js).toContain("textContent");
});

test("Mensagem Olá presente", () => {
  expect(js).toContain("Olá");
});
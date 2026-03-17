const fs = require("fs");
const js = fs.readFileSync("src/js/script.js", "utf8");

test("Utiliza getElementById", () => {
  expect(js).toContain("getElementById");
});

test("Utiliza addEventListener", () => {
  expect(js).toContain("addEventListener");
});

test("Evento click presente", () => {
  expect(js).toContain("click");
});

test("Texto alterado presente", () => {
  expect(js).toContain("Texto Alterado com JavaScript");
});
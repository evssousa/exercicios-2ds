const fs = require("fs");

const js = fs.readFileSync("src/js/script.js", "utf8");

test("Utiliza createElement", () => {
  expect(js).toContain("createElement");
});

test("Utiliza addEventListener", () => {
  expect(js).toContain("addEventListener");
});

test("Utiliza classList", () => {
  expect(js).toContain("classList");
});

test("Utiliza value para capturar input", () => {
  expect(js).toContain(".value");
});
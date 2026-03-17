const fs = require("fs");
const js = fs.readFileSync("src/js/script.js", "utf8");

test("Utiliza createElement", () => {
  expect(js).toContain("createElement");
});

test("Utiliza appendChild", () => {
  expect(js).toContain("appendChild");
});

test("Utiliza textContent", () => {
  expect(js).toContain("textContent");
});

test("Evento click presente", () => {
  expect(js).toContain("click");
});
const fs = require("fs");
const js = fs.readFileSync("src/js/script.js", "utf8");

test("Utiliza getElementById", () => {
  expect(js).toContain("getElementById");
});

test("Evento click presente", () => {
  expect(js).toContain("click");
});

test("Utiliza textContent ou innerHTML", () => {
  const usaTextContent = js.includes("textContent");
  const usaInnerHTML = js.includes("innerHTML");
  expect(usaTextContent || usaInnerHTML).toBe(true);
});

test("Mensagem alterada presente", () => {
  expect(js).toContain("Mensagem alterada com JavaScript");
});
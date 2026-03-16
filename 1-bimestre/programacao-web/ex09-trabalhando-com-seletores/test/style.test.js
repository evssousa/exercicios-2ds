const fs = require("fs")
const css = fs.readFileSync("src/css/style.css", "utf8")

test("Seletor ID presente", () => {
  expect(css).toContain("#titulo")
})

test("Seletor classe presente", () => {
  expect(css).toContain(".destaque")
})

test("Font-size utilizado", () => {
  expect(css).toContain("font-size")
})

test("Font-family utilizado", () => {
  expect(css).toContain("font-family")
})

test("Text-align utilizado", () => {
  expect(css).toContain("text-align")
})
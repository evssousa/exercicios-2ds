const fs = require("fs")
const css = fs.readFileSync("src/css/style.css", "utf8")

test("Div com display block", () => {
  expect(css).toContain("div")
  expect(css).toContain("display: block")
})

test("Span com display inline-block", () => {
  expect(css).toContain("span")
  expect(css).toContain("inline-block")
})

test("Parágrafo oculto", () => {
  expect(css).toContain("display: none")
})
const fs = require("fs")
const css = fs.readFileSync("src/css/style.css", "utf8")

test("Estilo do body presente", () => {
  expect(css).toContain("body")
  expect(css).toContain("background-color")
})

test("Seletor titulo presente", () => {
  expect(css).toContain(".titulo")
})

test("Classe perfil estilizada", () => {
  expect(css).toContain(".perfil")
})

test("Classe profissao estilizada", () => {
  expect(css).toContain(".profissao")
})

test("Classe botao estilizada", () => {
  expect(css).toContain(".botao")
})

test("Display inline-block utilizado", () => {
  expect(css).toContain("inline-block")
})
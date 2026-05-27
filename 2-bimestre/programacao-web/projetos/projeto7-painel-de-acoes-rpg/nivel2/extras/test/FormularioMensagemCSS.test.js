// Biblioteca para leitura
import fs from "fs"

// Ferramentas do Vitest
import {
  describe,
  test,
  expect
} from "vitest"

// Lendo CSS
const css = fs.readFileSync(
  "src/components/FormularioMensagem/style.css",
  "utf8"
)

describe("FormularioMensagem CSS", () => {

  // Testa border
  test("possui border", () => {
    expect(css).toContain("border")
  })

  // Testa padding
  test("possui padding", () => {
    expect(css).toContain("padding")
  })

  // Testa border-radius
  test("possui border-radius", () => {
    expect(css).toContain("border-radius")
  })

  // Testa background
  test("possui background-color", () => {
    expect(css).toContain("background-color")
  })

})
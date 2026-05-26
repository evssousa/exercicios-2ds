// Biblioteca para leitura
import fs from "fs"

// Ferramentas Vitest
import {
  describe,
  test,
 expect
} from "vitest"

// Lendo CSS
const css = fs.readFileSync(
  "src/components/Botao/style.css",
  "utf8"
)

describe("Botao CSS", () => {

  // Testa background
  test("possui background-color", () => {
    expect(css).toContain("background-color")
  })

  // Testa border
  test("possui border", () => {
    expect(css).toContain("border")
  })

  // Testa padding
  test("possui padding", () => {
    expect(css).toContain("padding")
  })

  // Testa cursor
  test("possui cursor", () => {
    expect(css).toContain("cursor")
  })

})
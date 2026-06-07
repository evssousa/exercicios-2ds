// Biblioteca de leitura
import fs from "fs"

// Ferramentas Vitest
import { describe, test, expect } from "vitest"

// Lendo CSS
const css = fs.readFileSync(
  "src/components/Painel/styles/Painel.css",
  "utf8"
)

describe("Painel.css", () => {

  // Testa border
  test("possui border", () => {
    expect(css).toContain("border")
  })

  // Testa padding
  test("possui padding", () => {
    expect(css).toContain("padding")
  })

  // Testa margin
  test("possui margin", () => {
    expect(css).toContain("margin")
  })

  // Testa background-color
  test("possui background-color", () => {
    expect(css).toContain("background-color")
  })

})
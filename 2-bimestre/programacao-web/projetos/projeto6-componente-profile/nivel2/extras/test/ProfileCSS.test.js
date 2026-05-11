// Biblioteca para leitura de arquivos
import fs from "fs"

// Ferramentas do Vitest
import { describe, test, expect } from "vitest"

// Lendo arquivo CSS
const css = fs.readFileSync(
  "src/styles/ProfileCSS.css",
  "utf8"
)

describe("Profile.css", () => {

  // Testa classe principal
  test("possui classe profile-card", () => {
    expect(css).toContain(".profile-card")
  })

  // Testa border
  test("possui border", () => {
    expect(css).toContain("border")
  })

  // Testa padding
  test("possui padding", () => {
    expect(css).toContain("padding")
  })

  // Testa background-color
  test("possui background-color", () => {
    expect(css).toContain("background-color")
  })

  // Testa border-radius
  test("possui border-radius", () => {
    expect(css).toContain("border-radius")
  })

})
// Importando biblioteca para ler arquivos
import fs from "fs"

// Importando funções do Vitest
import { describe, test, expect } from "vitest"

// Lendo o conteúdo do arquivo CSS
const css = fs.readFileSync("../styles/footer.css", "utf8")

describe("Footer.css", () => {

  // Testa se existe o seletor footer
  test("possui seletor footer", () => {
    expect(css).toContain("footer")
  })

  // Testa se existe cor de fundo
  test("possui background-color", () => {
    expect(css).toContain("background-color")
  })

  // Testa se existe cor do texto
  test("possui color", () => {
    expect(css).toContain("color")
  })

  // Testa se existe espaçamento interno
  test("possui padding", () => {
    expect(css).toContain("padding")
  })

  // Testa se existe alinhamento de texto
  test("possui text-align", () => {
    expect(css).toContain("text-align")
  })

  // Testa se existe borda
  test("possui border", () => {
    expect(css).toContain("border")
  })

})
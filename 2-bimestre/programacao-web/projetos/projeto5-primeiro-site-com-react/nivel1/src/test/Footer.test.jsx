// Importando ferramentas de teste
import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

// Importando o componente Footer
import Footer from "../components/Footer"

describe("Footer", () => {

  // Testa se o rodapé aparece na tela
  test("renderiza texto do rodapé", () => {
    render(<Footer />)

    const texto = screen.getByText("2026 Meu Site React")
    expect(texto).toBeTruthy()
  })

})
// Importando ferramentas de teste
import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

// Importando o componente Footer
import Footer from "../components/Footer"

describe("Footer", () => {

  // Testa se o texto do rodapé aparece na tela
  test("renderiza texto do footer", () => {
    render(<Footer />)

    expect(
      screen.getByText(/direitos reservados/i)
    ).toBeTruthy()
  })

})
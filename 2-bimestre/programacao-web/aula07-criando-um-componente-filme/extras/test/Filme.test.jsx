// Ferramentas de teste
import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

// Importando componente
import Filme from "../components/Filme"

describe("Filme", () => {

  // Testa título
  test("renderiza título do filme", () => {
    render(<Filme />)

    expect(
      screen.getByText(/matrix/i)
    ).toBeTruthy()
  })

  // Testa ano
  test("renderiza ano do filme", () => {
    render(<Filme />)

    expect(
      screen.getByText(/1999/i)
    ).toBeTruthy()
  })

})
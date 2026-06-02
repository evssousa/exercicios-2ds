// Ferramentas de teste
import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

// Importando App
import App from "../App"

describe("App", () => {

  // Testa renderização dos alunos
  test("renderiza alunos", () => {
    render(<App />)

    expect(
      screen.getByText(/joão/i)
    ).toBeTruthy()
  })

})
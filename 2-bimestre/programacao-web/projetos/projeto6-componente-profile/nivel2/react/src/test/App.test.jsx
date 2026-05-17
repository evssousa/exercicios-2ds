// Ferramentas de teste
import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

// Importando App
import App from "../App"

describe("App", () => {

  // Testa título da página
  test("renderiza título principal", () => {
    render(<App />)

    expect(
      screen.getByText(/usuários do sistema/i)
    ).toBeTruthy()
  })

  // Testa renderização dos usuários
  test("renderiza usuários", () => {
    render(<App />)

    expect(
      screen.getByText(/mariana/i)
    ).toBeTruthy()
  })

})
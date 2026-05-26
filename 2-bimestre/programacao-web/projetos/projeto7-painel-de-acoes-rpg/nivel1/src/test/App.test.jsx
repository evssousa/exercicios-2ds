// Ferramentas de teste
import {
  render,
  screen
} from "@testing-library/react"

import {
  describe,
  test,
  expect
} from "vitest"

// Importando App
import App from "../App"

describe("App", () => {

  // Testa formulário
  test("renderiza formulário", () => {

    render(<App />)

    expect(
      screen.getByText(/formulário de mensagem/i)
    ).toBeTruthy()
  })

})
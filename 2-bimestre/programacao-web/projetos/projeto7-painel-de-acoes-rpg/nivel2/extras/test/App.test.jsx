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

  // Testa título
  test("renderiza título Legends Arena", () => {

    render(<App />)

    expect(
      screen.getByText(/legends arena/i)
    ).toBeTruthy()
  })

  // Testa botão
  test("renderiza botão atacar", () => {

    render(<App />)

    expect(
      screen.getByText(/atacar/i)
    ).toBeTruthy()
  })

  // Testa formulário
  test("renderiza formulário", () => {

    render(<App />)

    expect(
      screen.getByText(/formulário de mensagem/i)
    ).toBeTruthy()
  })

})
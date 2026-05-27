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

// Importando componente
import Card from "../components/Card"

describe("Card", () => {

  // Testa children
  test("renderiza children", () => {

    render(
      <Card>
        <h1>Card Teste</h1>
      </Card>
    )

    expect(
      screen.getByText(/card teste/i)
    ).toBeTruthy()
  })

})
// Ferramentas de teste
import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

// Importando componente
import Painel from "/src/components/Painel"

describe("Painel", () => {

  // Testa children
  test("renderiza children", () => {

    render(
      <Painel>
        <h1>Título Teste</h1>
      </Painel>
    )

    expect(
      screen.getByText(/título teste/i)
    ).toBeTruthy()
  })

})
// Ferramentas de teste
import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

// Importando componente
import Input from "/src/components/Input"

describe("Input", () => {

  // Testa label
  test("renderiza label", () => {

    render(
      <Input
        label="Nome"
        type="text"
      />
    )

    expect(
      screen.getByText(/nome/i)
    ).toBeTruthy()
  })

  // Testa input
  test("renderiza input", () => {

    render(
      <Input
        label="Nome"
        type="text"
      />
    )

    const input = screen.getByRole("textbox")

    expect(input).toBeTruthy()
  })

})
// Ferramentas de teste
import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

// Importando componente
import Aluno from "../components/Aluno"

describe("Aluno", () => {

  // Testa nome
  test("renderiza nome", () => {
    render(<Aluno nome="João" curso="React" />)

    expect(
      screen.getByText(/joão/i)
    ).toBeTruthy()
  })

  // Testa curso
  test("renderiza curso", () => {
    render(<Aluno nome="João" curso="React" />)

    expect(
      screen.getByText(/react/i)
    ).toBeTruthy()
  })

})
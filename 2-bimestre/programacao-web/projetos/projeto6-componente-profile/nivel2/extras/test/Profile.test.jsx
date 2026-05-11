// Ferramentas de teste
import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"

// Importando componente
import Profile from "./src/components/Profile"

describe("Profile", () => {

  // Testa nome do usuário
  test("renderiza nome", () => {
    render(
      <Profile
        nome="Maria"
        idade={20}
        profissao="Dev"
        foto="https://via.placeholder.com/250"
      />
    )

    expect(
      screen.getByText(/maria/i)
    ).toBeTruthy()
  })

  // Testa profissão
  test("renderiza profissão", () => {
    render(
      <Profile
        nome="Maria"
        idade={20}
        profissao="Dev"
        foto="https://via.placeholder.com/250"
      />
    )

    expect(
      screen.getByText(/dev/i)
    ).toBeTruthy()
  })

  // Testa imagem
  test("renderiza imagem", () => {
    render(
      <Profile
        nome="Maria"
        idade={20}
        profissao="Dev"
        foto="https://via.placeholder.com/250"
      />
    )

    const imagem = screen.getByRole("img")

    expect(imagem).toBeTruthy()
  })

})